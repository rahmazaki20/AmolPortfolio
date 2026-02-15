import { motion } from "framer-motion"; 

import review3 from "./assets/imgs/reviwe3.jpg";
import review4 from "./assets/imgs/reviwe4.jpg";
import review5 from "./assets/imgs/reviwe5.jpg";
import review6 from "./assets/imgs/reviwe6.jpg";
import review7 from "./assets/imgs/reviwe7.jpg";
import review8 from "./assets/imgs/reviwe8.jpg";
import review9 from "./assets/imgs/reviwe9.jpg";
import review10 from "./assets/imgs/reviwe10.jpg";
import review11 from "./assets/imgs/reviwe11.jpg";
import review12 from "./assets/imgs/reviwe12.jpg";
import review13 from "./assets/imgs/reviwe13.jpg";
import review14 from "./assets/imgs/reviwe14.jpg";
import review15 from "./assets/imgs/reviwe15.jpg";
import review16 from "./assets/imgs/reviwe16.jpg";
import review17 from "./assets/imgs/reviwe17.jpg";
import review18 from "./assets/imgs/reviwe18.jpg";
import review19 from "./assets/imgs/reviwe19.jpg";
import review20 from "./assets/imgs/reviwe20.jpg";
import review21 from "./assets/imgs/reviwe21.jpg";
import review22 from "./assets/imgs/reviwe22.jpg";
import review23 from "./assets/imgs/reviwe23.jpg";
import review24 from "./assets/imgs/reviwe24.jpg";
import review25 from "./assets/imgs/reviwe25.jpg";
import review26 from "./assets/imgs/reviwe26.jpg";
import review27 from "./assets/imgs/reviwe27.jpg";
import review28 from "./assets/imgs/reviwe28.jpg";
import review29 from "./assets/imgs/reviwe29.jpg";

const reviewImages = [
 review3, review4, review5, review6, review7, review8, review9, review10,
  review11, review12, review13, review14, review15, review16, review17, review18, review19, review20,
  review21, review22, review23, review24, review25, review26, review27, review28, review29
];
const col1 = reviewImages.slice(0, 10);
const col2 = reviewImages.slice(10, 20);
const col3 = reviewImages.slice(20, 29);

// Smaller slices for Mobile performance
const col1Mobile = reviewImages.slice(0, 5); 
const col2Mobile = reviewImages.slice(5, 10);

function ReviewCard({ img, darkMode }) {
  return (
    <motion.div 
      whileHover={{ scale: 0.98, rotate: 1 }}
      className={`relative rounded-2xl overflow-hidden border shadow-lg ${darkMode ? "border-slate-800" : "border-slate-100"}`}
    >
      <img src={img} alt="Guest Review" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-amber-500/10 opacity-0 hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function Reviews({ darkMode }) {
      
  return (
    <section id="reviews" className={`py-32 transition-colors overflow-hidden ${darkMode ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-sm block mb-4">The Guest Gallery</span>
            <h2 className={`text-5xl md:text-7xl font-black leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
              Trusted by <br /> <span className="text-amber-500 italic">Hundreds.</span>
            </h2>
          </div>
        </div>

        <div className="relative h-150 md:h-200 overflow-hidden group">
          {/* Shaders */}
          <div className={`absolute inset-x-0 top-0 h-40 z-20 pointer-events-none bg-linear-to-b ${darkMode ? "from-slate-950" : "from-white"} to-transparent`} />
          <div className={`absolute inset-x-0 bottom-0 h-40 z-20 pointer-events-none bg-linear-to-t ${darkMode ? "from-slate-950" : "from-white"} to-transparent`} />

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
            
            {/* COLUMN 1: Shows on all sizes, but limited items on Mobile */}
            <div className="flex flex-col gap-4 animate-scroll-slow">
              {/* Desktop view gets col1, Mobile gets col1Mobile */}
              <div className="hidden md:flex flex-col gap-4">
                {[...col1, ...col1].map((img, i) => <ReviewCard key={i} img={img} darkMode={darkMode} />)}
              </div>
              <div className="flex md:hidden flex-col gap-4">
                {[...col1Mobile, ...col1Mobile].map((img, i) => <ReviewCard key={i} img={img} darkMode={darkMode} />)}
              </div>
            </div>
            
            {/* COLUMN 2: Hidden on small phones (mobile), shows on Tablets (sm) and up */}
            <div className="hidden sm:flex flex-col gap-4 animate-scroll-fast mt-25">
               {/* Tablet view gets full col2, Small Tablet/Large Phone gets col2Mobile */}
               <div className="hidden lg:flex flex-col gap-4">
                {[...col2, ...col2].map((img, i) => <ReviewCard key={i} img={img} darkMode={darkMode} />)}
              </div>
              <div className="flex lg:hidden flex-col gap-4">
                {[...col2Mobile, ...col2Mobile].map((img, i) => <ReviewCard key={i} img={img} darkMode={darkMode} />)}
              </div>
            </div>

            {/* COLUMN 3: Desktop only */}
            <div className="hidden md:flex flex-col gap-4 animate-scroll-medium">
              {[...col3, ...col3].map((img, i) => (
                <ReviewCard key={i} img={img} darkMode={darkMode} />
              ))}
            </div>
          </div>
        </div>
      </section> 
  )
}