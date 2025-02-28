import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';
import { Helmet } from 'react-helmet-async';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Helmet>
        <title>Cookie Policy | Cyberensis Infosec</title>
        <meta name="description" content="Cookie Policy for Cyberensis Infosec - Learn how we use cookies and similar technologies on our website." />
      </Helmet>
      
      <NavBar items={commonNavItems} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 sm:p-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Last updated: June 1, 2024
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">1. Introduction</h2>
              <p className="mb-4">
                This Cookie Policy explains how Cyberensis Infosec ("we", "us", or "our") uses cookies and similar technologies on our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p className="mb-4">
                By using or accessing our website, you agree to this Cookie Policy. This Policy may change from time to time, so please check back periodically.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">2. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p className="mb-4">
                Cookies allow a website to recognize your device and remember if you've been to the website before. They can be temporary (session cookies) which are deleted when you close your browser, or persistent (permanent cookies) which remain on your device for a longer period.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">3. Types of Cookies We Use</h2>
              <p className="mb-4">
                We use different types of cookies for various reasons:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</li>
                <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the way our website works.</li>
                <li><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
                <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">4. Third-Party Cookies</h2>
              <p className="mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">5. How to Control Cookies</h2>
              <p className="mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
              <p className="mb-4">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#f28749] hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#f28749] hover:underline">www.allaboutcookies.org</a>.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">6. Specific Browser Instructions</h2>
              <p className="mb-4">
                To manage cookies through your browser settings, here are links to instructions for some popular browsers:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#f28749] hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#f28749] hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#f28749] hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-[#f28749] hover:underline">Microsoft Edge</a></li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">7. Changes to This Cookie Policy</h2>
              <p className="mb-4">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy; 