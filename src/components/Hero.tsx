import React from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const images = [
    {
      src: "/088.jpg",
      alt: "La Dimora dei Ricci - Facciata principale di giorno"
    },
    {
      src: "/090.jpg", 
      alt: "La Dimora dei Ricci - Vista notturna con illuminazione"
    },
    {
      src: "/087.jpg",
      alt: "La Dimora dei Ricci - Targa identificativa con logo"
    },
    {
      src: "/091.jpg",
      alt: "La Dimora dei Ricci - Ingresso principale Via Brofferio 12"
    },
    {
      src: "/LA DIMORA DEI RICCI.jpg",
      alt: "La Dimora dei Ricci - Logo ufficiale"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToNext = () => {
    const element = document.getElementById('rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carosello Immagini */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${image.src}")`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Controlli Carosello */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicatori */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight drop-shadow-2xl">
          La Dimora dei Ricci
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl md:text-3xl mb-12 font-light tracking-wide leading-relaxed drop-shadow-lg">
          Un angolo di Sicilia tra cielo, mare e tradizione
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToNext}
            className="bg-white hover:bg-amber-50 text-amber-700 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Scopri le Nostre Camere
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;