
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      location: "New York, USA",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "Our stay at Kulekhani Resort was nothing short of magical. The views of the river from our suite were breathtaking, and the staff went above and beyond to make our anniversary special. We'll definitely be back!",
      rating: 5
    },
    {
      id: 2,
      name: "Raj Sharma",
      location: "Delhi, India",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
      content: "The perfect blend of luxury and nature. I loved waking up to the sound of the river and birds chirping. The traditional Nepali cuisine was a highlight of our trip. Highly recommend the riverside meditation session!",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Chen",
      location: "Singapore",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "We chose Kulekhani Resort for our company retreat and it exceeded all expectations. The conference facilities were excellent, and the team-building activities organized by the resort were both fun and meaningful.",
      rating: 4
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section 
      className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-resort-stone/20"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto container-padding">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <span className="inline-block text-sm text-resort-river font-medium tracking-wider uppercase border-b-2 border-resort-river">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our <span className="text-gradient">Guests Say</span>
          </h2>
          <p className="text-resort-mountain">
            Don't just take our word for it – hear from our valued guests about their experiences at Kulekhani Resort.
          </p>
        </div>

        {/* Large decorative quote mark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-resort-stone/10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Testimonial Slider */}
        <div 
          className={`max-w-4xl mx-auto relative glass-card rounded-2xl p-8 md:p-12 z-10 transition-all duration-1000 delay-200 transform ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            fill={i < testimonial.rating ? "currentColor" : "none"} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg md:text-xl mb-6 text-resort-forest italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-bold text-resort-forest">{testimonial.name}</h4>
                      <p className="text-sm text-resort-mountain">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-resort-forest hover:bg-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-resort-forest hover:bg-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-resort-forest w-8' : 'bg-resort-mountain/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
