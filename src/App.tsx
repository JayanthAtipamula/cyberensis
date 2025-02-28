import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/ui/LoadingScreen';

const Contact = lazy(() => import('./pages/Contact'));
const HomePage = lazy(() => import('./pages/Home'));
const AboutUsPage = lazy(() => import('./pages/AboutUs'));
const ServicesPage = lazy(() => import('./pages/Services'));
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
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
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
    </Router>
  );
}

export default App;