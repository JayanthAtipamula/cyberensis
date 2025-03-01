import { Home, User, Briefcase, FileText, Lock, Key, Wrench, BookOpen } from 'lucide-react';

export const commonNavItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/about', icon: User },
  { name: 'Services', url: '/services', icon: Briefcase },
  { name: 'Blog', url: '/blog', icon: BookOpen },
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