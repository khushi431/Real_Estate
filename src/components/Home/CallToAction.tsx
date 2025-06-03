import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-cover bg-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          filter: "brightness(0.4)",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
          
          <p className="text-neutral-200 text-lg mb-8">
            Our team of experts is ready to guide you through every step of your real estate journey. Contact us today to get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/properties" 
              className="bg-white text-primary-800 hover:bg-neutral-100 px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Browse Properties
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-primary-800 text-white hover:bg-primary-700 px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;