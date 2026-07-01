import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../types';

interface GallerySlideshowProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export const GallerySlideshow: React.FC<GallerySlideshowProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white hover:text-zinc-300 transition bg-black/50 p-2 rounded-full"
      >
        <X className="w-8 h-8" />
      </button>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 sm:left-12 z-50 text-white hover:text-zinc-300 transition bg-black/50 p-3 rounded-full"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 sm:right-12 z-50 text-white hover:text-zinc-300 transition bg-black/50 p-3 rounded-full"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="relative max-w-5xl w-full h-full max-h-[85vh] px-4 md:px-16 flex flex-col items-center justify-center">
         <img 
           key={currentImage.url} // Force re-render for animation on change
           src={currentImage.url} 
           alt={currentImage.caption || `Gallery image ${currentIndex + 1}`} 
           className="max-w-full max-h-full object-contain animate-in fade-in zoom-in-95 duration-300"
         />
         <div className="absolute bottom-4 left-0 w-full text-center text-white flex flex-col items-center">
            {currentImage.caption && (
              <span className="text-lg font-medium drop-shadow-md mb-2">{currentImage.caption}</span>
            )}
            <span className="text-white/70 text-sm drop-shadow-md">
              {currentIndex + 1} / {images.length}
            </span>
         </div>
      </div>
    </div>
  );
};
