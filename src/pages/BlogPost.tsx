import '../App.css'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { getBlogPost } from '../lib/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-green-500 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Enjoyed this article?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Subscribe to get notified when I publish new content on cybersecurity, technology, and more.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>

    </PageLayout>
  )
}
