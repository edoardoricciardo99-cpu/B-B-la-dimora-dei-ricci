import React, { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const BookingBenefitsModal = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenBenefitsModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenBenefitsModal', 'true');
  };

  const scrollToBooking = () => {
    handleClose();
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  const content = {
    it: {
      title: 'Prenotare sul nostro sito',
      subtitle: 'conviene!',
      description: 'Prenota direttamente su questo sito e ottieni i seguenti',
      benefits: 'vantaggi:',
      benefit1: 'Sconto del 8%',
      benefit1desc: "sull'importo della tua prenotazione",
      benefit1desc2: 'rispetto alle piattaforme OTA',
      benefit2: 'Assistenza personalizzata',
      benefit2desc: 'direttamente con i proprietari',
      benefit3: 'Flessibilità nelle date',
      benefit3desc: 'e nelle richieste speciali',
      benefit4: 'Miglior prezzo garantito',
      benefit4desc: 'senza commissioni di terzi',
      cta: 'Prenota Ora',
    },
    en: {
      title: 'Booking on our website',
      subtitle: 'is better!',
      description: 'Book directly on this site and get the following',
      benefits: 'benefits:',
      benefit1: '8% Discount',
      benefit1desc: 'on your booking total',
      benefit1desc2: 'compared to OTA platforms',
      benefit2: 'Personalized assistance',
      benefit2desc: 'directly with the owners',
      benefit3: 'Flexibility with dates',
      benefit3desc: 'and special requests',
      benefit4: 'Best price guaranteed',
      benefit4desc: 'no third-party fees',
      cta: 'Book Now',
    },
  };

  const t = content[language];

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden animate-scale-in">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-amber-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <img
                src="/logo.jpeg"
                alt="La Dimora dei Ricci"
                className="h-16 mx-auto mb-3 rounded-lg"
              />
              <h2 className="text-3xl font-bold text-white">
                {t.title} <span className="text-yellow-200">{t.subtitle}</span>
              </h2>
            </div>
          </div>

          <div className="px-8 py-8">
            <p className="text-center text-gray-700 text-lg mb-6">
              {t.description} <span className="font-bold text-amber-600">{t.benefits}</span>
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 bg-green-50 p-4 rounded-xl border-2 border-green-200">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-green-800 text-xl">
                    {t.benefit1}
                  </p>
                  <p className="text-green-700">
                    {t.benefit1desc} <span className="font-semibold italic">{t.benefit1desc2}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-amber-50 p-4 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-amber-800 text-lg">
                    {t.benefit2}
                  </p>
                  <p className="text-amber-700 text-sm">{t.benefit2desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-amber-50 p-4 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-amber-800 text-lg">
                    {t.benefit3}
                  </p>
                  <p className="text-amber-700 text-sm">{t.benefit3desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-amber-50 p-4 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-amber-800 text-lg">
                    {t.benefit4}
                  </p>
                  <p className="text-amber-700 text-sm">{t.benefit4desc}</p>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToBooking}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t.cta}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default BookingBenefitsModal;
