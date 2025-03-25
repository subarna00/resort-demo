
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Set page title
    document.title = 'Gallery - Kulekhani Resort';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1604014056132-0d311b053ae1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Luxury bath with mountain view",
      category: "rooms"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Traditional Nepali cuisine",
      category: "dining"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      alt: "Yoga and meditation platform",
      category: "activities"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Mountain trails for hiking",
      category: "nature"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Elegant lobby with local artwork",
      category: "interiors"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Evening entertainment at the resort",
      category: "activities"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'nature', name: 'Nature & Views' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'dining', name: 'Dining' },
    { id: 'spa', name: 'Spa & Wellness' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'activities', name: 'Activities' },
    { id: 'interiors', name: 'Interiors' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Gallery of Kulekhani Resort" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <span className="inline-block py-1 px-3 mb-4 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full animate-fade-in">
              Visual Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Our Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in">
              Explore the beauty and luxury of Kulekhani Resort through our collection of stunning images
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="mb-12 overflow-x-auto py-2">
            <div className="flex flex-nowrap gap-2 justify-center min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-resort-forest text-white shadow-md'
                      : 'bg-resort-stone/50 text-resort-mountain hover:bg-resort-stone'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="relative group cursor-pointer h-64"
                  onClick={() => openLightbox(image.src)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-resort-forest/0 group-hover:bg-resort-forest/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                      <span className="bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full text-sm font-medium text-resort-forest">
                        View Image
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-resort-mountain">{image.alt}</p>
                  <p className="text-xs text-resort-mountain/70 mt-1 capitalize">
                    {image.category.replace('-', ' ')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-resort-stone" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-resort-forest">No images found</h3>
              <p className="mt-2 text-resort-mountain">
                There are no images in this category yet. Please check back later or select another category.
              </p>
            </div>
          )}
        </section>
      </main>

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
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
