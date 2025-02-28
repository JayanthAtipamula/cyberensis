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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f28749] mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  // Don't render the section if there are no posts
  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest articles and insights on cybersecurity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {latestPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#f28749]">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime={new Date(post.createdAt).toISOString()}>
                      {formatDate(post.createdAt)}
                    </time>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {truncateText(extractTextFromHtml(post.content), 120)}
                  </p>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center px-4 py-2 border border-[#f28749] text-sm font-medium rounded-md text-[#f28749] bg-transparent hover:bg-[#fff8f4] transition-colors duration-300"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-[#f28749] text-base font-medium rounded-md text-[#f28749] bg-transparent hover:bg-[#fff8f4] transition-colors duration-300"
          >
            View More Blogs
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs; 