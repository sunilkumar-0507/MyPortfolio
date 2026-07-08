import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Process from './components/Process'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Process />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
