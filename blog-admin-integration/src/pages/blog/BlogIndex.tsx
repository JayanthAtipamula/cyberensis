import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllBlogPosts, getAllCategories } from '../../services/blogService';
import { BlogPost, Category } from '../../types/blog';

const BlogIndex = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsData, categoriesData] = await Promise.all([
          getAllBlogPosts(true, 6), // Get only published posts, limit to 6
          getAllCategories()
        ]);
        setPosts(postsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error('Error fetching blog data:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Blog | Cyberensis</title>
        <meta name="description" content="Read the latest articles on cybersecurity, penetration testing, and more." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and news in cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content - Blog posts */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {post.featuredImage && (
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 text-gray-900">
                        <Link to={`/blog/${post.slug}`} className="hover:text-[#f28749] transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-[#f28749] hover:text-[#d06b35] font-medium flex items-center"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-600">No blog posts found.</p>
                </div>
              )}
            </div>
            
            {posts.length > 0 && (
              <div className="mt-8 text-center">
                <Link 
                  to="/blog/all" 
                  className="inline-block px-6 py-3 bg-[#f28749] text-white rounded-md hover:bg-[#d06b35] transition-colors"
                >
                  View All Posts
                </Link>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Categories</h3>
              <ul className="space-y-2">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        to={`/category/${category.slug}`}
                        className="text-gray-700 hover:text-[#f28749] transition-colors flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {category.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600">No categories found.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex; 