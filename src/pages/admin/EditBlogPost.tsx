import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BlogPostEditor from '../../components/admin/BlogPostEditor';
import { getBlogPostById, updateBlogPost } from '../../services/blogService';
import { BlogPostFormData, BlogPost } from '../../types/blog';
import { ArrowLeft } from 'lucide-react';

export default function EditBlogPost() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const postData = await getBlogPostById(id);
        
        if (!postData) {
          setError('Blog post not found');
          return;
        }
        
        setPost(postData);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (formData: BlogPostFormData) => {
    if (!id) return;
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      await updateBlogPost(id, formData);
      navigate('/admin/posts');
    } catch (error) {
      console.error('Error updating blog post:', error);
      setError(error instanceof Error ? error.message : 'Failed to update blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center py-6">
          <h3 className="text-lg font-medium text-red-500">{error || 'Blog post not found'}</h3>
          <div className="mt-4">
            <button
              onClick={() => navigate('/admin/posts')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back to posts
            </button>
          </div>
        </div>
      </div>
    );
  }

  const initialData: BlogPostFormData = {
    title: post.title,
    slug: post.slug,
    content: post.content,
    metaDescription: post.metaDescription,
    featuredImage: post.featuredImage,
    categories: post.categories,
    published: post.published
  };

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => navigate('/admin/posts')}
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to posts
        </button>
      </div>
      
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Edit Blog Post</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-6">
        <BlogPostEditor
          initialData={initialData}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
} 