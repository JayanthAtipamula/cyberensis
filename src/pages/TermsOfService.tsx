import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <Helmet>
        <title>Terms of Service | Cyberensis Infosec</title>
        <meta name="description" content="Terms of Service for Cyberensis Infosec - Learn about the terms and conditions governing the use of our services." />
      </Helmet>
      
      <NavBar items={commonNavItems} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 sm:p-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-6">
                Last updated: June 1, 2024
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Cyberensis Infosec. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our website or use our services.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. Services</h2>
              <p className="mb-4">
                Cyberensis Infosec provides cybersecurity services, including but not limited to vulnerability assessments, penetration testing, security consulting, and related services. Our services are subject to a separate service agreement that will be provided to you before any engagement begins.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. Use of Website</h2>
              <p className="mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. Intellectual Property</h2>
              <p className="mb-4">
                The content on our website, including without limitation, the text, graphics, photos, software, and all other materials ("Content"), as well as the trademarks, service marks, and logos contained therein, are owned by or licensed to Cyberensis Infosec and are subject to copyright and other intellectual property rights under Indian and international laws and conventions.
              </p>
              <p className="mb-4">
                You are granted a limited license to access and use the Content for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. User Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our website.
              </p>
              <p className="mb-4">
                You are responsible for safeguarding the password that you use to access the website and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall Cyberensis Infosec, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your access to or use of or inability to access or use the website;</li>
                <li>Any conduct or content of any third party on the website;</li>
                <li>Any content obtained from the website; and</li>
                <li>Unauthorized access, use or alteration of your transmissions or content.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Indemnification</h2>
              <p className="mb-4">
                You agree to defend, indemnify and hold harmless Cyberensis Infosec and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your use and access of the website;</li>
                <li>Your violation of any term of these Terms;</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right; or</li>
                <li>Any claim that your content caused damage to a third party.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">8. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">9. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> legal@cyberensis.com<br />
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

export default TermsOfService; 