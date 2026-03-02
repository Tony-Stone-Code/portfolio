# Tony Stone — Personal Portfolio

> 🚀 Modern personal portfolio for **Anthony Opoku-Acheampong (Tony Stone)** — Python Developer, AI/ML Engineer, and Founder of [GammaCube](https://gammacube.vercel.app).

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.162-white?logo=three.js)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055)](https://www.framer.com/motion/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Sections](#-sections)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contact](#-contact)

---

## 🌐 Overview

This is the source code for my personal portfolio website. It showcases my skills, projects, and services as a Python developer and AI/ML engineer based in Ghana. The site is built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, featuring rich animations powered by **Framer Motion** and an interactive 3D particle background powered by **Three.js**.

---

## 🔗 Live Demo

> _Coming soon — the site is deployed on [Vercel](https://vercel.com)._

---

## ✨ Features

- 🎨 **Dark / Light Theme** — seamless theme switching via a custom ThemeProvider
- 🌌 **3D Particle Background** — interactive Three.js particle canvas in the hero section
- ✍️ **Typing Animation** — animated role text cycles through multiple titles
- 🃏 **3D Tilt Profile Card** — mouse-tracked perspective rotation effect
- 🤖 **AI Chatbot** — integrated conversational chatbot powered by the Groq API
- 📱 **WhatsApp Quick Contact** — floating WhatsApp button for instant messaging
- 📊 **GitHub Stats** — live GitHub activity and repository stats
- 🎯 **Skill Bars** — animated progress bars with tech icons from Devicon CDN
- 🗂️ **Filterable Projects** — filter projects by category (AI/ML, Web Dev, Tools)
- 📱 **Fully Responsive** — optimised for all screen sizes

---

## 🗂 Sections

| Section | Description |
|---|---|
| **Hero** | Name, animated role titles, social links, and 3D profile card |
| **About** | Bio, animated Python code block, and key stats (15+ projects, 20+ repos) |
| **Services** | Python Dev, AI/ML Solutions, Full-Stack Web Apps, Data Analytics, Cybersecurity |
| **Projects** | Featured projects with tech stack, categories, and GitHub links |
| **GammaCube** | Spotlight on the GammaCube digital solutions startup |
| **Skills** | Tech stack breakdown across Languages, Frameworks, AI/ML, and Cloud/DevOps |
| **Testimonials** | Client and collaborator testimonials |
| **FAQ** | Answers to common questions |
| **Contact** | Contact form and direct contact links |

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 | React framework with App Router |
| [React](https://react.dev/) | 18 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations and transitions |
| [Three.js](https://threejs.org/) | 0.162 | 3D particle background |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 8 | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | 9 | Three.js helpers |
| [Lucide React](https://lucide.dev/) | 0.363 | Icon library |
| [React Hook Form](https://react-hook-form.com/) | 7 | Form state management |

### Skills Showcased
- **Languages:** Python · JavaScript · TypeScript · SQL
- **Frameworks:** Flask · FastAPI · React · Next.js · Node.js
- **AI / ML:** Scikit-learn · TensorFlow · Pandas · NumPy · spaCy
- **Cloud & DevOps:** Azure · Vercel · Git · Docker

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tony-Stone-Code/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── layout.tsx         # Root layout with ThemeProvider and metadata
│   └── page.tsx           # Home page — assembles all sections
├── components/
│   ├── about/             # About section with code block and stats
│   ├── chatbot/           # AI chatbot widget
│   ├── contact/           # Contact form section
│   ├── faq/               # FAQ accordion section
│   ├── gammacube/         # GammaCube company spotlight
│   ├── github-stats/      # Live GitHub stats display
│   ├── hero/              # Hero section with particle background
│   ├── projects/          # Filterable project cards
│   ├── services/          # Services offered section
│   ├── skills/            # Skill bars and tech badge cloud
│   ├── testimonials/      # Testimonial cards
│   ├── ui/                # Shared UI (Navbar, Footer, ThemeProvider)
│   └── whatsapp/          # Floating WhatsApp contact button
├── lib/                   # Utility functions
├── next.config.js         # Next.js configuration (image domains)
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 📬 Contact

| Channel | Link |
|---|---|
| 🐙 GitHub | [Tony-Stone-Code](https://github.com/Tony-Stone-Code) |
| 💼 LinkedIn | [anthony-opoku-acheampong](https://www.linkedin.com/in/anthony-opoku-acheampong/) |
| 📧 Email | [gammacube.info@gmail.com](mailto:gammacube.info@gmail.com) |
| 💬 WhatsApp | [+233 59 885 4433](https://wa.me/233598854433) |
| 🌐 GammaCube | [gammacube.vercel.app](https://gammacube.vercel.app) |

---

<p align="center">Built with ❤️ by <strong>Anthony Opoku-Acheampong (Tony Stone)</strong> — Ghana 🇬🇭</p>
