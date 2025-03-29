'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define types for our gallery items
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'facilities' | 'equipment' | 'classes' | 'all';
}

// Define types for filter categories
type FilterCategory = 'all' | 'facilities' | 'equipment' | 'classes';

// Hebrew translations for categories
const categoryTranslations = {
  all: 'הכל',
  facilities: 'מתקנים',
  equipment: 'ציוד',
  classes: 'שיעורים',
};

const PortfolioGallery: React.FC = () => {
  // Sample gallery data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/images/gym-facilities-1.jpg',
      alt: 'אזור אימון מרכזי במכון כושר ביתא',
      category: 'facilities',
    },
    {
      id: 2,
      src: '/images/gym-equipment-1.jpg',
      alt: 'ציוד משקולות חופשיות',
      category: 'equipment',
    },
    {
      id: 3,
      src: '/images/gym-classes-1.jpg',
      alt: 'שיעור ספינינג קבוצתי',
      category: 'classes',
    },
    {
      id: 4,
      src: '/images/gym-facilities-2.jpg',
      alt: 'אזור קרדיו במכון כושר ביתא',
      category: 'facilities',
    },
    {
      id: 5,
      src: '/images/gym-equipment-2.jpg',
      alt: 'מכשירי כושר מתקדמים',
      category: 'equipment',
    },
    {
      id: 6,
      src: '/images/gym-classes-2.jpg',
      alt: 'שיעור יוגה קבוצתי',
      category: 'classes',
    },
    {
      id: 7,
      src: '/images/gym-facilities-3.jpg',
      alt: 'חדר הלבשה מפואר',
      category: 'facilities',
    },
    {
      id: 8,
      src: '/images/gym-equipment-3.jpg',
      alt: 'אזור אימון פונקציונלי',
      category: 'equipment',
    },
  ];

  // State for filtered items and active filter
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Filter categories
  const categories: FilterCategory[] = ['all', 'facilities', 'equipment', 'classes'];

  // Handle filter change
  const handleFilterChange = (category: FilterCategory) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === category));
    }
  };

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-12 overflow-hidden rtl" dir="rtl">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#feffd6] to-[#fcff2e]/30 -z-10"></div>
      
      {/* Blurred circles for glassmorphism effect */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#fcff2e]/40 blur-3xl -z-5"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#fcff2e]/30 blur-3xl -z-5"></div>
      
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">הגלריה שלנו</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            צפו במגוון המתקנים, הציוד והשיעורים שמכון כושר ביתא מציע לכם
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                backdrop-blur-md border border-white/20
                ${activeFilter === category 
                  ? 'bg-[#fcff2e]/80 text-gray-800 shadow-lg' 
                  : 'bg-white/20 text-gray-700 hover:bg-white/30'}
              `}
            >
              {categoryTranslations[category]}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 8 }).map((_, index) => (
              <div 
                key={`skeleton-${index}`} 
                className="bg-white/30 backdrop-blur-md rounded-xl h-64 animate-pulse"
              ></div>
            ))
          ) : (
            // Gallery items
            filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-xl transition-all duration-500
                  bg-white/30 backdrop-blur-md border border-white/30
                  hover:shadow-[0_10px_20px_rgba(252,255,46,0.3)]"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  {/* Placeholder for Next.js Image component */}
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  
                  {/* Note: In a real implementation, you would replace this with actual images */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://source.unsplash.com/random/600x800/?gym,${item.category})` }}
                  ></div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#fcff2e]/0 group-hover:bg-[#fcff2e]/20 transition-all duration-300"></div>
                  
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium
                    bg-white/70 backdrop-blur-md rounded-full text-gray-800 z-10">
                    {categoryTranslations[item.category === 'all' ? 'all' : item.category]}
                  </span>
                  
                  {/* Image caption */}
                  <div className="absolute bottom-0 right-0 left-0 p-4 
                    translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out
                    bg-white/60 backdrop-blur-md border-t border-white/30">
                    <p className="text-gray-800 font-medium text-sm">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;