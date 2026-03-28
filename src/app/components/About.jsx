import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Heart, Coffee, Rocket, Users } from "lucide-react";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Heart,
      title: "Passionate",
      description: "Love crafting pixel-perfect interfaces",
    },
    {
      icon: Coffee,
      title: "Dedicated",
      description: "Committed to writing clean, maintainable code",
    },
    {
      icon: Rocket,
      title: "Innovative",
      description: "Always exploring cutting-edge technologies",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Great at working with cross-functional teams",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-80 transition-opacity duration-300"></div>

              <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Hey there! I'm a frontend developer with a passion for creating
              beautiful, functional, and user-friendly web applications. With 5+
              years of experience in the industry, I've worked on everything from
              small startup projects to large-scale enterprise applications.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I specialize in React, JavaScript, and modern web technologies.
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                  }}
                  className="group p-4 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10 hover:border-blue-500/30 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                >
                  <item.icon className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}