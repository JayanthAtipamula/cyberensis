import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../services/blogService';
import { BlogPost } from '../types/blog';
import { Calendar, ArrowRight } from 'lucide-react';

const LatestBlogs = () => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setLoading(true);
        // Fetch only published posts, limited to 3
        const posts = await getAllBlogPosts(true, 3);
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
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Latest Blog Posts</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Loading latest articles...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-64 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (latestPosts.length === 0) {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Latest Blog Posts</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              No blog posts available at the moment. Check back soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Latest Blog Posts</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest articles and insights on cybersecurity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              {post.featuredImage && (
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  <Link to={`/blog/${post.slug}`} className="hover:text-[#f28749] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {truncateText(extractTextFromHtml(post.content), 120)}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-[#f28749] font-medium hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 border border-[#f28749] text-[#f28749] rounded-lg hover:bg-[#f28749]/5 transition-colors"
          >
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs; 