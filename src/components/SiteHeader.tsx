import type { LucideIcon } from 'lucide-react'
import { Bot, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { ResumeVisitCounter } from './ResumeVisitCounter'
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
      <div className="bg-gray-950 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-2 px-4 py-2 text-center text-xs sm:grid-cols-[auto_1fr_auto] sm:px-6 lg:px-8">
          <div className="justify-self-center rounded border border-amber-500/50 bg-amber-500/10 px-3 py-1 font-mono font-bold uppercase tracking-[0.22em] text-amber-300 sm:justify-self-start">
            Now Available
          </div>
          <p className="font-medium text-gray-200">
            Organic Security Framework: Security That Grows With Your Business
          </p>
          <Link to="/ebooks" className="justify-self-center font-mono font-bold uppercase tracking-wider text-sky-400 transition hover:text-green-400 sm:justify-self-end">
            View the Book →
          </Link>
        </div>
      </div>

      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center gap-6">
            <Link to="/" className="flex items-center gap-3 text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10">
                <Bot className="text-green-500" size={22} />
              </span>
              <span>
                Eddie <span className="text-green-500">Barlow</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-600 dark:text-gray-300">
              <Link to="/about" className="hover:text-green-500 transition-colors">About</Link>
              <Link to="/portfolio" className="hover:text-green-500 transition-colors">Expertise</Link>
              <Link to="/projects-in-development" className="hover:text-green-500 transition-colors">The Forge</Link>
              <Link to="/professional-experience" className="hover:text-green-500 transition-colors">Experience</Link>
              <Link to="/major-projects" className="hover:text-green-500 transition-colors">Major Projects</Link>
              <Link to="/blog" className="hover:text-green-500 transition-colors">Blog</Link>
              <Link to="/ebooks" className="hover:text-green-500 transition-colors">eBooks</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <ResumeVisitCounter />
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
                    className="hidden xl:inline-flex hover:text-green-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
              <Link to="/contact" className="rounded-lg bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-green-500 hover:text-gray-950 dark:bg-green-500 dark:text-gray-950 dark:hover:bg-green-400">
                Get in Touch
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}
