import { profile } from '../data'
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react'

const iconMap = { github: Github, linkedin: Linkedin, instagram: Instagram, mail: Mail }

export default function Footer({ lang }) {
  const t = lang === 'id' ? {
    made: 'Dibuat dengan',
    by: 'oleh',
    rights: 'Hak cipta dilindungi.',
  } : {
    made: 'Made with',
    by: 'by',
    rights: 'All rights reserved.',
  }

  return (
    <footer className="relative py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-white/50">
          <span>{t.made}</span>
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
          <span>{t.by} {profile.name} · © {new Date().getFullYear()} · {t.rights}</span>
        </div>
        <div className="flex gap-3">
          {profile.socials.map(s => {
            const Icon = iconMap[s.icon]
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white hover:border-primary-400 transition-all"
                aria-label={s.name}
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
