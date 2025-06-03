import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/Common/PageTransition';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-neutral-50 min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-md w-full text-center">
          <h1 className="font-serif text-8xl font-bold text-primary-800 mb-4">404</h1>
          <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Page Not Found</h2>
          <p className="text-neutral-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="flex items-center justify-center bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
            >
              <Home className="h-5 w-5 mr-2" />
              Return Home
            </Link>
            <Link 
              to="/properties" 
              className="flex items-center justify-center bg-white border border-primary-800 text-primary-800 hover:bg-primary-50 px-6 py-3 rounded-md font-medium transition duration-300"
            >
              <Search className="h-5 w-5 mr-2" />
              Browse Properties
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;