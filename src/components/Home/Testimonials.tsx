import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    position: 'CEO, Thompson Enterprises',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'LuxuryEstate helped me find the perfect vacation home in Aspen. Their attention to detail and understanding of my needs was truly exceptional.',
  },
  {
    id: 2,
    name: 'Sophia Chen',
    position: 'Interior Designer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'As someone who works in design, I appreciate their curated selection of architecturally significant properties. My new home is a masterpiece!',
  },
  {
    id: 3,
    name: 'Robert Williams',
    position: 'Investment Banker',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The team at LuxuryEstate guided me through a complex investment property acquisition with unparalleled expertise and professionalism.',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">What Our Clients Say</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover why our clients trust us with their most important investments.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            >
              <div className="absolute top-8 left-8 text-accent opacity-20">
                <Quote className="h-16 w-16 transform rotate-180" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/4 flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-neutral-100 shadow-md"
                  />
                </div>
                
                <div className="md:w-3/4 relative z-10">
                  <p className="text-lg md:text-xl text-neutral-700 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-neutral-600">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={goToPrevious}
              className="bg-white text-primary-800 p-2 rounded-full shadow hover:bg-primary-50 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={goToNext}
              className="bg-white text-primary-800 p-2 rounded-full shadow hover:bg-primary-50 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentIndex === index ? 'bg-primary-800' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;