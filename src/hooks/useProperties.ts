import { useState, useEffect } from 'react';

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  rent?: boolean;
  image: string;
  images: string[];
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Pending';
  type: 'Residential' | 'Commercial' | 'Luxury' | 'Investment' | 'Vacation';
  bedrooms: number;
  bathrooms: number;
  size: number;
  location: string;
  address: string;
  features: string[];
  featured?: boolean;
  agent: {
    id: number;
    name: string;
    image: string;
    phone: string;
    email: string;
  };
}

const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    description: "Extraordinary beachfront property with panoramic ocean views. This modern architectural masterpiece features floor-to-ceiling windows, an infinity pool, and private beach access. The open-concept design seamlessly blends indoor and outdoor living spaces, perfect for entertaining or enjoying the breathtaking sunsets. Includes a chef's kitchen, wine cellar, home theater, and smart home technology throughout.",
    price: 4500000,
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    status: "For Sale",
    type: "Luxury",
    bedrooms: 5,
    bathrooms: 6,
    size: 5800,
    location: "Malibu, CA",
    address: "123 Ocean Drive, Malibu, CA 90265",
    features: ["Beachfront", "Infinity Pool", "Home Theater", "Wine Cellar", "Smart Home", "Private Gym", "Guest House"],
    featured: true,
    agent: {
      id: 1,
      name: "Sarah Johnson",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "(555) 987-6543",
      email: "sarah.johnson@luxuryestate.com"
    }
  },
  {
    id: 2,
    title: "Elegant Penthouse with City Views",
    description: "Luxurious penthouse in the heart of downtown with breathtaking city views from every room. This sophisticated residence features premium finishes, soaring ceilings, and a wraparound terrace perfect for entertaining. The gourmet kitchen includes top-of-the-line appliances and custom cabinetry. The primary suite offers a spa-like bathroom and generous walk-in closet. Building amenities include 24-hour concierge, fitness center, and rooftop pool.",
    price: 3200000,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    status: "For Sale",
    type: "Residential",
    bedrooms: 3,
    bathrooms: 3.5,
    size: 3200,
    location: "New York, NY",
    address: "501 Fifth Avenue, New York, NY 10017",
    features: ["Panoramic Views", "Private Terrace", "Concierge", "Fitness Center", "Rooftop Pool", "Smart Home", "Wine Storage"],
    featured: true,
    agent: {
      id: 2,
      name: "Michael Reynolds",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "(555) 234-5678",
      email: "michael.reynolds@luxuryestate.com"
    }
  },
  {
    id: 3,
    title: "Historic Brownstone Townhouse",
    description: "Meticulously renovated historic brownstone that seamlessly blends original architectural details with modern luxury. This elegant townhouse features high ceilings, original hardwood floors, ornate fireplaces, and a stunning staircase. The chef's kitchen opens to a sun-filled garden. Additional amenities include a custom wine cellar, home office, and landscaped rooftop terrace with outdoor kitchen. Offered fully furnished with designer pieces.",
    price: 6800000,
    image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/279652/pexels-photo-279652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    status: "For Sale",
    type: "Residential",
    bedrooms: 4,
    bathrooms: 3.5,
    size: 4200,
    location: "Boston, MA",
    address: "42 Commonwealth Avenue, Boston, MA 02116",
    features: ["Historic", "Garden", "Rooftop Terrace", "Wine Cellar", "Original Fireplaces", "Home Office", "Designer Furnished"],
    featured: true,
    agent: {
      id: 3,
      name: "Jennifer Lopez",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "(555) 876-5432",
      email: "jennifer.lopez@luxuryestate.com"
    }
  },
  {
    id: 4,
    title: "Contemporary Hillside Estate",
    description: "Architectural masterpiece set on a private hillside with sweeping valley views. This contemporary estate features walls of glass, soaring ceilings, and an open floor plan perfect for indoor-outdoor living. The infinity edge pool appears to merge with the horizon, creating a dramatic focal point. State-of-the-art kitchen, home theater, glass-enclosed wine room, and separate guest quarters complete this exceptional property.",
    price: 8900000,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    status: "For Sale",
    type: "Luxury",
    bedrooms: 6,
    bathrooms: 8,
    size: 7500,
    location: "Beverly Hills, CA",
    address: "1420 Sunset Boulevard, Beverly Hills, CA 90210",
    features: ["Panoramic Views", "Infinity Pool", "Home Theater", "Wine Room", "Smart Home", "Guest House", "Outdoor Kitchen"],
    featured: true,
    agent: {
      id: 4,
      name: "David Chen",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "(555) 123-4567",
      email: "david.chen@luxuryestate.com"
    }
  },
  {
    id: 5,
    title: "Luxury Waterfront Condo",
    description: "Exquisite waterfront residence with unobstructed bay views. This corner unit features an expansive open floor plan with floor-to-ceiling windows, private elevator entry, and wraparound balcony. European-designed kitchen with premium appliances, custom cabinetry, and marble countertops. Building amenities include concierge, valet parking, infinity pool, and private marina access.",
    price: 12000,
    rent: true,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/273669/pexels-photo-273669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    status: "For Rent",
    type: "Residential",
    bedrooms: 3,
    bathrooms: 3.5,
    size: 2800,
    location: "Miami, FL",
    address: "300 Biscayne Boulevard Way, Miami, FL 33131",
    features: ["Waterfront", "Private Elevator", "Concierge", "Marina Access", "Infinity Pool", "Spa", "Fitness Center"],
    featured: true,
    agent: {
      id: 1,
      name: "Sarah Johnson",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "(555) 987-6543",
      email: "sarah.johnson@luxuryestate.com"
    }
  },
  {
    id: 6,
    title: "Premium Office Space",
    description: "Class A office space in prestigious downtown tower. Recently renovated with high-end finishes, modern conference rooms, and dedicated server room. Floor-to-ceiling windows offer abundant natural light and panoramic city views. Building amenities include 24-hour security, valet parking, upscale restaurant, and fitness center. Ideal for professional services firm or corporate headquarters.",
    price: 35000,
    rent: true,
    image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1826546/pexels-photo-1826546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    status: "For Rent",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 4,
    size: 5000,
    location: "Chicago, IL",
    address: "333 Wacker Drive, Chicago, IL 60606",
    features: ["City Views", "Modern Conference Rooms", "Server Room", "24-Hour Security", "Valet Parking", "Fitness Center", "On-site Restaurant"],
    agent: {
      id: 2,
      name: "Michael Reynolds",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "(555) 234-5678",
      email: "michael.reynolds@luxuryestate.com"
    }
  },
];

