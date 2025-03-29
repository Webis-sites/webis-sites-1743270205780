'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

/**
 * ContactForm - טופס יצירת קשר לחברת מכון כושר ביתא
 * 
 * טופס RTL מותאם לשפה העברית עם וולידציה ועיצוב גלסמורפיזם
 */
const ContactForm: React.FC = () => {
  // ניהול מצב הטופס
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // ניהול שגיאות הטופס
  const [errors, setErrors] = useState<FormErrors>({});
  
  // ניהול מצב שליחת הטופס
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  // טיפול בשינויים בשדות הטופס
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // ניקוי שגיאות בעת עריכה
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // וולידציה של הטופס
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // בדיקת שם
    if (!formData.name.trim()) {
      newErrors.name = 'נא להזין שם מלא';
    }
    
    // בדיקת טלפון
    const phoneRegex = /^0[2-9]\d{7,8}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
    }
    
    // בדיקת אימייל
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה';
    }
    
    // בדיקת הודעה
    if (!formData.message.trim()) {
      newErrors.message = 'נא להזין הודעה';
    } else if (formData.message.length < 10) {
      newErrors.message = 'ההודעה קצרה מדי, אנא הרחב/י';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // טיפול בשליחת הטופס
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // כאן יש להוסיף את הלוגיקה לשליחת הטופס לשרת
        // לדוגמה: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
        
        // סימולציה של שליחה מוצלחת
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubmitSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        
        // איפוס הודעת ההצלחה לאחר 5 שניות
        setTimeout(() => {
          setSubmitSuccess(null);
        }, 5000);
      } catch (error) {
        setSubmitSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="font-sans rtl" dir="rtl">
      <div className="max-w-md mx-auto my-10 p-6 rounded-xl relative overflow-hidden"
           style={{
             background: 'linear-gradient(145deg, rgba(254, 255, 214, 0.7), rgba(252, 255, 46, 0.4))',
             backdropFilter: 'blur(10px)',
             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.4)'
           }}>
        
        {/* אפקט רקע דקורטיבי */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary opacity-30 blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary opacity-30 blur-xl"></div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">צור קשר</h2>
        
        {submitSuccess === true && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 border border-green-200 relative"
               style={{ backdropFilter: 'blur(5px)' }}>
            <p className="text-center">ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.</p>
          </div>
        )}
        
        {submitSuccess === false && (
          <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-800 border border-red-200 relative"
               style={{ backdropFilter: 'blur(5px)' }}>
            <p className="text-center">אירעה שגיאה בשליחת הטופס. אנא נסה שוב מאוחר יותר.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {/* שדה שם */}
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              שם מלא <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200`}
              style={{ backdropFilter: 'blur(5px)' }}
              placeholder="הזן את שמך המלא"
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          
          {/* שדה טלפון */}
          <div className="form-group">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              טלפון <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border ${
                errors.phone ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200`}
              style={{ backdropFilter: 'blur(5px)' }}
              placeholder="הזן את מספר הטלפון שלך"
              aria-required="true"
              aria-invalid={errors.phone ? 'true' : 'false'}
              dir="ltr"
            />
            {errors.phone && (
              <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          
          {/* שדה אימייל */}
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              אימייל <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200`}
              style={{ backdropFilter: 'blur(5px)' }}
              placeholder="הזן את כתובת האימייל שלך"
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              dir="ltr"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          
          {/* שדה הודעה */}
          <div className="form-group">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              הודעה <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border ${
                errors.message ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200`}
              style={{ backdropFilter: 'blur(5px)' }}
              placeholder="כתוב את הודעתך כאן..."
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          
          {/* כפתור שליחה */}
          <div className="form-group">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-bold text-gray-800 bg-primary hover:bg-opacity-90 
                transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] 
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              style={{
                boxShadow: '0 4px 15px rgba(252, 255, 46, 0.4), 0 1px 2px rgba(0, 0, 0, 0.1)',
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  שולח...
                </span>
              ) : (
                'שלח הודעה'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;