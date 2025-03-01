import { Home, User, Briefcase, FileText, Lock, Key, Wrench, BookOpen, Shield, Code, Server, Database, Brain, Cpu, Globe } from 'lucide-react';

export const commonNavItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/about', icon: User },
  { 
    name: 'Services', 
    url: '/services', 
    icon: Briefcase,
    children: [
      { name: 'Vulnerability Assessment', url: '/services/VAPT', icon: Shield },
      { name: 'Web Application Testing', url: '/services/WAPT', icon: Globe },
      { name: 'Network Infrastructure Testing', url: '/services/NIPT', icon: Server },
      { name: 'Mobile Application Testing', url: '/services/MAPT', icon: Cpu },
      { name: 'Code Review', url: '/services/CodeReview', icon: Code },
      { name: 'Development', url: '/services/Development', icon: Database },
      { name: 'Consulting', url: '/services/Consulting', icon: Brain }
    ]
  },
  { 
    name: 'Blog', 
    url: '/blog', 
    icon: BookOpen,
    children: [
      { name: 'All Articles', url: '/blog', icon: BookOpen },
      { name: 'Cybersecurity', url: '/category/cybersecurity', icon: Shield },
      { name: 'Web Security', url: '/category/web-security', icon: Globe },
      { name: 'Network Security', url: '/category/network-security', icon: Server }
    ]
  },
  { 
    name: 'Tools', 
    url: '#', 
    icon: Wrench,
    children: [
      { name: 'Password Strength Checker', url: '/password-strength-checker', icon: Lock },
      { name: 'Password Generator', url: '/password-generator', icon: Key }
    ]
  },
  { name: 'Contact', url: '/contact', icon: FileText }
]; 