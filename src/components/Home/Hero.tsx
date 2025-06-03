import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          filter: "brightness(0.7)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

      <div className="container mx-auto px-4 relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Find Your Dream Luxury Property
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-200 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Discover exceptional properties in the most prestigious locations. Your journey to luxury living starts here.
          </motion.p>

          <motion.div
            className="bg-white rounded-lg shadow-xl p-4 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="Enter location, city, or ZIP code" 
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button className="w-full md:w-auto bg-primary-800 hover:bg-primary-700 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition duration-300">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/properties?type=residential" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition duration-300">
              Residential
            </Link>
            <Link to="/properties?type=commercial" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition duration-300">
              Commercial
            </Link>
            <Link to="/properties?type=luxury" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition duration-300">
              Luxury
            </Link>
            <Link to="/properties?type=investment" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition duration-300">
              Investment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;