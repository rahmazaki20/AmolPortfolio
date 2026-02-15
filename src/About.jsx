import { motion} from "framer-motion"; 

export default function About({ darkMode, setDarkMode }) {
  return (
 <>
  <section id="about" className={`py-32 transition-colors ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-sm block mb-4">The Philosophy</span>
            <h2 className={`text-4xl md:text-6xl font-black mb-8 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Beyond The <span className="text-amber-500">Ancient Stones</span></h2>
            <p className={`text-2xl leading-relaxed italic font-light ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              "I don't just show you the monuments; I bring to life the soul of a 7,000-year-old civilization — through atmosphere, storytelling, and a memorable step-by-step adventure"
            </p>
          </motion.div>
        </div>
      </section>
 </>
  )
}
