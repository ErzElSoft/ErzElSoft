'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Phone,
  ArrowUp,
} from 'lucide-react';
import Image from 'next/image';
import Logo from '@/components/logo';

import { motion, AnimatePresence } from 'framer-motion';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import HeroSlider from '@/components/heroSlider.component';
import AboutSection from '@/components/about-component';
import ShowcaseSection from '@/components/showcase.component';
import Services from '@/components/services.component';
import Contact from '@/components/contact.component';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export default function ErzEl() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  //const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const [cellWidth, setCellWidth] = useState('60%');
  useEffect(() => {
    function updateWidth() {
      if (window.innerWidth < 640) {
        setCellWidth('90%'); // wider cells on mobile
      } else {
        setCellWidth('60%'); // normal width on desktop
      }
    }

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  const flickityOptions = {
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: true,
    pageDots: false,
    prevNextButtons: false,
    draggable: true,
    contain: true,
    cellAlign: 'center',
    selectedAttraction: 0.01,
    friction: 0.15,
    initialIndex: 1,
  };


  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // close menu first

    // Add a small delay to allow the mobile menu to animate out
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const offset = 100; // adjust based on your header height
        const top =
          section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    }, 300); // delay matches the exit animation (0.3s)
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const sectionIds = ['home', 'services', 'about', 'showcase'];

    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      const contactTop = contactSection?.getBoundingClientRect().top || 0;

      // If user is in the Contact section — remove highlights
      if (contactTop <= window.innerHeight && contactTop >= 0) {
        setActiveSection('');
        return;
      }

      const offset = 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top >= 0 && top <= offset) {
            setActiveSection(id);
            return;
          }
        }
      }

      // fallback
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stepRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      stepRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);



  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header
        className={`fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm 
        transition-all duration-300 ease-in-out 
        ${isScrolled || isMenuOpen ? 'h-auto' : 'h-24'} 
        ${isMenuOpen ? 'pb-6' : ''}
      `}
      >
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full mx-auto px-4 lg:px-8 xl:px-12 
          transition-all duration-300 ease-in-out 
          ${isScrolled ? 'min-h-[3.5rem]' : 'min-h-[6rem]'}
        `}
        >
          {/* Decorative Background Pattern */}
          <div className='absolute inset-0 opacity-5 pointer-events-none'>
            <div className='absolute top-2 left-20 w-8 h-8 bg-orange-500 rounded-full'></div>
            <div className='absolute top-4 right-32 w-6 h-6 bg-orange-400 rounded-full'></div>
            <div className='absolute bottom-2 left-1/3 w-7 h-7 bg-orange-600 rounded-full'></div>
            <div className='absolute top-1 right-1/4 w-5 h-5 bg-orange-300 rounded-full'></div>
          </div>

          <div className='relative w-full px-4 lg:px-8 xl:px-12'>
            <div className='flex items-center justify-between h-20 md:h-16 py-2 md:py-0'>
              {/* Logo */}
              <div className='flex items-center transition-all duration-300'>
                <Logo size={isScrolled ? 'md' : 'lg'} variant='black' />
              </div>

              {/* Desktop Navigation */}
              <nav className='hidden md:flex items-center space-x-8'>
                {['home', 'services', 'about', 'showcase'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative text-gray-700 font-medium py-2 group transition-colors duration-300 ${
                      activeSection === section ? 'text-orange-500' : ''
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                        activeSection === section
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </button>
                ))}

                <div className='flex items-center space-x-4'>
                  <a
                    href='tel:+13068073677'
                    className='flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors'
                  >
                    <Phone className='w-4 h-4 animate-pulse text-orange-500' />
                    <span className='font-medium'>+1 (306) 807-3677</span>
                  </a>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  >
                    Contact Us
                  </button>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className='md:hidden text-gray-700'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='md:hidden bg-white backdrop-blur-md px-4 pt-4 pb-6 mt-4'
                >
                  <nav className='flex flex-col space-y-4'>
                    {['home', 'services', 'about', 'showcase'].map(
                      (section) => (
                        <button
                          key={section}
                          onClick={() => scrollToSection(section)}
                          className='relative text-left text-gray-700 hover:text-orange-500 transition-colors font-medium text-base py-1 group'
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full'></span>
                        </button>
                      )
                    )}

                    <a
                      href='tel:+13068073677'
                      className='flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors'
                    >
                      <Phone className='w-4 h-4 animate-pulse text-orange-500' />
                      <span className='font-medium'>+1 (306) 807-3677</span>
                    </a>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 w-fit shadow-md'
                    >
                      Contact Us
                    </button>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50'
          aria-label='Scroll to top'
        >
          <ArrowUp className='w-6 h-6' />
        </button>
      )}

      {/* Home Section */}
     {<HeroSlider/>}

        {/* Services Section */}
      {<Services/>}

      {/* <TestimonialSlider /> */}

      {/* About Section */}
      <AboutSection />

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* Contact Section */}
     {<Contact />}

      {/* Footer */}
      <footer className='bg-black text-white py-12 relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-8 left-20 w-16 h-16 bg-orange-500 rounded-full'></div>
          <div className='absolute bottom-8 right-32 w-12 h-12 bg-orange-400 rounded-full'></div>
          <div className='absolute top-1/2 left-1/3 w-10 h-10 bg-orange-300 rounded-full'></div>
        </div>

        <div className='relative w-full px-4 lg:px-8 xl:px-12'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3'>
                <Logo size='lg' />
              </div>
              <p className='text-gray-400'>
                Innovative IT solutions for modern businesses. Transform your
                digital presence with us.
              </p>
            </div>

            <div>
              <h4 className='font-semibold mb-4 text-orange-500'>Services</h4>
              <ul className='space-y-2 text-gray-300'>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Web Design & Development
                </li>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Mobile Apps
                </li>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Saas Apps
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold mb-4 text-orange-500'>Company</h4>
              <ul className='space-y-2 text-gray-300'>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  About Us
                </li>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Our Team
                </li>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Careers
                </li>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Blog
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold mb-4 text-orange-500'>Connect</h4>
              <ul className='space-y-2 text-gray-300'>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Instagram
                </li>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  X
                </li>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Facebook
                </li>
                <li className='hover:text-orange-500 transition-colors cursor-pointer'>
                  Newsletter
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>
              &copy; {new Date().getFullYear()} ErzEl Soft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
