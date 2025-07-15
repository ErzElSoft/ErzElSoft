'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Menu,
  X,
  Code,
  Server,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowUp,
} from 'lucide-react';
import Image from 'next/image';
import TestimonialSlider from '@/components/testimonial-slider';
import Logo from '@/components/logo';
import DynamicText from '@/components/dynamic-text';
import { motion, AnimatePresence } from 'framer-motion';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import AboutSection from '@/components/about-component';
import ShowcaseSection from '@/components/showcase.component';

export default function ErzEl() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

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

  const images = [
    'restaurant.jpg',
    'admin-panel.jpg',
    'floral.jpg',
    't-shirts.jpg',
  ];

  const ServicesImages = [
    'restaurant.jpg',
    'mobile.jpg',
    'floral.jpg',
    't-shirts.jpg',
  ];

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

  const tabs = [
    'UI/UX',
    'Branding',
    'Web Design & Development',
    'Mobile Design & Development',
    'SaaS Application',
  ];

  const titles = [
    'UI/UX',
    'Branding',
    'Modern Websites',
    'Responsive Apps',
    'Scalable Platforms',
  ];

  const descriptions = [
    'We build fast, SEO-friendly, and visually stunning websites tailored to your business needs.',
    'Our mobile solutions provide exceptional user experiences across Android and iOS platforms.',
    'We craft robust SaaS products that scale with your business and delight your users.',
  ];
  // Auto play effect - switch tabs every 4 seconds
  useEffect(() => {
    if (isHovering || isClicked) return;

    const interval = setInterval(() => {
      setSelectedTab((prev) => (prev + 1) % tabs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering, isClicked]);

  const Service = [
    {
      head: 'At ERZEL Soft, our values guide every interaction, enabling us to deliver exceptional user experiences powered by advanced technologies and dedicated support',
      descriptions:
        'Our dedicated team of innovative designers and developers combines diverse expertise to craft exceptional digital products, websites, brands, mobile applications, multimedia solutions, and beyond—delivering impactful experiences tailored to your vision.',
    },
  ];

  const steps = [
    {
      iconClass: 'fas fa-tasks',
      title: 'Planning & Analysis',
      description: (
        <>
          <strong>Aligning Goals. Shaping Success. </strong> <br /> We
          collaborate closely with stakeholders to clearly define objectives,
          gather detailed requirements, and analyze challenges—laying a solid
          foundation to guide the entire project toward success.
        </>
      ),
    },
    {
      iconClass: 'fas fa-palette',
      title: 'Design & Prototype',
      description: (
        <>
          <strong>Design that Speaks. Prototypes that Perform.</strong>
          <br />
          We visualize your product with stunning UI/UX design and bring it to
          life through interactive prototypes—bridging the gap between concept
          and code.
        </>
      ),
    },
    {
      iconClass: 'fas fa-laptop-code',
      title: 'Implementation / Development',
      description: (
        <>
          <strong>From Design to Code—Seamlessly. </strong> <br /> Our
          development team transforms approved prototypes into fully functional
          products, focusing on performance, scalability, and precision at every
          step.
        </>
      ),
    },
    {
      iconClass: 'fas fa-bug',
      title: 'Testing',
      description: (
        <>
          <strong>Tested to Perfection. </strong>
          <br />
          We validate every detail through comprehensive testing to ensure your
          product runs flawlessly across all devices and scenarios.
        </>
      ),
    },
    {
      iconClass: 'fas fa-rocket',
      title: 'Deployment',
      description: (
        <>
          <strong>Launch with Confidence. </strong> <br /> We handle deployment
          with precision, ensuring your product goes live smoothly and is fully
          optimized for real-world use.
        </>
      ),
    },
    {
      iconClass: 'fas fa-cogs',
      title: 'Operation & Maintenance',
      description: (
        <>
          <strong>Built to Last. Backed for the Future. </strong> <br /> We
          don’t just launch and leave—we support, maintain, and improve your
          product to meet evolving user and business needs
        </>
      ),
    },
  ];
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

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    setIsClicked(true);
  };

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
      <section
        id='home'
        className='pt-[7rem] sm:pt-[6rem] md:pt-[5rem] min-h-screen bg-black relative overflow-hidden bg-black'
      >
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full'></div>
          <div className='absolute top-40 right-32 w-24 h-24 bg-orange-400 rounded-full'></div>
          <div className='absolute bottom-20 left-1/3 w-28 h-28 bg-orange-600 rounded-full'></div>
          <div className='absolute top-60 left-1/4 w-16 h-16 bg-orange-300 rounded-full'></div>
          <div className='absolute bottom-40 right-1/4 w-20 h-20 bg-orange-400 rounded-full'></div>
        </div>

        {/* Main Hero Content */}
        <div className='relative min-h-[50vh] flex items-center justify-center'>
          <div className='w-full mx-auto px-4 lg:px-12'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Left Side - Current Content */}
              <div className='space-y-8 animate-fade-in-up'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-in-left'>
                  Transforming startups into market leaders with <br></br>
                  <DynamicText />
                </h1>
              </div>

              {/* Right Side - New Content */}
              <div className='space-y-6 animate-fade-in-up delay-300'>
                <div className=''>
                  <p className='text-white leading-relaxed mb-8 text-lg'>
                    ErzEl Soft is a creative digital agency dedicated to helping
                    businesses design, build, and launch their ideas through
                    efficient and impactful solutions. We combine strategy,
                    design, and technology to deliver optimized digital
                    experiences that drive real results.
                  </p>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto'
                  >
                    HIRE US
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Flickity Carousel */}
        <div className='relative py-12 px-4 lg:px-12'>
          <Flickity
            className='carousel'
            options={flickityOptions}
            disableImagesLoaded={false}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className='carousel-cell px-2'
                style={{ width: cellWidth }}
              >
                <img
                  src={`/images/${img}`}
                  alt={`Slide ${idx + 1}`}
                  className='rounded-xl shadow-xl border border-gray-200 max-w-full h-auto'
                />
              </div>
            ))}
          </Flickity>
        </div>

        {/* Call to Action Banner */}
        <div className='relative w-full px-4 lg:px-8 xl:px-12 py-12'>
          <div className='rounded-3xl p-8 md:p-12 text-center text-white animate-fade-in delay-1200 shadow-2xl'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-orange-100 mb-6 w-full'>
              Join hundreds of satisfied clients who have revolutionized their
              operations with our innovative IT solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                onClick={() => scrollToSection('contact')}
                className='bg-white text-orange-500 hover:bg-orange-50 px-6 py-2 text-base font-semibold transform hover:scale-105 transition-all duration-300'
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection('showcase')}
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-orange-500 px-6 py-2 text-base font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent'
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id='services' className='w-full bg-[#f7f9fb] px-12 py-20'>
        {/* Top Intro Text */}
        <div className='w-full max-w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-16'>
          <div className='text-gray-900'>
            <h2 className='text-4xl md:text-5xl font-semibold leading-tight'>
              <span className='underline decoration-orange-500 underline-offset-4'>
                Delivering
              </span>{' '}
              the solutions you need — and{' '}
              <span className='underline decoration-orange-500 underline-offset-4'>
                more
              </span>
              , through{' '}
              <span className='underline decoration-orange-500 underline-offset-4'>
                forward-thinking
              </span>{' '}
              services.
            </h2>
          </div>
          <div className='text-gray-700'>
            <p className='text-xl md:text-2xl leading-relaxed'>
              Whether you're a startup or an established enterprise, your goal
              is growth — and as a trusted digital agency, we craft the tailored
              roadmap of services you need to achieve success.
            </p>
          </div>
        </div>

        {/* Service Accordion Section */}
        <div className='bg-white w-full px-6 py-16 rounded-xl shadow-md'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
            {/* Left Side - Accordion */}
            <div className='flex flex-col space-y-6'>
              {tabs.map((tab, index) => (
                <div key={index} className='border-b border-gray-200 pb-4'>
                  <div
                    onClick={() => handleTabClick(index)}
                    className={`cursor-pointer text-2xl font-semibold flex justify-between items-center transition-colors duration-300 mb-2 ${
                      selectedTab === index
                        ? 'text-orange-500'
                        : 'text-gray-800 hover:text-orange-500'
                    }`}
                  >
                    <span>{tab}</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-5 w-5 transform transition-transform duration-300 ${
                        selectedTab === index ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </div>
                  <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                      selectedTab === index ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <div className='text-gray-600 text-sm mt-2 relative'>
                      {descriptions[index]}
                      <a
                        href='#'
                        className='learn-more-link inline-flex items-center justify-end mt-4 w-full text-orange-500 font-semibold cursor-pointer'
                      >
                        <span className='line-before mr-2'></span>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Animated Content */}
            <div
              className='relative overflow-hidden'
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className='space-y-6'
                >
                  <h3 className='text-2xl font-bold text-gray-900'>
                    {titles[selectedTab]}
                  </h3>
                  <p className='text-gray-600 text-lg'>
                    {descriptions[selectedTab]}
                  </p>
                  <img
                    src={`/images/${ServicesImages[selectedTab]}`}
                    alt={`Tab ${selectedTab + 1}`}
                    className='rounded-xl shadow-lg border border-gray-200 w-full h-auto'
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full bg-white px-12 py-20 min-h-[600px]'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16'>
          {/* Left Side - Sticky */}
          <div className='flex flex-col justify-center md:sticky md:top-24 md:self-start h-fit'>
            {Service.map(({ head, descriptions }, index) => (
              <div key={index}>
                <h2 className='text-3xl font-semibold leading-tight mb-6 text-gray-900'>
                  {head}
                </h2>
                <p className='text-lg md:text-xl text-gray-700 mb-8'>
                  {descriptions}
                </p>
                <button className='self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition'>
                  Book Consultancy
                </button>
              </div>
            ))}
          </div>
          {/* Right Side - Steps */}
          <div className='relative'>
            <div className='relative pl-12'>
              {/* Centered Vertical Line */}
              <span className='absolute left-5 top-0 bottom-0 w-[2px] bg-orange-300'></span>

              {steps.map(({ iconClass, title, description }, i) => (
                <div
                  key={i}
                  className='mb-16 relative transition-all duration-700 transform'
                >
                  {/* Step Card with icon + title in flex row */}
                  <div className='bg-white p-6 rounded-xl shadow-md ml-10 flex items-center gap-4'>
                    {/* Icon */}
                    <i
                      className={`${iconClass} text-orange-500 text-2xl flex-shrink-0`}
                    />

                    {/* Title and Description */}
                    <div>
                      <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                        {title}
                      </h4>
                      <p className='text-gray-600'>{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation styles */}
        <style jsx>{`
          .animate-fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          [class*='transition-all'] {
            transform: translateY(40px);
          }
        `}</style>
      </section>

      {/* <TestimonialSlider /> */}

      {/* About Section */}
      <AboutSection />

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-orange-500 relative overflow-hidden'
      >
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-20 w-32 h-32 bg-white rounded-full'></div>
          <div className='absolute top-40 right-32 w-24 h-24 bg-orange-300 rounded-full'></div>
          <div className='absolute bottom-20 left-1/3 w-28 h-28 bg-white rounded-full'></div>
          <div className='absolute top-60 right-1/4 w-16 h-16 bg-orange-300 rounded-full'></div>
          <div className='absolute bottom-40 left-1/4 w-20 h-20 bg-white rounded-full'></div>
        </div>

        <div className='relative w-full px-4 lg:px-8 xl:px-12'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Get In Touch
            </h2>
            <p className='text-xl text-orange-100 w-full'>
              Ready to transform your business with innovative IT solutions?
              Contact us today to discuss your project.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              {/* Company Address Card */}
              <div className='bg-white rounded-2xl p-6 shadow-lg'>
                <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                  <MapPin className='w-6 h-6 text-orange-500 mr-3' />
                  Our Office
                </h3>
                <div className='space-y-2 text-gray-700'>
                  <p className='font-semibold'>ErzEl Soft</p>
                  <p>3502 Green Turtle Road</p>
                  <p>Regina, Saskatchewan S4V 3N8</p>
                  <p>Canada</p>
                </div>
              </div>

              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                <div className='flex items-start space-x-4 mb-6'>
                  <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-6 h-6 text-orange-500' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-2'>
                      Email Us
                    </h3>
                    <p className='text-orange-100'>hello@erzelsoft.com</p>
                    <p className='text-orange-100'>support@erzelsoft.com</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Phone className='w-6 h-6 text-orange-500' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-2'>
                      Call Us
                    </h3>
                    <p className='text-orange-100'>+1 (306) 807-3677</p>
                    <p className='text-orange-100'>Available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className='bg-white rounded-2xl p-4 shadow-lg'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Find Us
                </h3>
                <div className='w-full h-64 bg-gray-200 rounded-lg overflow-hidden'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8234567890123!2d-104.6178!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e40fba0b2e9%3A0x3e3e3e3e3e3e3e3e!2s3502%20Green%20Turtle%20Rd%2C%20Regina%2C%20SK%20S4V%203N8%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='ErzEl Soft Office Location'
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <Card className='border-0 bg-white shadow-xl'>
                <CardHeader>
                  <CardTitle className='text-gray-900 text-2xl'>
                    Send us a message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <label className='text-sm font-medium text-gray-700 mb-2 block'>
                        First Name
                      </label>
                      <Input
                        placeholder='John'
                        className='border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                      />
                    </div>
                    <div>
                      <label className='text-sm font-medium text-gray-700 mb-2 block'>
                        Last Name
                      </label>
                      <Input
                        placeholder='Doe'
                        className='border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-700 mb-2 block'>
                      Email
                    </label>
                    <Input
                      type='email'
                      placeholder='john@example.com'
                      className='border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                    />
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-700 mb-2 block'>
                      Phone
                    </label>
                    <Input
                      type='tel'
                      placeholder='+1 (555) 123-4567'
                      className='border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                    />
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-700 mb-2 block'>
                      Subject
                    </label>
                    <Input
                      placeholder='Project Inquiry'
                      className='border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                    />
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-700 mb-2 block'>
                      Message
                    </label>
                    <Textarea
                      placeholder='Tell us about your project...'
                      rows={6}
                      className='border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                    />
                  </div>
                  <Button className='bg-orange-500 hover:bg-orange-600 text-white py-3 text-base font-semibold'>
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
