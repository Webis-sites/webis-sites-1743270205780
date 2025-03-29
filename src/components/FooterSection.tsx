// FooterSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface NavLinkProps {
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <li>
    <Link 
      href={href}
      className="hover:text-primary transition-colors duration-300 text-lg font-medium"
    >
      {label}
    </Link>
  </li>
);

const FooterSection: React.FC = () => {
  return (
    <footer className="relative w-full mt-16 overflow-hidden text-right" dir="rtl">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90 backdrop-blur-md z-0"></div>
      
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and About Section */}
          <div className="flex flex-col items-end">
            <div className="mb-4 relative h-16 w-16 overflow-hidden rounded-full border border-primary/30 backdrop-blur-sm bg-white/10">
              <Image 
                src="/logo.png" 
                alt="מכון כושר ביתא" 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">מכון כושר ביתא</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              אנחנו מכון כושר מוביל בתחום עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">ניווט מהיר</h3>
            <ul className="space-y-2">
              <NavLink href="/" label="דף הבית" />
              <NavLink href="/about" label="אודות" />
              <NavLink href="/classes" label="שיעורים" />
              <NavLink href="/trainers" label="מאמנים" />
              <NavLink href="/membership" label="חברות" />
              <NavLink href="/schedule" label="לוח זמנים" />
              <NavLink href="/contact" label="צור קשר" />
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">צור קשר</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center justify-end gap-2">
                <span>03-1234567</span>
                <FaPhone className="text-primary" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>info@betagym.co.il</span>
                <FaEnvelope className="text-primary" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>רחוב הספורט 123, תל אביב</span>
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>א׳-ה׳: 06:00-23:00, ו׳: 08:00-16:00, שבת: 08:00-14:00</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">עקבו אחרינו</h3>
            <div className="flex justify-end gap-4 mb-6">
              <SocialLink 
                href="https://facebook.com" 
                icon={<FaFacebook size={24} />} 
                label="פייסבוק"
              />
              <SocialLink 
                href="https://instagram.com" 
                icon={<FaInstagram size={24} />} 
                label="אינסטגרם"
              />
              <SocialLink 
                href="https://twitter.com" 
                icon={<FaTwitter size={24} />} 
                label="טוויטר"
              />
              <SocialLink 
                href="https://whatsapp.com" 
                icon={<FaWhatsapp size={24} />} 
                label="וואטסאפ"
              />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-primary">הירשמו לניוזלטר</h3>
            <div className="relative backdrop-blur-sm bg-white/5 rounded-lg p-1 border border-white/10">
              <form className="flex">
                <input
                  type="email"
                  placeholder="הזינו את האימייל שלכם"
                  className="w-full bg-transparent border-0 text-white placeholder-white/50 px-3 py-2 focus:outline-none focus:ring-0"
                  dir="rtl"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/80 text-black font-bold rounded-md px-4 py-2 transition-colors duration-300"
                >
                  הרשמה
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm order-2 md:order-1">
              © {new Date().getFullYear()} מכון כושר ביתא. כל הזכויות שמורות.
            </div>
            <div className="flex gap-4 text-white/60 text-sm order-1 md:order-2">
              <Link href="/privacy" className="hover:text-primary transition-colors duration-300">מדיניות פרטיות</Link>
              <Link href="/terms" className="hover:text-primary transition-colors duration-300">תנאי שימוש</Link>
              <Link href="/accessibility" className="hover:text-primary transition-colors duration-300">נגישות</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements for glassmorphism effect */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
    </footer>
  );
};

export default FooterSection;