import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import HeroSection from '../components/HeroSection';
import CyberSecurityBanner from '../components/CyberSecurityBanner';
import BrandTrust from '../components/BrandTrust';
import StatsCounter from '../components/StatsCounter';
import SecurityApproach from '../components/SecurityApproach';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import LatestBlogs from '../components/LatestBlogs';
import PreFooterCTA from '../components/PreFooterCTA';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';
import PromotionalBanner from '../components/PromotionalBanner';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      <main>
        <HeroSection />
        <CyberSecurityBanner />
        <BrandTrust />
        <StatsCounter />
        <SecurityApproach />
        <AboutUs />
        <Services />
        <PromotionalBanner 
          title="Get Started with Cybersecurity Assessment"
          description="Contact our experts to learn more about pricing, receive a free security risk assessment, or schedule a demo."
          buttonText="Get a Demo"
          buttonLink="/contact"
        />
        <Testimonials />
        <LatestBlogs />
        <PreFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;