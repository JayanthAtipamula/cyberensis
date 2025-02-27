import React from 'react';
import ContactSection from '../components/ContactSection';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NavBar items={[
        { name: 'Home', url: '/', icon: 'Home' },
        { name: 'About', url: '/#about', icon: 'User' },
        { name: 'Services', url: '/#services', icon: 'Briefcase' },
        { name: 'Contact', url: '/contact', icon: 'FileText' }
      ]} />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
