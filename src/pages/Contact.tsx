import React from 'react';
import ContactSection from '../components/ContactSection';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';
import PromotionalBanner from '../components/PromotionalBanner';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      <main className="pt-20">
        <PromotionalBanner 
          title="Get Expert Cybersecurity Support"
          description="Our team is ready to help secure your business with tailored cybersecurity solutions."
          buttonText="Schedule a Call"
          buttonLink="#contact-form"
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
