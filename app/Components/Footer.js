'use client';


import { Facebook, Github, Linkedin, ProportionsIcon } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/abedinalways',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sheikh-minhajul-abedin/',
    icon: Linkedin,
  },
  {
    name: 'Portfolio-hub',
    href: 'https://abedin.vercel.app/',
    icon: ProportionsIcon,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Abedin.always',
    icon: Facebook,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Name and Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 font-semibold">
              Created by{' '}
              <span className="gradient-text font-bold">Sheikh Minhajul Abedin</span> 
            
            </p>
            <p className="text-gray-400 text-sm mt-1">
              &copy; {new Date().getFullYear()} MERN Interview Prep.{' '}
              <span className="font-bangla">সর্বস্বত্ব সংরক্ষিত</span> (All
              Rights Reserved).
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
