import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Contactus from "./Contactus";
import Hero from "./Hero";
import About from "./About";
import Language from "./Language";
import Tours from "./Tours";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false); 
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <>
      <div className={`font-sans transition-colors duration-500 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"} selection:bg-amber-200 scroll-smooth`}>
        {/* 1. TOP PROGRESS BAR */}
        <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-amber-500 z-110 origin-left" style={{ scaleX }} />
        {/* FLOATING CONTACT ICONS */}
        {/* 2. NAVIGATION */}
        {/* 3. HERO SECTION */}
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* 4. ABOUT SECTION */}
        <About darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* 5. LANGUAGES SECTION */}
        <Language darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* 6. TOURS SECTION */}
        <Tours darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* 7. REVIEWS SECTION */}
        <Reviews darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* 8. FAQ SECTION */}
        <FAQ darkMode={darkMode} setDarkMode={setDarkMode}/>
        {/* 9. CONTACT SECTION */}
        <Contactus darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* 10. FOOTER - DESIGN RESTORED */}
        <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </>
  );
}
