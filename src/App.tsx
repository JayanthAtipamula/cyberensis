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
  ChevronRight
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import BrandTrust from './components/BrandTrust';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ProvenRecords from './components/ProvenRecords';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import NeonCursor from './components/NeonCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NeonCursor />
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-[#f28749]" />
            <span className="ml-2 text-xl font-bold">CyberShield</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#f28749] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#f28749] transition-colors">About</a>
            <a href="#services" className="hover:text-[#f28749] transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-[#f28749] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#f28749] transition-colors">Contact</a>
          </nav>
          <button className="bg-[#f28749] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Get a Quote
          </button>
        </div>
      </header>

      <main>
        <HeroSection />
        <BrandTrust />
        <AboutUs />
        <Services />
        <ProvenRecords />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;