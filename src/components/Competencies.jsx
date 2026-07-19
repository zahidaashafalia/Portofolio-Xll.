import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { competencies } from '../data'
import { Layers, Palette, Layout, Server, Database, Code2, Users, Rocket } from 'lucide-react'

const iconMap = {
  analysis: Layers, design: Palette, frontend: Layout, backend: Server,
  database: Database, api: Code2, soft: Users, learning: Rocket,
}

export default function Competencies({ lang }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const t = lang === 'id' ? { title: 'Kompetensi PPLG', label: 'Kompetensi' } : { title: 'PPLG Competencies', label: 'Competencies' }

  return (
    <section id="competencies" ref={ref} className="relative py-24 px-6">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {competencies.map((c, i) => {
            const Icon = iconMap[c.icon]
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/30 to-pink-500/30 flex items-center justify-center mb-4 border border-primary-400/20">
                  <Icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="font-display font-semibold text-base mb-3">{lang === 'id' ? c.title : c.titleEn}</h3>
                <ul className="space-y-1.5">
                  {c.items.map(item => (
                    <li key={item} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
