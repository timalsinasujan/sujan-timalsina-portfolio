import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel">
              <img 
                src="me.jpg" 
                alt="Sujan Timalsina" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                    // Fallback placeholder if me.jpg is missing
                    e.currentTarget.src = "https://picsum.photos/600/800?grayscale";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-xl border border-primary/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">4+</span>
                <span className="text-sm text-gray-300 uppercase tracking-wider mt-1">Years Exp.</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Transforming Ideas into <br />
              <span className="text-primary">Digital Masterpieces</span>
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Hello! I'm Sujan Timalsina, a passionate graphic designer and content specialist based in Nepal. With a keen eye for aesthetics and user engagement, I help creators and businesses stand out in a crowded digital landscape.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              My approach combines technical proficiency with creative intuition. Whether it's a high-CTR YouTube thumbnail or a complete brand overhaul, I focus on delivering results that not only look good but perform exceptionally well.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-primary/50 transition-colors">
                <h4 className="text-2xl md:text-3xl font-bold text-primary font-display">225M+</h4>
                <p className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wide">Total Views Generated</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-primary/50 transition-colors">
                <h4 className="text-2xl md:text-3xl font-bold text-primary font-display">500+</h4>
                <p className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wide">Thumbnails Designed</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-primary/50 transition-colors">
                <h4 className="text-2xl md:text-3xl font-bold text-primary font-display">50+</h4>
                <p className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wide">Happy Clients</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-primary/50 transition-colors">
                <h4 className="text-2xl md:text-3xl font-bold text-primary font-display">100%</h4>
                <p className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wide">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;