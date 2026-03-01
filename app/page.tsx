import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Services from '@/components/services/Services'
import Projects from '@/components/projects/Projects'
import GammaCube from '@/components/gammacube/GammaCube'
import Skills from '@/components/skills/Skills'
import GitHubStats from '@/components/github-stats/GitHubStats'
import Testimonials from '@/components/testimonials/Testimonials'
import FAQ from '@/components/faq/FAQ'
import Contact from '@/components/contact/Contact'
import Chatbot from '@/components/chatbot/Chatbot'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="gammacube">
        <GammaCube />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="github">
        <GitHubStats />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Chatbot />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
