import { useState } from 'react'
import { Menu, X, Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { navLinks, socialLinks } from '../data/site'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-lg font-medium hover:text-green-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-2 text-lg font-medium hover:text-green-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">Theme</span>
                <ThemeToggle />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon =
                    link.label === 'LinkedIn'
                      ? Linkedin
                      : link.label === 'Instagram'
                      ? Instagram
                      : link.label === 'Twitter'
                      ? Twitter
                      : Github
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="hover:text-green-500 transition-colors"
                    >
                      <Icon size={24} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
