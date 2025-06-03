import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/Common/PageTransition';
import { Shield, Search, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-neutral-50 pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center py-16 md:py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920')",
              filter: "brightness(0.3)",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h1 
                className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                About LuxuryEstate
              </motion.h1>
              <motion.p 
                className="text-xl text-neutral-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Your trusted partner in luxury real estate for over 20 years.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            </div>

            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p>
                Founded in 2003, LuxuryEstate has grown from a boutique agency in Beverly Hills to one of the most prestigious real estate firms specializing in luxury properties worldwide. Our journey began with a simple mission: to provide exceptional service and unparalleled expertise to clients seeking extraordinary homes.
              </p>
              <p>
                Over the past two decades, we've built strong relationships with clients ranging from high-net-worth individuals to celebrities and international investors. Our deep understanding of the luxury market, combined with our discreet approach and attention to detail, has established us as the preferred choice for those seeking the finest properties.
              </p>
              <p>
                Today, LuxuryEstate continues to set the standard for excellence in luxury real estate. Our team of dedicated professionals shares a passion for architecture, design, and delivering personalized service that exceeds expectations. Whether you're looking to buy, sell, or invest in premium real estate, we are committed to guiding you through every step of your journey.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                These principles guide everything we do and define our approach to luxury real estate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="h-12 w-12 text-primary-800" />,
                  title: "Integrity",
                  description: "We uphold the highest ethical standards in all our dealings, building trust through transparency and honesty.",
                },
                {
                  icon: <Award className="h-12 w-12 text-primary-800" />,
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our service, continuously raising the bar for what clients can expect.",
                },
                {
                  icon: <Search className="h-12 w-12 text-primary-800" />,
                  title: "Expertise",
                  description: "Our team brings unmatched market knowledge and industry expertise to help clients make informed decisions.",
                },
                {
                  icon: <Clock className="h-12 w-12 text-primary-800" />,
                  title: "Dedication",
                  description: "We are dedicated to our clients' success, going above and beyond to achieve their real estate goals.",
                },
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-neutral-50 transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Preview */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Anderson",
                position: "Founder & CEO",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "With over 25 years in luxury real estate, Robert founded LuxuryEstate with a vision to redefine the high-end property market."
              },
              {
                name: "Sophia Martinez",
                position: "Chief Operating Officer",
                image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Sophia oversees the company's operations, bringing her expertise in business strategy and client relations to drive growth."
              },
              {
                name: "David Chen",
                position: "Head of International Sales",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "David specializes in connecting international clients with exceptional properties, leveraging his global network and multilingual skills."
              },
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-60 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
                  <p className="text-primary-800 font-medium mb-4">{member.position}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-neutral-200 text-lg mb-8">
                Our team of experts is ready to guide you through every step of your real estate journey.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-primary-800 hover:bg-neutral-100 px-8 py-3 rounded-md font-medium transition duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;