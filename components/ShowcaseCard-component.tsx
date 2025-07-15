import Image from 'next/image';
import React from 'react';

interface ShowcaseCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className='overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 rounded-lg'>
      <div className='relative h-48 w-full'>
        <Image src={image} alt={title} fill className='object-cover' />
      </div>
      <div className='p-6'>
        <h3 className='text-gray-900 text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <button
          onClick={() => window.open(link, '_blank')}
          className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition'
        >
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default ShowcaseCard;
