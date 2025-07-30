import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export type ShowcaseItem = {
  title: string;
  slug: string;
  images: string[];
  shortDescription: string;
  detailedDescription: string;
  durationMonths: number;
  challenges: string;
  solutions: string;
  keyResults: string[];
  outcome: string;
  technologies: string[];
};

const showcaseData: ShowcaseItem[] = [
  {
    title: 'Floral',
    slug: 'floral',
    images: [`${basePath}/images/floral.jpg`],
    shortDescription: 'Blooms Crafted Digitally with Love & Elegance.',
    detailedDescription:
      'Built a scalable, secure e-commerce system with payment integration and responsive UI.',
    durationMonths: 6,
    challenges:
      'Complex product structures, cart performance, and secure checkout.',
    solutions: 'Optimized DB design, lazy loading, Stripe integration.',
    keyResults: ['40% performance boost', '99.9% uptime'],
    outcome: 'Fully functional store launched with positive feedback.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Admin Panel',
    slug: 'adminPanel',
    images: [`${basePath}/images/admin-panel.jpg`],
    shortDescription: 'A comprehensive online shopping solution.',
    detailedDescription:
      'Built a scalable, secure e-commerce system with payment integration and responsive UI.',
    durationMonths: 6,
    challenges:
      'Complex product structures, cart performance, and secure checkout.',
    solutions: 'Optimized DB design, lazy loading, Stripe integration.',
    keyResults: ['40% performance boost', '99.9% uptime'],
    outcome: 'Fully functional store launched with positive feedback.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Zaika Web',
    slug: 'restaurant',
    images: [`${basePath}/images/zaika.jpg`],
    shortDescription: 'A comprehensive online shopping solution.',
    detailedDescription:
      'Built a scalable, secure e-commerce system with payment integration and responsive UI.',
    durationMonths: 6,
    challenges:
      'Complex product structures, cart performance, and secure checkout.',
    solutions: 'Optimized DB design, lazy loading, Stripe integration.',
    keyResults: ['40% performance boost', '99.9% uptime'],
    outcome: 'Fully functional store launched with positive feedback.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
   {
    title: 'Zaika - Mobile App',
    slug: 'zaikaMobile',
    images: [`${basePath}/images/zaikaMobApp.jpg`],
    shortDescription: 'A comprehensive online shopping solution.',
    detailedDescription:
      'Built a scalable, secure e-commerce system with payment integration and responsive UI.',
    durationMonths: 6,
    challenges:
      'Complex product structures, cart performance, and secure checkout.',
    solutions: 'Optimized DB design, lazy loading, Stripe integration.',
    keyResults: ['40% performance boost', '99.9% uptime'],
    outcome: 'Fully functional store launched with positive feedback.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'T-Shirts Designs',
    slug: 'T-ShirtsDesigns',
    images: [`${basePath}/images/t-shirts.jpg`],
    shortDescription: 'A comprehensive online shopping solution.',
    detailedDescription:
      'Built a scalable, secure e-commerce system with payment integration and responsive UI.',
    durationMonths: 6,
    challenges:
      'Complex product structures, cart performance, and secure checkout.',
    solutions: 'Optimized DB design, lazy loading, Stripe integration.',
    keyResults: ['40% performance boost', '99.9% uptime'],
    outcome: 'Fully functional store launched with positive feedback.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  // {
  //   title: 'EyeWear',
  //   slug: 'EyeWear',
  //   images: [`${basePath}/images/1.jpg`],
  //   shortDescription: 'A comprehensive online shopping solution.',
  //   detailedDescription:
  //     'Built a scalable, secure e-commerce system with payment integration and responsive UI.',
  //   durationMonths: 6,
  //   challenges:
  //     'Complex product structures, cart performance, and secure checkout.',
  //   solutions: 'Optimized DB design, lazy loading, Stripe integration.',
  //   keyResults: ['40% performance boost', '99.9% uptime'],
  //   outcome: 'Fully functional store launched with positive feedback.',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  // },
  // {
  //   title: 'Healthcare Management System',
  //   slug: 'healthcare-management',
  //   images: [`${basePath}/images/2.jpg`],
  //   shortDescription: 'Digitized healthcare operations and records.',
  //   detailedDescription:
  //     'Developed telemedicine, scheduling, and patient data management features.',
  //   durationMonths: 8,
  //   challenges: 'Data privacy, real-time communication, secure storage.',
  //   solutions: 'Implemented end-to-end encryption and WebRTC.',
  //   keyResults: ['Reduced wait time by 60%', 'Increased patient satisfaction'],
  //   outcome: 'Adopted by multiple clinics.',
  //   technologies: ['React', 'Express', 'MySQL', 'WebRTC'],
  // },
];

const ShowcaseSection: React.FC = () => {
  return (
    <section id='showcase' className='py-20 bg-white relative overflow-hidden'>
      <div className='relative w-full px-4 lg:px-8 xl:px-12'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Our <span className='text-orange-500'>Showcase</span>
          </h2>
          <p className='text-xl text-gray-600'>
            <strong>
              Curated Collection of Our Proudest Work — Where Creativity Meets
              Results.
            </strong>
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {showcaseData.map((item, i) => (
            <Card
              key={i}
              className='overflow-hidden hover:shadow-xl transition-shadow border-gray-200'
            >
              <div className='relative h-48'>
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className='object-cover object-top'
                />
              </div>
              <CardHeader>
                <CardTitle className='text-gray-900'>{item.title}</CardTitle>
                <CardDescription>{item.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className='p-6'>
                <CardDescription className='mb-4'>
                  {item.detailedDescription}
                </CardDescription>
                <Button
                  onClick={() =>
                    window.open(`${basePath}/case-studies/${item.slug}`, '_blank')
                  }
                  className='bg-orange-500 hover:bg-orange-600 text-white py-2 text-base'
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
