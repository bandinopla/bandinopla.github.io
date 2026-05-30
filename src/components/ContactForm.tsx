import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = () => {
    setStatus('submitting');
  };

  const handleIframeLoad = () => {
    if (status === 'submitting') {
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-100 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 lg:gap-24">
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] uppercase font-bold text-stone-400 mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#1a1a1a] tracking-tight leading-tight mb-6"
          >
            Start a Conversation.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-light text-stone-600 leading-relaxed mb-8"
          >
            Whether it's a new project, a technical hurdle, or just a quick hello. Drop a message below and I'll get back to you soon.
          </motion.p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2"
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center bg-white border border-stone-200 p-12 text-center">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xl font-serif mb-2 text-[#1a1a1a]">Message Sent</h4>
                <p className="text-sm font-light text-stone-500">Thank you for reaching out. I will reply shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-[10px] uppercase font-bold tracking-widest text-[#1a1a1a] hover:text-stone-400 transition-colors"
                >
                  Send Another
                </button>
            </div>
          ) : (
            <>
              <iframe 
                name="hidden_iframe" 
                id="hidden_iframe" 
                style={{ display: 'none' }} 
                onLoad={handleIframeLoad}
              />
              <form 
                // To make this work with your real Google Form:
                // 1. Replace the action URL with your Google Form response URL
                // 2. Map the "name" attributes of these inputs to the corresponding entry.XXXXX IDs from your Form
                action="https://docs.google.com/forms/d/e/1FAIpQLSdEWOOtnWBX2o4t2TP_0ahf3nXP4CFM29GFmyt3iaijCxDFGQ/formResponse" 
                method="POST" 
                target="hidden_iframe" // Directs the form response to the hidden iframe
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="entry.711409021" // Replace with real entry ID
                  required
                  className="w-full bg-white border border-stone-200 focus:border-[#1a1a1a] outline-none px-4 py-3 text-sm transition-colors text-[#1a1a1a]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="entry.1449638501" // Replace with real entry ID
                  required
                  className="w-full bg-white border border-stone-200 focus:border-[#1a1a1a] outline-none px-4 py-3 text-sm transition-colors text-[#1a1a1a]"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Message</label>
                <textarea 
                  name="entry.537701327" // Replace with real entry ID
                  required
                  rows={4}
                  className="w-full bg-white border border-stone-200 focus:border-[#1a1a1a] outline-none px-4 py-3 text-sm transition-colors resize-none text-[#1a1a1a]"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="group flex items-center justify-between w-full bg-[#1a1a1a] text-white px-6 py-4 hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-stone-400 font-light mt-2">
                This form connects to a Google Docs spreadsheet.
              </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
