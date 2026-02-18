import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Work: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center md:justify-start overflow-x-hidden pt-20 md:pt-24 pb-12">
      {/* Dynamic Background Image with Zoom and Ken Burns */}
      {CATEGORIES.map(category => (
        <div 
          key={category.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out overflow-hidden pointer-events-none ${
            hoveredCategory === category.id ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
          }`}
        >
          <div 
            className={`w-full h-full bg-cover bg-center grayscale animate-ken-burns`}
            style={{ backgroundImage: `url(${category.heroImage})` }}
          />
        </div>
      ))}

      {/* Category List */}
      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col space-y-4 md:space-y-2">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            to={`/gallery/${category.id}`}
            className={`group relative block text-center md:text-left transition-all duration-700 ease-in-out ${
              hoveredCategory && hoveredCategory !== category.id ? 'opacity-10 blur-[2px]' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="relative inline-block overflow-visible py-1 md:py-2">
              <span className="relative z-10 inline-block text-3xl md:text-6xl lg:text-7xl font-serif tracking-tight md:tracking-normal transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) md:group-hover:italic md:group-hover:translate-x-6 md:group-hover:-translate-y-2">
                {category.title}
              </span>
              
              {/* Animated Underline */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out mt-1" />
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end text-[10px] uppercase kerning-wide opacity-30">
        <div className="hidden md:block">Select Collection</div>
        <div className="md:ml-auto">Fuzzy Visuals &copy; 2025</div>
      </div>
    </div>
  );
};

export default Work;