import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Languages, Globe2, CheckCircle2, HelpCircle, RefreshCcw, ArrowRight } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import heroImg from "./assets/imgs/home.png";
import tour1Img from "./assets/imgs/abusemple.png";
import tour2Img from "./assets/imgs/luxor.png";
import tour3Img from "./assets/imgs/mohamedAli.png";
import tour4Img from "./assets/imgs/palm.png";
import tour5Img from "./assets/imgs/Sphinx.png";
import BgImg from "./assets/imgs/luxor.png";
import Nile from "./assets/imgs/py.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Languages", href: "#languages" },
  { name: "Tours", href: "#tours" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const tours = [
  { img: tour1Img, title: "Cairo & Giza Highlights", desc: "Full day tour of the Great Pyramids, Sphinx & Egyptian Museum.", price: "$85" },
  { img: tour2Img, title: "Luxor Temples", desc: "Visit Karnak, Luxor & Valley of the Kings.", price: "$120" },
  { img: tour3Img, title: "Aswan & Nubian Culture", desc: "Experience the Nile & Nubian Villages.", price: "$90" },
  { img: tour4Img, title: "Palm Islands Tour", desc: "Explore modern Egypt coastlines.", price: "$75" },
  { img: tour5Img, title: "Sphinx & Pyramids", desc: "Iconic ancient wonders of Giza.", price: "$60" },
];

const languageData = [
  { 
    name: "Arabic", 
    native: "العربية", 
    level: "Native Speaker", 
    desc: "Experience the local culture through its mother tongue.",
    accent: "from-emerald-500 to-teal-600"
  },
  { 
    name: "English", 
    native: "English", 
    level: "Professional Fluency", 
    desc: "Seamless communication for history and logistics.",
    accent: "from-amber-500 to-orange-600"
  },
];

const faqData = [
  { q: "Do you arrange transportation?", a: "Yes, I provide private, air-conditioned luxury vehicles for all transfers and tours." },
  { q: "Can you customize tours?", a: "Absolutely! We can tailor every itinerary to match your specific interests and pace." },
  { q: "Do you help with tickets?", a: "I handle all entry ticket logistics so you can skip the long queues at the monuments." },
  { q: "Do you guide families with kids?", a: "I love teaching kids! I adapt my storytelling to be engaging and fun for all ages." },
  { q: "Is tipping expected in Egypt?", a: "Tipping (Baksheesh) is customary but optional. I can guide you on the local etiquette." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqIndex, setFaqIndex] = useState(0);

  const nextFaqCard = () => {
    setFaqIndex((prev) => (prev + 1) % faqData.length);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-amber-200">
      
      {/* 1. TOP PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-amber-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* 2. NAVIGATION */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#" 
            className="text-2xl font-black text-amber-600 tracking-tighter"
          >
            AMOL TOURS
          </motion.a>
          
          <nav className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-slate-600 hover:text-amber-600 transition-colors group text-sm"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button className="md:hidden text-2xl text-amber-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-slate-700">
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={heroImg} className="w-full h-full object-cover" alt="Egypt" />
        </motion.div>
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">Explore Egypt</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl md:text-2xl mb-10 font-light tracking-widest uppercase">Authentic History • Guided by Experts</motion.p>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#tours" className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl inline-block transition-colors">Start Your Adventure</motion.a>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-sm block mb-4">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Beyond the Monuments</h2>
            <p className="text-xl text-slate-600 leading-relaxed italic">"I don't just show you the stones; I tell you the secrets they've kept for 5,000 years."</p>
          </motion.div>
        </div>
      </section>

      {/* 5. LANGUAGES SECTION */}
      <section id="languages" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-500 rounded-2xl text-white shadow-lg"><Languages size={28} /></div>
                <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm">Communication</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Bridging Cultures <br /><span className="text-slate-400 font-light italic">In Your Language</span></h2>
              <p className="text-lg text-slate-600 max-w-md">History is better understood when spoken perfectly. I offer tours in two primary languages.</p>
            </motion.div>
            <div className="lg:w-1/2 w-full grid sm:grid-cols-2 gap-8">
              {languageData.map((lang, i) => (
                <motion.div key={lang.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} whileHover={{ y: -10 }} className="relative group p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${lang.accent}`} />
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500"><Globe2 size={32} /></div>
                    <CheckCircle2 className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">{lang.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{lang.native}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{lang.desc}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-700 uppercase"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{lang.level}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOURS SECTION */}
      <section id="tours" className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Latest Expeditions</h2>
            <div className="h-1.5 w-24 bg-amber-500 mt-4 rounded-full" />
          </div>
          <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 4000 }} spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="!overflow-visible">
            {tours.map((tour, i) => (
              <SwiperSlide key={i} className="py-12">
                <motion.div whileHover={{ y: -20, scale: 1.03 }} className="group relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 transition-all duration-500">
                  <div className="relative h-[450px] overflow-hidden">
                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 p-8 text-white">
                      <span className="bg-amber-500 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">{tour.price}</span>
                      <h3 className="text-3xl font-bold mb-2 leading-tight">{tour.title}</h3>
                      <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{tour.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 7. REVIEWS SECTION */}
      <section id="reviews" className="py-32 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">Traveler Stories</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { text: "Fantastic guide! Very knowledgeable about Egyptian history.", name: "John — USA" },
              { text: "Amazing experience & great photos! Highly recommended.", name: "Maria — Spain" },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-2xl italic font-light leading-relaxed">“{r.text}”</p>
                <footer className="mt-8 text-amber-500 font-bold uppercase tracking-widest">— {r.name}</footer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
<section id="faq" className="relative py-24 overflow-hidden">
  {/* 1. BACKGROUND IMAGE WITH OPACITY */}
  <div className="absolute inset-0 z-0">
    <img 
      src={Nile} 
      alt="Background"
      className="w-full h-full object-cover opacity-60" 
    />
    {/* Linear gradient makes the text more readable */}
    <div className="absolute inset-0 bg-gradient-to-b " />
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* Text Side */}
      <div className="lg:w-1/2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">
            <HelpCircle size={18} />
            Common Questions
          </div>
          {/* Changed text to white to contrast with dark background */}
          <h2 className="text-5xl font-black text-white mb-6 leading-tight">
            Curiosity <br /> 
            <span className="text-teal underline decoration-amber-500/30 underline-offset-8">Solved.</span>
          </h2>
          <p className="text-amber-600  text-lg mb-8 max-w-sm leading-relaxed">
            Click the card to toss it away and reveal the next answer. Simple, fast, and interactive.
          </p>
          
          {/* <button 
            onClick={nextFaqCard} 
            className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors font-bold group"
          >
            <RefreshCcw size={20} className="group-hover:rotate-180 transition-transform duration-500" /> 
            Reset or Skip Card
          </button> */}
        </motion.div>
      </div>

      {/* Card Stack Side */}
      <div className="lg:w-1/2 flex justify-center items-center h-[400px] relative">
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={faqIndex} 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ x: 500, rotate: 20, opacity: 0 }} 
            onClick={nextFaqCard} 
            className="absolute w-full max-w-[400px] aspect-square bg-white rounded-[2.5rem] shadow-2xl p-10 flex flex-col justify-between cursor-pointer border border-white/10 select-none group"
            style={{ zIndex: faqData.length - faqIndex }}
          >
            <div className="flex justify-between items-start">
              <span className="text-4xl font-black text-slate-100 group-hover:text-amber-100 transition-colors">
                0{faqIndex + 1}
              </span>
              <div className="p-3 bg-amber-50 rounded-full text-amber-600">
                <HelpCircle />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-600">
                {faqData[faqIndex].q}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {faqData[faqIndex].a}
              </p>
            </div>

            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-tighter">
              Next Question 
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Ghost Card (Visual depth) */}
        <div className="absolute w-full max-w-[400px] aspect-square bg-white/5 backdrop-blur-sm rounded-[2.5rem] -z-10 translate-y-4 scale-95 border border-white/10" />
      </div>

    </div>
  </div>
</section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <div className="bg-amber-600 p-12 text-white md:w-2/5 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 italic">Let's Design Your Trip</h2>
              <p className="text-white/80">I will get back to you within 24 hours.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }} className="p-12 md:w-3/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full border-b-2 border-slate-100 py-4 focus:border-amber-500 outline-none transition-colors" required />
                <input type="email" placeholder="Email" className="w-full border-b-2 border-slate-100 py-4 focus:border-amber-500 outline-none transition-colors" required />
              </div>
              <textarea placeholder="Tell me about your dream Egypt tour..." className="w-full border-b-2 border-slate-100 py-4 focus:border-amber-500 outline-none transition-colors" rows="4" required />
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl shadow-xl">Send Message</motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      {/* <footer className="bg-slate-950 text-white py-16 text-center">
        <p className="text-2xl font-black tracking-widest text-amber-500 mb-4 uppercase">Amol Tours</p>
        <p className="opacity-50 text-sm">© 2026. Handcrafted Experiences in the Land of Pharaohs.</p>
      </footer> */}
   <footer className="relative text-white py-24 overflow-hidden">
  {/* BACKGROUND IMAGE - NO COLORS */}
  <div className="absolute inset-0 z-0">
    <img 
      src={BgImg} 
      className="w-full h-full object-cover opacity-40" 
      //style={{ filter: 'grayscale(100%) brightness(40%)' }} // Pure B&W and very dark
      alt="Footer Background"
    />
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="text-3xl md:text-4xl font-black tracking-[0.3em] text-amber-500 mb-6 uppercase">
        Amol Tours
      </p>
        <p className="text-amber-500 text-md">© 2026. Handcrafted Experiences in the Land of Pharaohs.</p>
    </motion.div>
  </div>
</footer>
    </div>
  );
}