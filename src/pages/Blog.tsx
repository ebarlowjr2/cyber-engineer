import '../App.css'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
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
            Cyber Security <span className="text-green-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on cybersecurity, cloud infrastructure, and the ever-evolving threat landscape. Stay informed with the latest security trends and best practices.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                          <article key={post.slug} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-green-500 transition-colors group">
                            <div className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                              <span className="text-4xl text-green-500 font-bold">{post.category.charAt(0)}</span>
                            </div>
                            <div className="p-6">
                              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                <span className="inline-flex items-center gap-1">
                                  <Calendar size={14} />
                                  {formatDate(post.date)}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                  <Clock size={14} />
                                  {post.readTime}
                                </span>
                              </div>
                              <span className="inline-block px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-xs font-medium mb-3">
                                {post.category}
                              </span>
                              <h2 className="text-xl font-bold mb-3 group-hover:text-green-500 transition-colors">
                                {post.title}
                              </h2>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {post.excerpt}
                              </p>
                              <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-green-500 font-medium hover:text-green-400 transition-colors">
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
