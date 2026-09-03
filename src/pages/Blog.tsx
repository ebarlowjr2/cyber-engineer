import '../App.css'
import { Calendar, Clock, ArrowRight, Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { getAllBlogPosts } from '../lib/blog'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function Blog() {
  const blogPosts = getAllBlogPosts()

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Technical <span className="text-green-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Field notes, tutorials, and practical thoughts across cybersecurity, Linux, AI, cloud, nuclear technology, space systems, and the technical topics that keep me curious.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5 transition hover:-translate-y-1 hover:border-green-500 hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={post.thumbnail}
                      alt={post.thumbnailAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-300 backdrop-blur">
                      <ImageIcon size={14} />
                      {post.category}
                    </div>
                    {post.thumbnailCredit ? (
                      <span className="absolute bottom-3 right-3 rounded bg-slate-950/70 px-2 py-1 text-[10px] font-semibold text-white/70 backdrop-blur">
                        {post.thumbnailCredit}
                      </span>
                    ) : null}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-xl font-black leading-tight transition-colors group-hover:text-green-500">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mb-5 text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase text-green-600 transition-colors hover:text-green-500 dark:text-green-400">
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay <span className="text-green-500">Updated</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to receive notifications when new articles are published. No spam, just quality cybersecurity content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
            />
            <button
              type="submit"
              className="bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </PageLayout>
  )
}
