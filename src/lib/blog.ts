export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: string
  excerpt: string
  readTime: string
  thumbnail: string
  thumbnailAlt: string
  thumbnailCredit?: string
  content: string
}

type Frontmatter = Omit<BlogPost, 'content'>

const blogModules = import.meta.glob('/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})


const defaultThumbnails: Record<string, { thumbnail: string; thumbnailAlt: string; thumbnailCredit?: string }> = {
  'lynis-linux-security-audit-hardening': {
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Server racks with cool blue data center lighting',
    thumbnailCredit: 'Photo via Unsplash',
  },
  'gtfobins-linux-privilege-escalation-field-note': {
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Developer workstation showing code on multiple screens',
    thumbnailCredit: 'Photo via Unsplash',
  },
  'hands-on-securing-rhel-10': {
    thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Linux terminal commands displayed on a monitor',
    thumbnailCredit: 'Photo via Unsplash',
  },
  'did-you-know-extended-globbing-linux': {
    thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Terminal window representing Linux shell pattern matching',
    thumbnailCredit: 'Photo via Unsplash',
  },
  'carina-os-mission-ready-linux': {
    thumbnail: '/images/projects/carina-os-banner.png',
    thumbnailAlt: 'CARINA OS mission-ready Linux project preview',
  },
  'securing-cloud-infrastructure': {
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Earth viewed from space with connected cloud infrastructure feel',
    thumbnailCredit: 'Photo via Unsplash',
  },
  'incident-response-playbook': {
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Security analytics dashboard representing incident response',
    thumbnailCredit: 'Photo via Unsplash',
  },
  'understanding-zero-trust-architecture': {
    thumbnail: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Security access control concept with technology interfaces',
    thumbnailCredit: 'Photo via Unsplash',
  },
}

const categoryThumbnails: Record<string, { thumbnail: string; thumbnailAlt: string; thumbnailCredit?: string }> = {
  Linux: defaultThumbnails['hands-on-securing-rhel-10'],
  Cybersecurity: defaultThumbnails['incident-response-playbook'],
  Cloud: defaultThumbnails['securing-cloud-infrastructure'],
  Nuclear: {
    thumbnail: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Rocket launch and high-energy technology scene for nuclear and advanced systems topics',
    thumbnailCredit: 'Photo via Unsplash',
  },
  General: {
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    thumbnailAlt: 'Circuit board close-up representing technology field notes',
    thumbnailCredit: 'Photo via Unsplash',
  },
}

function getThumbnail(slug: string, category: string) {
  return defaultThumbnails[slug] ?? categoryThumbnails[category] ?? categoryThumbnails.General
}

function deriveSlug(path: string) {
  const filename = path.split('/').pop() ?? ''
  return filename.replace(/\.md$/, '')
}

function parseFrontmatter(raw: string) {
  if (!raw.startsWith('---')) {
    return { data: {}, content: raw }
  }

  const endIndex = raw.indexOf('\n---', 3)
  if (endIndex === -1) {
    return { data: {}, content: raw }
  }

  const frontmatterBlock = raw.slice(3, endIndex).trim()
  const content = raw.slice(endIndex + 4).trim()
  const data: Record<string, string> = {}

  frontmatterBlock.split('\n').forEach((line) => {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) return

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    if (!key) return

    data[key] = value.replace(/^\"|\"$/g, '').replace(/^'|'$/g, '')
  })

  return { data, content }
}

function normalizePost(path: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw)
  const frontmatter = data as Partial<Frontmatter>
  const slug = frontmatter.slug ?? deriveSlug(path)

  const category = frontmatter.category ?? 'General'
  const fallbackThumbnail = getThumbnail(slug, category)

  return {
    slug,
    title: frontmatter.title ?? 'Untitled Post',
    date: frontmatter.date ?? '1970-01-01',
    author: frontmatter.author ?? 'Eddie Barlow',
    category,
    excerpt: frontmatter.excerpt ?? '',
    readTime: frontmatter.readTime ?? '',
    thumbnail: frontmatter.thumbnail ?? fallbackThumbnail.thumbnail,
    thumbnailAlt: frontmatter.thumbnailAlt ?? fallbackThumbnail.thumbnailAlt,
    thumbnailCredit: frontmatter.thumbnailCredit ?? fallbackThumbnail.thumbnailCredit,
    content: content.trim(),
  }
}

const allPosts = Object.entries(blogModules).map(([path, raw]) =>
  normalizePost(path, raw as string)
)

export function getAllBlogPosts(): BlogPost[] {
  return allPosts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug)
}
