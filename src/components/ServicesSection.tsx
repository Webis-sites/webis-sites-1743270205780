'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Define types for our services
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Services data
const services: Service[] = [
  {
    id: 1,
    title: "אימון אישי",
    description: "אימונים מותאמים אישית עם מאמנים מוסמכים שיעזרו לך להשיג את היעדים שלך",
    icon: "👤",
  },
  {
    id: 2,
    title: "שיעורים קבוצתיים",
    description: "מגוון רחב של שיעורים קבוצתיים כמו יוגה, פילאטיס, זומבה ועוד",
    icon: "👥",
  },
  {
    id: 3,
    title: "ייעוץ תזונה",
    description: "ייעוץ תזונתי מקצועי שיעזור לך לבנות תפריט מאוזן ובריא",
    icon: "🥗",
  },
  {
    id: 4,
    title: "תוכניות אימון מיוחדות",
    description: "תוכניות אימון מותאמות למטרות ספציפיות כמו ירידה במשקל, חיטוב או בניית שרירים",
    icon: "📋",
  },
  {
    id: 5,
    title: "אימוני כוח",
    description: "אימוני כוח מקצועיים עם ציוד מתקדם לבניית שרירים וחיזוק הגוף",
    icon: "💪",
  },
  {
    id: 6,
    title: "ליווי והדרכה",
    description: "ליווי והדרכה צמודים לאורך כל הדרך להשגת תוצאות מיטביות",
    icon: "🔍",
  },
];

const ServicesSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Animation variants for cards
  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    initial: {
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Animation variants for icons
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    initial: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section dir="rtl" className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feffd6] to-[#fcff2e] opacity-30 z-0"></div>
      
      {/* Glassmorphism decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#fcff2e] opacity-20 blur-xl z-0"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[#feffd6] opacity-30 blur-xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 inline-block relative">
            <span className="relative z-10">השירותים שלנו</span>
            <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#fcff2e] opacity-50 z-0"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            במכון כושר ביתא אנו מציעים מגוון רחב של שירותים מקצועיים כדי לעזור לך להשיג את יעדי הכושר שלך
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="backdrop-blur-md bg-white bg-opacity-20 rounded-xl p-6 border border-white border-opacity-20 shadow-lg relative overflow-hidden"
              variants={cardVariants}
              initial="initial"
              animate={hoveredId === service.id ? "hover" : "initial"}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#fcff2e] opacity-10 z-0"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl mb-4 inline-block bg-[#fcff2e] bg-opacity-30 p-4 rounded-full"
                  variants={iconVariants}
                  initial="initial"
                  animate={hoveredId === service.id ? "hover" : "initial"}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                
                <p className="text-gray-700">{service.description}</p>
                
                <motion.div 
                  className="mt-4 inline-block"
                  initial={{ opacity: 0, x: -10 }}
                  animate={hoveredId === service.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#" className="text-gray-800 font-medium border-b-2 border-[#fcff2e] pb-1 hover:border-b-4 transition-all duration-300">
                    קרא עוד &larr;
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;