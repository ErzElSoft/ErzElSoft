'use client';

import React from 'react';
import Flickity from 'react-flickity-component';
import { Button } from '@/components/ui/button';
import DynamicText from '@/components/dynamic-text';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const images = [
  'zaika-mobile-app.jpg',
  'admin-panel.jpg',
  'floral.jpg',
  'ErzElShop.png',
  'zaika.jpg',
];

const flickityOptions = {
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  autoPlay: 4000,
  wrapAround: true,
};

const cellWidth = 850; // Example width, adjust as needed

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-[7rem] sm:pt-[6rem] md:pt-[5rem] min-h-screen bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-orange-600 rounded-full"></div>
        <div className="absolute top-60 left-1/4 w-16 h-16 bg-orange-300 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-orange-400 rounded-full"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative min-h-[50vh] flex items-center justify-center">
        <div className="w-full mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Current Content */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-in-left">
                Transforming startups into market leaders with <br />
                <DynamicText />
              </h1>
            </div>

            {/* Right Side - New Content */}
            <div className="space-y-6 animate-fade-in-up delay-300">
              <div>
                <p className="text-white leading-relaxed mb-8 text-lg">
                  ErzEl Soft is a creative digital agency dedicated to helping
                  businesses design, build, and launch their ideas through
                  efficient and impactful solutions. We combine strategy,
                  design, and technology to deliver optimized digital
                  experiences that drive real results.
                </p>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  HIRE US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flickity Carousel */}
      <div className="relative py-12 px-4 lg:px-12">
        <Flickity className="carousel" options={flickityOptions} disableImagesLoaded={false}>
          {images.map((img, idx) => (
            <div key={idx} className="carousel-cell px-2" style={{ width: cellWidth }}>
              <img
                src={`${basePath}/images/${img}`}
                alt={`Slide ${idx + 1}`}
                className="rounded-xl shadow-xl border border-gray-200 max-w-full h-auto"
              />
            </div>
          ))}
        </Flickity>
      </div>

      {/* Call to Action Banner */}
      <div className="relative w-full px-4 lg:px-8 xl:px-12 py-12">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white animate-fade-in delay-1200 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-orange-100 mb-6 w-full">
            Join hundreds of satisfied clients who have revolutionized their
            operations with our innovative IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-orange-500 hover:bg-orange-50 px-6 py-2 text-base font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Button>
            <Button
              onClick={() => scrollToSection('showcase')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-6 py-2 text-base font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
