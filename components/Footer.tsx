
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-12 mt-24 flex justify-between items-end border-t border-gray-100">
      <div className="text-[10px] uppercase kerning-wide opacity-40">
        &copy; {new Date().getFullYear()} Fuzzy Visuals
      </div>
      <div className="text-[10px] uppercase kerning-wide opacity-40">
        Irad Galo Portfolio
      </div>
    </footer>
  );
};

export default Footer;
