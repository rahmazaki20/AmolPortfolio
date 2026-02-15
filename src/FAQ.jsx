import { useState } from "react";
import { motion, AnimatePresence} from "framer-motion"; 
import { HelpCircle, ArrowRight} from "lucide-react";
import Nile from "./assets/imgs/py.png";

const faqData = [
  { q: "Do you arrange transportation?", a: "Yes, I provide private, air-conditioned luxury vehicles for all transfers and tours." },
  { q: "Can you customize tours?", a: "Absolutely! We can tailor every itinerary to match your specific interests and pace." },
  { q: "Do you help with tickets?", a: "I handle all entry ticket logistics so you can skip the long queues at the monuments." },
  { q: "Do you guide families with kids?", a: "I love teaching kids! I adapt my storytelling to be engaging and fun for all ages." },
  { q: "Is tipping expected in Egypt?", a: "Tipping (Baksheesh) is customary but optional. I can guide you on the local etiquette." },
];

  
  
export default function FAQ({ darkMode, setDarkMode }) {
     const [faqIndex, setFaqIndex] = useState(0);
     const nextFaqCard = () => setFaqIndex((prev) => (prev + 1) % faqData.length);
  return (
 <>
 <section id="faq" className="relative py-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img src={Nile} alt="Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Curiosity <br /> <span className="text-amber-500 italic">Satisfied.</span></h2>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center h-112.5 relative w-full">
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={faqIndex} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} 
                onClick={nextFaqCard} className={`absolute w-full max-w-105 rounded-[3rem] shadow-2xl p-10 md:p-12 flex flex-col justify-between cursor-pointer select-none ${darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-900"}`}
              >
                <HelpCircle className="text-amber-500" size={32} />
                <h3 className="text-xl md:text-2xl font-black mb-4">{faqData[faqIndex].q}</h3>
                <p className={`${darkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed text-lg`}>{faqData[faqIndex].a}</p>
                <div className="flex items-center gap-2 text-amber-600 font-black text-sm uppercase">Next <ArrowRight size={18} /></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
 </>
  )
}
