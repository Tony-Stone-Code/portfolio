'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github } from 'lucide-react'

const statsImages = [
  {
    src: 'https://github-readme-stats.vercel.app/api?username=Tony-Stone-Code&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117',
    alt: 'GitHub Stats',
    wide: true,
  },
  {
    src: 'https://streak-stats.demolab.com/?user=Tony-Stone-Code&theme=tokyonight&hide_border=true&background=0d1117',
    alt: 'GitHub Streak',
    wide: true,
  },
  {
    src: 'https://github-readme-stats.vercel.app/api/top-langs/?username=Tony-Stone-Code&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117',
    alt: 'Top Languages',
    wide: false,
  },
]

export default function GitHubStats() {
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
            Activity
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <Github size={32} /> GitHub Stats
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A snapshot of my open-source activity and coding habits.
          </p>
        </motion.div>

        {/* Stats images */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {statsImages.slice(0, 2).map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-950"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={200}
                unoptimized
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-950 max-w-sm w-full"
          >
            <Image
              src={statsImages[2].src}
              alt={statsImages[2].alt}
              width={400}
              height={180}
              unoptimized
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Profile link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/Tony-Stone-Code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-700 transition-colors"
          >
            <Github size={18} /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
