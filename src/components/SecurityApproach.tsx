import React, { useState, useEffect } from 'react';

const SecurityApproach = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [animating, setAnimating] = useState(false);

  // Handle step change with animation
  const handleStepChange = (stepId: number) => {
    if (stepId !== activeStep && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setActiveStep(stepId);
        setTimeout(() => {
          setAnimating(false);
        }, 100);
      }, 300);
    }
  };

  const steps = [
    {
      id: 1,
      title: 'Step - 1',
      content: {
        title: 'Initial Assessment',
        description: 'We begin with a comprehensive assessment of your current security posture, identifying vulnerabilities and areas for improvement.',
        checkpoints: ['System Analysis', 'Vulnerability Scanning', 'Security Audit', 'Gap Analysis'],
        details: 'Our initial assessment provides a baseline understanding of your security posture. We analyze existing systems, scan for vulnerabilities, conduct security audits, and identify gaps in your current security implementation.'
      }
    },
    {
      id: 2,
      title: 'Step - 2',
      content: {
        title: 'Threat Modelling',
        description: 'It is a proactive strategy to evaluate cybersecurity threats using threat modelling. In this stage tests and procedures are developed to detect and respond to potential threats, which involve identifying potential threats. To do so, one has to understand how threats impact systems, classify threats, and apply the appropriate countermeasures.',
        checkpoints: ['Defining Assets', 'Identifying Threats', 'Classifying Threats', 'Tighten Internal Controls'],
        details: 'Threat modelling typically consists of five steps: threat intelligence, asset identification, mitigation capabilities, risk assessment, and threat mapping. Every step provides different insights into your security posture.'
      }
    },
    {
      id: 3,
      title: 'Step - 3',
      content: {
        title: 'Security Implementation',
        description: 'Based on our assessment and threat model, we implement robust security measures tailored to your specific needs.',
        checkpoints: ['Security Controls', 'Defense Mechanisms', 'Monitoring Setup', 'Response Planning'],
        details: 'Our implementation phase focuses on deploying the right security controls, establishing defense mechanisms, setting up continuous monitoring, and developing incident response plans.'
      }
    },
    {
      id: 4,
      title: 'Step - 4',
      content: {
        title: 'Testing & Validation',
        description: 'We rigorously test all implemented security measures to ensure they function as intended and provide the expected protection.',
        checkpoints: ['Penetration Testing', 'Vulnerability Verification', 'Control Validation', 'Scenario Testing'],
        details: 'Our testing phase includes comprehensive penetration testing, vulnerability verification, validation of security controls, and scenario-based testing to ensure your defenses work as expected.'
      }
    },
    {
      id: 5,
      title: 'Step -5',
      content: {
        title: 'Continuous Monitoring',
        description: 'Security is an ongoing process. We provide continuous monitoring and regular assessments to maintain and improve your security posture.',
        checkpoints: ['Real-time Monitoring', 'Threat Intelligence', 'Regular Assessments', 'Security Updates'],
        details: 'Our continuous monitoring ensures your security remains effective over time, with real-time monitoring, updated threat intelligence, regular security assessments, and timely security updates.'
      }
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white relative inline-block">
            Our Approach To Security
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            There is no such thing as a secure system! With the best minds in the security industry, we help
            complex organizations protect their web applications, cloud, networks and mobile phones.
          </p>
        </div>

        <div className="mt-12 border-dashed border-2 border-black dark:border-[#f28749] rounded-lg p-6 md:p-10">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepChange(step.id)}
                className={`flex items-center px-6 py-2 rounded-md transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-[#f28749] text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {step.title}
                {activeStep === step.id && (
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-500 ease-in-out px-4 ${animating ? 'opacity-0 transform -translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
              <h3 className="text-2xl font-bold mb-4 dark:text-white transition-all duration-300">
                {steps[activeStep - 1].content.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-all duration-300">
                {steps[activeStep - 1].content.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {steps[activeStep - 1].content.checkpoints.map((checkpoint, index) => (
                  <div 
                    key={index} 
                    className="flex items-start transform transition-all duration-300 ease-in-out" 
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: animating ? 0 : 1,
                      transform: animating ? 'translateY(10px)' : 'translateY(0)'
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-[#f28749]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700 dark:text-gray-300">{checkpoint}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 transition-all duration-300">
                {steps[activeStep - 1].content.details}
              </p>

              <a
                href="/contact"
                className="inline-block bg-[#f28749] hover:bg-[#e07339] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started Now
              </a>
            </div>

            <div className={`flex justify-center transition-all duration-500 ease-in-out ${animating ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'}`}>
              <img
                src="/images/security-approach.svg"
                alt="Security approach illustration"
                className="max-w-full h-auto rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/f28749/ffffff?text=Security+Approach";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityApproach; 