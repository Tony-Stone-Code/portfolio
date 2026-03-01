'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Tag } from 'lucide-react'

type FilterType = 'All' | 'AI/ML' | 'Web Dev' | 'Tools'

const projects = [
  {
    title: 'Career Path Recommendation Platform',
    description:
      'An intelligent platform that uses machine learning to recommend career paths based on user skills, interests, and market trends. Deployed on Azure.',
    tech: ['Flask', 'React', 'Scikit-learn', 'Azure', 'Python'],
    category: 'AI/ML' as FilterType,
    github: 'https://github.com/Tony-Stone-Code',
    color: 'from-purple-500/20 to-blue-500/20',
    accent: '#8b5cf6',
  },
  {
    title: 'AI Chatbot',
    description:
      'A conversational AI chatbot powered by the Groq API with a clean, responsive UI. Supports multi-turn conversations with context memory.',
    tech: ['Flask', 'Groq API', 'CSS3', 'JavaScript'],
    category: 'AI/ML' as FilterType,
    github: 'https://github.com/Tony-Stone-Code',
    color: 'from-cyan-500/20 to-blue-500/20',
    accent: '#06b6d4',
  },
  {
    title: 'Project Guider',
    description:
      'A full-stack web application that helps developers organize, track, and manage their software projects with team collaboration features.',
    tech: ['FastAPI', 'React', 'Vite', 'Python'],
    category: 'Web Dev' as FilterType,
    github: 'https://github.com/Tony-Stone-Code',
    color: 'from-emerald-500/20 to-cyan-500/20',
    accent: '#10b981',
  },
  {
    title: 'File Sorter',
    description:
      'A Python utility tool that automatically organizes files in a directory by type, date, or custom rules. Saves hours of manual file management.',
    tech: ['Python', 'OS Module', 'Pathlib'],
    category: 'Tools' as FilterType,
    github: 'https://github.com/Tony-Stone-Code',
    color: 'from-orange-500/20 to-yellow-500/20',
    accent: '#f59e0b',
  },
  {
    title: 'Hangman Game',
    description:
      'A feature-rich Hangman game with a graphical interface built using Tkinter. Includes word categories, difficulty levels, and score tracking.',
    tech: ['Python', 'Tkinter', 'Random'],
    category: 'Tools' as FilterType,
    github: 'https://github.com/Tony-Stone-Code',
    color: 'from-pink-500/20 to-red-500/20',
    accent: '#ec4899',
  },
]

const filters: FilterType[] = ['All', 'AI/ML', 'Web Dev', 'Tools']

export default function Projects() {
  const [active, setActive] = useState<FilterType>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from AI-powered platforms to
            developer tools.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Tag size={13} />
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative bg-gradient-to-br ${project.color} border border-gray-200 dark:border-gray-800 rounded-2xl p-6 overflow-hidden card-hover bg-white dark:bg-gray-950`}
              >
                {/* Category badge */}
                <span
                  className="inline-block px-2 py-1 rounded-md text-xs font-semibold mb-3"
                  style={{
                    backgroundColor: `${project.accent}20`,
                    color: project.accent,
                  }}
                >
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={15} /> Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Tony-Stone-Code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-700 transition-colors"
          >
            <Github size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
