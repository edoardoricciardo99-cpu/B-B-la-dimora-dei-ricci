import React from 'react';
import { Calendar, MapPin, Utensils, Mountain, Camera } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Events = () => {
  const { t } = useLanguage();

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">
          {t.events.title}
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          {t.events.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="w-8 h-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">{t.events.annualEvents}</h3>
            </div>
            <div className="space-y-4">
              {t.events.eventsList.map((event, index) => (
                <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
                  <h4 className="font-semibold text-slate-800">{event.name}</h4>
                  <p className="text-sm text-slate-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Camera className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">{t.events.viewpoints}</h3>
            </div>
            <div className="space-y-4">
              {t.events.viewpointsList.map((viewpoint, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-slate-800">{viewpoint.name}</h4>
                  <p className="text-sm text-slate-600">{viewpoint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Utensils className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">{t.events.nearbyRestaurants}</h3>
            </div>
            <div className="space-y-3">
              {t.events.restaurantsList.map((restaurant, index) => (
                <div key={index} className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">{restaurant.name}</h4>
                    <p className="text-sm text-slate-600">{restaurant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Mountain className="w-8 h-8 text-slate-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">{t.events.yearRoundAttractions}</h3>
            </div>
            <div className="space-y-3">
              {t.events.attractionsList.map((attraction, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">{attraction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
