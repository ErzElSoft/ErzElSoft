// components/OrbitBackground.tsx
import React from 'react';

const OrbitBackground = () => {
  return (
    <div className='absolute inset-0 opacity-5 pointer-events-none overflow-hidden'>
      <div className='absolute w-20 h-20 bg-orange-500 rounded-full animate-orbit-slow' />
      <div className='absolute w-24 h-24 bg-orange-400 rounded-full animate-orbit-medium' />
      <div className='absolute w-28 h-28 bg-orange-600 rounded-full animate-orbit-reverse' />
      <div className='absolute w-16 h-16 bg-orange-300 rounded-full animate-orbit-small' />
      <div className='absolute w-20 h-20 bg-orange-400 rounded-full animate-orbit-zigzag' />

      <style jsx>{`
        .animate-orbit-slow {
          top: 20%;
          left: 15%;
          animation: orbit 16s linear infinite;
        }

        .animate-orbit-medium {
          top: 40%;
          right: 20%;
          animation: orbit 12s linear infinite;
        }

        .animate-orbit-reverse {
          bottom: 20%;
          left: 33%;
          animation: orbitReverse 14s linear infinite;
        }

        .animate-orbit-small {
          top: 60%;
          right: 25%;
          animation: orbit 10s linear infinite;
        }

        .animate-orbit-zigzag {
          bottom: 40%;
          left: 25%;
          animation: zigzag 8s ease-in-out infinite;
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(10px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(10px) rotate(-360deg);
          }
        }

        @keyframes orbitReverse {
          0% {
            transform: rotate(0deg) translateX(12px) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(12px) rotate(360deg);
          }
        }

        @keyframes zigzag {
          0% {
            transform: translate(0px, 0px);
          }
          25% {
            transform: translate(10px, -10px);
          }
          50% {
            transform: translate(-10px, 10px);
          }
          75% {
            transform: translate(10px, 10px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
      `}</style>
    </div>
  );
};

export default OrbitBackground;
