import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { NavBar } from '../components/ui/tubelight-navbar';
import { 
  hasSymbols, 
  hasNumbers, 
  hasUpperCase, 
  hasLowerCase, 
  calculateCrackTime, 
  getStrengthColor, 
  getStrengthText 
} from '../lib/passwordUtils';
import { commonNavItems } from '../lib/navItems';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState({
    hasSymbols: false,
    hasNumbers: false,
    hasUpperCase: false,
    hasLowerCase: false,
    length: 0,
    crackTime: '0 second',
  });

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const checkPasswordStrength = (pwd: string) => {
    const symbolsCheck = hasSymbols(pwd);
    const numbersCheck = hasNumbers(pwd);
    const upperCaseCheck = hasUpperCase(pwd);
    const lowerCaseCheck = hasLowerCase(pwd);
    const length = pwd.length;

    setStrength({
      hasSymbols: symbolsCheck,
      hasNumbers: numbersCheck,
      hasUpperCase: upperCaseCheck,
      hasLowerCase: lowerCaseCheck,
      length,
      crackTime: calculateCrackTime(pwd, symbolsCheck, numbersCheck, upperCaseCheck, lowerCaseCheck),
    });
  };

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
          <h1 className="text-3xl font-bold text-center mb-2">Is Your Password Strong Enough?</h1>
          <h2 className="text-xl text-center text-gray-600 mb-8">Take the Password Test</h2>
          
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Tip:</strong> Avoid the use of dictionary words or common names, and avoid using any personal information
            </p>
            
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type a password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className="sr-only"
                  />
                  <span className="text-sm text-gray-600 mr-2">Show password:</span>
                  <div className={`w-10 h-5 bg-gray-200 rounded-full p-1 transition ${showPassword ? 'bg-blue-500' : ''}`}>
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${showPassword ? 'translate-x-5' : ''}`}></div>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">
                  {getStrengthText(
                    strength.length,
                    strength.hasSymbols,
                    strength.hasNumbers,
                    strength.hasUpperCase,
                    strength.hasLowerCase
                  )}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${getStrengthColor(
                    strength.length,
                    strength.hasSymbols,
                    strength.hasNumbers,
                    strength.hasUpperCase,
                    strength.hasLowerCase
                  )}`} 
                  style={{ width: `${Math.min(100, (strength.length / 20) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className={`p-4 rounded-lg ${strength.hasSymbols ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
              <div className="font-medium">Symbols</div>
              <div className="text-xs">{strength.hasSymbols ? 'Yes' : 'No'}</div>
            </div>
            <div className={`p-4 rounded-lg ${strength.hasNumbers ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
              <div className="font-medium">Numbers</div>
              <div className="text-xs">{strength.hasNumbers ? 'Yes' : 'No'}</div>
            </div>
            <div className={`p-4 rounded-lg ${strength.hasUpperCase ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
              <div className="font-medium">Upper case</div>
              <div className="text-xs">{strength.hasUpperCase ? 'Yes' : 'No'}</div>
            </div>
            <div className={`p-4 rounded-lg ${strength.hasLowerCase ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
              <div className="font-medium">Lower case</div>
              <div className="text-xs">{strength.hasLowerCase ? 'Yes' : 'No'}</div>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">
              {strength.length} characters containing:
            </p>
            <p className="text-lg font-medium">
              Time to crack your password:
            </p>
            <p className="text-xl font-bold text-blue-600">
              {strength.crackTime}
            </p>
          </div>
          
          <div className="text-center mt-8">
            <a href="/password-generator" className="text-blue-500 hover:underline">
              Need a stronger password? Try our Password Generator →
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PasswordStrengthChecker; 