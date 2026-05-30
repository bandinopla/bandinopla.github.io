import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlitchText from './GlitchText';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, PortfolioItem } from '../data';

interface HeroProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export default function Hero({ onSelectProject }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProjects = [] //projects.slice(0, 3);
  const totalSlides = 1 + featuredProjects.length;

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex flex-col">
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-8 z-50">
        <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#1a1a1a] bg-white/70 px-4 py-2 font-sans backdrop-blur-sm">Portfolio / {new Date().getFullYear()}</div>
        <nav className="hidden md:flex gap-10 text-[10px] tracking-[0.2em] uppercase font-medium text-[#1a1a1a] bg-white/70 px-8 py-2 font-sans backdrop-blur-sm">
            <button onClick={() => scrollTo('selected-works')} className="hover:text-stone-500 transition-colors cursor-pointer uppercase tracking-[0.2em]">Selected</button>
            <button onClick={() => scrollTo('philosophy')} className="hover:text-stone-500 transition-colors cursor-pointer uppercase tracking-[0.2em]">Philosophy</button>
            <button onClick={() => scrollTo('lab')} className="hover:text-stone-500 transition-colors cursor-pointer uppercase tracking-[0.2em]">Lab</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-stone-500 transition-colors cursor-pointer uppercase tracking-[0.2em]">Contact</button>
        </nav>
      </header>

      <div className="flex-1 relative w-full h-full">
        <AnimatePresence mode="wait">
          {currentSlide === 0 ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-12 px-6 md:px-12 pb-12 pt-24 bg-white"
            >
              <div className="md:col-span-5 relative h-full min-h-[50vh] flex items-center justify-center">
                <div className="w-full h-full md:h-4/5 bg-stone-100 overflow-hidden relative group">
                  <motion.div 
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply"
                    style={{ backgroundImage: `url('/profile.png')` }}
                  />
                  <div className="absolute inset-0 bg-stone-200/20 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute bottom-8 -right-4 bg-white px-6 py-4 border border-stone-200 transform -rotate-3 shadow-sm z-10 hidden lg:block">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Current Focus</p>
                    <p className="text-sm font-serif italic text-[#1a1a1a]">Three.js & TSL Shaders</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-center md:pl-16 mt-16 md:mt-0 z-10">
                <div className="relative mb-12">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="absolute -top-6 left-1 text-[10px] md:text-xs tracking-[0.5em] uppercase text-stone-400"
                  >
                    Creative Technologist
                  </motion.div>
                  <motion.h1 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.8] md:-ml-2 tracking-tighter uppercase text-[#1a1a1a]"
                  >
                    <GlitchText text="Bandi" /><br/><GlitchText text="nopla" />
                  </motion.h1>
                </div>
                
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="flex gap-6 md:gap-12 items-start"
                >
                  <div className="w-[1px] h-[100px] bg-[#1a1a1a] mt-2 opacity-20 shrink-0 hidden md:block"></div>
                 <div className="max-w-md">
  <p className="text-base md:text-lg leading-relaxed text-stone-600 mb-6 font-light">
    I'm Bandinopla. I build <span className="text-[#1a1a1a] font-semibold">3D experiences</span>, interactive apps, and/or casual games for the web — from <span className="text-[#1a1a1a] font-semibold">real-time rendering</span> to full-stack products with <span className="text-[#1a1a1a] font-semibold">React</span> and <span className="text-[#1a1a1a] font-semibold">Node.js</span>. Back-end experienced with <span className="text-[#1a1a1a] font-semibold">SQL</span> and <span className="text-[#1a1a1a] font-semibold">NoSQL</span>.
  </p>
  <p className="text-[10px] md:text-xs leading-loose tracking-wide text-stone-400 uppercase">
    From database to shader — whatever the layer, I can help.
  </p>
</div>
                </motion.div>
              </div>

              <div className="absolute top-1/2 right-6 lg:right-12 transform -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-20">
                <div className="text-[9px] uppercase tracking-[0.8em] rotate-180 text-black whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>Available for collaboration</div>
                <div className="w-[1px] h-24 bg-black mx-auto"></div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`slide-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full bg-stone-100"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply transition-transform duration-[10s] ease-out scale-100 hover:scale-110" 
                style={{ backgroundImage: `url(${featuredProjects[currentSlide - 1].cover || `/thumbnails/${featuredProjects[currentSlide - 1].id}.jpg`})` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-end items-start px-6 py-24 md:p-24 z-10 w-full md:w-5/6 lg:w-2/3">
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-4 font-sans">
                  <span className="bg-[#1a1a1a] text-stone-300 px-3 py-2 inline-block">Featured Work &mdash; {featuredProjects[currentSlide - 1].what}</span>
                </p>
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif mb-8 tracking-tight max-w-5xl leading-tight md:leading-snug text-white [-webkit-text-stroke:2px_#1a1a1a] md:[-webkit-text-stroke:3px_#1a1a1a] [paint-order:stroke_fill] drop-shadow-md">
                   {featuredProjects[currentSlide - 1].title}
                </h2>
                <button 
                  onClick={() => onSelectProject(featuredProjects[currentSlide - 1])}
                  className="w-fit px-8 py-4 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-widest hover:bg-black transition-colors shadow-2xl"
                >
                  Explore Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 z-40 flex gap-2 mix-blend-difference top-auto">
          {Array.from({ length: totalSlides }).map((_, idx) => (
             <button 
               key={idx} 
               onClick={() => setCurrentSlide(idx)}
               className={`w-12 h-1 transition-colors ${currentSlide === idx ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
             />
          ))}
        </div>
        
        {/* <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 z-40 flex flex-col gap-2">
           <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center bg-white/50 hover:bg-white text-[#1a1a1a] border border-stone-200 transition-colors backdrop-blur-sm">
             <ChevronLeft className="w-5 h-5" />
           </button>
           <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center bg-white/50 hover:bg-white text-[#1a1a1a] border border-stone-200 transition-colors backdrop-blur-sm">
             <ChevronRight className="w-5 h-5" />
           </button>
        </div> */}
      </div>
    </section>
  );
}
