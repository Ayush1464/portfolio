import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Code2, Wrench, Database, Sparkles } from "lucide-react";

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript/ES6+", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Webpack/Vite", level: 80 },
        { name: "Redux/Zustand", level: 85 },
        { name: "React Query", level: 82 },
        { name: "Figma", level: 88 },
        { name: "Jest/Testing Library", level: 78 },
      ],
    },
    {
      icon: Database,
      title: "Backend Fundamentals",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Java", level: 75 },
        { name: "Spring Boot", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "Microservices Basics", level: 65 },
        { name: "JWT Authentication", level: 70 },
        { name: "Database Basics", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] h-full">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}
                >
                  <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl mb-6 flex items-center gap-2">
                  {category.title}
                  <Sparkles className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
