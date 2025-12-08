import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Phone, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const StickyBookingBar = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible || isMinimized) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-600 to-orange-600 shadow-2xl transform transition-transform duration-300 animate-slide-up">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 gap-4">
          <div className="hidden md:block text-white">
            <h3 className="font-bold text-lg">
              {language === 'it' ? 'Prenota il tuo soggiorno' : 'Book your stay'}
            </h3>
            <p className="text-sm text-amber-100">
              {language === 'it'
                ? 'Miglior prezzo garantito • Risposta immediata'
                : 'Best price guaranteed • Immediate response'}
            </p>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href="https://wa.me/393270084357?text=Ciao%2C%20vorrei%20prenotare%20alla%20Dimora%20dei%20Ricci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <a
              href="tel:+393270084357"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-amber-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">
                {language === 'it' ? 'Chiama' : 'Call'}
              </span>
            </a>

            <button
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">
                {language === 'it' ? 'Prenota Ora' : 'Book Now'}
              </span>
            </button>

            <button
              onClick={() => setIsMinimized(true)}
              className="text-white hover:text-amber-200 transition-colors p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingBar;
