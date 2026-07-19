import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { profile, bio } from '../data'
import { MapPin, Mail, GraduationCap } from 'lucide-react'

export default function About({ lang }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const t = lang === 'id' ? {
    title: 'Tentang Saya',
    about: 'Tentang',
    location: 'Lokasi',
    education: 'Pendidikan',
    bio: bio.id,
  } : {
    title: 'About Me',
    about: 'About',
    location: 'Location',
    education: 'Education',
    bio: bio.en,
  }

  return (
    <section id="about" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2">{t.about}</p>
          <h2 className="section-title gradient-text">{t.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 glass px-4 py-2 rounded-full text-sm font-medium">
                👩‍💻 Developer
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{profile.name}</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">{t.bio}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <GraduationCap className="w-5 h-5 text-pink-400" />
                <span>{lang === 'id' ? 'Class XII PPLG 2 - Pengembangan Perangkat Lunak dan Gim' : 'Class XII PPLG 2 - Software & Game Development'}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {['Web Developer', 'UI/UX Designer', 'Laravel Enthusiast', 'System Analyst'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs glass text-white/70 border border-primary-400/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
