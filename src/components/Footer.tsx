import React from 'react';
import { Home, Phone, Mail, MapPin, Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.jpeg" 
                alt="La Dimora dei Ricci Logo" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold">la dimora dei ricci</h3>
            </div>
            <p className="text-amber-100 mb-4">
              In Via Brofferio n.12, in posizione strategica a metà di Corso Umberto, nel centro storico
              di Santo Stefano di Camastra. A pochi passi dai belvederi panoramici, a 500m dalla stazione,
              a 3km da Villa Margi e a 25 minuti da Cefalù.
            </p>
            <p className="text-amber-200 text-sm">
              Bed & Breakfast • Dal 2020
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-300">Contatti Rapidi</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300" />
                <div className="text-amber-100">
                  <div>327 008 4357</div>
                  <div>328 642 1509</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100">ladimoradeiricci@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100">Via Brofferio n.12, Santo Stefano di Camastra<br />
                <small>Parcheggio Piazza Rosario a 20m • Stazione 500m + navetta estiva</small></span>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/393270084357?text=Ciao%2C%20vorrei%20avere%20informazioni%20sulla%20Dimora%20dei%20Ricci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-300">Orari</h4>
            <div className="space-y-2 text-amber-100">
              <p className="font-semibold">Periodo Invernale:</p>
              <p><strong>Check-in:</strong> 15:00 - 21:00</p>
              <p><strong>Check-out:</strong> 22:00</p>
              <p className="font-semibold mt-3">Periodo Estivo:</p>
              <p><strong>Check-in:</strong> 15:00</p>
              <p><strong>Check-out:</strong> 23:00</p>
              <p className="text-sm text-amber-200 mt-3">
                Orari flessibili su richiesta
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Trova la Dimora dei Ricci anche su:</h4>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <a
                href="https://www.booking.com/hotel/it/la-dimora-dei-ricci-santo-stefano-di-camastra12.it.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group transition-transform hover:scale-110"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg viewBox="0 0 512 512" className="w-full h-full">
                    <rect fill="#003580" width="512" height="512"/>
                    <path fill="#fff" d="M130.3 185.4h35.6c17.8 0 28.5 9 28.5 24.5 0 11.5-6.7 19-17.2 22.5v.5c12.5 2.5 20.7 11 20.7 24.5 0 17-12 27-32.1 27h-35.5v-99zm17.5 14.5v26h15c9 0 14-4.5 14-13s-5-13-14-13h-15zm0 40.5v29.5h17c9.5 0 15-5 15-14.5s-5.5-15-15-15h-17zm70.7-40.5c0-9 7.2-14.5 16.7-14.5s16.7 5.5 16.7 14.5-7.2 14.5-16.7 14.5-16.7-5.5-16.7-14.5zm1.5 25h30v60h-30v-60zm38.5 0h29v8.5h.5c4-6 11.5-10 20.5-10 16 0 25.5 9.5 25.5 26.5v35h-29v-30c0-8-3.5-12.5-10.5-12.5s-11.5 4.5-11.5 13.5v29h-29v-60zm88 0h15.5v-20h29v20h18.5v12.5h-18.5v30c0 6 2.5 8.5 8.5 8.5h10v12h-14c-15 0-22.5-7-22.5-21v-29.5h-15.5v-12.5zm71 30c0-18.5 14-32 33.5-32s33.5 13.5 33.5 32-14 32-33.5 32-33.5-13.5-33.5-32zm29.5 0c0 10-4.5 17.5-13 17.5s-13-7.5-13-17.5 4.5-17.5 13-17.5 13 7.5 13 17.5zm50.5-30h29v60h-29v-60zm0-8.5v-21.5h29v21.5h-29z"/>
                    <path fill="#fff" d="M130 320h252v12H130z"/>
                    <text x="256" y="355" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#fff" text-anchor="middle">.com</text>
                  </svg>
                </div>
                <span className="text-amber-100 text-sm font-medium">Booking.com</span>
              </a>

              <a
                href="https://www.airbnb.it/rooms/1498378637837137672"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group transition-transform hover:scale-110"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-3 shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg viewBox="0 0 1000 1000" className="w-full h-full">
                    <path fill="#FF5A5F" d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm-907.3-15c-14-19-23-44-27-71-15-115 81-196 176-196 60 0 114 29 163 73-38 52-65 97-79 135-12 29-19 57-20 84-6 94 39 164 103 180 20 5 40 7 59 7 62 0 121-23 177-69 42 58 98 113 159 138 30 13 60 19 89 19 103 0 181-70 187-168 3-36-1-69-12-99-1-4-3-9-5-14l-1-1c-3-7-7-17-13-30l-12-27-1-2c-55-119.1-121.1-252.1-197.1-398.2l-2-4-23-44c-11-20-21-37-32-51C781.1 75.1 744.2 44 695.2 44c-35 0-67 15-87 40-7 9-13 19-20 31l-20 42-2 4c-76 146.1-143.1 282.1-198.1 400.2l-2 5c-16 36-26 60-31 74-17 45-23 87-18 126 16 125 115 201 235 184 36-5 71-20 103-43 47-33 103-94 168-185z"/>
                  </svg>
                </div>
                <span className="text-amber-100 text-sm font-medium">Airbnb</span>
              </a>

              <a
                href="https://www.google.com/search?q=la+dimora+dei+ricci"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group transition-transform hover:scale-110"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-3 shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg viewBox="0 0 272 92" className="w-full h-full">
                    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
                  </svg>
                </div>
                <span className="text-amber-100 text-sm font-medium">Google</span>
              </a>
            </div>
          </div>

          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2 text-amber-100">
              <span>© 2025 la dimora dei ricci B&B • Fatto con</span>
              <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
              <span>per i nostri ospiti</span>
            </div>
            <div className="text-amber-200 text-sm">
              <span className="font-medium">CIR:</span> 19083091C110715 • <span className="font-medium">CIN:</span> IT083091C18EYCBOM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;