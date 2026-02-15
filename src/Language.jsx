import React from "react";
import { Languages, Globe2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const languageData = [
  { 
    name: "Arabic", 
    native: "العربية", 
    level: "Native", 
    desc: "Experience local culture through its mother tongue.", 
    side: "left" 
  },
  { 
    name: "English", 
    native: "English", 
    level: "Professional", 
    desc: "Seamless communication for history and logistics.", 
    side: "right" 
  },
];

export default function Language({ darkMode }) {
  return (
    <section id="languages" className={`py-32 relative overflow-hidden transition-colors duration-1000 ${darkMode ? "bg-[#050505]" : "bg-slate-50"}`}>
      
      {/* 1. Background Visual Interest (Animated Orbs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 left-1/4 w-96 h-96 blur-[120px] rounded-full opacity-20 bg-amber-500 animate-pulse`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 blur-[120px] rounded-full opacity-20 bg-emerald-500 animate-pulse delay-700`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header: Centered & Minimal */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 mb-6"
          >
            <Languages size={14} className="text-amber-500" />
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Linguistic Bridge</span>
          </motion.div>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
            Bilingual <span className="text-transparent" style={{ WebkitTextStroke: darkMode ? "1px white" : "1px black" }}>Expertise</span>
          </h2>
        </div>

        {/* The Interactive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {languageData.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.95, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-12 rounded-[2.5rem] overflow-hidden border transition-all duration-700 ${
                darkMode 
                ? "bg-white/5 border-white/10 hover:bg-white/8" 
                : "bg-white border-slate-200 shadow-2xl shadow-slate-200/50"
              }`}
            >
              {/* Background Accent Number */}
              <span className="absolute -top-10 -right-4 text-[12rem] font-black opacity-[0.03] pointer-events-none uppercase">
                {lang.name[0]}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${darkMode ? "bg-amber-500/20 text-amber-500" : "bg-amber-100 text-amber-600"}`}>
                    <Globe2 size={28} />
                  </div>
                  <Sparkles size={20} className="text-amber-500/40 group-hover:rotate-45 transition-transform duration-500" />
                </div>

                <div className="space-y-2">
                  <h3 className={`text-4xl font-bold uppercase tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {lang.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-600 font-serif italic text-2xl">{lang.native}</span>
                    <span className={`h-px w-8 ${darkMode ? "bg-white/20" : "bg-slate-300"}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {lang.level}
                    </span>
                  </div>
                </div>

                <p className={`mt-8 text-lg leading-relaxed font-light max-w-70 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {lang.desc}
                </p>

                {/* Decorative "Status" bar */}
                <div className="mt-10 flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1 w-full rounded-full transition-all duration-1000 ${
                        idx < 4 ? "bg-amber-500" : darkMode ? "bg-white/10" : "bg-slate-200"
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Dialogue */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className={`font-mono text-xs uppercase tracking-[0.5em] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
            Bridging Worlds Through Words
          </p>
        </motion.div>
      </div>
    </section>
  );
}