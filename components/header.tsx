'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '@/components/logo';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className='fixed top-0 w-full bg-header backdrop-blur-sm border-b border-orange-100 z-50'>
      <div className='container mx-auto px-4 lg:px-6'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center space-x-3'>
            <Logo size='md' />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => handleNavClick('home')}
              className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('showcase')}
              className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
            >
              Showcase
            </button>
            <div className='flex items-center space-x-4'>
              <a
                href='tel:+15551234567'
                className='flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors'
              >
                <Phone className='w-4 h-4 animate-pulse' />
                <span className='font-medium'>+1 (306) 807-3677</span>
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Contact Us
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-orange-100'>
            <nav className='flex flex-col space-y-4'>
              <button
                onClick={() => handleNavClick('home')}
                className='text-left text-gray-700 hover:text-orange-500 transition-colors font-medium'
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className='text-left text-gray-700 hover:text-orange-500 transition-colors font-medium'
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('showcase')}
                className='text-left text-gray-700 hover:text-orange-500 transition-colors font-medium'
              >
                Showcase
              </button>
              <a
                href='tel:+15551234567'
                className='flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors'
              >
                <Phone className='w-4 h-4 animate-pulse' />
                <span className='font-medium'>+1 (555) 123-4567</span>
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 w-fit'
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
