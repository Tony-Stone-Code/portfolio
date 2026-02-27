'use client'
import { motion } from 'framer-motion'
import { Download, FolderGit2, Code2, Cpu } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Projects Completed', icon: FolderGit2 },
  { value: '20+', label: 'GitHub Repositories', icon: Code2 },
  { value: '10+', label: 'Technologies Mastered', icon: Cpu },
]

const codeLines = [
  { type: 'comment', text: '# Tony Stone – Developer Profile' },
  { type: 'keyword', text: 'class ', suffix: 'TonyStone', suffixType: 'class' },
  { type: 'plain', text: '    skills = [' },
  { type: 'string', text: '        "Python"', suffix: ', "AI/ML"', suffixType: 'string' },
  { type: 'string', text: '        "FastAPI"', suffix: ', "React"', suffixType: 'string' },
  { type: 'string', text: '        "Cybersecurity"', suffix: ',', suffixType: 'plain' },
  { type: 'plain', text: '    ]' },
  { type: 'plain', text: '' },
  { type: 'keyword', text: '    def ', suffix: 'solve_problems', suffixType: 'func' },
  { type: 'plain', text: '        return ', suffix: '"Innovative Solutions 🚀"', suffixType: 'string' },
]

export default function About() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="code-block">
              {/* Window dots */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-500 text-xs">tony_stone.py</span>
              </div>
              <pre className="text-sm leading-7 overflow-x-auto">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="block"
                  >
                    {line.type === 'comment' && (
                      <span className="code-comment">{line.text}</span>
                    )}
                    {line.type === 'keyword' && (
                      <>
                        <span className="code-keyword">{line.text}</span>
                        {line.suffix && (
                          <span className={`code-${line.suffixType}`}>{line.suffix}</span>
                        )}
                        {line.type === 'keyword' && line.text.includes('class') && (
                          <span className="code-plain">:</span>
                        )}
                      </>
                    )}
                    {line.type === 'string' && (
                      <>
                        <span className="code-string">{line.text}</span>
                        {line.suffix && (
                          <span className={`code-${line.suffixType}`}>{line.suffix}</span>
                        )}
                      </>
                    )}
                    {line.type === 'plain' && (
                      <>
                        <span className="text-gray-300">{line.text}</span>
                        {line.suffix && (
                          <span className={`code-${line.suffixType}`}>{line.suffix}</span>
                        )}
                      </>
                    )}
                    {line.type === 'func' && (
                      <>
                        <span className="code-keyword">{line.text}</span>
                        {line.suffix && (
                          <span className="code-func">{line.suffix}</span>
                        )}
                        <span className="text-gray-300">(self):</span>
                      </>
                    )}
                  </motion.div>
                ))}
              </pre>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Anthony Opoku-Acheampong
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m a passionate Python developer based in Ghana with a deep love for
              artificial intelligence and machine learning. I enjoy building tools that
              solve real-world problems—from career recommendation platforms powered by ML
              to intelligent chatbots and full-stack web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              As the founder of <span className="text-blue-400 font-semibold">GammaCube</span>,
              I&apos;m on a mission to bring cutting-edge digital solutions to African startups
              and enterprises. I believe technology can transform lives, and I code with that
              purpose every single day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <Icon className="mx-auto mb-2 text-blue-500" size={20} />
                  <div className="text-2xl font-bold text-blue-500">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-500/25"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
