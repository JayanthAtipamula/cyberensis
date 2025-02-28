import React from 'react';
import ContactSection from '../components/ContactSection';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NavBar items={commonNavItems} />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
