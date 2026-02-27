'use client'
import { motion } from 'framer-motion'

type Skill = { name: string; level?: number }

const categories: { label: string; emoji: string; skills: Skill[] }[] = [
  {
    label: 'Languages',
    emoji: '💻',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 72 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    label: 'Frameworks',
    emoji: '🛠️',
    skills: [
      { name: 'Flask', level: 88 },
      { name: 'FastAPI', level: 84 },
      { name: 'React', level: 78 },
      { name: 'Next.js', level: 73 },
      { name: 'Node.js', level: 65 },
    ],
  },
  {
    label: 'AI / ML',
    emoji: '🤖',
    skills: [
      { name: 'Scikit-learn', level: 86 },
      { name: 'TensorFlow', level: 72 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 88 },
      { name: 'spaCy', level: 70 },
    ],
  },
  {
    label: 'Cloud & DevOps',
    emoji: '☁️',
    skills: [
      { name: 'Azure', level: 68 },
      { name: 'Vercel', level: 82 },
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 64 },
    ],
  },
]

export default function Skills() {
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
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Tools and technologies I work with to build powerful, scalable solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-5"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span>{cat.emoji}</span> {cat.label}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            'Python', 'JavaScript', 'TypeScript', 'Flask', 'FastAPI', 'React',
            'Next.js', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'spaCy',
            'Azure', 'Vercel', 'Docker', 'Git', 'SQL', 'Node.js',
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
