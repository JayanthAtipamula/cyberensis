import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../services/blogService';
import { BlogPost } from '../types/blog';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const LatestBlogs = () => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setLoading(true);
        // Fetch only published posts, limited to 4
        const posts = await getAllBlogPosts(true, 4);
        setLatestPosts(posts);
      } catch (error) {
        console.error('Error fetching latest blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Extract plain text from HTML content
  const extractTextFromHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white relative inline-block">
              You Might Also Be Interested In
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md animate-pulse">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
                <div className="p-6 bg-gray-100 dark:bg-gray-800 h-48 rounded-b-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (latestPosts.length === 0) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white relative inline-block">
              You Might Also Be Interested In
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              No blog posts available at the moment. Check back soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#2d2d5f] dark:text-white relative inline-block">
            You Might Also Be Interested In
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {latestPosts.map((post, index) => (
            <div key={post.id} className="rounded-lg overflow-hidden shadow-md flex flex-col h-full transition-transform hover:translate-y-[-5px] hover:shadow-lg">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                {post.featuredImage ? (
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1e3a8a] rounded-t-lg">
                    <span className="text-white text-lg font-bold">{post.title.substring(0, 2).toUpperCase()}</span>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6 bg-[#1e3a8a] text-white flex flex-col flex-grow rounded-b-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    General
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-[#f28749] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-200 mb-4 line-clamp-3 flex-grow">
                  {truncateText(extractTextFromHtml(post.content), 100)}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="text-xs text-gray-300">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {formatDate(post.createdAt)}
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-white hover:text-[#f28749]"
                    aria-label={`Read more about ${post.title}`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs; 