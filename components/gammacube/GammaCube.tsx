'use client'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Brain, TrendingUp, ExternalLink, ArrowRight } from 'lucide-react'

const gcServices = [
  { icon: Globe, label: 'Web Development' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Brain, label: 'AI Solutions' },
  { icon: TrendingUp, label: 'Digital Marketing' },
]

export default function GammaCube() {
  return (
    <section className="section-padding bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">
              My Agency
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
              <span className="gradient-text">GammaCube</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Digital Solutions for African Startups & Enterprises
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              GammaCube is a digital agency dedicated to empowering African businesses
              with cutting-edge technology. We build scalable web applications, AI-powered
              tools, and mobile solutions that drive real business growth.
            </p>

            {/* Services */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {gcServices.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <Icon size={18} className="text-cyan-400 shrink-0" />
                  <span className="text-sm text-gray-300">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://gammacube.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25"
              >
                <ExternalLink size={16} /> Visit GammaCube
              </a>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                Book Consultation <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 max-w-sm w-full">
                {/* Logo area */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <Globe size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">GammaCube</h3>
                <p className="text-gray-400 text-center text-sm mb-6">
                  gammacube.vercel.app
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-blue-400">10+</div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-cyan-400">15+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-purple-400">5+</div>
                    <div className="text-xs text-gray-500">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
