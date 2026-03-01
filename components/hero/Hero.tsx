'use client'
import { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  User,
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

function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-150, 150], [18, -18]), {
    stiffness: 200,
    damping: 25,
  })
  const rotateY = useSpring(useTransform(x, [-150, 150], [-18, 18]), {
    stiffness: 200,
    damping: 25,
  })
  const shimmerX = useTransform(x, [-150, 150], [0, 100])
  const shimmerY = useTransform(y, [-150, 150], [0, 100])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      whileHover={{ scale: 1.04 }}
      className="relative w-64 h-64 sm:w-80 sm:h-80 cursor-pointer select-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
    >
      {/* Pulsing outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 opacity-50 blur-xl animate-pulse" />

      {/* Spinning decorative rings */}
      <div className="absolute -inset-5 rounded-full border border-blue-500/25 animate-spin-slow pointer-events-none" />
      <div
        className="absolute -inset-10 rounded-full border border-cyan-500/15 pointer-events-none"
        style={{ animation: 'spin 12s linear infinite reverse' }}
      />

      {/* Main circular card */}
      <div
        className="absolute inset-1 rounded-full bg-gray-900 border-2 border-blue-500/50 flex items-center justify-center overflow-hidden"
        style={{ transform: 'translateZ(30px)' }}
      >
        {/* Inner gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900 to-purple-900/40" />

        {/* Dynamic shimmer highlight based on mouse */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: useTransform(
              [shimmerX, shimmerY],
              ([sx, sy]) =>
                `radial-gradient(circle at ${sx}% ${sy}%, rgba(99,179,237,0.6) 0%, transparent 60%)`
            ),
          }}
        />

        {/* Placeholder avatar */}
        <div
          className="relative z-10 flex flex-col items-center gap-3"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-2 border-blue-400/40 flex items-center justify-center">
            <User size={56} className="text-blue-400/80" />
          </div>
          <span className="text-gray-500 text-xs tracking-wide">
            Photo Coming Soon
          </span>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-3 left-1/2 px-3 py-1 bg-gray-900 border border-blue-500/40 rounded-full text-blue-400 text-xs font-semibold shadow-lg"
        style={{ translateX: '-50%' }}
      >
        Anthony Opoku-Acheampong
      </motion.div>
    </motion.div>
  )
}

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
      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Available for freelance work
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">
                Anthony Opoku-Acheampong
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-12 flex items-center lg:justify-start justify-center mb-6"
            >
              <p className="text-xl sm:text-2xl text-gray-300">
                {displayText}
                <span className="animate-pulse text-blue-400">|</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed"
            >
              I build intelligent Python applications, train ML models, and
              craft full-stack web experiences. Founder of{' '}
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
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center lg:justify-start justify-center gap-3 mb-10"
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
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
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

          {/* 3D Profile image placeholder */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <ProfileCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </div>
  )
}
