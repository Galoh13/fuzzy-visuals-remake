import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Larger logo for primary landing/info pages
  const isLargeLogo = path === '/' || path === '/about' || path === '/contact';

  // Determine if navbar should be fixed (Home/Work) or absolute (About/Contact/Gallery)
  const isFixed = path === '/' || path === '/work';
  
  // Determine styles based on background (Home/Work are dark, others are light)
  const isDarkBg = path === '/' || path === '/work';
  const textColor = isDarkBg ? 'text-white' : 'text-black';
  const tileBg = isDarkBg ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10';
  const tileBorder = isDarkBg ? 'border-white/10' : 'border-black/10';
  const activeTile = isDarkBg ? 'bg-white/20 border-white/20' : 'bg-black/10 border-black/20';

  return (
    <nav className={`
      ${isFixed ? 'fixed' : 'absolute'} 
      top-0 left-0 w-full z-50 pt-16 px-8 md:pt-10 md:px-10 
      flex flex-col md:flex-row md:justify-between items-start 
      transition-all duration-500 ease-in-out ${textColor}
    `}>
      {/* Home Button / Logo - Bigger on Home, About, and Contact */}
      <Link 
        to="/" 
        className="group flex flex-col mb-4 md:mb-0"
      >
        {/* 
          Logo Logic:
          - If isDarkBg is true (Home/Work): Force to white (brightness-0 makes it black, invert makes it white)
          - If isDarkBg is false (About/Contact/Gallery): Force to black (brightness-0)
        */}
        <img 
          src="/images/Fuzzy.png" 
          alt="Fuzzy Visuals Logo"
          className={`
            w-auto object-contain transition-all duration-500 group-hover:opacity-70
            ${isDarkBg ? 'brightness-0 invert' : 'brightness-0'} 
            ${isLargeLogo ? 'h-12 md:h-16' : 'h-6 md:h-8'}
          `}
        />
      </Link>

      {/* Navigation Links - Luxurious Rectangular Rounded Tiles */}
      <div className="flex items-center md:ml-auto space-x-3 md:space-x-4 mt-10 md:mt-2 text-[10px] md:text-xs uppercase kerning-wide font-medium">
        <Link 
          to="/work" 
          className={`
            px-6 py-2.5 rounded-lg border backdrop-blur-md transition-all duration-500
            ${path === '/work' ? activeTile : `${tileBg} ${tileBorder}`}
            hover:scale-105 active:scale-95
          `}
        >
          Work
        </Link>
        <Link 
          to="/about" 
          className={`
            px-6 py-2.5 rounded-lg border backdrop-blur-md transition-all duration-500
            ${path === '/about' ? activeTile : `${tileBg} ${tileBorder}`}
            hover:scale-105 active:scale-95
          `}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className={`
            px-6 py-2.5 rounded-lg border backdrop-blur-md transition-all duration-500
            ${path === '/contact' ? activeTile : `${tileBg} ${tileBorder}`}
            hover:scale-105 active:scale-95
          `}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;