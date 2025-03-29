import Image from 'next/image';
import { FC } from 'react';

/**
 * HeroSection Component - RTL hero section for 'מכון כושר ביתא'
 * 
 * This component implements a modern glassmorphism design with RTL support
 * for a fitness gym business targeting Hebrew-speaking customers.
 */
const HeroSection: FC = () => {
  return (
    <section 
      dir="rtl" 
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feffd6] to-[#fcff2e] opacity-60 z-0"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gym-background.jpg" // Replace with actual image path
          alt="אנשים מתאמנים במכון כושר מודרני"
          layout="fill"
          objectFit="cover"
          priority
          className="mix-blend-overlay opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      
      {/* Content container with glassmorphism effect */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto md:mr-auto md:ml-0 backdrop-blur-md bg-white/20 p-8 md:p-12 rounded-2xl border border-white/30 shadow-lg">
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight"
            style={{ fontFamily: 'var(--font-playful, sans-serif)' }}
          >
            מכון כושר מוביל בישראל
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-gray-800 font-medium">
            חווית לקוח מושלמת בכל ביקור
          </h2>
          
          <p className="mb-8 text-gray-700 max-w-lg">
            אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </p>
          
          <button 
            className="bg-[#fcff2e] hover:bg-[#e6e929] text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-[#fcff2e]/50 focus:outline-none focus:ring-2 focus:ring-[#fcff2e]/50 focus:ring-offset-2"
            aria-label="קבע תור עכשיו למכון הכושר"
          >
            קבע תור עכשיו
          </button>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fcff2e]/30 rounded-full blur-xl z-0"></div>
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#feffd6]/40 rounded-full blur-lg z-0"></div>
        </div>
      </div>
      
      {/* Floating elements for playful design */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#fcff2e]/40 rounded-full blur-md animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-[#feffd6]/50 rounded-full blur-md animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-[#fcff2e]/30 rounded-full blur-sm animate-ping" style={{ animationDuration: '4s' }}></div>
    </section>
  );
};

export default HeroSection;