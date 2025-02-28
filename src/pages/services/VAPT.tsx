import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Shield, CheckCircle } from 'lucide-react';

const VAPTPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NavBar items={[
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/about', icon: User },
        { name: 'Services', url: '/services', icon: Briefcase },
        { name: 'Contact', url: '/contact', icon: FileText }
      ]} />
      <main className="pt-20">
        <ServiceHero />
        <ServiceDetails />
        <ServiceBenefits />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

const ServiceHero = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vulnerability Assessment & Penetration Testing (VAPT)</h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive security assessment to identify and exploit vulnerabilities in your systems before attackers do.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="VAPT Services" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceDetails = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What is VAPT?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Vulnerability Assessment and Penetration Testing (VAPT) is a combined process of Security services Vulnerability Assessment (VA) which will guide your organization to find vulnerabilities and Penetration Testing (PT) will assist your resource to measure the security Levels. Fundamentally, Vulnerability Assessment and Penetration Testing (VAPT) will raise security alarms before existed flaws being exploited by attackers.
            </p>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">VAPT Services</h3>
            <p className="mb-6">
              In recent times, Vulnerability Assessment and Penetration Testing (VAPT) services is a matter of niche for any organization related to information technology. Vulnerability Assessment and Penetration Testing (VAPT) services will identify potential risk to your organizational Network/infrastructure, Web applications, Mobile applications, Cloud services and other internal and external resources. Vulnerability Assessment and Penetration Testing (VAPT) services include Security Audits, providing endorsements for security disruption, monitoring security and risk assessment.
            </p>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">How VAPT Will Help Your Organization?</h3>
            <p className="mb-6">
              As we know cyberattacks are growing in the Digital world, hackers will always be in search of victims, to steal and misuse their information. As an Organization, you will have a network, Confidential information, Commercial information and other resources. Thus, The prime motto of VAPT is to deliberately secure such Confidential and Esteemed information of the organization.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">Are they Secure Enough?</h3>
              <p className="text-xl font-medium text-[#f28749] mb-4">Prevention is Better than the cure...</p>
              <p>Vulnerability Assessment and Penetration Testing (VAPT) will assist you in getting rid of these Questions.</p>
              <p className="mt-4">
                Vulnerability Assessment (VA) is carried to find out the list of vulnerabilities and Prioritize them in your network, applications and other resources. Penetration Testing (PT) is more comprehensive and intrusive than a Vulnerability Assessment (VA) and is designed to enact a specific hacking situation. Penetration Testing (PT) will analyse and inform you about the risk from an attack that could compromise critical assets or information.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">Types of VAPT that we perform</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Black Box Testing</h4>
                <p>Black box tester tries to invade into a company's system with zero knowledge of infrastructure, applications and other resources involved in the organization.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">White Box Testing</h4>
                <p>White box tester will accomplish Vulnerability Assessment and Penetration Testing (VAPT) from inside the internal network of the company itself and tester will have the complete knowledge of the network infrastructure.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Gray Box Testing</h4>
                <p>Gray box tester will have basic knowledge about organization's internal and external networks. We could say that this is a combination of both Black box and White Box testing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceBenefits = () => {
  const benefits = [
    "Enhances Network security posture",
    "Keeps your information secure, without any Loss, Misuse, unauthorized access and alteration",
    "Protection of the Confidentiality, integrity, and Availability (CIA) of data",
    "Prevention of reputational damage to an organization",
    "Comprehensive application evaluation",
    "Analyses the threats of Network infrastructures",
    "Internal flaws can be spotted very easily but external flaws are very hard to find; VAPT services enables to focus on mitigating critical vulnerabilities."
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of VAPT</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">VAPT Services For</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold mb-3">Web Application Penetration Testing</h4>
                <p className="mb-4">We use manual and Automated penetration testing While searching for vulnerabilities in web applications.</p>
                <a href="/services/wapt" className="text-[#f28749] font-medium hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold mb-3">Mobile Application Penetration Testing</h4>
                <p className="mb-4">We use multiple testing methodologies to analyse the weakness in Android and iOS mobile applications.</p>
                <a href="/services/mapt" className="text-[#f28749] font-medium hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold mb-3">Network/Infrastructure Penetration Testing</h4>
                <p className="mb-4">Identify exploitable vulnerabilities which may lead an attacker to exploit before the attacker finds them.</p>
                <a href="/services/nipt" className="text-[#f28749] font-medium hover:underline">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Our Highly qualified Ethical/White Hackers will understand your organization's resources and the requirement of the security to perform the Vulnerability Assessment and Penetration Testing.",
    "Self-designed area of Scope for testing vulnerabilities based on the architecture of the environment.",
    "Cyberensis will highly focus on Manual testing rather than using automated tools for Vulnerability Assessment and Penetration Testing (VAPT)",
    "Particularized report on actual findings rather than showing probability on vulnerabilities along with POC included."
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for VAPT</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-start">
                  <div className="bg-[#f28749] bg-opacity-10 p-2 rounded-lg mr-4 mt-1">
                    <Shield className="h-6 w-6 text-[#f28749]" />
                  </div>
                  <p className="text-lg">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="inline-block bg-[#f28749] text-white font-medium px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Contact Us for VAPT Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VAPTPage; 