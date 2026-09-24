import { useState } from 'react'
import { Menu, X, Github, Linkedin, Instagram, Twitter, ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { navLinks, socialLinks } from '../data/site'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md border border-cyan-300/25 bg-cyan-300/10 p-2 text-cyan-200 transition hover:border-green-300/50 hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-6.5rem)] overflow-y-auto border-b border-cyan-400/20 bg-[#080d18] shadow-2xl shadow-slate-950/40">
          <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <span>Navigation</span>
              <span className="text-green-400">System Online</span>
            </div>
            <div className="grid gap-1 sm:grid-cols-2">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.08em] text-slate-300 transition hover:bg-white/5 hover:text-green-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-lg border-l-2 px-3 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.08em] transition ${
                    location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(`${link.href}/`))
                      ? 'border-green-400 bg-green-400/10 text-green-300'
                      : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Interface Theme</span>
                <ThemeToggle />
              </div>
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
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
                      className="text-slate-400 transition-colors hover:text-green-300"
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
