
import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Scenic waterfall view near the resort",
      category: "nature"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80",
      alt: "Luxurious resort bedroom with mountain view",
      category: "rooms"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Gourmet dining experience",
      category: "dining"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Resort spa treatment room",
      category: "spa"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Sunrise view from resort",
      category: "nature"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1596178060875-a8620e8d0a71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80",
      alt: "Outdoor swimming pool with mountain backdrop",
      category: "amenities"
    }
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="section-padding" id="gallery">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm text-resort-river font-medium tracking-wider uppercase border-b-2 border-resort-river">Our Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Experience <span className="text-gradient">Visual Journey</span>
          </h2>
          <p className="text-resort-mountain">
            Explore our resort through stunning images that capture the essence of luxury and nature in harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                index === 3 ? 'sm:col-span-2' : ''
              }`}
            >
              <div 
                className="relative group cursor-pointer h-64 sm:h-72"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-resort-forest/0 group-hover:bg-resort-forest/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                    <span className="bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full text-sm font-medium text-resort-forest">
                      View Image
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-resort-mountain">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
            <span className="sr-only">Close</span>
          </button>
          <div className="max-w-4xl max-h-[90vh] p-2" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
