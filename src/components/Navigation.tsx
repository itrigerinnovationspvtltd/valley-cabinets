'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-800">
              Valley Cabinet Supply
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#consultation" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
              Free Consultation
            </a>
            <a href="#samples" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
              Samples
            </a>
            <a href="#kitchen" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
              Shop Kitchen
            </a>
            <a href="#bath" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
              Shop Bath
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
