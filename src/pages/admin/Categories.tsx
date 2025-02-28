import React, { useState, useEffect } from 'react';
import { getAllCategories, createCategory, deleteCategory } from '../../services/blogService';
import { Category } from '../../types/blog';
import { Plus, Trash2, AlertCircle } from 'lucide-react';

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCategoryName.trim()) {
      setError('Category name cannot be empty');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      const categoryId = await createCategory(newCategoryName);
      
      // Refresh categories list
      const updatedCategories = await getAllCategories();
      setCategories(updatedCategories);
      
      // Reset form
      setNewCategoryName('');
    } catch (error) {
      console.error('Error creating category:', error);
      setError(error instanceof Error ? error.message : 'Failed to create category');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteClick = (categoryId: string) => {
    setDeleteConfirm(categoryId);
  };

  const handleDeleteConfirm = async (categoryId: string) => {
    try {
      setIsDeleting(true);
      await deleteCategory(categoryId);
      
      // Update local state
      setCategories(categories.filter(category => category.id !== categoryId));
    } catch (error) {
      console.error('Error deleting category:', error);
      setError('Failed to delete category');
    } finally {
      setIsDeleting(false);
      setDeleteConfirm(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirm(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Categories</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage categories for your blog posts.
          </p>
        </div>
      </div>

      {error && (
        <div className="mt-6 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Create Category Form */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Create New Category</h2>
          <form onSubmit={handleCreateCategory}>
            <div className="flex">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Category name"
                className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting || !newCategoryName.trim()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
              >
                <Plus className="h-4 w-4 mr-2" />
                {isSubmitting ? 'Adding...' : 'Add'}
              </button>
            </div>
          </form>
        </div>

        {/* Categories List */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Existing Categories</h2>
          
          {categories.length === 0 ? (
            <div className="text-center py-6">
              <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No categories found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by creating a new category.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {categories.map((category) => (
                <li key={category.id} className="py-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{category.name}</p>
                    <p className="text-sm text-gray-500">Slug: {category.slug}</p>
                  </div>
                  {deleteConfirm === category.id ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">Confirm delete?</span>
                      <button
                        onClick={() => handleDeleteConfirm(category.id)}
                        disabled={isDeleting}
                        className="text-xs text-red-600 hover:text-red-900"
                      >
                        Yes
                      </button>
                      <button
                        onClick={handleDeleteCancel}
                        disabled={isDeleting}
                        className="text-xs text-gray-600 hover:text-gray-900"
                      >
                        No
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDeleteClick(category.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
} 