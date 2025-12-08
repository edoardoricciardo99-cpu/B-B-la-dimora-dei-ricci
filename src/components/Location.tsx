import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Location = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-10 h-10 text-amber-600 mr-3" />
            <h2 className="text-4xl font-bold text-slate-800">{t.location.title}</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.location.subtitle}
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.4347899999997!2d14.3594!3d38.0181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13161f1f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sSanto%20Stefano%20di%20Camastra%20ME!5e0!3m2!1sit!2sit!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Dimora dei Ricci Location"
          ></iframe>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-slate-800 mb-2">{t.location.fromPalermo}</h3>
            <p className="text-slate-600">{t.location.palermoDuration}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-slate-800 mb-2">{t.location.fromMessina}</h3>
            <p className="text-slate-600">{t.location.messinaDuration}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-slate-800 mb-2">{t.location.byTrain}</h3>
            <p className="text-slate-600">{t.location.trainInfo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
