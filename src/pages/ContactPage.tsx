
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Contact Us - Kulekhani Resort';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Contact Kulekhani Resort" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <span className="inline-block py-1 px-3 mb-4 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full animate-fade-in">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in">
              We're here to answer any questions you might have about your stay at Kulekhani Resort
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
