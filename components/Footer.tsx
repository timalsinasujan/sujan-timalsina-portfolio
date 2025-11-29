import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050508] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
            <img src="logo_png.png" alt="Logo" className="h-8 w-auto opacity-80" onError={(e) => (e.target as HTMLImageElement).style.display='none'}/>
            <span className="text-xl font-bold font-display text-white tracking-wider">Sujan Timalsina</span>
        </div>

        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sujan Timalsina. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;