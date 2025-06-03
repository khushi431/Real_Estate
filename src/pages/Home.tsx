import React from 'react';
import PageTransition from '../components/Common/PageTransition';
import Hero from '../components/Home/Hero';
import FeaturedProperties from '../components/Home/FeaturedProperties';
import Features from '../components/Home/Features';
import Testimonials from '../components/Home/Testimonials';
import CallToAction from '../components/Home/CallToAction';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <FeaturedProperties />
      <Testimonials />
      <CallToAction />
    </PageTransition>
  );
};

export default Home;