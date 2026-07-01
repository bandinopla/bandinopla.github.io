import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { MediaItem } from '../types';

interface MediaRowProps {
  title: string;
  items: MediaItem[];
  onItemClick: (item: MediaItem) => void;
}

export const MediaRow: React.FC<MediaRowProps> = ({ title, items, onItemClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="relative px-4 md:px-12 py-4 group" id={title}>
      <h2 className="text-zinc-100 font-semibold text-xl md:text-2xl mb-4 tracking-wide">{title}</h2>
      
      <div className="relative">
        <button 
          className="absolute top-0 bottom-0 left-0 w-12 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center hover:bg-black/70"
          onClick={() => handleScroll('left')}
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        <div 
          ref={rowRef}
          className="flex space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div 
              key={item.id} 
              className="relative flex-none w-[160px] sm:w-[200px] md:w-[280px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-30 origin-center group/card"
              onClick={() => onItemClick(item)}
            >
              <div className="aspect-video bg-zinc-800 rounded overflow-hidden">
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded flex items-end p-4">
                <p className="text-white font-medium text-sm drop-shadow-md">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="absolute top-0 bottom-0 right-0 w-12 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center hover:bg-black/70"
          onClick={() => handleScroll('right')}
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};
