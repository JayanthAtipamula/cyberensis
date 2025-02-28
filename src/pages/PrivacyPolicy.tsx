import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Helmet>
        <title>Privacy Policy | Cyberensis Infosec</title>
        <meta name="description" content="Privacy Policy for Cyberensis Infosec - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <NavBar items={commonNavItems} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 sm:p-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Last updated: June 1, 2024
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">1. Introduction</h2>
              <p className="mb-4">
                Cyberensis Infosec ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">2. The Data We Collect About You</h2>
              <p className="mb-4">
                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">3. How We Collect Your Personal Data</h2>
              <p className="mb-4">
                We use different methods to collect data from and about you including through:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email or otherwise.</li>
                <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">4. How We Use Your Personal Data</h2>
              <p className="mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide you with the services you have requested.</li>
                <li>To respond to your inquiries and contact you about changes to our services.</li>
                <li>To provide you with marketing communications about our services that we think may be of interest to you.</li>
                <li>To improve our website and services.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">5. Data Security</h2>
              <p className="mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">6. Data Retention</h2>
              <p className="mb-4">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">7. Your Legal Rights</h2>
              <p className="mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">8. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> privacy@cyberensis.com<br />
                <strong>Phone:</strong> +91 9853852852<br />
                <strong>Address:</strong> Cyberensis Infosec, Cyber City
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 