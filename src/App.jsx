import { useState, lazy, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Competencies from './components/Competencies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Scene3D = lazy(() => import('./Scene3D'))

export default function App() {
  const [lang, setLang] = useState('id')
  const toggleLang = () => setLang(l => l === 'id' ? 'en' : 'id')

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900/80" />

      <div className="relative z-10">
        <Navbar lang={lang} onToggleLang={toggleLang} />
        <main>
          <Hero lang={lang} />
          <About lang={lang} />
          <Skills lang={lang} />
          <Competencies lang={lang} />
          <Projects lang={lang} />
          <Experience lang={lang} />
          <Contact lang={lang} />
        </main>
        <Footer lang={lang} />
      </div>
    </div>
  )
}
