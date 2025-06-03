import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/Common/PageTransition';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const officeLocations = [
    {
      id: 1,
      name: "Beverly Hills Headquarters",
      address: "123 Luxury Avenue, Beverly Hills, CA 90210",
      phone: "(555) 123-4567",
      email: "beverlyhills@luxuryestate.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
      coordinates: [34.0736, -118.4004],
    },
    {
      id: 2,
      name: "New York Office",
      address: "501 Fifth Avenue, New York, NY 10017",
      phone: "(555) 987-6543",
      email: "newyork@luxuryestate.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
      coordinates: [40.7546, -73.9795],
    },
    {
      id: 3,
      name: "Miami Office",
      address: "300 Biscayne Boulevard Way, Miami, FL 33131",
      phone: "(555) 765-4321",
      email: "miami@luxuryestate.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
      coordinates: [25.7617, -80.1918],
    },
  ];

  const [activeOffice, setActiveOffice] = useState(officeLocations[0]);

  return (
    <PageTransition>
      <div className="bg-neutral-50 pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center py-16 md:py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-primary-500"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/5314181/pexels-photo-5314181.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
                Contact Us
              </motion.h1>
              <motion.p 
                className="text-xl text-neutral-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                We're here to answer any questions you may have about our properties or services.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Contact Form & Information */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-success-light text-success-dark p-6 rounded-lg mb-6">
                  <div className="flex items-center mb-4">
                    <Check className="h-6 w-6 mr-2" />
                    <h3 className="font-medium text-lg">Thank You!</h3>
                  </div>
                  <p>Your message has been sent successfully. One of our representatives will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.5rem center',
                          backgroundSize: '1.5em 1.5em',
                          paddingRight: '2.5rem',
                        }}
                      >
                        <option value="">Select a subject</option>
                        <option value="Property Inquiry">Property Inquiry</option>
                        <option value="Selling Property">Selling Property</option>
                        <option value="Schedule Viewing">Schedule Viewing</option>
                        <option value="Investment Opportunities">Investment Opportunities</option>
                        <option value="Career Opportunities">Career Opportunities</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-800 hover:bg-primary-700 text-white py-3 rounded-md font-medium transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Find Our Offices</h2>
              
              {/* Office Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {officeLocations.map((office) => (
                  <button
                    key={office.id}
                    onClick={() => setActiveOffice(office)}
                    className={`py-2 px-4 text-sm font-medium rounded-md text-center transition ${
                      activeOffice.id === office.id
                        ? 'bg-primary-800 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {office.name.split(' ')[0]}
                  </button>
                ))}
              </div>
              
              {/* Active Office Info */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-4">{activeOffice.name}</h3>
                
                <div className="space-y-4 text-neutral-700">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-800 mr-3 mt-1" />
                    <span>{activeOffice.address}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary-800 mr-3 mt-1" />
                    <a href={`tel:${activeOffice.phone}`} className="hover:text-primary-800 transition">
                      {activeOffice.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary-800 mr-3 mt-1" />
                    <a href={`mailto:${activeOffice.email}`} className="hover:text-primary-800 transition">
                      {activeOffice.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-800 mr-3 mt-1" />
                    <span>{activeOffice.hours}</span>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-72">
                <MapContainer 
                  center={activeOffice.coordinates as [number, number]} 
                  zoom={13} 
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={activeOffice.coordinates as [number, number]}>
                    <Popup>
                      <div className="p-1">
                        <h3 className="font-medium">{activeOffice.name}</h3>
                        <p className="text-sm">{activeOffice.address}</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Find answers to common questions about our services and processes.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "What services does LuxuryEstate provide?",
                  answer: "LuxuryEstate offers comprehensive real estate services including property sales, purchases, rentals, investment consulting, property management, and concierge services for luxury properties across prime locations worldwide."
                },
                {
                  question: "How can I schedule a property viewing?",
                  answer: "You can schedule a property viewing by contacting our office directly, reaching out to the specific agent listed with the property, or by filling out the contact form on our website. We offer both in-person and virtual tours to accommodate your needs."
                },
                {
                  question: "What areas do you serve?",
                  answer: "We specialize in luxury properties in premier locations worldwide, with offices in Beverly Hills, New York, and Miami. Our international network allows us to assist clients with properties across North America, Europe, and select Asian and Caribbean markets."
                },
                {
                  question: "How do I sell my luxury property with LuxuryEstate?",
                  answer: "To sell your property with us, start by scheduling a consultation with one of our agents. We'll conduct a thorough market analysis, develop a customized marketing strategy, and leverage our extensive network of high-net-worth buyers to secure the best possible outcome for your property."
                },
                {
                  question: "What makes LuxuryEstate different from other agencies?",
                  answer: "LuxuryEstate distinguishes itself through exclusive access to off-market properties, a global network of qualified buyers, comprehensive marketing strategies tailored for luxury properties, and white-glove service throughout the entire transaction process."
                },
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="mb-6 bg-neutral-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-3">{faq.question}</h3>
                  <p className="text-neutral-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;