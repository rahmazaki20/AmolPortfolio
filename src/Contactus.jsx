// import {useRef} from 'react'
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import { MessageCircle, Mail, User } from "lucide-react";

// export default function Contactus({ darkMode }) {
//    const form = useRef(null);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (!form.current) return;
// emailjs.send("xx","xx",{
// title: "test",
// name: "rahma",
// time: 13,
// message: "hello this is test",
// email: "rahmazaki@gmail.com",
// });
//     // emailjs.sendForm(
//     //     "service_39mqp1g",
//     //     "template_t534ajf",
//     //     form.current,
//     //     "iwx1jxCmz8U66E1QJ"
//     //   ).then(
//     //   (result) => {
//     //     alert("Message sent successfully!");
//     //     form.current.reset();
//     //   },
//     //   (error) => {
//     //     alert("Failed to send message: " + error.text);
//     //   }
//     // );
//   };

//   return (
//   <section id="contact" className={`py-32 transition-colors ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
//         <div className="container mx-auto px-6 max-w-5xl">
//           <div className={`rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border transition-all duration-500 ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100"}`}>
//             <div className="bg-amber-600 p-12 text-white md:w-2/5 flex flex-col justify-center">
//               <h2 className="text-4xl font-bold mb-6 italic">Let's Design Your Trip</h2>
              
//               <div className="space-y-4">
//                 <a href="https://wa.me/201016625800" target="_blank" className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-xl transition-all">
//                     <MessageCircle size={20}/> <span>WhatsApp Chat</span>
//                 </a>
//                 <a href="mailto:aml_3p1151997@icloud.com" className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-xl transition-all">
//                     <Mail size={20}/> <span>aml_3p1151997@icloud.com</span>
//                 </a> 
//                 <div className="flex items-center gap-3 p-2">
//                     <User size={20}/> <span>Personal Tour Guide</span>
//                 </div>
//               </div>
//             </div>

//             <form action="https://formsubmit.co/rahmazaki971@gmail.com" method="POST" className="p-12 md:w-3/5 space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input type="text" name="name" placeholder="Full Name" className={`w-full border-b-2 bg-transparent py-4 outline-none transition-colors ${darkMode ? "border-slate-700 text-white focus:border-amber-500" : "border-slate-100 text-slate-900 focus:border-amber-500"}`} required />
//                 <input type="email" name="email" placeholder="Email" className={`w-full border-b-2 bg-transparent py-4 outline-none transition-colors ${darkMode ? "border-slate-700 text-white focus:border-amber-500" : "border-slate-100 text-slate-900 focus:border-amber-500"}`} required />
//               </div>
//               <textarea name="message" placeholder="Trip details..." className={`w-full border-b-2 bg-transparent py-4 outline-none transition-colors ${darkMode ? "border-slate-700 text-white focus:border-amber-500" : "border-slate-100 text-slate-900 focus:border-amber-500"}`} rows="4" required />
//               <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className={`w-full py-5 rounded-2xl font-black text-xl shadow-xl transition-colors ${darkMode ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-white"}`}>Send Message</motion.button>
//             </form>
//           </div>
//           </div>
//       </section> 
//   )

// }



import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, User } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Contactus({ darkMode }) {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_39mqp1g",
        "template_t534ajf",
        form.current,
         "iwx1jxCmz8U66E1QJ"
      )
    .then(() => {
  Swal.fire({
    title: 'Message Sent! ✨',
    text: 'Thanks for reaching out! I\'ll get back to you within 24 hours.',
    icon: 'success',
    background: darkMode ? '#1e293b' : 'white',
    color: darkMode ? 'white' : 'black',
    confirmButtonColor: '#d97706',
    timer: 3000,
    timerProgressBar: true,
  });
})
  };

  return (
    <section id="contact" className={`py-32 transition-colors ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className={`rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border transition-all duration-500 ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100"}`}>
          <div className="bg-amber-600 p-12 text-white md:w-2/5 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 italic">Let's Design Your Trip</h2>
            
            <div className="space-y-4">
              <a href="https://wa.me/201016625800" target="_blank" className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-xl transition-all">
                <MessageCircle size={20}/> <span>WhatsApp Chat</span>
              </a>
              <a href="mailto:aml_3p1151997@icloud.com" className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-xl transition-all">
                <Mail size={20}/> <span>aml_3p1151997@icloud.com</span>
              </a> 
              <div className="flex items-center gap-3 p-2">
                <User size={20}/> <span>Personal Tour Guide</span>
              </div>
            </div>
          </div>

          {/* Use ref and onSubmit instead of action/method */}
          <form ref={form} onSubmit={sendEmail} className="p-12 md:w-3/5 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="user_name" placeholder="Full Name" className={`w-full border-b-2 bg-transparent py-4 outline-none transition-colors ${darkMode ? "border-slate-700 text-white focus:border-amber-500" : "border-slate-100 text-slate-900 focus:border-amber-500"}`} required />
              <input type="email" name="user_email" placeholder="Email" className={`w-full border-b-2 bg-transparent py-4 outline-none transition-colors ${darkMode ? "border-slate-700 text-white focus:border-amber-500" : "border-slate-100 text-slate-900 focus:border-amber-500"}`} required />
            </div>
            <textarea name="message" placeholder="Trip details..." className={`w-full border-b-2 bg-transparent py-4 outline-none transition-colors ${darkMode ? "border-slate-700 text-white focus:border-amber-500" : "border-slate-100 text-slate-900 focus:border-amber-500"}`} rows="4" required />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className={`w-full py-5 rounded-2xl font-black text-xl shadow-xl transition-colors ${darkMode ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-white"}`}>
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section> 
  );
}