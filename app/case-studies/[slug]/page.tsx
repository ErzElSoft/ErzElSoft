// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import Link from 'next/link';

type TechnologyItem = string | { name: string; image: string };

// ✅ Required for static export with dynamic routes
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: Props) {
  const slug = params.slug;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) return notFound();

  return (
    <div className='min-h-screen bg-white'>
      <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
        <div className='w-full px-4 lg:px-6 py-4'>
          <div className='flex items-center justify-between max-w-[1440px] mx-auto'>
            <Link
              href='/#showcase'
              className='text-orange-500 hover:text-orange-600 flex items-center font-medium'
            >
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Showcase
            </Link>
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
          {/* Images */}
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
                />
              </div>
            ))}
          </div>

          {/* Challenges and Solutions */}
          <div className='grid md:grid-cols-2 gap-10 mb-12'>
            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                <TrendingUp className='inline w-5 h-5 text-orange-500 mr-2' />
                The Challenge
              </h2>
              <ul className='list-disc list-outside text-gray-600 space-y-1 pl-5'>
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
              <ul className='list-disc list-outside text-gray-600 space-y-1 pl-5'>
                {caseStudy.solution.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Metrics */}
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

          {/* Technologies */}
          <div className='mb-12'>
            <h2 className='text-3xl font-bold mb-6'>Technologies Used</h2>
            <div className='flex flex-wrap gap-3'>
              {(caseStudy.technologies as TechnologyItem[]).map((tech, i) =>
                typeof tech === 'string' ? (
                  <span
                    key={i}
                    className='px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium'
                  >
                    {tech}
                  </span>
                ) : (
                  <div
                    key={i}
                    className='flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full'
                  >
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={20}
                      height={20}
                      className='inline-block'
                    />
                    <span className='text-orange-700 font-medium'>
                      {tech.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className='text-center'>
            <Link href='/#contact'>
              <Button className='bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-lg'>
                Let’s Work Together
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
