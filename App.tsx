import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  // Effect to handle initial background setup or global listeners if needed
  useEffect(() => {
    // Force dark mode class on html element just in case
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-dark min-h-screen text-gray-200 selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;