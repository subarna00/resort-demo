
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
                <span className={`transition-colors duration-300 ${isScrolled ? 'text-resort-forest' : 'text-white'}`}>
                  Kulekhani
                </span>
                <span className={`transition-colors duration-300 ${isScrolled ? 'text-resort-river' : 'text-resort-stone'}`}>
                  Resort
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact', path: '/contact' },
              { name: 'Book Now', path: '/booking' }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? isScrolled
                      ? 'text-resort-river'
                      : 'text-white border-b-2 border-white'
                    : isScrolled
                    ? 'text-resort-forest hover:text-resort-river'
                    : 'text-white/90 hover:text-white'
                } link-underline`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-resort-forest' : 'text-white'
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden bg-white/95 backdrop-blur-md`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {[
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Contact', path: '/contact' },
            { name: 'Book Now', path: '/booking' }
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-3 px-4 text-base font-medium rounded-md ${
                isActive(link.path)
                  ? 'text-resort-river bg-resort-stone/30'
                  : 'text-resort-forest hover:bg-resort-stone/20 hover:text-resort-river'
              }`}
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
