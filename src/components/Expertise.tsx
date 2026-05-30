import { motion } from 'motion/react';

export default function Expertise() {
  const skills = [
    {
      id: 'backend',
      number: '01',
      tag: 'BACKEND & INFRASTRUCTURE',
      title: 'Node.js Ecosystem',
      description: 'Extensive experience architecting robust backend services, RESTful APIs, and complex data pipelines. Proficient in scaling Node.js infrastructure, database management (SQL/NoSQL), and secure authentication flows.'
    },
    {
      id: 'frontend',
      number: '02',
      tag: 'CLIENT ARCHITECTURE',
      title: 'Modern SPA Frameworks',
      description: 'Deep expertise in React.js and modern component-oriented architecture. Strongly grounded in fundamental reactive patterns, state management, and virtual DOM concepts—principles that translate seamlessly to other ecosystems like Angular or Vue.'
    },
    {
      id: 'immersive',
      number: '03',
      tag: 'IMMERSIVE FULLSTACK',
      title: 'Three.js & WebGL',
      description: 'Specializing in high-performance 3D rendering and custom TSL/GLSL shaders. I bridge the gap between traditional web infrastructure and cinematic, interactive visual experiences without compromising performance.'
    },
    {
      id: 'integration',
      number: '04',
      tag: 'SYSTEMS INTEGRATION',
      title: 'AI & External Services',
      description: 'Seamlessly weaving LLMs (OpenAI, Gemini), payment gateways, and third-party microservices into the core product architecture to drive intelligent, modern capabilities.'
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-stone-100">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
        <div className="w-full md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-400 mb-6"
          >
            Technical Foundation
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif text-[#1a1a1a] tracking-tight leading-tight max-w-sm mb-6"
          >
            Beyond the visual canvas. Built on robust software engineering architectures.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-light text-stone-500 leading-relaxed max-w-sm"
          >
            While my passion lies in pushing the creative boundaries of the web using 3D, my foundation is deeply rooted in full-stack engineering. I bring complete end-to-end applications to production.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-[1px] h-16 bg-[#1a1a1a] mt-12 opacity-20 hidden md:block"
          />
        </div>
        
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="text-[10px] font-mono text-stone-400 mb-4 tracking-widest uppercase">
                {skill.number} // {skill.tag}
              </div>
              <h4 className="text-2xl font-serif text-[#1a1a1a] mb-4">{skill.title}</h4>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
