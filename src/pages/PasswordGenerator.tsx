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
    <div className="min-h-screen flex flex-col bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Password Generator</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Create strong, secure passwords to keep your accounts safe.
                </p>
                
                {/* Password Display */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Generated Password
                  </label>
                  <div className="flex">
                    <div className="flex-grow relative">
                      <input
                        type="text"
                        readOnly
                        value={password}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-lg focus:ring-[#f28749] focus:border-[#f28749]"
                      />
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="px-4 py-3 bg-[#f28749] text-white rounded-r-lg hover:bg-[#e07339] transition-colors"
                      aria-label="Copy password to clipboard"
                    >
                      {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                
                {/* Password Options */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Password Options</h2>
                  
                  {/* Length Slider */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Password Length: {options.length}
                    </label>
                    <input
                      type="range"
                      name="length"
                      min="8"
                      max="64"
                      value={options.length}
                      onChange={handleOptionChange}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#f28749]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>8</span>
                      <span>36</span>
                      <span>64</span>
                    </div>
                  </div>
                  
                  {/* Character Options */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="includeUppercase"
                        name="includeUppercase"
                        checked={options.includeUppercase}
                        onChange={handleOptionChange}
                        className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 dark:border-gray-600 rounded"
                      />
                      <label htmlFor="includeUppercase" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
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
                        className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 dark:border-gray-600 rounded"
                      />
                      <label htmlFor="includeLowercase" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
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
                        className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 dark:border-gray-600 rounded"
                      />
                      <label htmlFor="includeNumbers" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
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
                        className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 dark:border-gray-600 rounded"
                      />
                      <label htmlFor="includeSymbols" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Include Symbols (!@#$%^&*)
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Generate Button */}
                <button
                  onClick={handleGeneratePassword}
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f28749] hover:bg-[#e07339] transition-colors"
                >
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Generate New Password
                </button>
                
                {/* Password Tips */}
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Password Security Tips</h3>
                  <ul className="list-disc pl-5 text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>Use a different password for each account</li>
                    <li>Longer passwords (12+ characters) are more secure</li>
                    <li>Include a mix of letters, numbers, and symbols</li>
                    <li>Avoid using personal information in your passwords</li>
                    <li>Consider using a password manager to store your passwords securely</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PasswordGenerator; 