'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onClick?: () => void;
}

/**
 * CTASection - A call-to-action component for מכון כושר ביתא
 * 
 * Features:
 * - RTL layout support
 * - Glassmorphism design
 * - Responsive design
 * - Accessibility compliant
 * - Moderate animations
 */
const CTASection: FC<CTASectionProps> = ({
  title = 'הגיע הזמן להתחיל את המסע שלך לכושר מושלם',
  subtitle = 'הצטרפו אלינו במכון כושר ביתא ותגלו את הפוטנציאל האמיתי שלכם',
  buttonText = 'קבע תור עכשיו',
  onClick = () => console.log('CTA button clicked'),
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className="relative overflow-hidden py-16 md:py-24 w-full"
      aria-labelledby="cta-heading"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcff2e] to-[#feffd6] opacity-80 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#fcff2e] opacity-30 blur-xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#fcff2e] opacity-40 blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`
            flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12
            p-8 md:p-12 rounded-2xl
            backdrop-blur-md bg-white/20
            border border-white/30
            shadow-lg shadow-black/5
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}
          `}
        >
          {/* Text content */}
          <div className="md:w-1/2 text-right">
            <h2 
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight"
            >
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              {subtitle}
            </p>
            <button
              onClick={onClick}
              className={`
                inline-flex items-center justify-center
                px-8 py-4 text-lg font-bold
                bg-gray-900 text-[#fcff2e] rounded-xl
                transition-all duration-300
                hover:bg-gray-800 hover:shadow-lg hover:shadow-black/20
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                transform hover:-translate-y-1
                relative overflow-hidden group
              `}
              aria-label={buttonText}
            >
              <span className="relative z-10">{buttonText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {/* Animated arrow */}
              <span className="mr-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                ←
              </span>
            </button>
          </div>
          
          {/* Image container with glassmorphism effect */}
          <div 
            className={`
              md:w-1/2 relative
              rounded-2xl overflow-hidden
              border border-white/30
              shadow-xl shadow-black/10
              transition-all duration-700 delay-200 ease-out
              ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}
              h-64 md:h-96 w-full
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <Image
              src="/fitness-motivation.jpg" // Replace with your actual image path
              alt="אימון כושר מקצועי במכון כושר ביתא"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
              // Fallback for when image fails to load
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2ZjZmYyZSIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMDAiPteQ15nXnteV158g15vXldep16g8L3RleHQ+PC9zdmc+';
              }}
            />
            
            {/* Floating fitness icons with animation */}
            <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-sm p-3 rounded-full animate-bounce-slow z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/30 backdrop-blur-sm p-3 rounded-full animate-pulse z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Additional floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm animate-float z-10"></div>
        <div className="absolute bottom-1/3 right-12 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm animate-float-delay z-10"></div>
      </div>
      
      {/* Add to your global CSS or tailwind.config.js */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;