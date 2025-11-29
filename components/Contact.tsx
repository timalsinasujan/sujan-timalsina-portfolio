import React from 'react';
import { Mail, Facebook, Linkedin, Instagram, Phone, Send } from 'lucide-react';

// Custom component for WhatsApp icon since Lucide might not strictly match the brand icon, 
// but we'll use Phone for now or a custom SVG if strict adherence is needed.
// Using Lucide icons for consistency as requested "Authentic, non-AI-generated".

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Socials */}
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Let's Work Together</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Have a project in mind? Looking to elevate your content? Drop me a message and let's create something amazing.
            </p>

            <div className="space-y-6 mb-10">
              <a href="mailto:smarttechzbusiness@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors p-4 glass-panel rounded-xl border border-transparent hover:border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider">Email</span>
                  <span className="font-medium break-all">smarttechzbusiness@gmail.com</span>
                </div>
              </a>
              
              <a href="https://wa.link/rbuumc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors p-4 glass-panel rounded-xl border border-transparent hover:border-primary/20">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider">WhatsApp</span>
                  <span className="font-medium">Chat on WhatsApp</span>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/sujantimalsina.9" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/su_jan_timalsina/?__pwa=1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sujan-timalsina-bb8556321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative">
             <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
             
             <form className="relative space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                     placeholder="John Doe"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                     placeholder="john@example.com"
                   />
                 </div>
               </div>
               
               <div>
                 <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                 <input 
                   type="text" 
                   id="subject" 
                   className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                   placeholder="Project Inquiry"
                 />
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                 <textarea 
                   id="message" 
                   rows={4}
                   className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                   placeholder="Tell me about your project..."
                 ></textarea>
               </div>

               <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(0,127,255,0.4)] hover:shadow-[0_4px_25px_rgba(0,127,255,0.6)] flex items-center justify-center gap-2">
                 Send Message
                 <Send className="w-4 h-4" />
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;