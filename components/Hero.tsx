import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[96px] pointer-events-none animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-primary font-medium tracking-wide text-sm">Graphics & Thumbnail Designer</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 leading-tight tracking-tight">
          Sujan <span className="text-transparent bg-clip-text bg-primary-gradient drop-shadow-[0_0_15px_rgba(0,127,255,0.5)]">Timalsina</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
          Crafting digital experiences with precision and passion. Specializing in high-impact visuals for content creators and brands.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="group glass-button bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,127,255,0.3)] hover:shadow-[0_0_30px_rgba(0,127,255,0.6)]"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;