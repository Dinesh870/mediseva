
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative">
      {/* Top Contact Bar - Fixed */}
      <div className={`bg-blue-800 text-white py-2 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                info@medisevahealthcare.com
              </span>
              <span className="hidden md:flex items-center">
                <i className="fas fa-phone mr-2"></i>
                +91 8789736848
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed top bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0' : 'h-10'}`}></div>

      {/* Mid Section with Logo and Info */}
      <div className="hidden lg:block bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://medisevahealthcare.com/images/logo.png" 
                  alt="MediSeva Healthcare" 
                  className="h-12"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-calendar-check text-blue-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-blue-800">Book</div>
                  <div className="text-sm text-blue-600">An Appointment</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-blue-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-blue-800">Call Us 24/7</div>
                  <div className="text-sm text-blue-600">+91 8789736848</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-clock text-blue-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-blue-800">We Are Available 24x7</div>
                  <div className="text-sm text-blue-600">7 days open</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-lg sticky z-40 transition-all duration-300 ${
        isScrolled ? 'top-0' : 'top-10'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Mobile Logo */}
            <div className="lg:hidden">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://medisevahealthcare.com/images/logo.png" 
                  alt="MediSeva Healthcare" 
                  className="h-10"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/about') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/services') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/gallery') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/appointment" 
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/appointment') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                }`}
              >
                Appointment
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/contact') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <i className="fas fa-search"></i>
                </button>
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-blue-200 rounded-lg shadow-lg p-4 z-50">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 px-3 py-2 border border-blue-300 rounded-l-lg focus:outline-none focus:border-blue-600"
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-800 transition-colors cursor-pointer">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-blue-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive('/') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive('/about') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive('/services') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/gallery" 
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive('/gallery') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link 
                  to="/appointment" 
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive('/appointment') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Appointment
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive('/contact') ? 'text-blue-600' : 'text-blue-800 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
