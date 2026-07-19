import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience, techStack } from '../data'
import { Briefcase, GraduationCap, Code2 } from 'lucide-react'

export default function Experience({ lang }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const t = lang === 'id' ? {
    title: 'Pengalaman & Pendidikan', label: 'Perjalanan',
    tech: 'Teknologi yang Digunakan',
  } : {
    title: 'Experience & Education', label: 'Journey',
    tech: 'Technologies Used',
  }

  const iconMap = { Ekstrakurikuler: Briefcase, Pendidikan: GraduationCap }

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2">{t.label}</p>
          <h2 className="section-title gradient-text">{t.title}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-pink-500 to-transparent md:-translate-x-1/2" />

          {experience.map((e, i) => {
            const Icon = iconMap[e.type] || Briefcase
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-8 md:w-1/2 ${
                  isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                <div className="absolute left-6 md:left-auto md:right-0 top-0 md:translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-primary-500/40">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="glass-card p-5 ml-8 md:ml-0 w-full">
                  <span className="text-xs text-pink-400 font-medium uppercase tracking-wider">{e.type} · {e.period}</span>
                  <h3 className="font-display font-semibold text-lg mt-1 mb-2">{e.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{e.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex items-center gap-2 mb-5 justify-center">
            <Code2 className="w-5 h-5 text-pink-400" />
            <h3 className="font-display font-semibold text-xl">{t.tech}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass text-sm text-white/70 hover:text-white hover:border-primary-400/50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
