import { motion } from "framer-motion"; 
import BgImg from "./assets/imgs/luxor.png";

export default function Footer() {
  return (
<>
     <footer className="relative text-white py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src={BgImg} className="w-full h-full object-cover opacity-50 grayscale" alt="Footer Background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-4xl md:text-6xl font-black tracking-[0.4em] text-amber-500 mb-8 uppercase">AMOL TOURS</p>
            <div className="h-px w-32 bg-amber-500/30 mx-auto mb-8" />
            <p className="text-amber-500/60 text-sm font-bold tracking-widest uppercase italic">© 2026. Handcrafted Experiences in the Land of Pharaohs.</p>
          </motion.div>
        </div>
      </footer>
</>
  )
}
