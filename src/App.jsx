import React from 'react';
import Hero from './components/Hero';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Hero />
      <Hours />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
