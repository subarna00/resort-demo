
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Rooms = () => {
  const [activeRoom, setActiveRoom] = useState(0);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });

  const rooms = [
    {
      id: 1,
      name: "Riverside Suite",
      description: "Wake up to the gentle sounds of the Kulekhani River with panoramic views from your private balcony.",
      price: "$240",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["River View", "King Bed", "Spa Bathroom", "Mini Bar", "Room Service"]
    },
    {
      id: 2,
      name: "Mountain View Deluxe",
      description: "Immerse yourself in the majestic Himalayan landscape with floor-to-ceiling windows framing the mountain range.",
      price: "$180",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Mountain View", "Queen Bed", "Rainfall Shower", "Work Desk", "Balcony"]
    },
    {
      id: 3,
      name: "Garden Cottage",
      description: "Experience tranquility in your private cottage surrounded by lush gardens and nature trails.",
      price: "$320",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Private Garden", "King Bed", "Outdoor Shower", "Kitchenette", "Private Terrace"]
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-resort-sand" id="rooms" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto container-padding">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <span className="inline-block text-sm text-resort-river font-medium tracking-wider uppercase border-b-2 border-resort-river">Our Accommodations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Experience Luxurious <span className="text-gradient">Comfort</span>
          </h2>
          <p className="text-resort-mountain">
            Each of our rooms is designed with your comfort in mind, offering a perfect blend of traditional Nepali aesthetics and modern luxury.
          </p>
        </div>

        {/* Room Tabs */}
        <div className={`max-w-5xl mx-auto mb-8 transition-all duration-1000 delay-200 transform ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="flex flex-wrap justify-center gap-2">
            {rooms.map((room, index) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(index)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeRoom === index
                    ? 'bg-resort-forest text-white shadow-md'
                    : 'bg-resort-stone/50 text-resort-mountain hover:bg-resort-stone'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>

        {/* Room Display */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-400 transform ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          {/* Room Image */}
          <div className="relative">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`transition-all duration-500 ${
                  activeRoom === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                }`}
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm py-1 px-4 rounded-full">
                    <span className="font-medium text-resort-forest">From {room.price}/night</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Room Details */}
          <div>
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`transition-all duration-500 ${
                  activeRoom === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{room.name}</h3>
                <p className="text-resort-mountain mb-6 leading-relaxed">{room.description}</p>
                
                <h4 className="font-medium text-resort-forest mb-3">Room Amenities:</h4>
                <motion.ul 
                  className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8"
                  variants={container}
                  initial="hidden"
                  animate={activeRoom === index ? "show" : "hidden"}
                >
                  {room.amenities.map((amenity) => (
                    <motion.li 
                      key={amenity} 
                      className="flex items-center text-sm text-resort-mountain"
                      variants={item}
                    >
                      <svg className="w-4 h-4 mr-2 text-resort-river" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {amenity}
                    </motion.li>
                  ))}
                </motion.ul>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/booking"
                    className="button-primary"
                  >
                    Book Now
                  </Link>
                  <button
                    className="button-secondary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
