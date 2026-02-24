export type NavLink = {
  href: string
  label: string
  isExternal?: boolean
}

export type SocialLink = {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/advocacy', label: 'Advocacy' },
  { href: '/projects-in-development', label: 'Projects in Dev' },
  { href: '/active-projects', label: 'Active Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export const socialLinks: SocialLink[] = [
  { href: 'https://github.com/ebarlowjr2', label: 'Github' },
  { href: 'https://www.linkedin.com/in/eddie-barlow-jr-cism-68802716/', label: 'LinkedIn' },
  { href: 'http://instagram.com/ebarlowjr2', label: 'Instagram' },
  { href: 'https://x.com/mrcyber334?s=21', label: 'Twitter' },
]
