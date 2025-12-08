import React from 'react';
import { Heart, Home, Star, Palette } from 'lucide-react';

const FamilyStory = () => {
  return (
    <section id="la-nostra-storia" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
              La Nostra Storia
            </h2>
            <p className="text-xl text-gray-600">
              Una casa di famiglia trasformata in un B&B di charme
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Home className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Dagli anni '70</h3>
                <p className="text-gray-600">Studio del Geometra Vitanza, punto di riferimento per la comunità stefanese</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">La Visione</h3>
                <p className="text-gray-600">Elisabetta ha ristrutturato la casa di famiglia per valorizzare il centro storico</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Dal 2021</h3>
                <p className="text-gray-600">Nasce La Dimora dei Ricci: tradizione e comfort moderno</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 text-center">
              <Palette className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-amber-800 mb-2">Santo Stefano di Camastra</h4>
              <p className="text-gray-700">
                Borgo ricostruito nel <strong>1682</strong> dal Duca di Camastra, celebre per la tradizione ceramica
                premiata a Firenze e Milano, e citata da Pirandello.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyStory;