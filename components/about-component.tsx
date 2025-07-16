'use client';

import React from 'react';
import OrbitBackground from '@/components/OrbitBackground.component';

interface TechItem {
  name: string;
  logoSrc: string;
  description?: string;
  experience?: string;
}

const techStack: TechItem[] = [
  {
    name: 'MERN',
    logoSrc: './images/mern.png',
    description: 'MongoDB, Express, React, Node.js',
    experience: '5+ years',
  },
  {
    name: 'Angular',
    logoSrc: './images/angular.png',
    experience: '3+ years',
  },
  {
    name: 'React Native',
    logoSrc: './images/react-native.png',
    experience: '4+ years',
  },
  {
    name: 'PHP',
    logoSrc: './images/php.png',
    experience: '6+ years',
  },
  {
    name: 'Asp.net core',
    logoSrc: './images/aspnet-core.png',
    experience: '4+ years',
  },
  {
    name: 'C#',
    logoSrc: './images/csharp.png',
    experience: '5+ years',
  },
  {
    name: 'Vue.js',
    logoSrc: './images/vuejs.png',
    experience: '2+ years',
  },
  {
    name: 'AI',
    logoSrc: './images/ai.png',
    experience: '1+ years',
  },
  {
    name: 'MS SQL',
    logoSrc: './images/sql.png',
    experience: '6+ years',
  },
  {
    name: 'MongoDB',
    logoSrc: './images/mongodb.png',
    experience: '5+ years',
  },
  {
    name: 'WordPress',
    logoSrc: './images/wordpress.png',
    experience: '6+ years',
  },
  {
    name: 'Shopify',
    logoSrc: './images/shopify.png',
    experience: '2+ years',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id='about' className='py-10 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <OrbitBackground />

      <div className='relative w-full px-4 lg:px-8 xl:px-12'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            About <span className='text-orange-500'>ErzEl Soft</span>
          </h2>
          <p className='text-left text-xl text-gray-600 w-full'>
            At{' '}
            <span className='underline decoration-orange-500 underline-offset-4'>
              <strong>ERZEL Soft</strong>
            </span>
            , we are more than just a digital agency — we are your creative and
            technical partners in growth. With a passion for innovation and a
            focus on user-centered design, we craft digital experiences that are
            beautiful, functional, and built to scale. From startups to
            enterprises, we collaborate closely with our clients to turn ideas
            into impactful products. Whether it's custom web development, mobile
            apps, or full-scale SaaS solutions, our team brings vision,
            precision, and performance to every project. We blend strategy,
            design, and technology to deliver results — every time.
          </p>
        </div>
      </div>
      <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
        Technologies We Work With and more...
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {techStack.map(({ name, logoSrc, description, experience }) => (
          <div
            key={name}
            className='flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-md'
          >
            <img
              src={logoSrc}
              alt={name}
              className='h-28 w-28 object-contain'
            />
            <span className='text-center text-gray-900 font-semibold text-base'>
              {name}
            </span>
            {description && (
              <p className='text-center text-gray-600 text-sm'>{description}</p>
            )}
            {experience && (
              <p className='text-center text-orange-500 font-medium text-xs'>
                Experience: {experience}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
