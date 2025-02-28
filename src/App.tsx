import React, { lazy, Suspense } from 'react';
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

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
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
            <Route path="/" element={
              <Suspense fallback={<LoadingScreen />}>
                <HomePage />
              </Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={<LoadingScreen />}>
                <AboutUsPage />
              </Suspense>
            } />
            <Route path="/services" element={
              <Suspense fallback={<LoadingScreen />}>
                <ServicesPage />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingScreen />}>
                <Contact />
              </Suspense>
            } />
          </Routes>
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;