import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-40 px-6 md:px-12 bg-white flex justify-center items-center border-t border-stone-100">
      <div className="max-w-4xl flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-[1px] h-24 bg-[#1a1a1a] mb-12 opacity-20"
        ></motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-5xl font-serif mb-12 leading-tight tracking-tight text-[#1a1a1a]"
        >
          Elevating the medium through <br className="hidden md:block"/>
          <span className="italic text-stone-400">Three.js</span> and <span className="italic text-stone-400">TSL Shaders</span>.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg font-light font-sans text-stone-600 leading-relaxed mx-auto max-w-2xl"
        >
          These days, my creative design philosophy centers on building digital environments that are not just functional, but genuinely immersive. 
          By bridging high-performance React scalable applications with bespoke 3D pipelines, spatial audio, and cinematic physics, 
          I craft web experiences that feel tangible and performant. Clean, minimalist execution for complex systems.
        </motion.p>
      </div>
    </section>
  );
}
