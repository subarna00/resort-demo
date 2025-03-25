
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Gallery = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Infinity pool overlooking the mountains"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Luxurious spa treatment room"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Riverside dining experience"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Suite interior with mountain view"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Outdoor yoga platform at sunrise"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1470290378174-847f844f9785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Himalayan mountains seen from resort"
    }
  ];

  return (
    <section className="section-padding bg-white" id="gallery">
      <div className="container mx-auto container-padding">
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          ref={titleRef as React.RefObject<HTMLDivElement>}
        >
          <div className={`transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <span className="inline-block text-sm text-resort-river font-medium tracking-wider uppercase border-b-2 border-resort-river">Our Gallery</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Experience <span className="text-gradient">Visual Journey</span>
            </h2>
            <p className="text-resort-mountain">
              Take a glimpse into the extraordinary experiences that await you at Kulekhani Resort.
            </p>
          </div>
        </div>

        <div 
          ref={galleryRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 delay-200 transform ${
            galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`relative rounded-lg overflow-hidden shadow-md transition-all duration-500 delay-${index * 100} transform ${
                  galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden group">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
