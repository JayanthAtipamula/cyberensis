import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { commonNavItems } from '../lib/navItems';
import { Helmet } from 'react-helmet-async';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <Helmet>
        <title>Cookie Policy | Cyberensis Infosec</title>
        <meta name="description" content="Cookie Policy for Cyberensis Infosec - Learn about how we use cookies and similar technologies on our website." />
      </Helmet>
      
      <NavBar items={commonNavItems} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 sm:p-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-6">
                Last updated: June 1, 2024
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="mb-4">
                This Cookie Policy explains how Cyberensis Infosec ("we", "us", or "our") uses cookies and similar technologies on our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="mb-4">
                Cookies set by the website owner (in this case, Cyberensis Infosec) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. Why Do We Use Cookies?</h2>
              <p className="mb-4">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. Types of Cookies We Use</h2>
              <p className="mb-4">
                The specific types of first and third-party cookies served through our website and the purposes they perform are described below:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
                <li><strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</li>
                <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</li>
                <li><strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. How Can You Control Cookies?</h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
              </p>
              <p className="mb-4">
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. Changes to This Cookie Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default CookiePolicy; 