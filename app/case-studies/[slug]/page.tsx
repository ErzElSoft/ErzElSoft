'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/components/logo';

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();

  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Case Study Not Found
          </h1>
          <Button
            onClick={() => router.push('/#showcase')}
            className='bg-orange-500 hover:bg-orange-600'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Showcase
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
        <div className='w-full px-4 lg:px-6 py-4'>
          <div className='flex items-center justify-between max-w-[1440px] mx-auto'>
            <Button
              variant='ghost'
              onClick={() => router.push('/#showcase')}
              className='text-orange-500 hover:text-orange-600'
            >
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Showcase
            </Button>
            <div className='flex items-center space-x-2'>
              <Logo size='lg' />
              <span className='font-semibold text-gray-900'>Case Study</span>
            </div>
          </div>
        </div>
      </header>

      <section className='py-16 bg-gradient-to-br from-orange-50 to-white'>
        <div className='w-full px-4 lg:px-6 text-center max-w-[1440px] mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 mb-6'>
            {caseStudy.title}
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            {caseStudy.description}
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='w-full px-4 lg:px-6 max-w-[1440px] mx-auto'>
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {caseStudy.images.map((img, i) => (
              <div
                key={i}
                className={`rounded-lg overflow-hidden shadow-md ${
                  caseStudy.images.length === 1 ? 'md:col-span-2' : ''
                }`}
                style={{
                  maxWidth: caseStudy.images.length === 1 ? '1024px' : '600px',
                  margin: '0 auto',
                }}
              >
                <Image
                  src={img}
                  alt={`Screenshot ${i}`}
                  width={caseStudy.images.length === 1 ? 1024 : 600}
                  height={caseStudy.images.length === 1 ? 768 : 400}
                  className='w-full h-auto object-cover'
                  sizes={
                    caseStudy.images.length === 1
                      ? '(max-width: 1024px) 100vw, 1024px'
                      : '(max-width: 600px) 100vw, 600px'
                  }
                />
              </div>
            ))}
          </div>

          <div className='grid md:grid-cols-2 gap-10 mb-12'>
            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                <TrendingUp className='inline w-5 h-5 text-orange-500 mr-2' />
                The Challenge
              </h2>
              <ul className='list-disc list-outside text-gray-600 space-y-1'>
                {caseStudy.challenge.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                <CheckCircle className='inline w-5 h-5 text-orange-500 mr-2' />
                Our Solution
              </h2>
              <ul className='list-disc list-outside text-gray-600 space-y-1'>
                {caseStudy.solution.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className='mb-12'>
            <h2 className='text-3xl font-bold mb-6 text-center'>Key Metrics</h2>
            <div className='grid md:grid-cols-3 gap-6 text-center'>
              {caseStudy.metrics.map((metric, i) => (
                <div key={i} className='bg-orange-50 p-6 rounded-lg shadow'>
                  <div className='text-3xl font-bold text-orange-500 mb-2'>
                    {metric.value}
                  </div>
                  <div className='font-semibold text-gray-800'>
                    {metric.label}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mb-12'>
            <h2 className='text-3xl font-bold mb-6'>Technologies Used</h2>
            <div className='flex flex-wrap gap-3'>
              {caseStudy.technologies.map((tech, i) => (
                <span
                  key={i}
                  className='px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='text-center'>
            <Button
              onClick={() => router.push('/#contact')}
              className='bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-lg'
            >
              Let’s Work Together
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
