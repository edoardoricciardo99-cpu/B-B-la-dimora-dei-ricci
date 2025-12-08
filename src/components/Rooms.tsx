import React, { useEffect, useState } from 'react';
import { Users, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';

interface RoomData {
  id: number;
  name: string;
  description: string;
  image: string;
  gallery: string[];
  capacity: string | number;
  price?: string;
  amenities: string[];
}

const staticRooms: RoomData[] = [
  {
    id: 1,
    name: "Camera Tulipano",
    description: "Camera doppia con possibilità di aggiungere un terzo letto per maggiore flessibilità",
    image: "/047.jpg",
    gallery: [],
    capacity: "2+1",
    amenities: ["🛌 Letto matrimoniale", "➕ Terzo letto aggiungibile", "🛁 Bagno privato", "📶 Wi-Fi gratuito", "📺 TV a schermo piatto", "❄️ Climatizzata", "🔑 Chiave privata", "☕ Uso cucina comune (da specificare in prenotazione)"]
  },
  {
    id: 2,
    name: "Camera Ortensia",
    description: "Camera con 3 posti letto e terrazzo privato. Ideale per famiglie e animali di piccola taglia",
    image: "/067.jpg",
    gallery: [],
    capacity: 3,
    amenities: ["👥 3 posti letto", "🌺 Ampio terrazzo privato", "🐾 Ideale per animali", "🛁 Bagno privato", "📶 Wi-Fi gratuito", "📺 TV a schermo piatto", "❄️ Climatizzata", "🔑 Chiave privata", "☕ Uso cucina comune (da specificare in prenotazione)"]
  },
  {
    id: 3,
    name: "Camera Papavero",
    description: "Accogliente camera doppia con due posti letto, perfetta per coppie o amici",
    image: null,
    gallery: [],
    capacity: 2,
    amenities: ["👥 2 posti letto", "🛌 Camera doppia", "🛁 Bagno privato", "📶 Wi-Fi gratuito", "📺 TV a schermo piatto", "❄️ Climatizzata", "🔑 Chiave privata", "☕ Uso cucina comune (da specificare in prenotazione)"]
  },
  {
    id: 4,
    name: "Camera Glicine",
    description: "Camera spaziosa con 4 posti letto, letto a castello e cucina comune inclusa. Ideale per famiglie",
    image: null,
    gallery: [],
    capacity: 4,
    amenities: ["👥 4 posti letto", "🛌 Letto a castello", "☕ Uso cucina comune (incluso)", "🛁 Bagno privato", "📶 Wi-Fi gratuito", "📺 TV a schermo piatto", "❄️ Climatizzata", "🔑 Chiave privata"]
  },
  {
    id: 5,
    name: "Cucina Comune - Primo Piano",
    description: "Spazio condiviso completamente attrezzato per tutti gli ospiti. Ogni camera ha la propria chiave, ma la porta della cucina va sempre lasciata aperta per l'accesso condiviso 24/7",
    image: "/030.jpg",
    gallery: [],
    capacity: "Condivisa",
    price: "Inclusa con Glicine",
    amenities: [
      "☕ Macchina del caffè a capsule",
      "🧊 Frigobar per conservare cibi",
      "☕ Bollittore elettrico",
      "🍽️ Lavastoviglie",
      "🍔 Forno a microonde",
      "🪑 Comodi tavolini per rilassarsi",
      "🕒 Accesso 24/7",
      "🚪 Porta sempre aperta",
      "🔑 Chiave dedicata",
      "🏠 Stesso ingresso di Tulipano e Ortensia"
    ]
  }
];


const Rooms = () => {
  const { t } = useLanguage();
  const [rooms, setRooms] = useState<RoomData[]>(staticRooms);
  const [selectedRoom, setSelectedRoom] = React.useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  useEffect(() => {
    loadRoomPhotos();
  }, []);

  const loadRoomPhotos = async () => {
    const { data: photos } = await supabase
      .from('photos')
      .select('*')
      .eq('category', 'rooms')
      .order('created_at', { ascending: true });

    if (photos && photos.length > 0) {
      const updatedRooms = staticRooms.map(room => {
        if (room.name === "Camera Tulipano") {
          const tulipanoPhotos = photos
            .filter(p => p.caption === "Stanza Tulipano")
            .map(p => p.url);

          const existingPhotos = ["/047.jpg", "/048.jpg", "/049.jpg", "/050.jpg", "/057.jpg", "/047 copy.jpg"];
          const allPhotos = [...existingPhotos, ...tulipanoPhotos];

          return {
            ...room,
            gallery: allPhotos,
            image: existingPhotos[0]
          };
        }
        if (room.name === "Camera Ortensia") {
          const ortensiaPhotos = photos
            .filter(p => p.caption === "Stanza Ortensia")
            .map(p => p.url);

          const existingPhotos = ["/067.jpg", "/086.jpg"];
          const allPhotos = [...existingPhotos, ...ortensiaPhotos];

          return {
            ...room,
            gallery: allPhotos,
            image: existingPhotos[0]
          };
        }
        if (room.name === "Camera Papavero") {
          const papaveroPhotos = photos
            .filter(p => p.caption === "Stanza Papavero")
            .map(p => p.url);

          return {
            ...room,
            gallery: papaveroPhotos.length > 0 ? papaveroPhotos : [],
            image: papaveroPhotos[0] || room.image
          };
        }
        if (room.name === "Camera Glicine") {
          const glicinePhotos = photos
            .filter(p => p.caption === "Stanza Glicine")
            .map(p => p.url);

          return {
            ...room,
            gallery: glicinePhotos.length > 0 ? glicinePhotos : [],
            image: glicinePhotos[0] || room.image
          };
        }
        if (room.name === "Cucina Comune - Primo Piano") {
          return {
            ...room,
            gallery: ["/030.jpg", "/032.jpg", "/034.jpg", "/040.jpg", "/041.jpg", "/089.jpg"]
          };
        }
        return room;
      });

      setRooms(updatedRooms);
    } else {
      const updatedRooms = staticRooms.map(room => {
        if (room.name === "Camera Tulipano") {
          return {
            ...room,
            gallery: ["/047.jpg", "/048.jpg", "/049.jpg", "/050.jpg", "/057.jpg", "/047 copy.jpg"]
          };
        }
        if (room.name === "Camera Ortensia") {
          return {
            ...room,
            gallery: ["/067.jpg", "/086.jpg"]
          };
        }
        if (room.name === "Cucina Comune - Primo Piano") {
          return {
            ...room,
            gallery: ["/030.jpg", "/032.jpg", "/034.jpg", "/040.jpg", "/041.jpg", "/089.jpg"]
          };
        }
        return room;
      });

      setRooms(updatedRooms);
    }
  };

  const openGallery = (roomId: number, imageIndex: number = 0) => {
    setSelectedRoom(roomId);
    setSelectedImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setSelectedRoom(null);
    setSelectedImageIndex(0);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedRoom === null) return;
    
    const room = rooms.find(r => r.id === selectedRoom);
    if (!room?.gallery) return;
    
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev > 0 ? prev - 1 : room.gallery!.length - 1);
    } else {
      setSelectedImageIndex(prev => prev < room.gallery!.length - 1 ? prev + 1 : 0);
    }
  };

  const selectedRoomData = selectedRoom ? rooms.find(r => r.id === selectedRoom) : null;

  return (
    <section id="camere" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            {t.rooms.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-3">
            {t.rooms.subtitle}
          </p>
          <p className="text-lg text-amber-700 font-medium max-w-2xl mx-auto">
            {t.rooms.seasonalPricing}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openGallery(room.id)}
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700">{room.capacity}</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 font-medium bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    📸 Visualizza Gallery
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">
                  {room.name}
                </h3>
                {room.price && room.id !== 5 && (
                  <div className="bg-amber-50 rounded-lg px-3 py-2 mb-3">
                    <p className="text-sm font-medium text-amber-900">{room.price}</p>
                  </div>
                )}
                <p className="text-gray-600 mb-4">
                  {room.description}
                </p>

                <div className="space-y-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  {room.id === 5 ? 'Spazio Comune' : 'Prenota ora'}
                </button>
                
                {room.gallery && room.gallery.length > 1 && (
                  <div className="mt-4">
                    <p className="text-center text-sm text-gray-500 mb-2">
                      {room.gallery.length} foto disponibili
                    </p>
                    <div className="flex space-x-2 justify-center">
                      {room.gallery.slice(0, 3).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${room.name} - ${idx + 1}`}
                          className="w-16 h-12 object-cover rounded cursor-pointer hover:scale-110 transition-transform duration-200"
                          onClick={() => openGallery(room.id, idx)}
                        />
                      ))}
                      {room.gallery.length > 3 && (
                        <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600 cursor-pointer hover:bg-gray-300 transition-colors"
                             onClick={() => openGallery(room.id)}>
                          +{room.gallery.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        {selectedRoom && selectedRoomData && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="w-8 h-8" />
            </button>

            {(selectedRoomData?.gallery?.length || 0) > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {selectedRoomData?.gallery && (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedRoomData.gallery[selectedImageIndex]}
                  alt={`${selectedRoomData.name} - ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-4 px-4 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{selectedRoomData.name}</h3>
                  <p className="text-sm mb-2">{selectedRoomData.description}</p>
                  <div className="flex justify-center space-x-2">
                    {selectedRoomData.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          idx === selectedImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs mt-2">
                    {selectedImageIndex + 1} di {selectedRoomData.gallery.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;