import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  showHeader?: boolean
  showFooter?: boolean
}

export function PageLayout({
  children,
  className = 'min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100',
  showHeader = true,
  showFooter = true,
}: PageLayoutProps) {
  return (
    <div className={className}>
      {showHeader ? <SiteHeader /> : null}
      {children}
      {showFooter ? <SiteFooter /> : null}
    </div>
  )
}
