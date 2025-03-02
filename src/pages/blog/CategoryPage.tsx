import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBlogPostsByCategorySlug, getCategoryBySlug } from '../../services/blogService';
import { BlogPost, Category } from '../../types/blog';
import { Helmet } from 'react-helmet-async';
import { Calendar, Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import { commonNavItems } from '../../lib/navItems';
import Footer from '../../components/Footer';

export default function CategoryPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        
        // Fetch category data
        const categoryData = await getCategoryBySlug(slug);
        
        if (!categoryData) {
          setError('Category not found');
          setLoading(false);
          return;
        }
        
        setCategory(categoryData);
        
        // Fetch posts for this category
        const postsData = await getBlogPostsByCategorySlug(slug);
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching category data:', error);
        setError('Failed to load category');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

  if (error || !category) {
    return (
      <>
        <NavBar items={commonNavItems} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'Category not found'}
            </h1>
            <p className="text-gray-600 mb-6">
              The category you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f28749] hover:bg-[#d97a3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f28749]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.name} | Cyberensis Infosec Blog</title>
        <meta name="description" content={`Articles about ${category.name} from Cyberensis Infosec`} />
      </Helmet>

      <NavBar items={commonNavItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-[#f28749] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </Link>
        </div>

        {/* Enhanced Category Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full opacity-30"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            {category.name}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Browse all articles in the {category.name} category
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium text-gray-900 mb-3">No posts found</h2>
            <p className="text-gray-500 mb-6">
              There are no published posts in this category yet. Check back soon!
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#1e3a8a] to-[#2d4eaa] hover:from-[#f28749] hover:to-[#d97a3f] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f28749]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Browse Other Categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {posts.map((post, index) => (
              <div key={post.id} className="rounded-lg overflow-hidden shadow-lg flex flex-col h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden rounded-t-lg">
                  {post.featuredImage ? (
                    <img 
                      src={post.featuredImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] to-[#2d4eaa] rounded-t-lg">
                      <span className="text-white text-2xl font-bold">{post.title.substring(0, 2).toUpperCase()}</span>
                    </div>
                  )}
                </div>
                
                {/* Content Section */}
                <div className="p-6 bg-gradient-to-br from-[#1e3a8a] to-[#2d4eaa] text-white flex flex-col flex-grow rounded-b-lg">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-500/30 text-blue-200 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {category.name}
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
                  <div className="mt-auto flex justify-between items-center pt-3 border-t border-blue-700/30">
                    <div className="text-xs text-gray-300">
                      <Calendar className="h-3 w-3 inline mr-1" />
                      {formatDate(post.createdAt)}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-white hover:text-[#f28749] group"
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
        )}
      </div>

      <Footer />
    </>
  );
} 