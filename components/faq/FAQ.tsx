'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'I offer Python development, AI/ML solutions, full-stack web applications (React + Next.js + Flask/FastAPI), data science & analytics, and cybersecurity consulting. Each service is tailored to your specific business needs.',
  },
  {
    q: "What's your hourly rate?",
    a: 'My rates vary based on project scope, complexity, and duration. Small scripts start from $50, web apps from $200, and AI/ML projects from $300. Contact me directly for a custom quote — I believe in transparent, fair pricing.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines depend on complexity. A simple automation script may take 1-3 days, a web application 2-6 weeks, and a full AI/ML solution 4-12 weeks. I always provide clear milestones and progress updates.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely! I work with clients globally. I am comfortable with remote collaboration, different time zones, and international payment methods. Communication is a priority throughout every project.',
  },
  {
    q: "What's the difference between hiring you vs GammaCube?",
    a: 'Hiring me directly is best for focused personal projects, consulting, or smaller engagements. GammaCube is my digital agency, ideal for larger enterprise projects, ongoing retainers, or when you need a full team (design, development, marketing) working together.',
  },
  {
    q: 'How do we get started?',
    a: 'Getting started is easy! Fill out the contact form below, send me an email at gammacube.info@gmail.com, or reach out on WhatsApp at +233598854433. I will respond within 24 hours with a project assessment.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.q}
                </span>
                {open === i ? (
                  <Minus size={16} className="shrink-0 text-blue-500" />
                ) : (
                  <Plus size={16} className="shrink-0 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3 bg-white dark:bg-gray-900">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
