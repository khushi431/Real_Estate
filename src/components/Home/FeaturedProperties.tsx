/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { useFeaturedProperties } from '../../hooks/useProperties';

const FeaturedProperties: React.FC = () => {
  const { properties } = useFeaturedProperties();
  
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Featured Properties</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in the most desirable locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/properties" 
            className="inline-flex items-center bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

interface PropertyCardProps {
  property: any;
  index: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index }) => {
  return (
    <motion.div 
      className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative">
        <Link to={`/properties/${property.id}`}>
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-60 object-cover"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <span className="bg-primary-800 text-white text-sm px-3 py-1 rounded-full">
            {property.status}
          </span>
        </div>
        <button 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition"
          aria-label="Save to favorites"
        >
          <Heart className="h-5 w-5 text-neutral-600" />
        </button>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent py-4 px-4">
          <div className="flex items-center text-white">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-serif text-xl font-semibold mb-2 text-neutral-900">
          <Link to={`/properties/${property.id}`} className="hover:text-primary-800 transition">
            {property.title}
          </Link>
        </h3>
        
        <div className="mb-3">
          <span className="font-serif text-xl font-semibold text-primary-800">${property.price.toLocaleString()}</span>
          {property.rent && <span className="text-neutral-500 text-sm ml-1">/month</span>}
        </div>
        
        <div className="flex justify-between text-neutral-600 border-t border-neutral-200 pt-4 mt-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.size} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProperties;