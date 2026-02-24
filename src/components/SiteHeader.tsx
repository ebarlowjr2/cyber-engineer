import type { LucideIcon } from 'lucide-react'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { MobileNav } from './MobileNav'
import { socialLinks } from '../data/site'

const socialIconMap: Record<string, LucideIcon> = {
  Github,
  LinkedIn: Linkedin,
  Instagram,
  Twitter,
}

export function SiteHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Eddie <span className="text-green-500">Barlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.label] ?? Github
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-green-500 transition-colors"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
