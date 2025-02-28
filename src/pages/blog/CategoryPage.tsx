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
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Browse all articles in the {category.name} category
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-900 mb-2">No posts found</h2>
            <p className="text-gray-500">
              There are no published posts in this category yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
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
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime={new Date(post.createdAt).toISOString()}>
                        {formatDate(post.createdAt)}
                      </time>
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
        )}
      </div>

      <Footer />
    </>
  );
} 