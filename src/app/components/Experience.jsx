import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Dreamwave Innovation Pvt. Ltd.",
      period: "December 2024 - Present",
      description:
        "Developing and maintaining scalable React.js applications with a focus on performance, accessibility, and responsive design across platforms.",
      achievements: [
        "Built and optimized reusable component-based UI systems using modern React (Hooks, modular architecture)",
        "Integrated RESTful APIs with secure authentication (JWT & session-based) and robust error handling",
        "Collaborated with Django backend teams for seamless frontend–backend integration and deployments",
        "Improved application performance using code splitting, lazy loading, and efficient state management",
        "Contributed to production debugging, UI enhancements, and overall application stability",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
              Journey
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-16 md:mb-20 ${
                index % 2 === 0
                  ? "md:pr-[50%] md:pl-0 pl-16"
                  : "md:pl-[50%] md:pr-0 pl-16 md:text-left"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-0 left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 transform md:-translate-x-1/2 z-10 ${
                  index % 2 === 0
                    ? "md:translate-x-[50%]"
                    : "md:-translate-x-[50%]"
                }`}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-ping opacity-75"></div>
              </div>

              {/* Card */}
              <div>
                <div className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                      <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 mb-2">
                        {exp.company}
                      </p>
                      <p className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((a, i) => (
                      <div key={i} className="flex gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        <p className="text-gray-400 text-sm">{a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}