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
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Expertise' },
  { href: '/projects-in-development', label: 'The Forge' },
  { href: '/professional-experience', label: 'Experience' },
  { href: '/major-projects', label: 'Projects' },
  { href: '/ebooks', label: 'Library' },
  { href: '/advocacy', label: 'Advocacy' },
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