export const useFeaturedProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProperties(MOCK_PROPERTIES.filter(p => p.featured));
      setLoading(false);
    }, 500);
  }, []);

  return { properties, loading };
};

export const useProperties = (filters?: any) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with filters
    setTimeout(() => {
      let filteredProperties = [...MOCK_PROPERTIES];
      
      // Apply filters (in a real app, this would be done server-side)
      if (filters) {
        if (filters.type) {
          filteredProperties = filteredProperties.filter(p => 
            p.type.toLowerCase() === filters.type.toLowerCase()
          );
        }
        
        if (filters.minPrice) {
          filteredProperties = filteredProperties.filter(p => 
            p.price >= filters.minPrice
          );
        }
        
        if (filters.maxPrice) {
          filteredProperties = filteredProperties.filter(p => 
            p.price <= filters.maxPrice
          );
        }
        
        if (filters.status) {
          filteredProperties = filteredProperties.filter(p => 
            p.status.toLowerCase() === filters.status.toLowerCase()
          );
        }
        
        if (filters.bedrooms) {
          filteredProperties = filteredProperties.filter(p => 
            p.bedrooms >= filters.bedrooms
          );
        }
        
        if (filters.location) {
          filteredProperties = filteredProperties.filter(p => 
            p.location.toLowerCase().includes(filters.location.toLowerCase())
          );
        }
      }
      
      setProperties(filteredProperties);
      setLoading(false);
    }, 500);
  }, [filters]);

  return { properties, loading };
};

export const useProperty = (id: number) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProperty = MOCK_PROPERTIES.find(p => p.id === id);
      
      if (foundProperty) {
        setProperty(foundProperty);
      } else {
        setError('Property not found');
      }
      
      setLoading(false);
    }, 500);
  }, [id]);

  return { property, loading, error };
};