import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">My Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white font-display">Featured Work</h3>
          </div>
          <a 
            href="https://ytjobs.co/talent/vitrine/428100" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-primary transition-colors group border-b border-primary/0 hover:border-primary pb-1"
          >
            <span>View Full Portfolio on YTJobs</span>
            <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden bg-card cursor-pointer">
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback placeholder
                    e.currentTarget.src = `https://picsum.photos/seed/${item.id}/800/450`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://ytjobs.co/talent/vitrine/428100" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium hover:text-primary transition-colors border border-primary/30 shadow-[0_0_20px_rgba(0,127,255,0.2)]"
          >
            See More Works on YTJobs
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;