import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostBySlug, getAllCategories } from '../../services/blogService';
import { BlogPost, Category } from '../../types/blog';
import { Helmet } from 'react-helmet-async';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import { commonNavItems } from '../../lib/navItems';
import Footer from '../../components/Footer';

export default function BlogPostPage() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        
        // Fetch post data
        const postData = await getBlogPostBySlug(slug);
        
        if (!postData) {
          setError('Blog post not found');
          return;
        }
        
        // Only show published posts
        if (!postData.published) {
          setError('Blog post not found');
          return;
        }
        
        setPost(postData);
        
        // Fetch categories
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to load blog post');
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

  // Get category names from IDs
  const getCategoryNames = () => {
    if (!post || !categories.length) return [];
    
    return post.categories
      .map(categoryId => {
        const category = categories.find(c => c.id === categoryId);
        return category ? category.name : null;
      })
      .filter(Boolean) as string[];
  };

  if (loading) {
    return (
      <>
        <NavBar items={commonNavItems} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <NavBar items={commonNavItems} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {error || 'Blog post not found'}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

  const categoryNames = getCategoryNames();

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <NavBar items={commonNavItems} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </Link>
        </div>

        {post.featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center mr-6 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={new Date(post.createdAt).toISOString()}>
              {formatDate(post.createdAt)}
            </time>
          </div>

          {categoryNames.length > 0 && (
            <div className="flex flex-wrap items-center mb-2">
              <Tag className="h-4 w-4 mr-1" />
              <div className="flex flex-wrap gap-2">
                {categoryNames.map((category, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div 
          className="prose prose-indigo dark:prose-invert max-w-none dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <Footer />
    </>
  );
} 