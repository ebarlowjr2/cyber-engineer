import type { LucideIcon } from 'lucide-react'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { socialLinks } from '../data/site'

const socialIconMap: Record<string, LucideIcon> = {
  Github,
  LinkedIn: Linkedin,
  Instagram,
  Twitter,
}

export function SiteFooter() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="text-gray-500 dark:text-gray-400">
          © 2025 Eddie Barlow
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.label] ?? Github
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
