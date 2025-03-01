import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <Helmet>
        <title>Privacy Policy | Cyberensis Infosec</title>
        <meta name="description" content="Privacy Policy for Cyberensis Infosec - Learn about how we collect, use, and protect your personal information." />
      </Helmet>
      
      <NavBar items={commonNavItems} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 sm:p-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-6">
                Last updated: June 1, 2024
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="mb-4">
                At Cyberensis Infosec, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. The Data We Collect About You</h2>
              <p className="mb-4">
                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li>Usage Data includes information about how you use our website and services.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. How We Use Your Personal Data</h2>
              <p className="mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. Data Security</h2>
              <p className="mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. Data Retention</h2>
              <p className="mb-4">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. Your Legal Rights</h2>
              <p className="mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@cyberensis.com<br />
                Phone: +91 98538 52852<br />
                Address: Suite 304, 4th Floor, Surabhi Plaza, Lakdikapul, Hyderabad, Telangana 500004
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