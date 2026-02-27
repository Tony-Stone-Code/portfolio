'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Kwame Asante',
    role: 'Founder & CEO',
    company: 'StartupGH',
    rating: 5,
    text: 'Tony built our entire company website and integrated an AI chatbot that handles 80% of customer queries. His Python skills and attention to detail are exceptional. Highly recommended for any serious project.',
    avatar: 'KA',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Data Science Lead',
    company: 'TechCorp Africa',
    rating: 5,
    text: 'We hired Tony for a machine learning project to predict customer churn. He delivered a model with 94% accuracy ahead of schedule. His understanding of both the technical and business aspects is impressive.',
    avatar: 'SM',
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Emmanuel Osei',
    role: 'Product Manager',
    company: 'FinTrack Ltd',
    rating: 5,
    text: 'Tony developed our financial analytics dashboard using FastAPI and React. The code quality is outstanding, and he provided excellent documentation. He is a rare developer who communicates clearly throughout the project.',
    avatar: 'EO',
    color: 'from-cyan-500 to-cyan-700',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            What Clients Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 sm:p-10 relative"
            >
              <Quote
                size={48}
                className="absolute top-6 right-8 text-blue-500/10"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-gray-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-blue-500 w-6' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
