import React from 'react';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="pt-64 md:pt-80 px-8 md:px-24 flex flex-col md:flex-row gap-24">
        <div className="md:w-1/2">
          <h1 className="text-7xl md:text-9xl font-serif kerning-tight mb-12 fade-in">
            IRAD GALO
          </h1>
          <div className="space-y-8 text-sm md:text-lg leading-relaxed font-light fade-in">
            <p>
              Fuzzy Visuals is a creative studio founded by Irad Galo, specializing in luxury fashion, 
              editorial portraits, and high-end event documentation.
            </p>
            <p>
              Our philosophy is rooted in minimalism and the pursuit of refined aesthetics. 
              We believe that the most powerful images are those that strip away the unnecessary, 
              leaving only the essence of the subject and the emotion of the moment.
            </p>
            <p>
              Based in the intersection of art and commerce, we collaborate with brands and 
              individuals who value visual excellence and a distinct, confident point of view.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md aspect-[3/4] overflow-hidden bg-gray-100 grayscale fade-in">
            <img 
              src="/images/portraits/g.jpg" 
              alt="Irad Galo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;