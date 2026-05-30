import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Clients from './components/Clients';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Studio from './components/Studio';
import ProjectModal from './components/ProjectModal';
import ContactForm from './components/ContactForm';
import { PortfolioItem } from './data';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedItem]);

  return (
    <div className="relative bg-white text-[#1a1a1a] min-h-screen font-sans selection:bg-[#1a1a1a] selection:text-white overflow-x-hidden">
      <Hero onSelectProject={setSelectedItem} />
      <Philosophy />
      <Clients />
      <Expertise />
      <Projects onSelectProject={setSelectedItem} />
      <OpenSource />
      <Studio onSelectExperiment={setSelectedItem} />
      
      <AnimatePresence>
        {selectedItem && (
          <ProjectModal 
            project={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
      
      <ContactForm />
      
      <footer className="py-24 text-center text-[10px] tracking-[0.2em] uppercase text-stone-400 font-sans border-t border-stone-100 bg-white">
        &copy; {new Date().getFullYear()} Bandinopla. <br className="md:hidden" /><span className="hidden md:inline"> &mdash; </span> Crafted with precision.
      </footer>
    </div>
  );
}
