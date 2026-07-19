import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Instagram, Smartphone, Sparkles } from 'lucide-react'
import { profile } from '../data'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487" />
  </svg>
)

const iconMap = {
  whatsapp: WhatsAppIcon,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
}

export default function Hero({ lang }) {
  const t = lang === 'id' ? {
    greeting: 'Halo, Saya',
    subtitle: 'Selamat datang di portofolio saya',
    cta1: 'Lihat Proyek',
    cta2: 'Hubungi Lewat WA',
    scroll: 'Scroll untuk melihat',
  } : {
    greeting: "Hi, I'm",
    subtitle: 'Welcome to my portfolio',
    cta1: 'View Projects',
    cta2: 'Chat on WhatsApp',
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
            {lang === 'id' ? profile.title : profile.titleEn} · {lang === 'id' ? profile.tagline : profile.taglineEn}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            {t.cta1}
          </button>
          <a
            href={profile.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-green-600/80 hover:bg-green-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] active:scale-95"
          >
            <WhatsAppIcon />
            {t.cta2}
          </a>
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
