import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { profile, bio, aboutSections } from '../data'
import { MapPin, Smartphone, GraduationCap, Code2, Wrench, BookOpen, Lightbulb, Music, Heart } from 'lucide-react'

const sectionIcons = {
  technicalSkills: Code2,
  tools: Wrench,
  learned: BookOpen,
  interests: Lightbulb,
  hobbies: Music,
  softSkills: Heart,
}

const sectionColors = {
  technicalSkills: 'from-primary-500/30 to-pink-500/30',
  tools: 'from-pink-500/30 to-primary-400/30',
  learned: 'from-primary-400/30 to-pink-600/30',
  interests: 'from-pink-600/30 to-primary-500/30',
  hobbies: 'from-primary-500/30 to-pink-400/30',
  softSkills: 'from-pink-400/30 to-primary-600/30',
}

export default function About({ lang }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const t = lang === 'id' ? {
    title: 'Tentang Saya',
    label: 'Tentang',
    location: 'Lokasi',
    education: 'Pendidikan',
    phone: 'WhatsApp',
    tags: ['Web Developer', 'UI/UX Designer', 'Laravel Enthusiast', 'AI Enthusiast'],
  } : {
    title: 'About Me',
    label: 'About',
    location: 'Location',
    education: 'Education',
    phone: 'WhatsApp',
    tags: ['Web Developer', 'UI/UX Designer', 'Laravel Enthusiast', 'AI Enthusiast'],
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
          <p className="text-primary-400 font-medium mb-2">{t.label}</p>
          <h2 className="section-title gradient-text">{t.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden gradient-border">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
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
            <p className="text-white/70 text-base leading-relaxed mb-6">{lang === 'id' ? bio.id : bio.en}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span>{profile.location}</span>
              </div>
              <a
                href={profile.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors group"
              >
                <Smartphone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="group-hover:underline">{profile.phone} (WhatsApp)</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <GraduationCap className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span>
                  {lang === 'id'
                    ? 'Kelas XII PPLG 2 — Pengembangan Perangkat Lunak dan Gim'
                    : 'Class XII PPLG 2 — Software & Game Development'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {t.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs glass text-white/70 border border-primary-400/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(aboutSections).map(([key, section], i) => {
            const Icon = sectionIcons[key]
            const colorClass = sectionColors[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-3 border border-primary-400/20`}>
                  <Icon className="w-5 h-5 text-pink-400" />
                </div>
                <h4 className="font-display font-semibold text-sm mb-2 text-white/90">
                  {lang === 'id' ? section.id : section.en}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {section.items.map(item => (
                    <span key={item} className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
