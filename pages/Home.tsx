import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Image with Continuous Ken Burns Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="pages\assets\images\weddings\DSC_9158.JPG" 
          alt="Hero"
          className="w-full h-full object-cover grayscale brightness-75 animate-ken-burns"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 pb-32 md:p-24 lg:p-32 text-white">
        <div className="max-w-7xl w-full fade-in">
          <h2 className="text-[10px] md:text-xs uppercase kerning-wide font-medium mb-4 opacity-40">Photography Portfolio</h2>
          <h1 className="text-4xl md:text-7xl lg:text-[8rem] font-serif leading-none kerning-tight mb-2">
            IRAD GALO
          </h1>
          <h1 className="text-3xl md:text-6xl lg:text-[6.5rem] font-serif leading-none kerning-tight italic ml-4 md:ml-20 opacity-90">
            FUZZY VISUALS
          </h1>
        </div>
      </div>

      {/* Explore Link */}
      <div className="absolute bottom-12 right-8 z-20">
        <Link 
          to="/work" 
          className="text-[10px] uppercase kerning-wide text-white hover:opacity-50 transition-opacity border-b border-white pb-1"
        >
          View Collections
        </Link>
      </div>
    </div>
  );
};

export default Home;