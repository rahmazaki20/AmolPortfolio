import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Languages, Globe2, CheckCircle2, HelpCircle, ArrowRight, MapPin, Star, Sparkles } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images (Assume these are imported as per your original code)
import heroImg from "./assets/imgs/home.png";
import tour1Img from "./assets/imgs/tour1.jpg";
import tour2Img from "./assets/imgs/tour5.jpg";
import tour3Img from "./assets/imgs/tour3.jpg";
import tour4Img from "./assets/imgs/tour4.jpg";
import tour5Img from "./assets/imgs/tour8.jpg";
// import tour6Img from "./assets/imgs/tour6.jpg";
// import tour7Img from "./assets/imgs/tour7.jpg";

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
 {
    img: tour1Img,
    title: "Young Kuwaiti Visitor at the Giza Pyramids",
    desc: "A memorable guided visit for a young traveler from Kuwait at the Giza Pyramids, sharing ancient Egyptian stories in a fun and engaging way.",
  },

  {
    img: tour2Img,
    title: "Singaporean Siblings at Montaza Royal Palace",
    desc: "Guided tour for Singaporean brother and sister at Montaza Royal Palace in Alexandria, exploring royal history and seaside gardens.",
  },

  {
    img: tour3Img,
    title: "Singapore Group Tour – Saqqara Step Pyramid",
    desc: "Group cultural tour with visitors from Singapore at Saqqara, discovering the Step Pyramid and early pyramid development.",
  },

  {
    img: tour4Img,
    title: "Saqqara Archaeological Visit – Singapore Group",
    desc: "Guiding a Singaporean group through Saqqara’s archaeological site and ancient burial complexes.",
  },

  {
    img: tour5Img,
    title: "American Traveler Experience – Giza Plateau",
    desc: "Personal guided experience for an American visitor at the Giza Plateau with panoramic pyramid viewpoints and historical insights.",
  },
  
    // { img: tour6Img, title: "Sphinx & Pyramids", desc: "Iconic ancient wonders of Giza.", price: "$60" },
    //   { img: tour7Img, title: "Sphinx & Pyramids", desc: "Iconic ancient wonders of Giza.", price: "$60" },
];

const languageData = [
  { name: "Arabic", native: "العربية", level: "Native Speaker", desc: "Experience the local culture through its mother tongue.", accent: "from-emerald-500 to-teal-600" },
  { name: "English", native: "English", level: "Professional Fluency", desc: "Seamless communication for history and logistics.", accent: "from-amber-500 to-orange-600" },
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

  const nextFaqCard = () => setFaqIndex((prev) => (prev + 1) % faqData.length);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-amber-200 scroll-smooth">
      
      {/* 1. TOP PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-amber-500 z-100 origin-left" style={{ scaleX }} />

      {/* 2. NAVIGATION */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            href="#" className="text-2xl font-black text-amber-600 tracking-tighter flex items-center gap-2"
          >
            <Sparkles size={24} /> AMOL TOURS
          </motion.a>
          
          <nav className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative text-slate-600 hover:text-amber-600 transition-colors group text-sm uppercase tracking-widest">
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
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
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
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={heroImg} className="w-full h-full object-cover" alt="Egypt Hero" />
        </motion.div>
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase">
            Experience <br/> The Real Egypt
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl md:text-2xl mb-10 font-light tracking-[0.3em] uppercase">
            Private Guiding • Tailored Secrets
          </motion.p>
          
          {/* ✅ THE UPDATED BUTTON REDIRECTING TO CONTACT */}
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

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-sm block mb-4">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">Beyond The <span className="text-amber-500">Ancient Stones</span></h2>
            <p className="text-2xl text-slate-600 leading-relaxed italic font-light">
              "I don't just show you the monuments; I narrate the soul of a civilization that has lived for 5,000 years."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. LANGUAGES SECTION */}
      <section id="languages" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-500 rounded-2xl text-white shadow-lg"><Languages size={28} /></div>
                <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm">Communication</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Fluent In <br /><span className="text-slate-400 font-light italic text-3xl md:text-4xl">History & Dialogue</span></h2>
              <p className="text-lg text-slate-600 max-w-md">Every story sounds better in your own language. I provide professional guiding in:</p>
            </motion.div>
            <div className="lg:w-1/2 w-full grid sm:grid-cols-2 gap-8">
              {languageData.map((lang, i) => (
                <motion.div 
                    key={lang.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                    whileHover={{ y: -10 }} className="relative group p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r ${lang.accent}`} />
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-500"><Globe2 size={32} /></div>
                    <CheckCircle2 className="text-emerald-500" size={24} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-1">{lang.name}</h3>
                  <p className="text-amber-600 font-bold mb-4 tracking-widest">{lang.native}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{lang.desc}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-700 uppercase"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{lang.level}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOURS SECTION */}
      <section id="tours" className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex justify-between items-end">
            <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900">Curated Expeditions</h2>
                <div className="h-2 w-24 bg-amber-500 mt-4 rounded-full" />
            </div>
          </div>
          <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 4000 }} spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="!overflow-visible">
            {tours.map((tour, i) => (
              <SwiperSlide key={i} className="py-12">
                <motion.div whileHover={{ y: -20 }} className="group relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 transition-all duration-500 h-[500px]">
                  <img src={tour.img} alt={tour.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-0 p-10 text-white w-full">
                    {/* <span className="bg-amber-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block">{tour.price}</span> */}
                    <h3 className="text-3xl font-bold mb-2 leading-tight ">{tour.title}</h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{tour.desc}</p>
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
          <h2 className="text-5xl font-black text-center mb-20">Traveler Voices</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { text: "Fantastic guide! Very knowledgeable about Egyptian history. He made the Pyramids come alive.", name: "John — USA" },
              { text: "Amazing experience & great photos! Amol knows all the best spots away from the crowds.", name: "Maria — Spain" },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative">
                <Star className="text-amber-500 mb-6" fill="#f59e0b" />
                <p className="text-2xl italic font-light leading-relaxed">“{r.text}”</p>
                <footer className="mt-8 text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">— {r.name}</footer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section id="faq" className="relative py-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img src={Nile} alt="Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4 block">Information Desk</span>
                <h2 className="text-6xl font-black mb-6 leading-none">Curiosity <br /> <span className="text-amber-500 italic">Satisfied.</span></h2>
                <p className="text-slate-400 text-lg mb-8 max-w-sm">Planning a trip to Egypt can be complex. I'm here to make it simple.</p>
              </motion.div>
            </div>

            <div className="lg:w-1/2 flex justify-center items-center h-[450px] relative">
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key={faqIndex} initial={{ scale: 0.8, opacity: 0, x: 100 }} animate={{ scale: 1, opacity: 1, x: 0 }} exit={{ x: -100, opacity: 0, rotate: -10 }} 
                  onClick={nextFaqCard} className="absolute w-full max-w-[420px] bg-white rounded-[3rem] shadow-2xl p-12 flex flex-col justify-between cursor-pointer text-slate-900 select-none"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-5xl font-black text-slate-100">0{faqIndex + 1}</span>
                    <HelpCircle className="text-amber-500" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{faqData[faqIndex].q}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{faqData[faqIndex].a}</p>
                  </div>
                  <div className="flex items-center gap-2 text-amber-600 font-black text-sm uppercase tracking-widest">
                    Next Question <ArrowRight size={18} />
                  </div>
                </motion.div>
              </AnimatePresence>
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
    </div>
  );
}