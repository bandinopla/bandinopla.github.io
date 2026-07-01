import React, { useState } from 'react';
import { Eye, Code, Terminal, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [emailVisible, setEmailVisible] = useState(false);

  // Obfuscated email (base64 encoded to prevent simple scraping)
  const encodedEmail = "cGFibG9iYW5kaW5vcGxhQGdtYWlsLmNvbQ==";

  return (
    <div id="about-section" className="relative w-full min-h-[90vh] bg-zinc-950 flex flex-col justify-center overflow-hidden py-24">
      {/* Subtle Background pattern keeping the agency vibe */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/50 via-zinc-950 to-zinc-950 pointer-events-none"></div>

      {/* Central Portrait Image - Positioned absolutely to sit behind/between text */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[85%] md:h-[95%] z-0 pointer-events-none flex items-end justify-center">
        <img 
          src="/profile2.jpg" 
          alt="Operative Profile" 
          className="w-full h-full object-contain object-top [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] mix-blend-screen filter grayscale brightness-90"
        />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-12">
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
              Human Agent <br/><span className="text-red-500">Right Here!</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-md">
              With a seasoned eye for problem solving and development, I transform concepts into elegant, highly functional digital solutions. Either as a team player or a lone wolf, I get the job done. Drop me an email!
            </p>
          </div>

          {/* Email Decrypt */}
          <div className="bg-black/60 border border-zinc-800 p-5 rounded backdrop-blur-sm max-w-sm">
            <span className="text-zinc-500 block mb-3 uppercase tracking-widest text-xs font-bold">Direct Comms</span>
            <div className="flex items-center">
              {emailVisible ? (
                <span className="text-red-500 font-mono font-bold tracking-widest text-lg break-all">
                  {atob(encodedEmail)}
                </span>
              ) : (
                <div className="flex-grow flex items-center space-x-4">
                  <div className="flex-grow h-8 bg-zinc-800/80 rounded animate-pulse relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cGF0aCBkPSJNMCA4TDggMFY4SDBaIiBmaWxsPSIjMzMzIiAvPgo8L3N2Zz4=')] opacity-20"></div>
                  </div>
                  <button 
                    onClick={() => setEmailVisible(true)}
                    className="flex items-center space-x-2 bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded text-sm uppercase tracking-widest transition font-bold"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Decrypt</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-12 pt-4">
            <div>
              <h4 className="text-5xl text-white font-bold mb-2">98%</h4>
              <p className="text-zinc-500 text-sm uppercase tracking-wider">Mission Success</p>
            </div>
            <div>
               <h4 className="text-5xl text-white font-bold mb-2">100+</h4>
              <p className="text-zinc-500 text-sm uppercase tracking-wider">Assets Secured</p>
            </div>
          </div>
        </div>

        {/* Center Column - Spacer for the absolute image */}
        <div className="hidden md:block h-[500px]"></div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="flex items-start">
            <div className="mr-6 mt-1 flex-shrink-0">
              <Code className="w-10 h-10 text-red-500" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-3 uppercase tracking-wide">Full-Stack Prototyping</h4>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                I offer rapid prototyping services that bring your ideas into reality quickly to test and iterate. No imagination needed.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-6 mt-1 flex-shrink-0">
              <Terminal className="w-10 h-10 text-red-500" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-3 uppercase tracking-wide">System Architecture</h4>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Developing robust and scalable digital solutions enabling future expansion at minimal cost.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-6 mt-1 flex-shrink-0">
              <Layers className="w-10 h-10 text-red-500" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-3 uppercase tracking-wide">Diverse Tech Stack</h4>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Familiar with a wide range of technologies and technique allowing me to adapt to any project.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
