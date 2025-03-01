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
                <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Password Strength Checker</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Check how strong your password is and how long it would take to crack.
                </p>
                
                {/* Password Input */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Enter Your Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#f28749] focus:border-[#f28749]"
                      placeholder="Type your password here..."
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                
                {/* Strength Meter */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Password Strength</h2>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Strength:</span>
                      <span className={`text-sm font-medium text-${getStrengthColor(
                        strength.length,
                        strength.hasSymbols,
                        strength.hasNumbers,
                        strength.hasUpperCase,
                        strength.hasLowerCase
                      )}`}>
                        {getStrengthText(
                          strength.length,
                          strength.hasSymbols,
                          strength.hasNumbers,
                          strength.hasUpperCase,
                          strength.hasLowerCase
                        )}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`bg-${getStrengthColor(
                          strength.length,
                          strength.hasSymbols,
                          strength.hasNumbers,
                          strength.hasUpperCase,
                          strength.hasLowerCase
                        )} h-2.5 rounded-full`} 
                        style={{ 
                          width: `${Math.min(100, (password.length / 16) * 100)}%`,
                          backgroundColor: password.length > 0 ? `var(--${getStrengthColor(
                            strength.length,
                            strength.hasSymbols,
                            strength.hasNumbers,
                            strength.hasUpperCase,
                            strength.hasLowerCase
                          )})` : ''
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Estimated time to crack:</strong> {strength.crackTime}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      This is an estimate based on a brute force attack scenario.
                    </p>
                  </div>
                </div>
                
                {/* Password Requirements */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Password Requirements</h2>
                  
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className={`inline-block w-5 h-5 rounded-full mr-3 ${strength.length >= 8 ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        At least 8 characters {strength.length >= 8 && '✓'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className={`inline-block w-5 h-5 rounded-full mr-3 ${strength.hasUpperCase ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Contains uppercase letters {strength.hasUpperCase && '✓'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className={`inline-block w-5 h-5 rounded-full mr-3 ${strength.hasLowerCase ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Contains lowercase letters {strength.hasLowerCase && '✓'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className={`inline-block w-5 h-5 rounded-full mr-3 ${strength.hasNumbers ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Contains numbers {strength.hasNumbers && '✓'}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className={`inline-block w-5 h-5 rounded-full mr-3 ${strength.hasSymbols ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Contains symbols {strength.hasSymbols && '✓'}
                      </span>
                    </li>
                  </ul>
                </div>
                
                {/* Password Tips */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
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

export default PasswordStrengthChecker; 