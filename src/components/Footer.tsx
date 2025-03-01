import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="flex items-center mb-3">
              <Link to="/" className="flex items-center flex-shrink-0 cursor-pointer transition-opacity hover:opacity-80">
                <img 
                  src="/assets/logo.png" 
                  alt="Cyberensis Infosec Logo" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Providing top-tier cybersecurity services to protect your business from evolving digital threats.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-1.5 rounded-full hover:bg-[#f28749] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com/cyberensis" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-1.5 rounded-full hover:bg-[#f28749] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/cyberensis-infosec/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-1.5 rounded-full hover:bg-[#f28749] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-1.5 rounded-full hover:bg-[#f28749] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-bold mb-3 border-b border-gray-700 pb-1">Services</h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link to="/services/VAPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Vulnerability Assessment</Link></li>
              <li><Link to="/services/WAPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Web Application Testing</Link></li>
              <li><Link to="/services/NIPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Network Testing</Link></li>
              <li><Link to="/services/MAPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Mobile App Testing</Link></li>
              <li><Link to="/services/CPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Cloud Penetration Testing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-bold mb-3 border-b border-gray-700 pb-1">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-[#f28749] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#f28749] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#f28749] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#f28749] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-bold mb-3 border-b border-gray-700 pb-1">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-[#f28749] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Cyberensis Infosec, Cyber City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-[#f28749] mr-2" />
                <span className="text-gray-400">+91 9853852852</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-[#f28749] mr-2" />
                <span className="text-gray-400">info@cyberensis.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-2 md:mb-0">
              © {new Date().getFullYear()} Cyberensis Infosec. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-[#f28749] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-[#f28749] transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-[#f28749] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;