import React from 'react';
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from '../components/ui/tubelight-navbar';
import HeroSection from '../components/HeroSection';
import BrandTrust from '../components/BrandTrust';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ProvenRecords from '../components/ProvenRecords';
import Testimonials from '../components/Testimonials';
import PreFooterCTA from '../components/PreFooterCTA';
import Footer from '../components/Footer';

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/#about', icon: User },
  { name: 'Services', url: '/#services', icon: Briefcase },
  { name: 'Contact', url: '/contact', icon: FileText }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NavBar items={navItems} />
      <main>
        <HeroSection />
        <BrandTrust />
        <AboutUs />
        <Services />
        <ProvenRecords />
        <Testimonials />
        <PreFooterCTA />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage; 