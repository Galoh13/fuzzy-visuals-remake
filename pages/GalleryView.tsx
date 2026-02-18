
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import Footer from '../components/Footer';

const GalleryView: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = CATEGORIES.find(c => c.id === categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) return <div className="p-24">Category not found</div>;

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Category Header */}
      <header className="pt-48 pb-24 px-8 md:px-24">
        <h1 className="text-7xl md:text-9xl font-serif kerning-tight mb-8 fade-in">
          {category.title}
        </h1>
        <div className="max-w-2xl text-xs uppercase kerning-wide leading-relaxed opacity-60 fade-in">
          Explore the visual narrative of {category.title.toLowerCase()} captured by Irad Galo. 
          A study of light, texture, and refined elegance.
        </div>
      </header>

      {/* Asymmetrical Editorial Layout */}
      <section className="px-8 md:px-24 space-y-24 md:space-y-48">
        {category.photos.map((photo, index) => {
          const isEven = index % 2 === 0;
          const isThird = (index + 1) % 3 === 0;

          let containerClass = "flex w-full";
          let imgClass = "w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000";

          if (isThird) {
            containerClass += " justify-center";
            imgClass += " max-w-7xl";
          } else if (isEven) {
            containerClass += " justify-end md:pr-48";
            imgClass += " max-w-xl md:max-w-2xl lg:max-w-3xl";
          } else {
            containerClass += " justify-start md:pl-48";
            imgClass += " max-w-xl md:max-w-2xl lg:max-w-3xl";
          }

          return (
            <div key={photo.id} className={`${containerClass} fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="overflow-hidden bg-gray-50">
                <img 
                  src={photo.url} 
                  alt={photo.alt} 
                  className={imgClass}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* Back to Work */}
      <div className="p-24 flex justify-center">
        <Link 
          to="/work" 
          className="text-xs uppercase kerning-wide border-b border-black pb-2 hover:opacity-50 transition-opacity"
        >
          Return to Collections
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryView;
