export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  metaDescription: string;
  categories: string[];
  createdAt: number;
  updatedAt: number;
  published: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  metaDescription: string;
  categories: string[];
  published: boolean;
} 