import React, { useState, useEffect, useRef, useCallback } from 'react';
import { uploadToBlob } from '../../lib/blob';
import { getAllCategories } from '../../services/blogService';
import { Category, BlogPostFormData } from '../../types/blog';
import slugify from 'slugify';
import { Image, X, ChevronDown, Check } from 'lucide-react';
import CustomQuillEditor, { CustomQuillEditorRef } from './CustomQuillEditor';

interface BlogPostEditorProps {
  initialData?: BlogPostFormData;
  onSubmit: (data: BlogPostFormData) => Promise<void>;
  isSubmitting: boolean;
}

export default function BlogPostEditor({ initialData, onSubmit, isSubmitting }: BlogPostEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || '');
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage || '');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialData?.categories || []);
  const [published, setPublished] = useState(initialData?.published || false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [slugEdited, setSlugEdited] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const quillRef = useRef<CustomQuillEditorRef>(null);
  const featuredImageInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!slugEdited && title) {
      setSlug(slugify(title, { lower: true, strict: true }));
    }
  }, [title, slugEdited]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlugEdited(true);
    setSlug(e.target.value);
  };

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const imageUrl = await uploadToBlob(file);
      setFeaturedImage(imageUrl);
    } catch (error) {
      console.error('Error uploading featured image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleRemoveFeaturedImage = () => {
    setFeaturedImage('');
    if (featuredImageInputRef.current) {
      featuredImageInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData: BlogPostFormData = {
      title,
      slug: slug || slugify(title, { lower: true, strict: true }),
      content,
      metaDescription,
      featuredImage,
      categories: selectedCategories,
      published
    };
    
    await onSubmit(formData);
  };

  // Custom image handler for Quill editor
  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        setUploadingImage(true);
        const imageUrl = await uploadToBlob(file);
        
        // Get the Quill editor instance and insert the image
        const quill = quillRef.current?.getEditor();
        if (quill) {
          try {
            const range = quill.getSelection(true);
            quill.insertEmbed(range.index, 'image', imageUrl);
          } catch (error) {
            console.error('Error inserting image into editor:', error);
            // Fallback method if the selection is not available
            quillRef.current?.focus();
            const length = quill.getLength();
            quill.insertEmbed(length - 1, 'image', imageUrl);
          }
        }
      } catch (error) {
        console.error('Error uploading image to editor:', error);
        alert('Failed to upload image. Please try again.');
      } finally {
        setUploadingImage(false);
      }
    };
  }, []);

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        [{ 'align': [] }],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Post title"
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
            Slug
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
              /blog/
            </span>
            <input
              type="text"
              id="slug"
              value={slug}
              onChange={handleSlugChange}
              required
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="post-slug"
            />
          </div>
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Featured Image</label>
          <div className="mt-1 flex items-center">
            {featuredImage ? (
              <div className="relative">
                <img
                  src={featuredImage}
                  alt="Featured"
                  className="h-32 w-auto object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={handleRemoveFeaturedImage}
                  className="absolute top-0 right-0 -mt-2 -mr-2 rounded-full bg-red-500 p-1 text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center h-32 w-48 border-2 border-dashed border-gray-300 rounded-md">
                {uploadingImage ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-500"></div>
                ) : (
                  <div className="space-y-1 text-center">
                    <Image className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      <label
                        htmlFor="featured-image"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload image</span>
                        <input
                          id="featured-image"
                          ref={featuredImageInputRef}
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFeaturedImageUpload}
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <div className="mt-1">
            <CustomQuillEditor
              ref={quillRef}
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              className="h-64 sm:h-96"
            />
          </div>
        </div>

        {/* Meta Description */}
        <div>
          <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700">
            Meta Description (for SEO)
          </label>
          <div className="mt-1">
            <textarea
              id="meta-description"
              rows={3}
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Brief description for search engines (150-160 characters recommended)"
              maxLength={160}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {metaDescription.length}/160 characters
          </p>
        </div>

        {/* Categories Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="block truncate">
                {selectedCategories.length === 0 
                  ? 'Select categories' 
                  : `${selectedCategories.length} ${selectedCategories.length === 1 ? 'category' : 'categories'} selected`}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <div
                      key={category.id}
                      className={`
                        ${selectedCategories.includes(category.id) ? 'bg-indigo-50 text-indigo-900' : 'text-gray-900'}
                        cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100
                      `}
                      onClick={() => handleCategoryToggle(category.id)}
                    >
                      <span className="block truncate font-normal">
                        {category.name}
                      </span>
                      {selectedCategories.includes(category.id) && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 py-2 px-3">
                    No categories found. Create some in the Categories section.
                  </div>
                )}
              </div>
            )}
          </div>
          {selectedCategories.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedCategories.map(categoryId => {
                const category = categories.find(c => c.id === categoryId);
                return category ? (
                  <span 
                    key={categoryId}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {category.name}
                    <button
                      type="button"
                      onClick={() => handleCategoryToggle(categoryId)}
                      className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none"
                    >
                      <span className="sr-only">Remove {category.name}</span>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => setPublished(false)}
          className={`inline-flex justify-center rounded-md border py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            !published 
              ? 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500'
              : 'border-gray-300 bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
          disabled={isSubmitting || uploadingImage}
        >
          Save as Draft
        </button>
        <button
          type="button"
          onClick={() => setPublished(true)}
          className={`inline-flex justify-center rounded-md border py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            published 
              ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
              : 'border-indigo-300 bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
          }`}
          disabled={isSubmitting || uploadingImage}
        >
          Publish
        </button>
        <button
          type="submit"
          disabled={isSubmitting || uploadingImage}
          className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-400"
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
} 