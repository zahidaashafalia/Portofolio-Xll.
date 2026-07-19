import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = {
  id: [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'competencies', label: 'Kompetensi' },
    { id: 'projects', label: 'Proyek' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'contact', label: 'Kontak' },
  ],
  en: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'competencies', label: 'Competencies' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
}

export default function Navbar({ onToggleLang, lang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const links = navLinks[lang]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const ids = links.map(l => l.id)
      const current = ids.findIndex(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      if (current >= 0) setActive(ids[current])
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-primary-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => go('home')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center font-display font-bold text-lg group-hover:scale-110 transition-transform">
            Z
          </div>
          <span className="font-display font-bold text-lg hidden sm:block">Zahida</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                active === l.id ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/40 to-pink-500/40 border border-primary-400/30"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
          <button
            onClick={onToggleLang}
            className="ml-2 px-3 py-2 rounded-full text-xs font-semibold border border-white/20 hover:border-primary-400 hover:bg-white/5 transition-all"
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map(l => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`text-left px-4 py-3 rounded-xl transition-all font-medium ${
                    active === l.id ? 'bg-primary-500/20 text-white' : 'text-white/70 hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => { onToggleLang(); setOpen(false) }}
                className="text-left px-4 py-3 rounded-xl text-white/70 hover:bg-white/5 font-medium"
              >
                {lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
