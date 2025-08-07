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
    shortDescription: 'Brighten every moment with handcrafted blooms delivered fresh, from heart to home.',
    detailedDescription:
      '',
durationMonths: 6,
    challenges:
      '',
    solutions: '',
    keyResults: [],
    outcome: '',
    technologies: [],
  },
  {
    title: 'Admin Panel',
    slug: 'adminPanel',
    images: [`${basePath}/images/admin-panel.jpg`],
    shortDescription: 'Manage everything effortlessly with a powerful, intuitive admin panel built for control and clarity.',
    detailedDescription:
      '',
   durationMonths: 6,
    challenges:
      '',
    solutions: '',
    keyResults: [],
    outcome: '',
    technologies: [],
  },
  {
    title: 'Zaika Web',
    slug: 'restaurant',
    images: [`${basePath}/images/zaika.jpg`],
    shortDescription: 'Experience the true taste of tradition with Zaika’s rich, flavorful cuisine delivered to your doorstep.',
    detailedDescription:
      '',
   durationMonths: 6,
    challenges:
      '',
    solutions: '',
    keyResults: [],
    outcome: '',
    technologies: [],
  },
   {
    title: 'Zaika - Mobile App',
    slug: 'zaikaMobile',
    images: [`${basePath}/images/zaikaMobApp.jpg`],
    shortDescription: 'Order your favorite Zaika dishes anytime, anywhere – fast, fresh, and just a tap away!',
    detailedDescription:
      '',
    durationMonths: 6,
    challenges:
      '',
    solutions: '',
    keyResults: [],
    outcome: '',
    technologies: [],
  },
  {
    title: 'T-Shirts Designs',
    slug: 'T-ShirtsDesigns',
    images: [`${basePath}/images/t-shirts.jpg`],
    shortDescription: 'Wear your vibe – bold, comfy, and made to stand out.',
    detailedDescription:
      '',
    durationMonths: 6,
    challenges:
      '',
    solutions: '',
    keyResults: [],
    outcome: '',
    technologies: [],
  },
  {
    title: 'ErzEl Shop',
    slug: 'ErzElShop',
    images: [`${basePath}/images/ErzElShop.png`],
    shortDescription: 'From engines to edges — Erzel Shop fuels your journey with premium parts, trusted oils, and durable tires. Drive better, drive with Erzel',
    detailedDescription:
      '',
    durationMonths: 6,
    challenges:
      '',
    solutions: '',
    keyResults: [],
    outcome: '',
    technologies: [],
  },
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
              <CardContent>
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
