import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'Tony Stone | Python Developer & AI/ML Engineer',
  description:
    'Portfolio of Anthony Opoku-Acheampong (Tony Stone) - Python Developer, Data Science Enthusiast, AI/ML Explorer, and Cybersecurity Passionate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
