
import { Link } from 'react-router-dom';
import { ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-resort-forest text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="2" fill="currentColor"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated with Our Offers</h3>
              <p className="text-white/80">
                Subscribe to our newsletter for exclusive deals and updates about Kulekhani Resort.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-resort-forest w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full pl-10 pr-4 py-3 rounded-md bg-white text-resort-forest placeholder-resort-mountain/60 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-resort-river text-white rounded-md hover:bg-resort-river/90 transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h2 className="text-xl font-bold mb-6">
              <span className="text-white">Kulekhani</span>
              <span className="text-resort-stone">Resort</span>
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Luxury nestled in nature. Experience the perfect blend of comfort, adventure, and serenity at the scenic banks of Kulekhani River.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'tripadvisor'].map(platform => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label={`Follow us on ${platform}`}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${platform}/ffffff`}
                    alt={platform}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-resort-river"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Our Rooms', link: '/rooms' },
                { name: 'Dining', link: '/dining' },
                { name: 'Spa & Wellness', link: '/spa' },
                { name: 'Activities', link: '/activities' },
                { name: 'Gallery', link: '/gallery' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.link}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 mr-2">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Contact Info</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-resort-river"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-resort-river flex-shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/70">
                  Kulekhani Riverside, Markhu<br />
                  Makwanpur, Nepal
                </span>
              </li>
              <li className="flex items-start">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-resort-river flex-shrink-0 mt-0.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div className="text-white/70">
                  <p>+977 1 234 5678</p>
                  <p>+977 9876 543210</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-resort-river flex-shrink-0 mt-0.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div className="text-white/70">
                  <p>info@kulekhaniresort.com</p>
                  <p>bookings@kulekhaniresort.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Opening Hours</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-resort-river"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-white/70">Reception:</span>
                <span className="text-white">24/7</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Restaurant:</span>
                <span className="text-white">6:30 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Spa & Wellness:</span>
                <span className="text-white">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Swimming Pool:</span>
                <span className="text-white">7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Fitness Center:</span>
                <span className="text-white">6:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kulekhani Resort. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 w-12 h-12 bg-resort-river rounded-full flex items-center justify-center shadow-lg hover:bg-resort-river/90 transition-colors duration-300 animate-float z-20"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
