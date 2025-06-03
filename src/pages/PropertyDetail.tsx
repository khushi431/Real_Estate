import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/Common/PageTransition';
import { useProperty } from '../hooks/useProperties';
import { Bed, Bath, Square, MapPin, Phone, Mail, Heart, Share2, ChevronLeft, ChevronRight, Home } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { property, loading, error } = useProperty(Number(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-800"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Property Not Found</h2>
        <p className="text-neutral-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/properties" 
          className="inline-flex items-center bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
        >
          Browse Properties
        </Link>
      </div>
    );
  }

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  return (
    <PageTransition>
      <div className="bg-neutral-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="flex text-sm text-neutral-600">
              <Link to="/" className="hover:text-primary-800 transition flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/properties" className="hover:text-primary-800 transition">
                Properties
              </Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-900 font-medium">{property.title}</span>
            </nav>
          </div>

          {/* Property Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-neutral-600">
                <MapPin className="h-5 w-5 mr-1 text-primary-800" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-serif font-bold text-primary-800">
                ${property.price.toLocaleString()}
                {property.rent && <span className="text-neutral-500 text-base ml-1">/month</span>}
              </div>
              <div className="mt-2 bg-primary-800 text-white text-sm px-3 py-1 rounded-full inline-block">
                {property.status}
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="relative rounded-lg overflow-hidden shadow-lg mb-8 bg-neutral-800">
            <div className="relative aspect-[16/9]">
              <img 
                src={property.images[activeImageIndex]} 
                alt={`${property.title} - Image ${activeImageIndex + 1}`} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="flex p-2 bg-neutral-800 overflow-x-auto">
              {property.images.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-16 object-cover m-1 rounded ${
                    index === activeImageIndex ? 'ring-2 ring-accent' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${property.title} - Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-4 bg-neutral-50 rounded-lg">
                    <Bed className="h-6 w-6 text-primary-800 mb-2" />
                    <span className="text-lg font-medium">{property.bedrooms}</span>
                    <span className="text-neutral-600 text-sm">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-neutral-50 rounded-lg">
                    <Bath className="h-6 w-6 text-primary-800 mb-2" />
                    <span className="text-lg font-medium">{property.bathrooms}</span>
                    <span className="text-neutral-600 text-sm">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-neutral-50 rounded-lg">
                    <Square className="h-6 w-6 text-primary-800 mb-2" />
                    <span className="text-lg font-medium">{property.size}</span>
                    <span className="text-neutral-600 text-sm">Sq Ft</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-neutral-50 rounded-lg">
                    <Home className="h-6 w-6 text-primary-800 mb-2" />
                    <span className="text-lg font-medium">{property.type}</span>
                    <span className="text-neutral-600 text-sm">Property Type</span>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {property.description}
                </p>
                <div className="flex gap-3">
                  <button className="flex items-center text-neutral-600 hover:text-primary-800 transition">
                    <Heart className="h-5 w-5 mr-1" />
                    Save
                  </button>
                  <button className="flex items-center text-neutral-600 hover:text-primary-800 transition">
                    <Share2 className="h-5 w-5 mr-1" />
                    Share
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-primary-800 rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Agent Information */}
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">Contact Agent</h3>
                <div className="flex items-center mb-6">
                  <img 
                    src={property.agent.image} 
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-neutral-100"
                  />
                  <div>
                    <h4 className="font-medium text-neutral-900">{property.agent.name}</h4>
                    <p className="text-primary-800 text-sm">Luxury Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <a 
                    href={`tel:${property.agent.phone}`} 
                    className="flex items-center text-neutral-700 hover:text-primary-800 transition"
                  >
                    <Phone className="h-5 w-5 mr-3 text-primary-800" />
                    {property.agent.phone}
                  </a>
                  <a 
                    href={`mailto:${property.agent.email}`} 
                    className="flex items-center text-neutral-700 hover:text-primary-800 transition"
                  >
                    <Mail className="h-5 w-5 mr-3 text-primary-800" />
                    {property.agent.email}
                  </a>
                </div>
                <form>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                      placeholder="I'm interested in this property. Please contact me." 
                      rows={4} 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary-800 hover:bg-primary-700 text-white py-3 rounded-md font-medium transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Schedule Visit */}
              <motion.div 
                className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-lg shadow-md p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-serif text-xl font-bold mb-4">Schedule a Visit</h3>
                <p className="mb-6 text-neutral-100">
                  See this property in person. Schedule a private showing with our agent.
                </p>
                <a 
                  href={`tel:${property.agent.phone}`} 
                  className="flex items-center justify-center w-full bg-white text-primary-800 hover:bg-neutral-100 py-3 rounded-md font-medium transition duration-300"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call to Schedule
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PropertyDetail;