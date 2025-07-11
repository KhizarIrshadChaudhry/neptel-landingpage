"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ScrollProgress } from '@/app/components/magicui/scroll-progress';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
      <ScrollProgress className="top-[65px]" />
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/NeptelHeaderLogo.png"
              alt="Neptel Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 mx-auto">
            <Link href="/#solution" className="text-base hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#why-neptel-section" className="text-base hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#about" className="text-base hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#about" className="text-base hover:text-primary transition-colors">
              Team
            </Link>
          </nav>



          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">

            <Link 
              href="/#Getstarted" 
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>


          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="py-4 space-y-4">
            <Link 
              href="/#solution" 
              className="block text-sm hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#why-neptel-section" 
              className="block text-sm hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/#about" 
              className="block text-sm hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#about" 
              className="block text-sm hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
            <div className="pt-4 space-y-4">
              <Link 
                href="/#Getstarted" 
                className="block w-full bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
                
              </Link>
            </div>
            
          </nav>
        </div>
      </div>
    </header>
  );
} 