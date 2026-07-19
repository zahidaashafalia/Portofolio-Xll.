import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { profile } from '../data'
import { Mail, Github, Linkedin, Instagram, Send, MapPin, CheckCircle2 } from 'lucide-react'
import { supabase } from '../lib/supabase'

const iconMap = { github: Github, linkedin: Linkedin, instagram: Instagram, mail: Mail }

export default function Contact({ lang }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const t = lang === 'id' ? {
    title: 'Hubungi Saya', label: 'Kontak',
    name: 'Nama', email: 'Email', message: 'Pesan',
    send: 'Kirim Pesan', sending: 'Mengirim...',
    success: 'Pesan terkirim! Terima kasih telah menghubungi saya.',
    error: 'Gagal mengirim. Silakan coba lagi atau email langsung.',
    getInTouch: 'Mari berkolaborasi',
    desc: 'Tertarik bekerja sama atau punya pertanyaan? Kirim pesan!',
    directEmail: 'Email Langsung',
  } : {
    title: 'Get In Touch', label: 'Contact',
    name: 'Name', email: 'Email', message: 'Message',
    send: 'Send Message', sending: 'Sending...',
    success: 'Message sent! Thanks for reaching out.',
    error: 'Failed to send. Please try again or email directly.',
    getInTouch: "Let's collaborate",
    desc: 'Interested in working together or have a question? Drop a message!',
    directEmail: 'Direct Email',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError(lang === 'id' ? 'Mohon isi semua kolom.' : 'Please fill in all fields.')
      return
    }
    setStatus('loading')
    setError('')
    try {
      const { error: supaError } = await supabase
        .from('messages')
        .insert([{ name: form.name, email: form.email, message: form.message }])
      if (supaError) throw supaError
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setError(t.error)
      setTimeout(() => setStatus('idle'), 5000)
    }
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
            <a href={`mailto:${profile.email}`} className="glass-card p-4 flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/30 to-pink-500/30 flex items-center justify-center border border-primary-400/20">
                <Mail className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">{t.directEmail}</p>
                <p className="text-white/80 group-hover:text-pink-400 transition-colors">{profile.email}</p>
              </div>
            </a>
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/30 to-pink-500/30 flex items-center justify-center border border-primary-400/20">
                <MapPin className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider">{lang === 'id' ? 'Lokasi' : 'Location'}</p>
                <p className="text-white/80">{profile.location}</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
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
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 space-y-4"
          >
            <div>
              <label className="block text-sm text-white/60 mb-1.5">{t.name}</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-white placeholder-white/30"
                placeholder={t.name}
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1.5">{t.email}</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-white placeholder-white/30"
                placeholder={t.email}
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1.5">{t.message}</label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-white placeholder-white/30 resize-none"
                placeholder={t.message}
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                    <Send size={16} />
                  </motion.span>
                  {t.sending}
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={18} />
                  {t.success}
                </>
              ) : (
                <>
                  <Send size={16} />
                  {t.send}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
