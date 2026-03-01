'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

// Devicon CDN helper
const devicon = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

type Skill = { name: string; level: number; icon: string }

const categories: { label: string; emoji: string; color: string; skills: Skill[] }[] = [
  {
    label: 'Languages',
    emoji: '💻',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python',     level: 92, icon: devicon('python') },
      { name: 'JavaScript', level: 80, icon: devicon('javascript') },
      { name: 'TypeScript', level: 72, icon: devicon('typescript') },
      { name: 'SQL',        level: 78, icon: devicon('postgresql') },
    ],
  },
  {
    label: 'Frameworks',
    emoji: '🛠️',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Flask',   level: 88, icon: devicon('flask', 'original-wordmark') },
      { name: 'FastAPI', level: 84, icon: devicon('fastapi') },
      { name: 'React',   level: 78, icon: devicon('react') },
      { name: 'Next.js', level: 73, icon: devicon('nextjs') },
      { name: 'Node.js', level: 65, icon: devicon('nodejs') },
    ],
  },
  {
    label: 'AI / ML',
    emoji: '🤖',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Scikit-learn',  level: 86, icon: devicon('scikitlearn') },
      { name: 'TensorFlow',    level: 72, icon: devicon('tensorflow') },
      { name: 'Pandas',        level: 90, icon: devicon('pandas') },
      { name: 'NumPy',         level: 88, icon: devicon('numpy') },
      { name: 'spaCy',         level: 70, icon: devicon('python', 'plain') },
    ],
  },
  {
    label: 'Cloud & DevOps',
    emoji: '☁️',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Azure',  level: 68, icon: devicon('azure') },
      { name: 'Vercel', level: 82, icon: devicon('vercel') },
      { name: 'Git',    level: 90, icon: devicon('git') },
      { name: 'Docker', level: 64, icon: devicon('docker') },
    ],
  },
]

const allBadges: { name: string; icon: string }[] = [
  { name: 'Python',       icon: devicon('python') },
  { name: 'JavaScript',   icon: devicon('javascript') },
  { name: 'TypeScript',   icon: devicon('typescript') },
  { name: 'Flask',        icon: devicon('flask', 'original-wordmark') },
  { name: 'FastAPI',      icon: devicon('fastapi') },
  { name: 'React',        icon: devicon('react') },
  { name: 'Next.js',      icon: devicon('nextjs') },
  { name: 'TensorFlow',   icon: devicon('tensorflow') },
  { name: 'Scikit-learn', icon: devicon('scikitlearn') },
  { name: 'Pandas',       icon: devicon('pandas') },
  { name: 'NumPy',        icon: devicon('numpy') },
  { name: 'Azure',        icon: devicon('azure') },
  { name: 'Vercel',       icon: devicon('vercel') },
  { name: 'Docker',       icon: devicon('docker') },
  { name: 'Git',          icon: devicon('git') },
  { name: 'SQL',          icon: devicon('postgresql') },
  { name: 'Node.js',      icon: devicon('nodejs') },
]

// 3-D tilt card wrapper
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), { stiffness: 200, damping: 25 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set(e.clientX - r.left - r.width / 2)
    y.set(e.clientY - r.top - r.height / 2)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 600 }}
      whileHover={{ scale: 1.03 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

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

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <TiltCard className="h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                {/* Category header */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-md`}>
                  <span className="text-lg">{cat.emoji}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                  {cat.label}
                </h3>

                {/* Skill rows */}
                <div className="space-y-3">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain"
                            unoptimized
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.05 }}
                          className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Badge cloud with icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {allBadges.map((badge) => (
            <motion.span
              key={badge.name}
              whileHover={{ scale: 1.12, y: -3 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default shadow-sm"
            >
              <Image
                src={badge.icon}
                alt={badge.name}
                width={18}
                height={18}
                className="w-[18px] h-[18px] object-contain"
                unoptimized
              />
              {badge.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
