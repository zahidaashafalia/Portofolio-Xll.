import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { profile } from '../data'
import { Github, Linkedin, Instagram, MapPin, Send, CheckCircle2 } from 'lucide-react'

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

export default function Contact({ lang }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const t = lang === 'id' ? {
    title: 'Hubungi Saya',
    label: 'Kontak',
    getInTouch: 'Mari berkolaborasi',
    desc: 'Tertarik bekerja sama atau punya pertanyaan? Hubungi langsung lewat WhatsApp!',
    phoneLabel: 'WhatsApp',
    locationLabel: 'Lokasi',
    formTitle: 'Kirim Pesan WhatsApp',
    namePlaceholder: 'Nama Anda',
    messagePlaceholder: 'Tulis pesan Anda...',
    send: 'Kirim ke WhatsApp',
    quickContact: 'Hubungi Langsung',
  } : {
    title: 'Get In Touch',
    label: 'Contact',
    getInTouch: "Let's collaborate",
    desc: 'Interested in working together or have a question? Reach me directly on WhatsApp!',
    phoneLabel: 'WhatsApp',
    locationLabel: 'Location',
    formTitle: 'Send a WhatsApp Message',
    namePlaceholder: 'Your Name',
    messagePlaceholder: 'Write your message...',
    send: 'Send to WhatsApp',
    quickContact: 'Quick Contact',
  }

  const sendToWhatsApp = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Halo Zahida, saya ${name || 'Tanpa Nama'}.\n\n${message}`
    )
    window.open(`${profile.wa}?text=${text}`, '_blank')
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2">{t.label}</p>
          <h2 className="section-title gradient-text">{t.title}</h2>
          <p className="text-white/60 mt-3 max-w-md mx-auto">{t.desc}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl font-bold mb-4">{t.getInTouch}</h3>

            <a
              href={profile.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-green-600/20 flex items-center justify-center border border-green-500/30">
                <WhatsAppIcon />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">{t.phoneLabel}</p>
                <p className="text-white/80 group-hover:text-green-400 transition-colors">{profile.phone}</p>
              </div>
            </a>

            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/30 to-pink-500/30 flex items-center justify-center border border-primary-400/20">
                <MapPin className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">{t.locationLabel}</p>
                <p className="text-white/80">{profile.location}</p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm text-white/40 mb-3">{t.quickContact}</p>
              <div className="flex gap-3">
                {profile.socials.map(s => {
                  const Icon = iconMap[s.icon]
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/70 hover:text-white hover:scale-110 hover:border-primary-400 transition-all"
                      aria-label={s.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={sendToWhatsApp}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 space-y-4"
          >
            <h3 className="font-display text-lg font-semibold mb-2 flex items-center gap-2">
              <WhatsAppIcon />
              {t.formTitle}
            </h3>
            <div>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all text-white placeholder-white/30"
                placeholder={t.namePlaceholder}
              />
            </div>
            <div>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all text-white placeholder-white/30 resize-none"
                placeholder={t.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] active:scale-95"
            >
              <Send size={16} />
              {t.send}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
