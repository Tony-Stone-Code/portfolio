'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/233598854433?text=Hi+Tony!+I+found+your+portfolio+and+would+love+to+discuss+a+potential+project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] shadow-lg shadow-green-500/30 flex items-center justify-center relative"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-40" />
      <MessageCircle size={26} className="text-white relative z-10" fill="white" />
    </motion.a>
  )
}
