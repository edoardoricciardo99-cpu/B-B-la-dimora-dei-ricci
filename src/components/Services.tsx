import React from 'react';
import { Coffee, Wifi, Car, Utensils, PawPrint, Shirt } from 'lucide-react';

const services = [
  {
    icon: Coffee,
    title: "Colazione Genuina",
    description: "Colazione su richiesta. Disponibile anche l'opzione per celiaci su prenotazione anticipata"
  },
  {
    icon: Utensils,
    title: "Cucina Comune",
    description: "Cucina completamente attrezzata al primo piano: macchina del caffè a capsule, frigobar, bollittore elettrico, lavastoviglie, forno a microonde e comodi tavolini per rilassarsi"
  },
  {
    icon: Wifi,
    title: "Wi-Fi Gratuito",
    description: "Connessione internet veloce e gratuita in tutte le aree della struttura"
  },
  {
    icon: Car,
    title: "Parcheggio Disponibile",
    description: "Parcheggio più vicino in Piazza Rosario a soli 20 metri dalla struttura. Alternativa: parcheggio gratuito di fronte al Municipio. Offriamo diverse soluzioni per il parcheggio privato in caso di necessità: auto, moto, scooter e altri veicoli"
  },
  {
    icon: PawPrint,
    title: "Animali Ammessi",
    description: "Animali di piccola taglia ammessi. Per chi viaggia con il cane, consigliamo la Camera Ortensia che dispone di un ampio terrazzo privato"
  },
  {
    icon: Car,
    title: "Collegamento Ferroviario",
    description: "Stazione ferroviaria a 500 metri. Navetta comunale gratuita nel periodo estivo (fino al 15 ottobre) andata e ritorno dalla stazione a Piazza Matteotti. Piazza Matteotti dista solo 3 minuti a piedi dalla Dimora dei Ricci"
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutto quello che serve per rendere indimenticabile il vostro soggiorno
            nella nostra dimora immersa nella tranquillità della campagna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl hover:bg-stone-50 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <service.icon className="w-10 h-10 text-amber-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-amber-800 mb-4">
              Nel Cuore del Centro Storico
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              Via Brofferio 12, a metà di Corso Umberto. Chiesa Madre a 20m, belvederi panoramici a pochi passi. Cefalù a 25 minuti.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Dove Mangiare</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Chi Ciauru</strong> - Di fronte</li>
                  <li>• <strong>Da Giannino</strong> - A pochi passi</li>
                  <li>• <strong>Pizzeria Rosso Divino</strong></li>
                  <li>• <strong>Bar Paradise</strong></li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Nelle Vicinanze</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Palazzo Trabia</li>
                  <li>• Biblioteca comunale</li>
                  <li>• Farmacia Mangano</li>
                  <li>• Santuario Letto Santo (11km)</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Esperienze</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Degustazioni olio EVO</li>
                  <li>• Tour Villa Margi (3km)</li>
                  <li>• Botteghe ceramisti</li>
                  <li>• Cucina comune attrezzata</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;