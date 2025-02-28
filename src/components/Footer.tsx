import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Link to="/" className="flex items-center flex-shrink-0 cursor-pointer transition-opacity hover:opacity-80">
                <img 
                  src="/assets/logo.png" 
                  alt="Cyberensis Infosec Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Providing top-tier cybersecurity services to protect your business from evolving digital threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#f28749] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/cyberensis" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-[#f28749] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/cyberensis-infosec/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-[#f28749] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#f28749] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/VAPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Vulnerability Assessment</Link></li>
              <li><Link to="/services/WAPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Web Application Testing</Link></li>
              <li><Link to="/services/NIPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Network Testing</Link></li>
              <li><Link to="/services/MAPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Mobile App Testing</Link></li>
              <li><Link to="/services/CPT" className="text-gray-400 hover:text-[#f28749] transition-colors">Cloud Penetration Testing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#f28749] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#f28749] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#f28749] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#f28749] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Cyberensis Infosec, Cyber City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#f28749] mr-3" />
                <span className="text-gray-400">+91 9853852852</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#f28749] mr-3" />
                <span className="text-gray-400">info@cyberensis.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0 flex flex-col md:flex-row md:items-center">
              <p className="mb-2 md:mb-0 md:mr-4">
                © 2024 Cyberensis Infosec. All rights reserved.
              </p> 
              <p>
                © Copyright 2025 by Webbingprotechnologies.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-[#f28749] transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-[#f28749] transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-[#f28749] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;