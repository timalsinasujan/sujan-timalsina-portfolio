import React from 'react';
import { Star, Youtube, Quote } from 'lucide-react';
import { CLIENTS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-[#0d0d14] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white font-display">Trusted By Creators</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS.map((client, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-2xl relative hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 p-0.5">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${client.name.replace(' ', '+')}&background=007fff&color=fff`;
                    }}
                  />
                </div>
                <div>
                  <a 
                    href={client.channelLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-bold text-white text-lg hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    {client.name}
                    <Youtube className="w-4 h-4 text-red-500" />
                  </a>
                  <div className="flex text-yellow-500 mt-1">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 italic leading-relaxed text-sm">
                "{client.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;