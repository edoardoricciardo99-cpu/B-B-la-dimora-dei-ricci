import React from 'react';
import { MapPin, Heart, Star, Clock, Shield, Home } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const WhyChooseUs = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: MapPin,
      titleIt: 'Posizione Strategica',
      titleEn: 'Strategic Location',
      descIt: 'Nel cuore del centro storico di Santo Stefano di Camastra, a pochi passi da tutto',
      descEn: 'In the heart of the historic center of Santo Stefano di Camastra, steps from everything',
    },
    {
      icon: Heart,
      titleIt: 'Gestione Familiare',
      titleEn: 'Family Management',
      descIt: 'Accoglienza calorosa e personalizzata per rendere il vostro soggiorno indimenticabile',
      descEn: 'Warm and personalized hospitality to make your stay unforgettable',
    },
    {
      icon: Star,
      titleIt: '5 Stelle su Google',
      titleEn: '5 Stars on Google',
      descIt: 'Tante recensioni eccellenti dai nostri ospiti soddisfatti',
      descEn: 'Many excellent reviews from our satisfied guests',
    },
    {
      icon: Clock,
      titleIt: 'Orari Flessibili',
      titleEn: 'Flexible Hours',
      descIt: 'Check-in personalizzato e orari adattabili alle vostre esigenze',
      descEn: 'Personalized check-in and hours adaptable to your needs',
    },
    {
      icon: Shield,
      titleIt: 'Prezzo Migliore',
      titleEn: 'Best Price',
      descIt: 'Prenotazione diretta al miglior prezzo, senza commissioni di terze parti',
      descEn: 'Direct booking at the best price, without third-party commissions',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            {language === 'it' ? 'Perché Scegliere La Dimora dei Ricci' : 'Why Choose La Dimora dei Ricci'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'it'
              ? 'Scopri cosa rende unica la nostra struttura e perché i nostri ospiti ci scelgono'
              : 'Discover what makes our property unique and why our guests choose us'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-amber-600" />
              </div>

              <h3 className="text-2xl font-bold text-amber-800 mb-3">
                {language === 'it' ? benefit.titleIt : benefit.titleEn}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {language === 'it' ? benefit.descIt : benefit.descEn}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
            <p className="text-2xl font-bold text-amber-800 mb-4">
              {language === 'it'
                ? 'Oltre 100 ospiti soddisfatti nel 2024'
                : 'Over 100 satisfied guests in 2024'}
            </p>
            <p className="text-gray-600">
              {language === 'it'
                ? 'Unisciti alla nostra famiglia di viaggiatori felici'
                : 'Join our family of happy travelers'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
