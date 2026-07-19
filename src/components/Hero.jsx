import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react'
import { profile } from '../data'

const iconMap = { github: Github, linkedin: Linkedin, instagram: Instagram, mail: Mail }

export default function Hero({ lang }) {
  const t = lang === 'id' ? {
    greeting: 'Halo, Saya',
    subtitle: 'Selamat datang di portofolio saya',
    cta1: 'Lihat Proyek',
    cta2: 'Hubungi Saya',
    scroll: 'Scroll untuk melihat',
  } : {
    greeting: "Hi, I'm",
    subtitle: 'Welcome to my portfolio',
    cta1: 'View Projects',
    cta2: 'Contact Me',
    scroll: 'Scroll to explore',
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-sm text-white/80">{t.subtitle}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <p className="text-lg text-white/60 mb-2">{t.greeting}</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text text-glow">{profile.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium">
            {profile.title} · {profile.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
            {t.cta1}
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
            {t.cta2}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          {profile.socials.map(s => {
            const Icon = iconMap[s.icon]
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:scale-110 hover:border-primary-400 transition-all"
                aria-label={s.name}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs">{t.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
