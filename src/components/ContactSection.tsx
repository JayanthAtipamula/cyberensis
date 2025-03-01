import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    message: '',
    services: {
      vulnerabilityAssessment: false,
      webApplicationTesting: false,
      networkInfrastructureTesting: false,
      mobileApplicationTesting: false,
      codeReview: false,
      developmentServices: false,
      consultingServices: false,
      others: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form or show success message
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">GET A QUOTE</h3>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Want To Protect Your Organization from Emerging Cyber Threats?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Now is the perfect time to stay one step ahead of evolving cyber threats by taking proactive security measures. Fill out the form, and our expert pentesters will help you identify and address vulnerabilities before they escalate.
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 bg-[#f28749] bg-opacity-10 p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f28749]">
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">12,001</h4>
                  <p className="text-gray-600 dark:text-gray-400">Total No. Vulnerabilities</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 bg-[#f28749] bg-opacity-10 p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f28749]">
                    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">4+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Years in Business</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 bg-[#f28749] bg-opacity-10 p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f28749]">
                    <path d="M22 11.0799V11.9999C21.9986 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">150+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Trusted Clients</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-[#f28749] bg-opacity-10 p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f28749]">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">21+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Countries Served</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-[#f28749] focus:border-[#f28749] bg-white dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Work Email*
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  placeholder="Enter your work email"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-[#f28749] focus:border-[#f28749] bg-white dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number*
                </label>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <select className="h-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg bg-white dark:bg-gray-700 dark:text-white">
                      <option>+1</option>
                      <option>+91</option>
                      <option>+44</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-r-lg focus:ring-[#f28749] focus:border-[#f28749] bg-white dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Types of services you need*
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="vulnerabilityAssessment"
                      name="vulnerabilityAssessment"
                      checked={formData.services.vulnerabilityAssessment}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 rounded"
                    />
                    <label htmlFor="vulnerabilityAssessment" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Vulnerability Assessment
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="webApplicationTesting"
                      name="webApplicationTesting"
                      checked={formData.services.webApplicationTesting}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 rounded"
                    />
                    <label htmlFor="webApplicationTesting" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Web Application Testing
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="networkInfrastructureTesting"
                      name="networkInfrastructureTesting"
                      checked={formData.services.networkInfrastructureTesting}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 rounded"
                    />
                    <label htmlFor="networkInfrastructureTesting" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Network Infrastructure Testing
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="mobileApplicationTesting"
                      name="mobileApplicationTesting"
                      checked={formData.services.mobileApplicationTesting}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 rounded"
                    />
                    <label htmlFor="mobileApplicationTesting" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Mobile Application Testing
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="codeReview"
                      name="codeReview"
                      checked={formData.services.codeReview}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 rounded"
                    />
                    <label htmlFor="codeReview" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Code Review
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="developmentServices"
                      name="developmentServices"
                      checked={formData.services.developmentServices}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 rounded"
                    />
                    <label htmlFor="developmentServices" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Development Services
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consultingServices"
                      name="consultingServices"
                      checked={formData.services.consultingServices}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 rounded"
                    />
                    <label htmlFor="consultingServices" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Consulting Services
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="others"
                      name="others"
                      checked={formData.services.others}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#f28749] focus:ring-[#f28749] border-gray-300 rounded"
                    />
                    <label htmlFor="others" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Others
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-[#f28749] focus:border-[#f28749] bg-white dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#f28749] hover:bg-[#e07339] text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center"
              >
                Please Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
