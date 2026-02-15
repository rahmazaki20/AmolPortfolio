import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function About({ darkMode }) {
  const containerRef = useRef(null);
  
  // Create a subtle parallax effect for the background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className={`relative py-32 md:py-48 overflow-hidden transition-colors duration-1000 ${
        darkMode ? "bg-[#0a0a0b]" : "bg-white"
      }`}
    >
      {/* 1. Large Background "Soul" Text (Parallax) */}
      <motion.div 
        style={{ x: textX }}
        className={`absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none opacity-[0.03] font-black text-[20vw] uppercase ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        History Culture Soul Adventure
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: The Label & Title */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-amber-500"></span>
                <span className="text-amber-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">
                  The Philosophy
                </span>
              </div>
              
              <h2 className={`text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase ${
                darkMode ? "text-white" : "text-slate-900"
              }`}>
                Beyond <br />
                <span className="text-transparent" style={{ WebkitTextStroke: darkMode ? "1px white" : "1px black" }}>
                  The Stones
                </span>
              </h2>
            </motion.div>
          </div>

          {/* RIGHT: The Immersive Quote */}
          <div className="lg:col-span-7 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative Quote Icon */}
              <Quote 
                size={80} 
                className="absolute -top-12 -left-8 text-amber-500/10 rotate-12" 
              />
              
              <p className={`text-2xl md:text-4xl leading-tight font-light italic relative z-10 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}>
                "I don't just show you the <span className="text-amber-500 font-normal not-italic">monuments</span>; 
                I bring to life the soul of a 7,000-year-old civilization through 
                <span className="underline decoration-amber-500/30 underline-offset-8"> atmosphere</span>, 
                storytelling, and a step-by-step adventure."
              </p>

              {/* Signature / Bio Accent */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="mt-12 h-px bg-linear-to-r from-amber-500 to-transparent" 
              />
              
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className={`text-sm font-bold uppercase tracking-widest ${darkMode ? "text-white" : "text-black"}`}>
                    Amal Tours
                  </p>
                  <p className="text-amber-600 font-mono text-[10px] uppercase">
                    Lead Private Guide
                  </p>
                </div>
                
                {/* Visual Accent: Tiny dots or pattern */}
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}