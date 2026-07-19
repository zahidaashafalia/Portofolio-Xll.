import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../data'
import { ExternalLink, X } from 'lucide-react'

export default function Projects({ lang }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const t = lang === 'id' ? {
    title: 'Proyek Unggulan', label: 'Proyek',
    all: 'Semua', webdev: 'Web Developer', webdesign: 'Web Design',
    view: 'Lihat Detail', close: 'Tutup',
  } : {
    title: 'Featured Projects', label: 'Projects',
    all: 'All', webdev: 'Web Developer', webdesign: 'Web Design',
    view: 'View Details', close: 'Close',
  }

  const categories = ['All', 'Web Developer', 'Web Design']
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary-400 font-medium mb-2">{t.label}</p>
          <h2 className="section-title gradient-text">{t.title}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === c
                  ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass text-white/60 hover:text-white'
              }`}
            >
              {c === 'All' ? t.all : c === 'Web Developer' ? t.webdev : t.webdesign}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(p)}
                className="glass-card overflow-hidden cursor-pointer group"
              >
                <div className={`h-40 bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-dark-900/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-3xl text-white/90 group-hover:scale-110 transition-transform">
                      {p.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-dark-900/50 backdrop-blur text-xs text-white/80">
                    {p.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-pink-400 transition-colors">
                    {lang === 'id' ? p.title : p.titleEn}
                  </h3>
                  <p className="text-sm text-white/60 mb-3 line-clamp-2">{lang === 'id' ? p.description : p.descriptionEn}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-dark-900/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="glass rounded-3xl max-w-lg w-full overflow-hidden border border-primary-400/30"
            >
              <div className={`h-48 bg-gradient-to-br ${selected.color} relative`}>
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-900/50 flex items-center justify-center hover:bg-dark-900/80 transition-colors">
                  <X size={18} />
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-5xl text-white/90">
                    {selected.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary-400 font-medium uppercase tracking-wider">{selected.category}</span>
                <h3 className="font-display font-bold text-2xl mt-1 mb-3">{lang === 'id' ? selected.title : selected.titleEn}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{lang === 'id' ? selected.description : selected.descriptionEn}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {selected.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full text-xs bg-primary-500/10 text-pink-300 border border-primary-400/20">{tag}</span>
                  ))}
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <ExternalLink size={16} />
                  {t.view}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
