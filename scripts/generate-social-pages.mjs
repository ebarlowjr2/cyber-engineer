import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

const siteUrl = process.env.VITE_SITE_URL || 'https://www.ebthecybergod.com'
const contentDirectory = path.resolve('content/blog')
const outputDirectory = path.resolve('dist/social/blog')
const template = await readFile(path.resolve('dist/index.html'), 'utf8')

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function replaceMeta(html, attribute, key, value) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[\\s\\S]*?\\/>`, 'i')
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`)
}

function absoluteUrl(value) {
  if (/^https?:\/\//i.test(value)) return value
  return new URL(value, siteUrl).href
}

await mkdir(outputDirectory, { recursive: true })

const files = (await readdir(contentDirectory)).filter((file) => file.endsWith('.md'))

for (const file of files) {
  const raw = await readFile(path.join(contentDirectory, file), 'utf8')
  const { data } = matter(raw)
  const slug = data.slug || file.replace(/\.md$/, '')
  const title = data.title || 'Eddie Barlow Blog'
  const description = data.excerpt || 'Linux, cybersecurity, cloud, and engineering field notes from Eddie Barlow.'
  const image = absoluteUrl(data.socialImage || data.thumbnail || '/og/og-image.png')
  const imageAlt = data.thumbnailAlt || title
  const canonicalUrl = `${siteUrl}/blog/${slug}`

  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)} | Eddie Barlow</title>`)
  html = replaceMeta(html, 'name', 'description', description)
  html = replaceMeta(html, 'property', 'og:type', 'article')
  html = replaceMeta(html, 'property', 'og:title', title)
  html = replaceMeta(html, 'property', 'og:description', description)
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl)
  html = replaceMeta(html, 'property', 'og:image', image)
  html = replaceMeta(html, 'property', 'og:image:alt', imageAlt)
  html = replaceMeta(html, 'name', 'twitter:title', title)
  html = replaceMeta(html, 'name', 'twitter:description', description)
  html = replaceMeta(html, 'name', 'twitter:image', image)
  html = html.replace('</head>', `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />\n  </head>`)

  await writeFile(path.join(outputDirectory, `${slug}.html`), html)
}

console.log(`Generated social metadata pages for ${files.length} blog posts.`)
