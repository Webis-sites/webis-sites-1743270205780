import React from 'react';
import { FaMedal, FaUsers, FaDumbbell } from 'react-icons/fa';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcff2e]/10 to-[#feffd6]/20 rounded-xl -z-10"></div>
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl mb-4 text-[#fcff2e] bg-gray-800/70 p-4 rounded-full shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden" dir="rtl">
      {/* Background with gradient and blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 -z-20"></div>
      <div className="absolute inset-0 bg-[url('/fitness-pattern.png')] opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-0.5 w-full max-w-lg bg-gradient-to-r from-transparent via-[#fcff2e] to-transparent"></div>
          </div>
          <h2 className="relative inline-block px-6 py-2 bg-white/80 backdrop-blur-sm text-3xl md:text-4xl font-bold text-gray-800 rounded-lg border border-[#fcff2e]/30 shadow-md">
            אודות מכון כושר ביתא
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-2 md:order-1">
            <div className="p-6 rounded-xl backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl">
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                הצוות המקצועי שלנו מורכב ממאמנים מוסמכים בעלי ניסיון רב, המחויבים להצלחתכם ולהשגת המטרות האישיות שלכם. אנו מציעים מגוון רחב של ציוד חדשני, שיעורים קבוצתיים מאתגרים ותוכניות אימון מותאמות אישית.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative h-80 rounded-xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/30 shadow-xl">
              <Image 
                src="/gym-image.jpg" 
                alt="מכון כושר ביתא" 
                layout="fill" 
                objectFit="cover"
                className="rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-[#fcff2e] text-gray-800 px-4 py-2 rounded-lg font-bold shadow-lg">
                מעל 15 שנות ניסיון
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard 
            icon={<FaMedal />} 
            title="ניסיון מוכח"
            description="צוות מקצועי עם שנים של ניסיון בתחום הכושר והבריאות"
          />
          <FeatureCard 
            icon={<FaUsers />} 
            title="יחס אישי"
            description="אנו מתאימים לכל מתאמן תכנית אישית המותאמת לצרכיו ומטרותיו"
          />
          <FeatureCard 
            icon={<FaDumbbell />} 
            title="ציוד מתקדם"
            description="מכון הכושר מצויד במיטב המכשירים והטכנולוגיות החדשניות בתחום"
          />
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#fcff2e] to-[#feffd6] text-gray-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-white/30 backdrop-blur-sm">
            קבע סיור במכון
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;