import { motion } from 'motion/react';
import { packages } from '../data';
import { ExternalLink, Package as PackageIcon } from 'lucide-react';

export default function OpenSource() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-stone-50 border-t border-stone-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-baseline"
        >
          <div>
            <h2 className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-400 mb-4">Open Source</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] tracking-tight">NPM Packages & Tooling</h3>
          </div>
          <p className="text-sm font-light text-stone-500 max-w-sm mt-6 md:mt-0 leading-relaxed">
            Designing developer tools requires a different mindset. It's about API ergonomics, zero-dependency philosophy, and writing clear documentation for other engineers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {packages.map((pkg, index) => (
            <motion.div
               key={pkg.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                    <div 
                        className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal"
                        style={{ backgroundImage: `url(${pkg.cover || `/thumbnails/${pkg.id}.jpg`})` }}
                    />
                    <video 
                      src={`/thumbnails/${pkg.id}.mp4`}
                      loop muted playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[0.25,1,0.5,1] opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-200/20 mix-blend-overlay"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4 text-[#1a1a1a]">
                        <PackageIcon className="w-4 h-4 text-stone-400" />
                        <h4 className="text-xl md:text-2xl font-serif tracking-tight">{pkg.title}</h4>
                    </div>
                    <p className="text-sm font-light text-stone-600 leading-relaxed mb-8 flex-1">
                        {pkg.desc}
                    </p>
                    {pkg.links && pkg.links.length > 0 && (
                      <a href={pkg.links[0].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-stone-400 transition-colors w-fit bg-stone-50 px-4 py-2 border border-stone-200 hover:border-stone-300">
                          View Project <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
