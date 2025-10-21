'use client';

import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#172128]  shadow-md ">
      <div className="max-w-3xl sm:max-w-full mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link href="/">
    <Image
      src="/Web%20Images/Logos/new-VC-logo-brown.png" 
      alt="Valley Cabinet Supply"
      width={100} 
      height={40} 
    />
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#consultation" className="text-white hover:text-[#AE9F8F] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
              <b> Free 3D</b> Design
            </a>
            <a href="#samples" className="text-white hover:text-[#AE9F8F] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
              Order Samples
            </a>
            
            <a href="tel:6139170497" className="flex items-center gap-2 text-white hover:text-[#AE9F8F] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
              <Phone /> 613-917-0497
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-900"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#consultation" className="text-slate-700 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Free Consultation
            </a>
            <a href="#samples" className="text-slate-700 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Samples
            </a>
            <a href="#kitchen" className="text-slate-700 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Shop Kitchen
            </a>
            <a href="#bath" className="text-slate-700 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Shop Bath
            </a>
            <a href="tel:613-917-0497" className="bg-slate-800 text-white block px-3 py-2 text-base font-medium hover:bg-slate-700 transition-all duration-300 rounded-lg mx-3 mt-4">
              613-917-0497
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
