import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem, $with } from '../data';
import { X, ExternalLink, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioItem;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const mainImage = project.cover || `/thumbnails/${project.id}.jpg`;
  const allImages = [mainImage, ...(project.screenshots || [])];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-12 lg:p-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-white"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full bg-white flex flex-col md:flex-row z-10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-[10px] right-[10px] z-50 p-2 text-[#1a1a1a] bg-stone-100 hover:bg-stone-200 rounded-full transition-colors drop-shadow-md"
        >
          <X className="w-6 h-6 hover:opacity-50 transition-opacity" />
        </button>

        <div className="w-full md:w-1/2 h-[35vh] md:h-full bg-stone-100 flex-shrink-0 relative overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${allImages[currentImageIndex]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-stone-200/10 mix-blend-overlay pointer-events-none"></div>

          {allImages.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all text-[#1a1a1a]"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all text-[#1a1a1a]"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="w-full md:w-1/2 h-[65vh] md:h-full overflow-y-auto">
          <div className="flex flex-col p-8 md:p-14 lg:p-20 min-h-full">
            <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-4 font-bold">{project.what}</p>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-[#1a1a1a] tracking-tight">{project.title}</h3>
            <p className="text-base md:text-lg font-light text-stone-600 mb-8 leading-relaxed">
              {project.desc}
            </p>
            
            {project.did && (
              <div className="mb-8 pl-4 border-l border-stone-200">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] mb-3 font-bold">What did I do?</h4>
                <p className="text-sm font-light text-stone-600 leading-relaxed">
                  {project.did}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 mb-12">
              {project.tools && project.tools.map((tool, idx) => {
                const name = Object.entries($with).find(([_, v]) => v.url === tool.url)?.[0] || 'tool';
                return (
                  <span key={idx} className="text-[10px] uppercase tracking-widest border border-stone-200 px-4 py-2 text-stone-600 font-sans">
                    {name}
                  </span>
                );
              })}
            </div>
            
            <div className="mt-auto pt-8 flex flex-col sm:flex-row flex-wrap gap-4">
              {project.links && project.links.length > 0 && project.links.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2"
                >
                  {link.name} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
              
              {project.youtube && (
                <a 
                  href={project.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-stone-300 text-[#1a1a1a] text-[10px] uppercase tracking-widest hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
                >
                  Watch Video <Youtube className="w-3 h-3" />
                </a>
              )}
              
              {( !project.links || project.links.length === 0 ) && !project.youtube && (
                <button onClick={onClose} className="px-8 py-3 border border-stone-300 text-[#1a1a1a] text-[10px] uppercase tracking-widest hover:bg-stone-50 transition-colors">
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
