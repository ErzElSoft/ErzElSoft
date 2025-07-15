import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'black';
  className?: string;
}

export default function Logo({
  size = 'md',
  variant = 'default',
  className = '',
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-24 h-10',
    lg: 'w-36 h-16',
    xl: 'w-44 h-20',
  };

  const logoSrc =
    variant === 'black'
      ? './images/erzelsoft-black-logo.png'
      : '/images/erzelsoft-logo.png';

  const altText =
    variant === 'black' ? 'ErzEl Soft Black Logo' : 'ErzEl Soft Logo';

  return (
    <div
      className={`${sizeClasses[size]} relative transition-all duration-300 ease-in-out ${className}`}
    >
      <Image
        src={logoSrc}
        alt={altText}
        fill // ⬅️ Makes it responsive inside parent div
        className='object-contain'
        priority
      />
    </div>
  );
}
