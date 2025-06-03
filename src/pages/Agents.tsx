import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/Common/PageTransition';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

interface Agent {
  id: number;
  name: string;
  position: string;
  image: string;
  phone: string;
  email: string;
  bio: string;
  location: string;
  specialty: string;
  experience: number;
  featured?: boolean;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Luxury Property Specialist",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "(555) 987-6543",
    email: "sarah.johnson@luxuryestate.com",
    bio: "Sarah specializes in beachfront and architectural properties throughout Southern California. With over 15 years of experience, she has built an impressive portfolio of high-profile clients and record-breaking sales.",
    location: "Los Angeles, CA",
    specialty: "Beachfront Properties",
    experience: 15,
    featured: true
  },
  {
    id: 2,
    name: "Michael Reynolds",
    position: "Commercial Real Estate Director",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "(555) 234-5678",
    email: "michael.reynolds@luxuryestate.com",
    bio: "Michael leads our commercial division, specializing in office buildings, retail spaces, and investment properties. His background in finance and development gives clients a strategic advantage in complex transactions.",
    location: "New York, NY",
    specialty: "Commercial Properties",
    experience: 12,
    featured: true
  },
  {
    id: 3,
    name: "Jennifer Lopez",
    position: "International Property Consultant",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "(555) 876-5432",
    email: "jennifer.lopez@luxuryestate.com",
    bio: "Jennifer specializes in connecting international buyers with exceptional properties. Fluent in five languages, she leverages her global network to create seamless experiences for clients from around the world.",
    location: "Miami, FL",
    specialty: "International Buyers",
    experience: 10,
    featured: true
  },
  {
    id: 4,
    name: "David Chen",
    position: "Investment Property Specialist",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "(555) 123-4567",
    email: "david.chen@luxuryestate.com",
    bio: "David focuses on investment properties and portfolio development for high-net-worth individuals. His analytical approach and market insights help clients maximize returns on their real estate investments.",
    location: "San Francisco, CA",
    specialty: "Investment Properties",
    experience: 8,
    featured: true
  },
  {
    id: 5,
    name: "Emily Williams",
    position: "Historic Home Specialist",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "(555) 345-6789",
    email: "emily.williams@luxuryestate.com",
    bio: "Emily has developed a niche expertise in historic and architecturally significant properties. Her knowledge of preservation, restoration, and renovation makes her an invaluable resource for buyers of unique homes.",
    location: "Boston, MA",
    specialty: "Historic Properties",
    experience: 14
  },
  {
    id: 6,
    name: "James Wilson",
    position: "Luxury Condominium Expert",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "(555) 987-1234",
    email: "james.wilson@luxuryestate.com",
    bio: "James specializes in luxury condominiums and high-rise properties in urban centers. His extensive knowledge of building amenities, HOA regulations, and market trends ensures clients find their perfect city home.",
    location: "Chicago, IL",
    specialty: "Luxury Condominiums",
    experience: 9
  },
  {
    id: 7,
    name: "Sophia Martinez",
    position: "Ranch & Estate Specialist",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "(555) 456-7890",
    email: "sophia.martinez@luxuryestate.com",
    bio: "Sophia focuses on luxury ranches, vineyards, and large estate properties. Her background in agriculture and land management provides clients with valuable insights when purchasing these specialized properties.",
    location: "Santa Barbara, CA",
    specialty: "Ranches & Estates",
    experience: 11
  },
  {
    id: 8,
    name: "Robert Thompson",
    position: "Waterfront Property Expert",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "(555) 567-8901",
    email: "robert.thompson@luxuryestate.com",
    bio: "Robert specializes in lakefront, riverfront, and oceanfront properties. His expertise in waterfront regulations, riparian rights, and property valuation ensures clients make informed decisions when purchasing these unique homes.",
    location: "Seattle, WA",
    specialty: "Waterfront Properties",
    experience: 16
  },
];

const Agents: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-neutral-50 pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center py-16 md:py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
                Our Expert Agents
              </motion.h1>
              <motion.p 
                className="text-xl text-neutral-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Meet our team of dedicated professionals ready to guide you through your real estate journey.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Featured Agents */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Featured Agents</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our leading real estate professionals with proven track records of success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.filter(agent => agent.featured).map((agent, index) => (
              <motion.div 
                key={agent.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{agent.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1">{agent.name}</h3>
                  <p className="text-primary-800 font-medium mb-3">{agent.position}</p>
                  <div className="flex items-center text-neutral-600 mb-4">
                    <Award className="h-4 w-4 mr-1 text-accent" />
                    <span className="text-sm">{agent.specialty} • {agent.experience} years experience</span>
                  </div>
                  <a 
                    href={`mailto:${agent.email}`} 
                    className="block w-full bg-primary-800 text-white text-center py-2 rounded-md hover:bg-primary-700 transition duration-300 mb-2"
                  >
                    Contact Agent
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Agents */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">All Agents</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Browse our complete team of exceptional real estate professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {agents.map((agent, index) => (
                <motion.div 
                  key={agent.id}
                  className="flex items-center p-4 bg-neutral-50 rounded-lg hover:shadow-md transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-neutral-900">{agent.name}</h3>
                    <p className="text-primary-800 text-sm mb-1">{agent.position}</p>
                    <div className="flex items-center text-neutral-600">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="text-xs">{agent.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-primary-800 rounded-lg overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-white mb-4">
                  Join Our Elite Team of Agents
                </h2>
                <p className="text-neutral-200 mb-6 leading-relaxed">
                  Are you a top-performing real estate professional looking to take your career to the next level? LuxuryEstate offers unparalleled support, resources, and opportunities for exceptional agents.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-neutral-200">
                    <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Access to exclusive high-end property listings</span>
                  </li>
                  <li className="flex items-start text-neutral-200">
                    <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Comprehensive marketing and administrative support</span>
                  </li>
                  <li className="flex items-start text-neutral-200">
                    <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Industry-leading commission structures</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-primary-800 hover:bg-neutral-100 px-6 py-3 rounded-md font-medium transition duration-300 self-start"
                >
                  Apply Today
                </a>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Real estate team" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Agents;