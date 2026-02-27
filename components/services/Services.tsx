'use client'
import { motion } from 'framer-motion'
import { Code2, Brain, Globe, BarChart2, Shield, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Python Development',
    description:
      'Custom Python scripts, automation pipelines, and RESTful APIs using Flask & FastAPI. From web scraping to process automation.',
    tags: ['Flask', 'FastAPI', 'Automation', 'REST APIs'],
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Brain,
    title: 'AI/ML Solutions',
    description:
      'End-to-end machine learning models, data pipelines, NLP systems, and AI-powered applications tailored to your business needs.',
    tags: ['TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision'],
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Globe,
    title: 'Full Stack Web Apps',
    description:
      'Modern, responsive web applications with React, Next.js frontend and Python backend. Deployed on cloud platforms.',
    tags: ['React', 'Next.js', 'Flask', 'Azure'],
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    icon: BarChart2,
    title: 'Data Science & Analytics',
    description:
      'Comprehensive data analysis, visualization dashboards, and actionable insights from complex datasets.',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI'],
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Consulting',
    description:
      'Security audits, vulnerability assessments, ethical hacking, and penetration testing to protect your digital assets.',
    tags: ['Ethical Hacking', 'Pen Testing', 'Security Audits', 'OWASP'],
    color: 'from-red-500 to-red-700',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I offer a range of technical services to help businesses and individuals
            build smarter, more efficient digital solutions.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 overflow-hidden card-hover"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
              >
                <service.icon size={22} className="text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-400 font-medium group-hover:gap-2 transition-all"
              >
                Get Started <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
