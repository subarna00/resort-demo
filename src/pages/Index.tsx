
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Kulekhani Resort - Luxury Resort in Nepal';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
