import { motion } from 'motion/react';
import { experiments, PortfolioItem } from '../data';

interface StudioProps {
  onSelectExperiment: (experiment: PortfolioItem) => void;
}

export default function Studio({ onSelectExperiment }: StudioProps) {
  return (
    <section id="lab" className="py-24 md:py-40 bg-white border-t border-stone-100">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 px-6 md:px-12 mb-24 md:mb-40">
        <div className="w-full lg:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-400 mb-6"
          >
            The Studio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1a1a] tracking-tight leading-tight"
          >
            Independent <br /> Research & Play.
          </motion.h3>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="max-w-2xl">
                <p className="text-base md:text-lg font-light text-stone-600 leading-relaxed mb-8">
                I believe the best way to demonstrate skill is through tangible creation. Rather than just relying on past employment, my free time is dedicated to a continuous cycle of building and publishing interactive experiments online. 
                </p>
                <p className="text-base md:text-lg font-light text-stone-600 leading-relaxed mb-16">
                Almost exclusively driven by <span className="font-semibold text-[#1a1a1a]">Three.js</span>, these explorations act as a live sandbox to push technical boundaries. They often take the shape of 3D browser games, generative art pieces, or immersive web tools—designed not just to function, but to captivate.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-stone-100 pt-16">
              <div className="border border-stone-200 p-8 transform transition-transform duration-500 hover:-translate-y-2 hover:border-[#1a1a1a]">
                <div className="text-[10px] font-mono text-stone-400 mb-6">01 // 3D GAMES</div>
                <h4 className="text-2xl font-serif text-[#1a1a1a] mb-4">Browser-based Play</h4>
                <p className="text-sm font-light text-stone-600 leading-relaxed">Coding complete gameloops from scratch. Specializing in custom physics controllers using Rapier, spatial WebAudio, and optimized GLTF asset pipelines targeting both desktop and mobile.</p>
              </div>
              <div className="border border-stone-200 p-8 transform transition-transform duration-500 hover:-translate-y-2 hover:border-[#1a1a1a]">
                <div className="text-[10px] font-mono text-stone-400 mb-6">02 // INTERACTIVE APPS</div>
                <h4 className="text-2xl font-serif text-[#1a1a1a] mb-4">Immersive Utilities</h4>
                <p className="text-sm font-light text-stone-600 leading-relaxed">Crafting high-performance applications that blur the line between software utility and digital experience, leveraging modern React and custom generative rendering techniques.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">
          {experiments.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              onClick={() => onSelectExperiment(exp)}
              onMouseEnter={(e) => {
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.play().catch(()=>{});
              }}
              onMouseLeave={(e) => {
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.pause();
              }}
              className="aspect-square relative group cursor-pointer overflow-hidden bg-stone-100"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                style={{ backgroundImage: `url(${exp.cover || `/thumbnails/${exp.id}.jpg`})` }}
              />
              <video 
                src={`/thumbnails/${exp.id}.mp4`}
                loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[0.25,1,0.5,1] opacity-0 group-hover:opacity-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute top-4 left-4 right-4 z-10 transition-transform duration-500 transform group-hover:-translate-y-1">
                <span className="text-[9px] uppercase tracking-widest text-white font-medium bg-black/50 px-2 py-1 backdrop-blur-sm">
                  {exp.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
