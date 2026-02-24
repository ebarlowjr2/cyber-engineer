export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: string
  excerpt: string
  readTime: string
  content: string
}

type Frontmatter = Omit<BlogPost, 'content'>

const blogModules = import.meta.glob('/content/blog/*.md', {
  eager: true,
  as: 'raw',
})

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

  return {
    slug,
    title: frontmatter.title ?? 'Untitled Post',
    date: frontmatter.date ?? '1970-01-01',
    author: frontmatter.author ?? 'Eddie Barlow',
    category: frontmatter.category ?? 'General',
    excerpt: frontmatter.excerpt ?? '',
    readTime: frontmatter.readTime ?? '',
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
