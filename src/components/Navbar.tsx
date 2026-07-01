import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = Object.values(Category);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-colors duration-300 ${isScrolled ? 'bg-zinc-950/95 shadow-md backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 flex items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0 mr-8 cursor-pointer">
          <span className="text-red-600 text-2xl md:text-3xl font-bold tracking-tighter">BANDINOPLA</span>
        </div>

        {/* Primary Navigation */}
        <div className="hidden lg:flex items-center space-x-5 text-sm font-medium text-zinc-300">
          <a href="#" className="text-white font-semibold">Home</a>
          {categories.map(cat => (
            <a key={cat} href={`#${cat}`} className="hover:text-zinc-400 transition-colors">{cat}</a>
          ))}
        </div>

        {/* Secondary Navigation */}
        <div className="flex-grow flex justify-end items-center space-x-6 text-zinc-100">
          <button 
            onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden md:flex items-center space-x-2 bg-red-700/80 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm font-bold uppercase tracking-widest border border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all"
          >
            Contact me
          </button>
          <div className="relative flex items-center">
            <div className={`flex items-center bg-black/60 border border-zinc-600 transition-all duration-300 rounded ${isSearchActive || searchQuery ? 'w-48 sm:w-64 px-2 py-1' : 'w-0 border-transparent bg-transparent'}`}>
              <Search 
                className="w-5 h-5 cursor-pointer flex-shrink-0" 
                onClick={() => setIsSearchActive(!isSearchActive)}
              />
              <input 
                type="text" 
                placeholder="Titles, people, genres"
                className={`bg-transparent outline-none text-sm text-white ml-2 transition-all duration-300 ${isSearchActive || searchQuery ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => {
                  if (!searchQuery) setIsSearchActive(false);
                }}
              />
            </div>
          </div>
          {/* <Bell className="w-5 h-5 cursor-pointer hidden sm:block" />
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
              U
            </div>
            <span className="text-xs hidden sm:block">&#9662;</span>
          </div> */}
		 {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-4 pl-5">
            <a href="https://x.com/bandinopla" target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
            <a href="https://github.com/bandinopla" target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.youtube.com/@bandinopla" target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.6 5.9 3.5 5 4.7 4.9 8.2 4.6 11.8 4.6 15.3 4.9 16.5 5 17.4 5.9 17.5 7.1 17.8 9.3 17.8 11.7 17.5 13.9 17.4 15.1 16.5 16 15.3 16.1 11.8 16.4 8.2 16.4 4.7 16.1 3.5 16 2.6 15.1 2.5 13.9 2.2 11.7 2.2 9.3 2.5 7.1Z"></path><path d="M8 10L13 10.5 8 11V10Z"></path><path d="M10 8.5l4 2-4 2v-4z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
