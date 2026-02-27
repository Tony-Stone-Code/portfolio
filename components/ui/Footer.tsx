'use client'
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Tony-Stone-Code',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/anthony-opoku-acheampong/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:gammacube.info@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white">Tony Stone</span>
            </div>
            <p className="text-sm leading-relaxed">
              Python Developer, AI/ML Explorer & Cybersecurity Passionate.
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
            <a
              href="https://gammacube.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              GammaCube Agency <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>
            © {new Date().getFullYear()} Anthony Opoku-Acheampong (Tony Stone).
            All rights reserved.
          </p>
          <p>
            Built with{' '}
            <span className="text-blue-400">Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
