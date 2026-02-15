import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Images
import tour1Img from "./assets/imgs/tour1.jpg";
import tour2Img from "./assets/imgs/tour5.jpg";
import tour3Img from "./assets/imgs/tour3.jpg";
import tour4Img from "./assets/imgs/tour4.jpg";
import tour5Img from "./assets/imgs/tour8.jpg";

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
];
export default function Tours({ darkMode, setDarkMode }) {
  return (
    <>
      <section id="tours" className={`py-32 transition-colors overflow-hidden ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-black mb-16 ${darkMode ? "text-white" : "text-slate-900"}`}>Curated Expeditions</h2>
          <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 4000 }} spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className={`${darkMode ? "swiper-dark" : "swiper-light"} overflow-visible!`}>
            {tours.map((tour, i) => (
              <SwiperSlide key={i} className="py-12">
                <motion.div whileHover={{ y: -20 }} className={`group relative rounded-[3rem] shadow-2xl overflow-hidden border transition-all duration-500 h-125 ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100"}`}>
                  <img src={tour.img} alt={tour.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 p-10 text-white w-full">
                    <h3 className="text-3xl font-bold mb-2 leading-tight ">{tour.title}</h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{tour.desc}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}
