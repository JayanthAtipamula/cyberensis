import React from 'react';
import { 
  Shield, 
  Globe, 
  Server, 
  Smartphone, 
  Code, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight,
  Home,
  User,
  FileText,
  Briefcase
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import BrandTrust from './components/BrandTrust';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ProvenRecords from './components/ProvenRecords';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import NeonCursor from './components/NeonCursor';
import { NavBar } from './components/ui/tubelight-navbar';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Services', url: '#services', icon: Briefcase },
  { name: 'Contact', url: '#contact', icon: FileText }
];

function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NeonCursor />
      <NavBar items={navItems} />
      <main>
        <HeroSection />
        <BrandTrust />
        <AboutUs />
        <Services />
        <ProvenRecords />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;