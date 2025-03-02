import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from './components/ProtectedRoute';
import { LoadingScreen } from './components/ui/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

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
import CategoryPage from './pages/blog/CategoryPage';

// Policy Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

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
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <WhatsAppButton />
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
              <Route path="/category/:slug" element={<CategoryPage />} />
              
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
              <Route path="/password-strength-checker" element={
                <Suspense fallback={<LoadingScreen />}>
                  <PasswordStrengthCheckerPage />
                </Suspense>
              } />
              <Route path="/password-generator" element={
                <Suspense fallback={<LoadingScreen />}>
                  <PasswordGeneratorPage />
                </Suspense>
              } />
              
              {/* Policy Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              
              {/* Service Routes */}
              <Route path="/services/VAPT" element={
                <Suspense fallback={<LoadingScreen />}>
                  <VAPTPage />
                </Suspense>
              } />
              <Route path="/services/WAPT" element={
                <Suspense fallback={<LoadingScreen />}>
                  <WAPTPage />
                </Suspense>
              } />
              <Route path="/services/NIPT" element={
                <Suspense fallback={<LoadingScreen />}>
                  <NIPTPage />
                </Suspense>
              } />
              <Route path="/services/MAPT" element={
                <Suspense fallback={<LoadingScreen />}>
                  <MAPTPage />
                </Suspense>
              } />
              <Route path="/services/CPT" element={
                <Suspense fallback={<LoadingScreen />}>
                  <CPTPage />
                </Suspense>
              } />
              <Route path="/services/Development" element={
                <Suspense fallback={<LoadingScreen />}>
                  <DevelopmentPage />
                </Suspense>
              } />
              <Route path="/services/Consulting" element={
                <Suspense fallback={<LoadingScreen />}>
                  <ConsultingPage />
                </Suspense>
              } />
              <Route path="/services/CodeReview" element={
                <Suspense fallback={<LoadingScreen />}>
                  <CodeReviewPage />
                </Suspense>
              } />
              <Route path="/services/Training" element={
                <Suspense fallback={<LoadingScreen />}>
                  <TrainingPage />
                </Suspense>
              } />
            </Routes>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;