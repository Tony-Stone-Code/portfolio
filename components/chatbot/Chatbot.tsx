'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { getChatbotResponse } from '@/lib/chatbot-responses'

type Message = {
  id: number
  sender: 'bot' | 'user'
  text: string
  quickReplies?: string[]
}

const welcome: Message = {
  id: 0,
  sender: 'bot',
  text: "Hi there! 👋 I'm Tony's virtual assistant. How can I help you today?",
  quickReplies: ['View Projects', 'Pricing Info', 'Book a Call', 'WhatsApp'],
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([welcome])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addMessage = (text: string, sender: 'user' | 'bot', quickReplies?: string[]) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender, text, quickReplies },
    ])
  }

  const handleSend = (text: string) => {
    if (!text.trim()) return
    addMessage(text, 'user')
    setInput('')

    setTimeout(() => {
      const resp = getChatbotResponse(text)
      addMessage(resp.message, 'bot', resp.quickReplies)
    }, 600)
  }

  const handleQuickReply = (reply: string) => {
    if (reply === 'WhatsApp') {
      window.open(
        'https://wa.me/233598854433?text=Hi+Tony!+I+found+your+portfolio+and+would+love+to+discuss+a+potential+project.',
        '_blank'
      )
      return
    }
    if (reply === 'View Projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
      return
    }
    if (reply === 'Book a Call') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
      return
    }
    handleSend(reply)
  }

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
            style={{ maxHeight: '480px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Tony&apos;s Assistant</div>
                  <div className="text-blue-100 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex items-start gap-2 ${
                      msg.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        msg.sender === 'bot'
                          ? 'bg-blue-600'
                          : 'bg-gray-600 dark:bg-gray-500'
                      }`}
                    >
                      {msg.sender === 'bot' ? (
                        <Bot size={13} className="text-white" />
                      ) : (
                        <User size={13} className="text-white" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line ${
                        msg.sender === 'bot'
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-sm'
                          : 'bg-blue-600 text-white rounded-tr-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>

                  {/* Quick replies */}
                  {msg.quickReplies && msg.sender === 'bot' && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-9">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleQuickReply(qr)}
                          className="text-xs px-3 py-1.5 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={() => handleSend(input)}
                className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-4 sm:left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white"
        aria-label="Open chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </>
  )
}
