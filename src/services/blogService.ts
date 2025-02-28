import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp,
  setDoc,
  limit
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { BlogPost, Category, BlogPostFormData } from '../types/blog';
import slugify from 'slugify';

const BLOG_COLLECTION = 'blog_posts';
const CATEGORIES_COLLECTION = 'categories';

// Blog Post CRUD Operations
export const createBlogPost = async (postData: BlogPostFormData): Promise<string> => {
  try {
    const slug = postData.slug || slugify(postData.title, { lower: true, strict: true });
    
    // Check if slug already exists
    const slugExists = await checkSlugExists(slug);
    if (slugExists) {
      throw new Error('A post with this slug already exists');
    }
    
    const timestamp = Date.now();
    const newPost: Omit<BlogPost, 'id'> = {
      ...postData,
      slug,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    
    const docRef = await addDoc(collection(db, BLOG_COLLECTION), newPost);
    return docRef.id;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

export const updateBlogPost = async (id: string, postData: BlogPostFormData): Promise<void> => {
  try {
    const slug = postData.slug || slugify(postData.title, { lower: true, strict: true });
    
    // Check if slug already exists (excluding this post)
    const slugExists = await checkSlugExists(slug, id);
    if (slugExists) {
      throw new Error('A post with this slug already exists');
    }
    
    const docRef = doc(db, BLOG_COLLECTION, id);
    await updateDoc(docRef, {
      ...postData,
      slug,
      updatedAt: Date.now(),
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as BlogPost;
    }
    return null;
  } catch (error) {
    console.error('Error getting blog post:', error);
    throw error;
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const q = query(collection(db, BLOG_COLLECTION), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() } as BlogPost;
    }
    return null;
  } catch (error) {
    console.error('Error getting blog post by slug:', error);
    throw error;
  }
};

export const getAllBlogPosts = async (publishedOnly = false, limitCount?: number): Promise<BlogPost[]> => {
  try {
    // Use a simpler query that doesn't require a compound index
    let q = query(collection(db, BLOG_COLLECTION), orderBy('createdAt', 'desc'));
    
    const querySnapshot = await getDocs(q);
    let results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
    
    // Filter for published posts in memory if needed
    if (publishedOnly) {
      results = results.filter(post => post.published === true);
    }
    
    // Apply limit in memory if needed
    if (limitCount && limitCount > 0 && results.length > limitCount) {
      results = results.slice(0, limitCount);
    }
    
    return results;
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    throw error;
  }
};

// New function to get posts by category slug
export const getBlogPostsByCategorySlug = async (categorySlug: string): Promise<BlogPost[]> => {
  try {
    // First get the category ID from the slug
    const categoryQuery = query(
      collection(db, CATEGORIES_COLLECTION), 
      where('slug', '==', categorySlug)
    );
    const categorySnapshot = await getDocs(categoryQuery);
    
    if (categorySnapshot.empty) {
      return [];
    }
    
    const categoryId = categorySnapshot.docs[0].id;
    
    // Use a simpler query that doesn't require a compound index
    const postsQuery = query(
      collection(db, BLOG_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    
    const postsSnapshot = await getDocs(postsQuery);
    
    // Filter in memory for published posts with the matching category
    return postsSnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() } as BlogPost))
      .filter(post => 
        post.published === true && 
        post.categories.includes(categoryId)
      );
  } catch (error) {
    console.error('Error getting posts by category:', error);
    throw error;
  }
};

// Category CRUD Operations
export const createCategory = async (name: string): Promise<string> => {
  try {
    const slug = slugify(name, { lower: true, strict: true });
    
    // Check if category already exists
    const categoryExists = await checkCategoryExists(slug);
    if (categoryExists) {
      throw new Error('This category already exists');
    }
    
    const newCategory: Omit<Category, 'id'> = {
      name,
      slug,
    };
    
    const docRef = await addDoc(collection(db, CATEGORIES_COLLECTION), newCategory);
    return docRef.id;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, CATEGORIES_COLLECTION));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Category));
  } catch (error) {
    console.error('Error getting all categories:', error);
    throw error;
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, CATEGORIES_COLLECTION, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};

export const getCategoryBySlug = async (slug: string): Promise<Category | null> => {
  try {
    const q = query(collection(db, CATEGORIES_COLLECTION), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() } as Category;
    }
    return null;
  } catch (error) {
    console.error('Error getting category by slug:', error);
    throw error;
  }
};

// Helper functions
const checkSlugExists = async (slug: string, excludeId?: string): Promise<boolean> => {
  try {
    const q = query(collection(db, BLOG_COLLECTION), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) return false;
    
    // If we're updating a post, we need to exclude the current post from the check
    if (excludeId) {
      return querySnapshot.docs.some(doc => doc.id !== excludeId);
    }
    
    return true;
  } catch (error) {
    console.error('Error checking if slug exists:', error);
    throw error;
  }
};

const checkCategoryExists = async (slug: string): Promise<boolean> => {
  try {
    const q = query(collection(db, CATEGORIES_COLLECTION), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking if category exists:', error);
    throw error;
  }
}; 