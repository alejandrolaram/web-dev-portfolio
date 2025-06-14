
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
