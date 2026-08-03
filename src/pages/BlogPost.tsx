import '../App.css'
import { Calendar, Clock, ArrowLeft, User, Terminal, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { getBlogPost } from '../lib/blog'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const markdownComponents: Components = {
  h1: () => null,
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 flex items-center gap-3 text-2xl md:text-3xl font-black text-gray-950 dark:text-white">
      <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_18px_rgba(34,197,94,0.75)]" />
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-bold text-gray-950 dark:text-white">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-5 text-lg leading-8 text-slate-700 dark:text-slate-300">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-8 grid gap-3 text-slate-700 dark:text-slate-300">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="flex gap-3 text-lg leading-7">
      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => <strong className="font-black text-slate-950 dark:text-white">{children}</strong>,
  code: ({ className, children, ...props }) => {
    const codeText = String(children).replace(/\n$/, '')
    const language = /language-(\w+)/.exec(className || '')?.[1] ?? 'terminal'

    if (!className) {
      return (
        <code className="rounded-md border border-green-500/20 bg-green-500/10 px-1.5 py-0.5 font-mono text-sm font-semibold text-green-700 dark:text-green-300" {...props}>
          {children}
        </code>
      )
    }

    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-slate-900/10 bg-slate-950 shadow-2xl shadow-slate-900/20 dark:border-green-500/20 dark:shadow-green-950/20">
        <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
            <Terminal size={14} /> {language}
          </span>
        </div>
        <pre className="overflow-x-auto p-5 text-sm leading-7 text-green-200">
          <code className={className} {...props}>{codeText}</code>
        </pre>
      </div>
    )
  },
  blockquote: ({ children }) => (
    <blockquote className="my-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-slate-800 shadow-lg shadow-green-950/5 dark:text-green-50">
      {children}
    </blockquote>
  ),
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <article className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.06),transparent)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.20),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.72),transparent)]" />
        <div className="mx-auto max-w-4xl">
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 font-semibold text-green-600 transition-colors hover:text-green-500 dark:text-green-400 dark:hover:text-green-300">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <header className="mb-10 rounded-[2rem] border border-slate-900/10 bg-white/90 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-green-500/20 dark:bg-slate-950/80 dark:shadow-green-950/20 md:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-500/15 px-3 py-1 text-sm font-bold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
                <ShieldCheck size={16} /> {post.category} Field Note
              </span>
              <span className="rounded-full border border-slate-900/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.22em] text-slate-500 dark:border-white/10 dark:text-slate-400">
                Quick Read
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">{post.title}</h1>
            <p className="mb-8 max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-950/70 md:p-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-900/10 bg-slate-950 p-8 text-center text-white shadow-2xl shadow-slate-900/20 dark:border-green-500/20 md:p-10">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-green-300">More Field Notes</p>
          <h2 className="mb-4 text-2xl font-black md:text-3xl">Want the next cyber quick hit?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-slate-300">
            I publish short, practical notes on Linux, cybersecurity, engineering workflows, and tools worth keeping in your kit.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/blog" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-bold text-slate-950 transition-colors hover:bg-green-400">
              View Full Blog
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-bold text-white transition-colors hover:border-green-300 hover:text-green-300">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
