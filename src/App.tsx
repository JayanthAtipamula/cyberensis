import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from './components/ProtectedRoute';
import { LoadingScreen } from './components/ui/LoadingScreen';

// Admin Pages
import Login from './pages/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import BlogPosts from './pages/admin/BlogPosts';
import NewBlogPost from './pages/admin/NewBlogPost';
import EditBlogPost from './pages/admin/EditBlogPost';
import Categories from './pages/admin/Categories';

// Blog Pages
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';

// Main Site Pages
const HomePage = lazy(() => import('./pages/Home'));
const AboutUsPage = lazy(() => import('./pages/AboutUs'));
const ServicesPage = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const PasswordStrengthCheckerPage = lazy(() => import('./pages/PasswordStrengthChecker'));
const PasswordGeneratorPage = lazy(() => import('./pages/PasswordGenerator'));

// Service Pages
const VAPTPage = lazy(() => import('./pages/services/VAPT'));
const WAPTPage = lazy(() => import('./pages/services/WAPT'));
const NIPTPage = lazy(() => import('./pages/services/NIPT'));
const MAPTPage = lazy(() => import('./pages/services/MAPT'));
const CPTPage = lazy(() => import('./pages/services/CPT'));
const DevelopmentPage = lazy(() => import('./pages/services/Development'));
const ConsultingPage = lazy(() => import('./pages/services/Consulting'));
const CodeReviewPage = lazy(() => import('./pages/services/CodeReview'));
const TrainingPage = lazy(() => import('./pages/services/Training'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="posts" element={<BlogPosts />} />
                  <Route path="posts/new" element={<NewBlogPost />} />
                  <Route path="posts/edit/:id" element={<EditBlogPost />} />
                  <Route path="categories" element={<Categories />} />
                </Route>
              </Route>
              
              {/* Blog Routes */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Main Site Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/password-strength-checker" element={<PasswordStrengthCheckerPage />} />
              <Route path="/password-generator" element={<PasswordGeneratorPage />} />
              
              {/* Service Routes */}
              <Route path="/services/VAPT" element={<VAPTPage />} />
              <Route path="/services/WAPT" element={<WAPTPage />} />
              <Route path="/services/NIPT" element={<NIPTPage />} />
              <Route path="/services/MAPT" element={<MAPTPage />} />
              <Route path="/services/CPT" element={<CPTPage />} />
              <Route path="/services/Development" element={<DevelopmentPage />} />
              <Route path="/services/Consulting" element={<ConsultingPage />} />
              <Route path="/services/CodeReview" element={<CodeReviewPage />} />
              <Route path="/services/Training" element={<TrainingPage />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;