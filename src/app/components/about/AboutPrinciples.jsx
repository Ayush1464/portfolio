import { motion } from 'framer-motion';

export default function AboutPrinciples({ isInView }) {
  const principles = [
    {
      num: '01',
      title: 'BUILD WITH PURPOSE',
      desc: 'Good interfaces are not just visually refined. They simplify complex workflows and empower real people.',
    },
    {
      num: '02',
      title: 'DETAIL MATTERS',
      desc: 'Small interaction timings, spacing, typography, and rendering performance define how a product feels.',
    },
    {
      num: '03',
      title: 'ALWAYS LEARNING',
      desc: 'Technology evolves constantly. I continuously experiment with modern web architecture, state patterns, and AI tools.',
    },
    {
      num: '04',
      title: 'COLLABORATIVE CRAFT',
      desc: 'Great products are born from seamless collaboration across design, product, and backend engineering teams.',
    },
  ];

  return (
    <div className="mb-32 text-left">
      <div className="mb-12">
        <span className="text-xs font-bold text-blue-500 font-mono tracking-[0.2em] uppercase mb-2 block">
          02. PHILOSOPHY
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          How I approach software.
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 border border-gray-200/80 dark:border-white/10 hover:border-blue-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
          >
            <span className="text-3xl font-black text-blue-500/40 dark:text-blue-400/40 font-mono block mb-6 group-hover:text-blue-500 transition-colors">
              {item.num}
            </span>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-wider uppercase">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
