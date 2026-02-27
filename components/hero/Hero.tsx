'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
})

const roles = [
  'Python Developer 🐍',
  'Data Science Enthusiast 📊',
  'AI & ML Explorer 🤖',
  'Cybersecurity Passionate 🔐',
  'Open Source Contributor 💻',
]

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Tony-Stone-Code',
    label: 'GitHub',
    color: 'hover:text-white hover:bg-gray-700',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/anthony-opoku-acheampong/',
    label: 'LinkedIn',
    color: 'hover:text-white hover:bg-blue-700',
  },
  {
    icon: Mail,
    href: 'mailto:gammacube.info@gmail.com',
    label: 'Email',
    color: 'hover:text-white hover:bg-red-600',
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/233598854433',
    label: 'WhatsApp',
    color: 'hover:text-white hover:bg-green-600',
  },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    } else {
      const speed = isDeleting ? 50 : 80
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.slice(0, displayText.length - 1)
            : current.slice(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/30 via-transparent to-gray-950/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Available for freelance work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">Tony Stone</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="h-12 flex items-center justify-center mb-6"
        >
          <p className="text-xl sm:text-2xl text-gray-300">
            {displayText}
            <span className="animate-pulse text-blue-400">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I build intelligent Python applications, train ML models, and craft
          full-stack web experiences. Founder of{' '}
          <a
            href="https://gammacube.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            GammaCube
          </a>{' '}
          – digital solutions for African businesses.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-11 h-11 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-200 ${color}`}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Let&apos;s Work Together
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-7 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-700 transition-all duration-200"
          >
            View My Work
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </div>
  )
}
