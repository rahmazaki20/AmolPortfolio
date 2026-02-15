import { Languages, Globe2, CheckCircle2} from "lucide-react";
import { motion} from "framer-motion"; 

const languageData = [
  { name: "Arabic", native: "العربية", level: "Native Speaker", desc: "Experience the local culture through its mother tongue.", accent: "from-emerald-500 to-teal-600" },
  { name: "English", native: "English", level: "Professional Fluency", desc: "Seamless communication for history and logistics.", accent: "from-amber-500 to-orange-600" },
];

export default function Language({ darkMode, setDarkMode }) {
  return (
  <>
      <section id="languages" className={`py-32 transition-colors relative overflow-hidden ${darkMode ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-500 rounded-2xl text-white shadow-lg"><Languages size={28} /></div>
                <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm">Communication</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-black mb-6 leading-tight ${darkMode ? "text-white" : "text-slate-800"}`}>Fluent In <br /><span className="text-slate-400 font-light italic text-3xl md:text-4xl">History & Dialogue</span></h2>
              <p className={`text-lg max-w-md ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Every story sounds better in your own language.</p>
            </motion.div>
            <div className="lg:w-1/2 w-full grid sm:grid-cols-2 gap-8">
              {languageData.map((lang, i) => (
                <motion.div 
                    key={lang.name} whileHover={{ y: -10 }} className={`relative p-10 rounded-[3rem] shadow-xl border overflow-hidden transition-all duration-500 ${darkMode ? "bg-slate-700 border-slate-800" : "bg-white border-slate-100"}`}
                >
                  <div className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r ${lang.accent}`} />
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl ${darkMode ? "bg-slate-700" : "bg-slate-50"}`}><Globe2 size={32} /></div>
                    <CheckCircle2 className="text-emerald-500" size={24} />
                  </div>
                  <h3 className={`text-3xl font-black mb-1 ${darkMode ? "text-white" : "text-slate-900"}`}>{lang.name}</h3>
                  <p className="text-amber-600 font-bold mb-4 tracking-widest">{lang.native}</p>
                  <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{lang.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  </>
  )
}
