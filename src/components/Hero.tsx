
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Discover Paradise on Earth',
      subtitle: 'Experience tranquility at Kulekhani River'
    },
    {
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Luxury Meets Nature',
      subtitle: 'Escape to the breathtaking hills of Nepal'
    },
    {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Unforgettable Experiences',
      subtitle: 'Create memories that last a lifetime'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block py-1 px-3 mb-4 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full animate-fade-in">
            Welcome to Luxury
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-500">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 transition-all duration-500 delay-100">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 transition-all duration-500 delay-200">
            <Link
              to="/booking"
              className="button-primary flex items-center justify-center gap-2 group"
            >
              Book Your Stay
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="button-secondary"
            >
              Explore Resort
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
