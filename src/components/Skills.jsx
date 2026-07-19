import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data'

export default function Skills({ lang }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const t = lang === 'id' ? { title: 'Keahlian', label: 'Skills' } : { title: 'My Skills', label: 'Skills' }

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2">{t.label}</p>
          <h2 className="section-title gradient-text">{t.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-pink-400 transition-colors">{s.name}</h3>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{s.category}</span>
                </div>
                <span className="text-2xl font-display font-bold gradient-text">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${s.level}%` } : {}}
                  transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary-500 to-pink-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
