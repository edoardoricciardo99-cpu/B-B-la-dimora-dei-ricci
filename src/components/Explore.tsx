import React from 'react';
import { MapPin, Camera, Waves, Mountain, Church, Landmark, Palette } from 'lucide-react';

const attractions = [
  {
    icon: Waves,
    title: "Cefalù",
    distance: "25 minuti",
    description: "Splendida cittadina normanna con spiagge dorate e il famoso Duomo patrimonio UNESCO"
  },
  {
    icon: Mountain,
    title: "Parco dei Nebrodi",
    distance: "A pochi km",
    description: "Il più grande parco della Sicilia con laghi incantati (Maulazzo, Biviere), vette panoramiche da Monte Soro alle Rocche del Crasto, faggete secolari e cavalli allo stato brado. Ideale tutto l'anno: primavera per il risveglio, estate per il fresco, autunno per il foliage, inverno per la neve"
  },
  {
    icon: Church,
    title: "Santuario Letto Santo",
    distance: "11 km",
    description: "Suggestivo santuario sul Monte Santa Croce con vista panoramica"
  },
  {
    icon: Camera,
    title: "Botteghe Ceramiche",
    distance: "A piedi",
    description: "Tradizionali botteghe artigiane della ceramica stefanese"
  },
  {
    icon: Landmark,
    title: "Tindari",
    distance: "40 minuti",
    description: "Santuario della Madonna Nera e Teatro Greco con vista sui laghetti di Marinello"
  },
  {
    icon: Palette,
    title: "Fiumara d'Arte",
    distance: "Nelle vicinanze",
    description: "Parco sculture di Antonio Presti lungo il fiume Tusa: 14 monumentali installazioni d'arte contemporanea integrate nel paesaggio naturale. Un museo a cielo aperto unico al mondo"
  },
  {
    icon: MapPin,
    title: "Villa Margi",
    distance: "3 km",
    description: "Località marina in piena rivalutazione, ideale per passeggiate sul lungomare"
  }
];

const Explore = () => {
  return (
    <section id="attrazioni" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Esplora il Territorio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Santo Stefano di Camastra è il punto di partenza ideale per scoprire
            le meraviglie della costa tirrenica e dell'entroterra siciliano
          </p>
        </div>

        <div className="mb-12 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/ho4a0643_3.jpg"
            alt="Terrazza panoramica con ceramiche siciliane e vista mare"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full mb-4">
                <attraction.icon className="w-7 h-7 text-amber-600" />
              </div>

              <h3 className="text-xl font-bold text-amber-800 mb-2">
                {attraction.title}
              </h3>

              <div className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {attraction.distance}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {attraction.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-amber-800 mb-3">
            Tour Organizzati con Azienda Colonna
          </h3>
          <p className="text-gray-700 mb-4">
            Offriamo tour esclusivi a Villa Margi e degustazioni di olio extravergine d'oliva
            con il Dott. Pippo Ricciardo, esperto oleario.
          </p>
          <p className="text-sm text-gray-600">
            Possibilità di visitare le botteghe dei ceramisti stefanesi per scoprire l'antica arte della ceramica
          </p>
        </div>
      </div>
    </section>
  );
};

export default Explore;
