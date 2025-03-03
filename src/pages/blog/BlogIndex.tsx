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
  const postsPerPage = 8;

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
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full opacity-30"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            Our Blog
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            Stay updated with our latest articles, news, and insights on cybersecurity.
          </p>
        </div>

        {/* Improved Categories Section */}
        {categories.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center relative inline-flex items-center">
              <span className="bg-[#f28749] w-2 h-8 rounded-full mr-3"></span>
              Categories
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-[#1e3a8a] hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md"
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
            <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No posts found</h2>
            <p className="text-gray-500 dark:text-gray-400">
              No blog posts have been published yet. Check back soon!
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedPosts.map((post, index) => (
                <div key={post.id} className="rounded-lg overflow-hidden shadow-lg flex flex-col h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group">
                  {/* Image Section */}
                  <div className="relative h-52 overflow-hidden rounded-t-lg">
                    {post.featuredImage ? (
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover rounded-t-lg transform transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] to-[#2d4eaa] rounded-t-lg">
                        <span className="text-white text-2xl font-bold">{post.title.substring(0, 2).toUpperCase()}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 bg-gradient-to-br from-[#1e3a8a] to-[#2d4eaa] text-white flex flex-col flex-grow rounded-b-lg transition-all duration-300 group-hover:from-[#ffb800] group-hover:to-[#ff7a45] group-hover:text-black">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-500/30 text-blue-200 text-xs font-medium px-3 py-1 rounded-full flex items-center group-hover:text-black group-hover:bg-black/20">
                        <Tag className="w-3 h-3 mr-1" />
                        General
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="text-white group-hover:text-black transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-white mb-4 line-clamp-3 flex-grow group-hover:text-black">
                      {truncateText(extractTextFromHtml(post.content), 100)}
                    </p>
                    <div className="mt-auto flex justify-between items-center pt-3 border-t border-blue-700/30">
                      <div className="text-white text-xs group-hover:text-black">
                        <Calendar className="h-3 w-3 inline mr-1" />
                        {formatDate(post.createdAt)}
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="inline-flex items-center text-white group-hover:text-black group"
                        aria-label={`Read more about ${post.title}`}
                      >
                        <span className="mr-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All / View Less Button */}
            {posts.length > postsPerPage && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setShowAllPosts(!showAllPosts)}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-gradient-to-r from-[#1e3a8a] to-[#2d4eaa] hover:from-[#f28749] hover:to-[#d97a3f] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f28749]"
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