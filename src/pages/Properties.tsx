import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/Common/PageTransition';
import PropertyFilter from '../components/Property/PropertyFilter';
import { useProperties } from '../hooks/useProperties';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Properties: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || '',
    location: searchParams.get('location') || '',
    status: searchParams.get('status') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
  });

  const { properties, loading } = useProperties(filters);

  const handleFilter = (newFilters: any) => {
    setFilters(newFilters);
    
    // Update URL search params
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value as string);
      }
    });
    setSearchParams(params);
  };

  return (
    <PageTransition>
      <div className="bg-neutral-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Luxury Properties</h1>
            <p className="text-neutral-600 max-w-2xl">
              Browse our exclusive collection of luxury properties available for sale and rent.
            </p>
          </div>

          {/* Filters */}
          <PropertyFilter onFilter={handleFilter} />

          {/* Properties Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-800"></div>
            </div>
          ) : (
            <>
              {properties.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">No properties found</h3>
                  <p className="text-neutral-600">
                    Try adjusting your search filters to find more properties.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-neutral-600 mb-6">{properties.length} properties found</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                      <PropertyCard key={property.id} property={property} index={index} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </PageTransition>
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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

export default Properties;