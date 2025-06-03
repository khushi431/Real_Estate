import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Award, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-12 w-12 text-primary-800" />,
      title: 'Find Your Dream Home',
      description: 'Discover thousands of properties that match your preferences and budget in your ideal location.',
    },
    {
      icon: <Shield className="h-12 w-12 text-primary-800" />,
      title: 'Trusted Advisors',
      description: 'Our agents are certified professionals with extensive experience in luxury real estate market.',
    },
    {
      icon: <Award className="h-12 w-12 text-primary-800" />,
      title: 'Premium Properties',
      description: 'Access to exclusive, high-end properties that are not available on the public market.',
    },
    {
      icon: <Clock className="h-12 w-12 text-primary-800" />,
      title: 'Quick & Easy Process',
      description: 'Streamlined buying and selling process with transparent guidance at every step.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Why Choose Us</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            With over 20 years of experience, we provide exceptional service and unparalleled expertise in luxury real estate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-lg hover:bg-neutral-50 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;