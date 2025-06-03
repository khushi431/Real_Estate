import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Agents', path: '/agents' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <Home className="h-6 w-6 text-primary-800 mr-2" />
            <span className="font-serif text-xl md:text-2xl font-bold text-primary-800">LuxuryEstate</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium text-sm transition duration-200 ${
                    isActive
                      ? 'text-primary-800 border-b-2 border-accent pb-1'
                      : 'text-neutral-600 hover:text-primary-800'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+15551234567" 
              className="flex items-center bg-primary-800 hover:bg-primary-700 text-white px-4 py-2 rounded transition duration-300"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>(555) 123-4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
        className={`md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg z-50 overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-neutral-800 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-4 py-4 space-y-6">
          <div className="flex items-center mb-6">
            <Home className="h-6 w-6 text-primary-800 mr-2" />
            <span className="font-serif text-xl font-bold text-primary-800">LuxuryEstate</span>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium py-2 px-3 rounded transition duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`
                }
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-200">
            <a 
              href="tel:+15551234567" 
              className="flex items-center justify-center w-full bg-primary-800 hover:bg-primary-700 text-white px-4 py-3 rounded transition duration-300"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </motion.div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}
    </motion.header>
  );
};

export default Navbar;