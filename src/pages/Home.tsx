import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import HeroSection from '../components/HeroSection';
import BrandTrust from '../components/BrandTrust';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ProvenRecords from '../components/ProvenRecords';
import Testimonials from '../components/Testimonials';
import LatestBlogs from '../components/LatestBlogs';
import PreFooterCTA from '../components/PreFooterCTA';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      <main>
        <HeroSection />
        <BrandTrust />
        <AboutUs />
        <Services />
        <ProvenRecords />
        <Testimonials />
        <LatestBlogs />
        <PreFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;