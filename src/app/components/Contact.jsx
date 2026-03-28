import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Mail, Phone, MapPin,
  Send,  Sparkles, 
  GitBranch,
  LinkIcon,
  TextWrap
} from "lucide-react";
import { useToast } from "./ui/toast";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { showToast } = useToast();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Message sent successfully 🚀", "success");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const socialLinks = [
    { name: "GitHub", icon: GitBranch, url: "#", color: "hover:text-white" },
    { name: "LinkedIn", icon: LinkIcon, url: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: TextWrap, url: "#", color: "hover:text-sky-400" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ayushmahapatra98@gmail.com", link: "mailto:..." },
    { icon: Phone, label: "Phone", value: "+91 9078721464", link: "tel:..." },
    { icon: MapPin, label: "Location", value: "Bhubaneswar, India", link: null },
  ];

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 relative bg-slate-950 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-xs font-bold text-purple-400 tracking-[0.2em] uppercase">
            <Sparkles className="w-3 h-3" /> Get In Touch
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Let's Start a <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* --- LEFT: CONTACT INFO --- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.08] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10">
              <h4 className="text-white font-bold mb-4">Social Ecosystem</h4>
              <div className="flex gap-4">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 transition-all ${s.color} hover:bg-white/10`}>
                    <s.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: THE FORM --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="lg:col-span-3 p-1 rounded-[2.5rem] bg-gradient-to-b from-white/15 to-transparent shadow-2xl"
          >
            <div className="bg-slate-900/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.4rem] border border-white/5">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="md:col-span-2 group relative flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-blue-400 transition-all active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Dispatching..." : (
                    <>
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}