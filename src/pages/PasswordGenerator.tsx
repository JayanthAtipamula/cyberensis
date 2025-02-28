import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Copy, Check, RefreshCw } from 'lucide-react';
import { NavBar } from '../components/ui/tubelight-navbar';
import { generatePassword } from '../lib/passwordUtils';
import { commonNavItems } from '../lib/navItems';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(options);
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setOptions(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : Number(value),
    }));
  };

  // Generate a password on initial load
  useEffect(() => {
    handleGeneratePassword();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2f2]">
      <NavBar items={commonNavItems} />
      
      <main className="flex-grow container mx-auto px-4 py-12 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-center mb-2">Random Strong Password Generator</h1>
          
          <div className="mt-8 mb-6">
            <div className="relative">
              <input
                type="text"
                value={password}
                readOnly
                className="w-full p-4 pr-24 text-lg font-mono bg-gray-50 border border-gray-300 rounded-md focus:outline-none"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
                <button
                  onClick={handleGeneratePassword}
                  className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                  title="Generate new password"
                >
                  <RefreshCw size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password Length: {options.length}
              </label>
              <input
                type="range"
                name="length"
                min="8"
                max="32"
                value={options.length}
                onChange={handleOptionChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>8</span>
                <span>16</span>
                <span>24</span>
                <span>32</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeUppercase"
                  name="includeUppercase"
                  checked={options.includeUppercase}
                  onChange={handleOptionChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="includeUppercase" className="ml-2 block text-sm text-gray-700">
                  Include Uppercase Letters (A-Z)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeLowercase"
                  name="includeLowercase"
                  checked={options.includeLowercase}
                  onChange={handleOptionChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="includeLowercase" className="ml-2 block text-sm text-gray-700">
                  Include Lowercase Letters (a-z)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeNumbers"
                  name="includeNumbers"
                  checked={options.includeNumbers}
                  onChange={handleOptionChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="includeNumbers" className="ml-2 block text-sm text-gray-700">
                  Include Numbers (0-9)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeSymbols"
                  name="includeSymbols"
                  checked={options.includeSymbols}
                  onChange={handleOptionChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="includeSymbols" className="ml-2 block text-sm text-gray-700">
                  Include Symbols (!@#$%^&*)
                </label>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={handleGeneratePassword}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 flex items-center justify-center"
              >
                <RefreshCw size={18} className="mr-2" />
                Generate Password
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Disclaimer: The generated password is not stored or transmitted anywhere. Please save it securely.</p>
          </div>
          
          <div className="text-center mt-8">
            <a href="/password-strength-checker" className="text-blue-500 hover:underline">
              Check your password strength →
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PasswordGenerator; 