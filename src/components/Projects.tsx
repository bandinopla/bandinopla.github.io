import { motion } from 'motion/react';
import { projects, PortfolioItem } from '../data';
import { Star, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="selected-works" className="bg-stone-50 border-t border-stone-100 py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline"
        >
          <h2 className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-400 mb-4 md:mb-0">Selected Works</h2>
          <p className="text-[10px] tracking-widest uppercase text-[#1a1a1a]">Scroll to Explore &darr;</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.2 }}
              className="bg-white border border-stone-200 overflow-hidden group hover:border-[#1a1a1a] transition-colors flex flex-col"
              onMouseEnter={(e) => {
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.play().catch(()=>{});
              }}
              onMouseLeave={(e) => {
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.pause();
              }}
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onSelectProject(project)}>
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal"
                  style={{ backgroundImage: `url(${project.cover || `/thumbnails/${project.id}.jpg`})` }}
                />
                <video 
                  src={`/thumbnails/${project.id}.mp4`}
                  loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[0.25,1,0.5,1] opacity-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-200/20 mix-blend-overlay"></div>
                <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-[#1a1a1a] bg-white/80 backdrop-blur-sm px-3 py-2 border border-stone-200/50 mix-blend-luminosity rounded-sm">
                  0{index + 1} &mdash; {project.what}
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4 text-[#1a1a1a]">
                  <Star className="w-4 h-4 text-stone-400" />
                  <h4 className="text-xl md:text-2xl font-serif tracking-tight">{project.title}</h4>
                </div>
                <p className="text-sm font-light text-stone-600 leading-relaxed mb-8 flex-1 line-clamp-4">
                  {project.desc}
                </p>
                <button 
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-stone-400 transition-colors w-fit bg-stone-50 px-4 py-2 border border-stone-200 hover:border-stone-300"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
