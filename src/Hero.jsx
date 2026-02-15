import {ArrowRight, Sparkles, MessageCircle, Mail, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence,} from "framer-motion"; 
import { useState } from "react";
import heroImg from "./assets/imgs/home.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Languages", href: "#languages" },
  { name: "Tours", href: "#tours" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Hero({ darkMode, setDarkMode }) {
     const [menuOpen, setMenuOpen] = useState(false);
      const [faqIndex, setFaqIndex] = useState(0);
  return (
    <>
      {/* FLOATING CONTACT ICONS */}
      <div className="fixed bottom-6 right-6 z-100 flex flex-col gap-3">
        <a href="mailto:aml_3p1151997@icloud.com" className="bg-[#007AFF] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <Mail size={24} />
        </a>
        <a href="https://wa.me/201021828950" target="_blank" className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform relative">
          <MessageCircle size={24} />
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
        </a>
      </div>
        <header className={`fixed w-full z-50 transition-colors border-b ${darkMode ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-gray-100"} backdrop-blur-md`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            href="#" className="text-2xl font-black text-amber-600 tracking-tighter flex items-center gap-2"
          >
            <Sparkles size={24} /> AMOL TOURS
          </motion.a>
          
          <nav className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`relative transition-colors group text-sm uppercase tracking-widest ${darkMode ? "text-slate-300 hover:text-amber-500" : "text-slate-600 hover:text-amber-600"}`}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all ${darkMode ? "bg-slate-800 text-amber-400" : "bg-slate-100 text-slate-600"}`}
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="md:hidden text-2xl text-amber-600" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-b overflow-hidden ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-100"}`}
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className={`text-lg font-semibold ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <motion.div initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2 }} className="absolute inset-0 z-0">
                <div className={`absolute inset-0 z-10 transition-opacity ${darkMode ? "bg-black/70" : "bg-black/50"}`} />
                <img src={heroImg} className="w-full h-full object-cover" alt="Egypt Hero" />
              </motion.div>
              <div className="relative z-20 text-center text-white px-4">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase leading-tight">
                  Experience <br/> The Real Egypt
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl md:text-2xl mb-10 font-light tracking-[0.3em] uppercase">
                  Private Guiding • Tailored Secrets
                </motion.p>
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(245, 158, 11, 0.4)" }} 
                  whileTap={{ scale: 0.95 }} 
                  href="#contact" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-5 rounded-full text-lg font-black shadow-2xl inline-flex items-center gap-3 transition-all"
                >
                  Plan Your Journey <ArrowRight size={20} />
                </motion.a>
              </div>
            </section>
    </>
  )
}
