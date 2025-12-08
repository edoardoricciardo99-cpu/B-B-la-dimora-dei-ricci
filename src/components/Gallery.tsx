import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "/002.jpg", alt: "", category: "camere" },
  { id: 2, src: "/003.jpg", alt: "", category: "camere" },
  { id: 3, src: "/021.jpg", alt: "", category: "esterni" },
  { id: 4, src: "/032.jpg", alt: "", category: "esterni" },
  { id: 5, src: "/039.jpg", alt: "", category: "camere" },
  { id: 6, src: "/053.jpg", alt: "", category: "esterni" },
  { id: 7, src: "/066.jpg", alt: "", category: "esterni" },
  { id: 8, src: "/067.jpg", alt: "", category: "esterni" },
  { id: 9, src: "/084.jpg", alt: "", category: "camere" },
  { id: 10, src: "/HO4A0454 .jpg", alt: "", category: "esterni" }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="galleria" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Galleria Fotografica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Scoprite la bellezza della nostra dimora e dei tesori che circondano Santo Stefano di Camastra
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'camere', 'interni', 'esterni'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-amber-600 hover:bg-amber-50 border border-amber-200'
                }`}
              >
                {category === 'all' ? 'Tutte' :
                 category === 'camere' ? 'Camere' :
                 category === 'interni' ? 'Interni' : 'Esterni'}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 break-inside-avoid mb-4"
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  height: index % 3 === 0 ? '280px' : index % 2 === 0 ? '320px' : '240px'
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;