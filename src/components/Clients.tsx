import { motion } from 'motion/react';

 

export default function Clients() {
  return (
    <section className="py-16 md:py-24 bg-stone-50 border-t border-stone-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-400 mb-3"
          >
            Selected Engagements
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-[1px] bg-stone-300 hidden lg:block"></div>
            <p className="text-xs font-light text-stone-500 tracking-widest leading-relaxed">
              Agency-Mediated <br className="hidden lg:block" /> Collaborations
            </p>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/3">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-8">
         
              <motion.img 
                src={"./logos.png"}
                alt={"Client's logos"}
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                whileInView={{ opacity: 0.3, scale:1.3, filter: 'blur(0px)' }}
                whileHover={{ opacity: 1, scale: 1.6 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-8 md:h-10 lg:h-12 object-contain cursor-pointer mix-blend-multiply transition-opacity duration-300"
                title={`Worked indirectly with these brands`}
              />
         
          </div>
        </div>
      </div>
    </section>
  );
}
