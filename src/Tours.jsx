import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectCreative, Parallax, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

// Images
import tour1Img from "./assets/imgs/tour1.jpg";
import tour2Img from "./assets/imgs/tour5.jpg";
import tour3Img from "./assets/imgs/tour3.jpg";
import tour4Img from "./assets/imgs/tour4.jpg";
import tour5Img from "./assets/imgs/tour8.png";
import tour6Img from "./assets/imgs/tour9.png";

const tours = [
  {
    img: tour1Img,
    title: "Giza Pyramids",
    location: "Cairo, Egypt",
    desc: "A memorable guided visit for a young traveler from Kuwait, sharing ancient stories in an engaging way.",
  },
  {
    img: tour2Img,
    title: "Montaza Palace",
    location: "Alexandria, Egypt",
    desc: "Exploring royal history and seaside gardens with siblings from Singapore.",
  },
 {
  img: tour6Img,
  title: "Giza Pyramids",
  location: "Giza, Egypt",
  desc: "A memorable guided visit at Sphinx with my visitors from Syria and Albania.",
},

  {
    img: tour4Img,
    title: "Archaeological Trail",
    location: "Saqqara, Egypt",
    desc: "Guiding visitors through ancient burial complexes and hidden desert tombs.",
  },
  {
    img: tour5Img,
    title: "The Giza Plateau",
    location: "Cairo, Egypt",
    desc: "Panoramic viewpoints and historical insights for an American traveler experience.",
  },
   {
    img: tour3Img,
    title: "Saqqara Step Pyramid",
    location: "Giza, Egypt",
    desc: "A deep dive into early pyramid development with a cultural group from Singapore.",
  },
];

export default function KineticTours({ darkMode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const bgColors = ["#1a1a1a", "#1e293b", "#2d2a26", "#1e1b1e", "#0f172a"];

  return (
    <section 
      id="tours" 
      className="relative min-h-screen py-20 lg:py-0 flex items-center overflow-hidden transition-colors duration-[1.5s]"
      style={{ backgroundColor: darkMode ? bgColors[activeIndex] : "#ffffff" }}
    >
      {/* 1. THE GIANT BACKGROUND TYPOGRAPHY - Responsive Size */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 0.1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-[35vw] lg:text-[25vw] font-black uppercase whitespace-nowrap ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {tours[activeIndex].title.split(" ")[0]}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 relative z-10">
     <Swiper
  // 1. Add a unique key so React treats it as a brand new component
  key={darkMode ? "dark" : "light"} 
  
  // 2. Ensure Autoplay is included in modules
  modules={[Pagination, Mousewheel, EffectCreative, Parallax, Autoplay]}
  
  // 3. Set the speed of the animation
  speed={10} 
  
  // 4. Force Autoplay with specific settings
  autoplay={{
    delay: 2000,              // Wait 2 seconds
    disableOnInteraction: false, // DON'T stop when user touches it
    pauseOnMouseEnter: false,    // DON'T stop when mouse hovers
  }}
  
  loop={true}
  parallax={true}
  mousewheel={{ forceToAxis: true }}
  grabCursor={true}
  effect={"creative"}
  creativeEffect={{
    prev: { translate: ["-120%", 0, -500], opacity: 0 },
    next: { translate: ["120%", 0, 0], opacity: 0 },
  }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="h-[70vh] overflow-visible!"
>
          {tours.map((tour, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center py-10 lg:py-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-8 lg:gap-12">
                
                {/* IMAGE BOX */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    clipPath: activeIndex === i ? "inset(0% 0% 0% 0%)" : "inset(10% 10% 10% 10%)",
                  }}
                  transition={{ duration: 1, ease: "circOut" }}
                  // Adjusted aspect ratios for tablet (aspect-video) and desktop (aspect-[4/5])
                  className="relative aspect-video lg:aspect-4/5 w-full max-w-lg mx-auto overflow-hidden shadow-2xl rounded-xl lg:rounded-none"
                >
                  <img 
                    src={tour.img} 
                    alt={tour.title}
                    data-swiper-parallax="-300" 
                    className="w-full h-full object-cover scale-110" 
                  />
{/*                   
                  <div className="absolute top-4 left-4 lg:top-10 lg:left-10 overflow-hidden">
                    <motion.p 
                      animate={activeIndex === i ? { y: 0 } : { y: 100 }}
                      className="text-white text-[10px] lg:text-xs font-mono tracking-[0.4em] uppercase bg-black/50 backdrop-blur-md p-2"
                    >
                      Expedition No. 0{i + 1}
                    </motion.p>
                  </div> */}
                </motion.div>

                {/* CONTENT BLOCK - Removed negative margin on mobile/tablet */}
                <div className="relative z-20 -mt-12 lg:mt-0 lg:-ml-20 px-4 lg:px-0">
                  <motion.div
                    animate={activeIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className={`p-6 md:p-10 lg:p-12 max-w-lg shadow-2xl backdrop-blur-xl rounded-2xl lg:rounded-none border ${
                      darkMode ? "bg-slate-900/90 border-white/10" : "bg-white/90 border-black/5"
                    }`}
                  >
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {tour.title}
                    </h3>
                    <p className={`text-sm md:text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {tour.desc}
                    </p>
                    <button className="relative overflow-hidden group py-2 lg:py-3 px-6 lg:px-8 uppercase tracking-tighter font-bold text-xs lg:text-sm border-b-2 border-amber-500 transition-colors">
                      <span className="relative z-10 group-hover:text-amber-500 transition-colors">Discover More</span>
                    </button>
                  </motion.div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PROGRESS TRACKER - Hidden on very small screens or made smaller */}
      <div className="absolute bottom-6 lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        <span className="text-[10px] font-mono opacity-50">01</span>
        <div className={`w-32 md:w-48 h-px lg:h-0.5 relative ${darkMode ? "bg-white/10" : "bg-black/10"}`}>
          <motion.div 
            className="absolute top-0 left-0 h-full bg-amber-500"
            animate={{ width: `${((activeIndex + 1) / tours.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-[10px] font-mono opacity-50">0{tours.length}</span>
      </div>
    </section>
  );
}