import type { LucideIcon } from 'lucide-react'
import { Bot, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
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

const headerLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Expertise' },
  { href: '/professional-experience', label: 'Experience' },
  { href: '/major-projects', label: 'Projects' },
  { href: '/projects-in-development', label: 'The Forge' },
  { href: '/blog', label: 'Blog' },
  { href: '/ebooks', label: 'Library' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/10 bg-[#0b1220]/95 text-slate-100 shadow-[0_12px_35px_rgba(2,6,23,0.16)] backdrop-blur-xl">
      <div className="border-b border-white/5 bg-[#060a12] text-white">
        <div className="mx-auto grid min-h-9 max-w-[1480px] grid-cols-[auto_1fr] items-center gap-3 px-4 py-1.5 text-xs sm:grid-cols-[auto_1fr_auto] sm:px-6 lg:px-8">
          <div className="justify-self-start rounded border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-[10px]">
            Now Available <span className="hidden md:inline">// OSF-01</span>
          </div>
          <p className="hidden truncate text-center font-medium text-slate-300 sm:block">
            Organic Security Framework: Security That Grows With Your Business
          </p>
          <Link to="/ebooks" className="justify-self-end whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300 transition hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            View Book <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <nav aria-label="Primary navigation">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[68px] items-center justify-between gap-5">
            <Link to="/" className="group flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-green-400/35 bg-green-400/10 shadow-[inset_0_0_18px_rgba(74,222,128,0.08)]">
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-[#0b1220] bg-green-400" />
                <Bot className="text-green-400 transition-transform group-hover:scale-105" size={20} />
              </span>
              <span className="whitespace-nowrap text-[15px] font-black uppercase tracking-[0.08em] text-white sm:text-base">
                Eddie<span className="text-green-400">_Barlow</span>
              </span>
            </Link>

            <div className="hidden items-stretch self-stretch xl:flex">
              {headerLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `group relative flex items-center whitespace-nowrap px-3 font-mono text-[11px] font-bold uppercase tracking-[0.11em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300 2xl:px-4 ${
                      isActive ? 'text-green-300' : 'text-slate-400 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="transition-transform group-hover:-translate-y-px">{link.label}</span>
                      <span
                        className={`absolute inset-x-3 bottom-0 h-0.5 origin-center bg-gradient-to-r from-cyan-400 via-green-400 to-green-300 shadow-[0_0_10px_rgba(74,222,128,0.75)] transition-transform duration-200 2xl:inset-x-4 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="ml-auto hidden shrink-0 items-center gap-2 sm:flex">
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
                    className="hidden text-slate-400 transition-colors hover:text-green-400 2xl:inline-flex"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
              <Link to="/contact" className="hidden items-center gap-2 rounded-md border border-cyan-300/35 bg-cyan-300/10 px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-cyan-200 transition hover:border-green-300/60 hover:bg-green-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 lg:inline-flex">
                <Mail size={15} />
                Contact
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}
