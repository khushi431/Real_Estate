import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Home className="h-6 w-6 text-accent mr-2" />
              <span className="font-serif text-xl font-bold">LuxuryEstate</span>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect luxury property. Discover exceptional homes and investment opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-accent transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-accent transition duration-300">Properties</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-accent transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/agents" className="text-neutral-300 hover:text-accent transition duration-300">Our Agents</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-accent transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/properties?type=residential" className="text-neutral-300 hover:text-accent transition duration-300">Residential</Link>
              </li>
              <li>
                <Link to="/properties?type=commercial" className="text-neutral-300 hover:text-accent transition duration-300">Commercial</Link>
              </li>
              <li>
                <Link to="/properties?type=luxury" className="text-neutral-300 hover:text-accent transition duration-300">Luxury</Link>
              </li>
              <li>
                <Link to="/properties?type=investment" className="text-neutral-300 hover:text-accent transition duration-300">Investment</Link>
              </li>
              <li>
                <Link to="/properties?type=vacation" className="text-neutral-300 hover:text-accent transition duration-300">Vacation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                <span className="text-neutral-300">123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <a href="tel:+15551234567" className="text-neutral-300 hover:text-accent transition duration-300">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <a href="mailto:info@luxuryestate.com" className="text-neutral-300 hover:text-accent transition duration-300">info@luxuryestate.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LuxuryEstate. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-accent transition duration-300 mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition duration-300 mb-2 md:mb-0">Terms of Service</a>
            <a href="#" className="hover:text-accent transition duration-300 mb-2 md:mb-0">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;