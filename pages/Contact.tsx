import React from 'react';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <div className="flex-grow pt-64 md:pt-80 px-8 md:px-24">
        <h1 className="text-7xl md:text-9xl font-serif kerning-tight mb-24 fade-in">
          ENQUIRE
        </h1>
        
        <div className="grid md:grid-cols-2 gap-24 fade-in">
          <div>
            <div className="mb-12">
              <h3 className="text-[10px] uppercase kerning-wide opacity-40 mb-4">Inquiries</h3>
              <a href="mailto:studio@fuzzyvisuals.com" className="text-2xl md:text-4xl font-serif hover:italic transition-all">
                giddelgalo28@gmail.com
              </a>
            </div>
            
            <div className="mb-12">
              <h3 className="text-[10px] uppercase kerning-wide opacity-40 mb-4">Social</h3>
              {/* --- CODE LOCATION: Social Links & WhatsApp Button --- */}
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 text-xs uppercase kerning-wide">
                <a 
                  href="https://www.instagram.com/galo_irad/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-50 transition-opacity"
                >
                  Instagram
                </a>
                <a 
                  href="https://wa.me/0795228783" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:opacity-50 transition-opacity"
                >
                  WhatsApp
                </a>
              </div>
              {/* -------------------------------------------------- */}
            </div>
          </div>
          
          
          <div className="flex flex-col space-y-12">
             <div className="border-b border-black pb-8">
               <h3 className="text-[10px] uppercase kerning-wide opacity-40 mb-8"></h3>
               <p className="text-sm uppercase kerning-wide leading-relaxed">
               </p>
             </div>
             
             <div>
                <p className="text-sm font-light leading-relaxed max-w-sm">
                  Currently accepting select commissions for 2025/2026. 
                  Please reach out via email for lookbook or travel dates.
                </p>
             </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;