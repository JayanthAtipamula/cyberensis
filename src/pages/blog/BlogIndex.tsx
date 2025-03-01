import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts, getAllCategories } from '../../services/blogService';
import { BlogPost, Category } from '../../types/blog';
import { Helmet } from 'react-helmet-async';
import { Calendar, Tag, ArrowRight, ChevronRight } from 'lucide-react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import { commonNavItems } from '../../lib/navItems';
import Footer from '../../components/Footer';

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch only published posts
        const postsData = await getAllBlogPosts(true);
        setPosts(postsData);
        
        // Fetch categories
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  };

  const getCategorySlug = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.slug : '';
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Extract plain text from HTML content
  const extractTextFromHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  // Get displayed posts based on showAllPosts state
  const displayedPosts = showAllPosts ? posts : posts.slice(0, postsPerPage);

  if (loading) {
    return (
      <>
        <NavBar items={commonNavItems} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f28749]"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog | Cyberensis Infosec</title>
        <meta name="description" content="Read our latest articles and updates on cybersecurity" />
      </Helmet>

      <NavBar items={commonNavItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Stay updated with our latest articles, news, and insights on cybersecurity.
          </p>
        </div>

        {/* Categories Section */}
        {categories.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Categories</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-[#f28749] hover:text-white transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts Section */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-900 mb-2">No posts found</h2>
            <p className="text-gray-500">
              No blog posts have been published yet. Check back soon!
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {displayedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  {post.featuredImage && (
                    <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  )}
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        <Link to={`/blog/${post.slug}`} className="hover:text-[#f28749]">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <time dateTime={new Date(post.createdAt).toISOString()}>
                            {formatDate(post.createdAt)}
                          </time>
                        </div>
                        
                        {post.categories.length > 0 && (
                          <div className="flex items-center mb-2">
                            <Tag className="h-4 w-4 mr-1" />
                            <div className="flex flex-wrap gap-1">
                              {post.categories.slice(0, 1).map(categoryId => (
                                <Link 
                                  key={categoryId}
                                  to={`/category/${getCategorySlug(categoryId)}`}
                                  className="hover:text-[#f28749]"
                                >
                                  {getCategoryName(categoryId)}
                                </Link>
                              ))}
                              {post.categories.length > 1 && (
                                <span className="text-gray-400">
                                  {` +${post.categories.length - 1}`}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {truncateText(extractTextFromHtml(post.content), 150)}
                      </p>
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f28749] hover:bg-[#d97a3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f28749]"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {/* View All / View Less Button */}
            {posts.length > postsPerPage && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAllPosts(!showAllPosts)}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#f28749] hover:bg-[#d97a3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f28749]"
                >
                  {showAllPosts ? 'Show Less' : `View All Posts (${posts.length})`}
                  {!showAllPosts && <ChevronRight className="h-5 w-5 ml-1" />}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
} 