import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogPostEditor from '../../components/admin/BlogPostEditor';
import { createBlogPost } from '../../services/blogService';
import { BlogPostFormData } from '../../types/blog';
import { ArrowLeft } from 'lucide-react';

export default function NewBlogPost() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData: BlogPostFormData) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      const postId = await createBlogPost(formData);
      navigate('/admin/posts');
    } catch (error) {
      console.error('Error creating blog post:', error);
      setError(error instanceof Error ? error.message : 'Failed to create blog post');
    } finally {
      setIsSubmitting(false);
    }
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
        <h1 className="text-2xl font-semibold text-gray-900">Create New Blog Post</h1>
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
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
} 