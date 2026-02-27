export interface ChatResponse {
  message: string
  quickReplies?: string[]
}

const responses: Record<string, ChatResponse> = {
  greeting: {
    message:
      "Hi there! 👋 I'm Tony's virtual assistant. How can I help you today?",
    quickReplies: [
      'View Projects',
      'Pricing Info',
      'Book a Call',
      'WhatsApp',
    ],
  },
  projects: {
    message:
      "Tony has worked on several exciting projects including:\n\n🤖 Career Path Recommendation Platform (AI/ML)\n💬 AI Chatbot with Groq API\n🚀 Project Guider (FastAPI + React)\n🗂️ File Sorter Tool\n🎮 Hangman Game\n\nCheck out all projects on GitHub: https://github.com/Tony-Stone-Code",
    quickReplies: ['Pricing Info', 'Book a Call', 'WhatsApp'],
  },
  pricing: {
    message:
      "Tony's rates vary based on project complexity and duration:\n\n💡 Small projects (scripts, tools): From $50\n🌐 Web apps: From $200\n🤖 AI/ML solutions: From $300\n🔐 Cybersecurity audits: From $150\n\nContact Tony directly for a custom quote!",
    quickReplies: ['Book a Call', 'WhatsApp', 'View Projects'],
  },
  contact: {
    message:
      '📬 You can reach Tony through:\n\n📧 Email: gammacube.info@gmail.com\n📱 WhatsApp: +233598854433\n💼 LinkedIn: linkedin.com/in/anthony-opoku-acheampong\n\nOr fill out the contact form below!',
    quickReplies: ['View Projects', 'Pricing Info'],
  },
  services: {
    message:
      "Tony offers the following services:\n\n🐍 Python Development\n🤖 AI/ML Solutions\n🌐 Full Stack Web Apps\n📊 Data Science & Analytics\n🔐 Cybersecurity Consulting\n\nWould you like to know more about any specific service?",
    quickReplies: ['Pricing Info', 'Book a Call'],
  },
  skills: {
    message:
      "Tony's tech stack includes:\n\n💻 Languages: Python, JavaScript, TypeScript, SQL\n🛠️ Frameworks: Flask, FastAPI, React, Next.js\n🤖 AI/ML: TensorFlow, Scikit-learn, Pandas, NumPy\n☁️ Cloud: Azure, Vercel\n🔧 Tools: Git, Docker, VS Code",
    quickReplies: ['View Projects', 'Book a Call'],
  },
  gammacube: {
    message:
      "GammaCube is Tony's digital agency specializing in solutions for African startups and enterprises! 🚀\n\nServices include web development, mobile apps, AI solutions, and digital marketing.\n\nVisit: https://gammacube.vercel.app",
    quickReplies: ['Book a Call', 'WhatsApp'],
  },
  default: {
    message:
      "I'm not sure I understand that. Here are some things I can help you with:",
    quickReplies: ['View Projects', 'Pricing Info', 'Book a Call', 'WhatsApp'],
  },
}

export function getChatbotResponse(input: string): ChatResponse {
  const lower = input.toLowerCase()

  if (
    lower.includes('hello') ||
    lower.includes('hi') ||
    lower.includes('hey') ||
    lower.includes('start')
  ) {
    return responses.greeting
  }
  if (
    lower.includes('project') ||
    lower.includes('work') ||
    lower.includes('portfolio') ||
    lower.includes('github')
  ) {
    return responses.projects
  }
  if (
    lower.includes('price') ||
    lower.includes('pricing') ||
    lower.includes('cost') ||
    lower.includes('rate') ||
    lower.includes('how much') ||
    lower.includes('charge')
  ) {
    return responses.pricing
  }
  if (
    lower.includes('contact') ||
    lower.includes('email') ||
    lower.includes('reach') ||
    lower.includes('book') ||
    lower.includes('call') ||
    lower.includes('whatsapp')
  ) {
    return responses.contact
  }
  if (
    lower.includes('service') ||
    lower.includes('offer') ||
    lower.includes('do you')
  ) {
    return responses.services
  }
  if (
    lower.includes('skill') ||
    lower.includes('tech') ||
    lower.includes('stack') ||
    lower.includes('language') ||
    lower.includes('framework')
  ) {
    return responses.skills
  }
  if (
    lower.includes('gammacube') ||
    lower.includes('agency') ||
    lower.includes('company')
  ) {
    return responses.gammacube
  }

  return responses.default
}
