import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-[#f28749]" />
              <span className="ml-2 text-xl font-bold">Cyberensis Infosec</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing top-tier cybersecurity services to protect your business from evolving digital threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#f28749] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#f28749] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#f28749] transition-colors">
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
              <li><a href="#" className="text-gray-400 hover:text-[#f28749] transition-colors">Vulnerability Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f28749] transition-colors">Web Application Testing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f28749] transition-colors">Network Testing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f28749] transition-colors">Mobile App Testing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f28749] transition-colors">API Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-[#f28749] transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-[#f28749] transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-[#f28749] transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#f28749] transition-colors">Contact</a></li>
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
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2024 Cyberensis Infosec. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#f28749] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-[#f28749] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-[#f28749] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;