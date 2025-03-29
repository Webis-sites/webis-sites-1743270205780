import React from 'react';
import { NextPage } from 'next';

// Define types for our component props
interface LocationMapProps {
  gymName?: string;
  address: string;
  phone: string;
  email: string;
  operatingHours: {
    day: string;
    hours: string;
  }[];
  mapUrl: string;
}

/**
 * LocationMap Component
 * 
 * A responsive RTL map section that displays the gym's location on Google Maps
 * alongside contact information and operating hours.
 */
const LocationMap: NextPage<LocationMapProps> = ({
  gymName = 'מכון כושר ביתא',
  address = 'רחוב הברזל 38, תל אביב',
  phone = '03-1234567',
  email = 'info@betafitness.co.il',
  operatingHours = [
    { day: 'ראשון - חמישי', hours: '06:00 - 23:00' },
    { day: 'שישי', hours: '06:00 - 16:00' },
    { day: 'שבת', hours: '08:00 - 20:00' },
  ],
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.5775563722386!2d34.7868099!3d32.0879234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9c6c31a3bb%3A0x5c3ef655ffc0e646!2z16jXl9eV15Eg15TXkdeo15bXnCAzOCwg16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1652345678901!5m2!1siw!2sil',
}) => {
  return (
    <section 
      dir="rtl" 
      className="w-full py-16 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      aria-labelledby="location-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-secondary/15 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <h2 
          id="location-heading" 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          איך להגיע אלינו
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Map Container */}
          <div className="lg:w-3/5 h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-xl">
            <iframe 
              src={mapUrl}
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`מפת המיקום של ${gymName}`}
              aria-label="מפת גוגל המציגה את מיקום מכון הכושר"
            />
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-2/5 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 shadow-lg flex flex-col justify-center">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 mb-6">
              <h3 
                className="text-3xl font-bold mb-2 text-primary"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                {gymName}
              </h3>
              <p className="text-white/90 text-lg mb-1">המקום שלך לכושר ובריאות</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">כתובת</h4>
                  <p className="text-white">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">טלפון</h4>
                  <a href={`tel:${phone}`} className="text-white hover:text-primary transition-colors">{phone}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">אימייל</h4>
                  <a href={`mailto:${email}`} className="text-white hover:text-primary transition-colors">{email}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">שעות פעילות</h4>
                  <ul className="text-white space-y-1">
                    {operatingHours.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="font-medium">{item.day}:</span>
                        <span>{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Call to action button */}
            <a 
              href="https://waze.com/ul?ll=32.0879234,34.7868099&navigate=yes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 bg-gradient-to-r from-primary to-primary/80 text-gray-900 font-bold py-3 px-6 rounded-full text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              aria-label="נווט אלינו באמצעות Waze"
            >
              נווט אלינו עם Waze
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;