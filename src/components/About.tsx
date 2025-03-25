
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section-padding overflow-hidden" id="about">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <span className="block absolute -top-4 -left-4 w-24 h-24 bg-resort-stone rounded-tl-3xl z-0"></span>
              <span className="block absolute -bottom-4 -right-4 w-32 h-32 bg-resort-river/20 rounded-br-3xl z-0"></span>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80" 
                  alt="Kulekhani Resort View" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 glass-card rounded-lg p-4 lg:p-6 shadow-lg animate-float z-20">
                <div className="flex flex-col items-center">
                  <span className="text-resort-forest text-xl lg:text-3xl font-bold">10+</span>
                  <span className="text-sm lg:text-base text-resort-mountain">Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 lg:pl-8">
            <div className="space-y-6">
              <span className="inline-block text-sm text-resort-river font-medium tracking-wider uppercase border-b-2 border-resort-river">About Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                A Sanctuary of Luxury <br /> 
                <span className="text-gradient">Nestled in Nature</span>
              </h2>
              <p className="text-resort-mountain leading-relaxed">
                Perched alongside the pristine waters of Kulekhani River in Nepal, our resort is a harmonious blend of luxury and natural beauty. Surrounded by the majestic Himalayan foothills, we offer an escape that rejuvenates the mind, body, and soul.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-resort-stone/50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resort-forest">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-resort-forest">Prime Location</h3>
                    <p className="text-sm text-resort-mountain">Breathtaking views of Kulekhani River</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-resort-stone/50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resort-forest">
                      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                      <rect x="7" y="7" width="10" height="10" rx="1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-resort-forest">Luxury Accommodations</h3>
                    <p className="text-sm text-resort-mountain">Elegant rooms with modern amenities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-resort-stone/50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resort-forest">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-resort-forest">Personalized Service</h3>
                    <p className="text-sm text-resort-mountain">Attentive staff available 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-resort-stone/50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-resort-forest">
                      <path d="M8.8 20v-4.1l1.9.2a3 3 0 0 0 2.2-.9l.9-1a3 3 0 0 1 2.2-.9h0" />
                      <path d="M8.8 10V8.8c0-1.1.9-2 2-2h2.9c1.1 0 2 .9 2 2v1.2a2 2 0 0 1-2 2h-2.9a2 2 0 0 1-2-2Z" />
                      <path d="M6 17.8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-2" />
                      <path d="M18 9.8V5c0-1.1-.9-2-2-2H8a2 2 0 0 0-2 2v5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-resort-forest">Exquisite Dining</h3>
                    <p className="text-sm text-resort-mountain">Authentic Nepali and international cuisine</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/gallery" className="inline-flex items-center group">
                  <span className="text-resort-forest font-medium group-hover:text-resort-river transition-colors duration-300">
                    Explore Our Resort
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 text-resort-river transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
