import '../App.css'
import { Linkedin, Github, Instagram, Twitter, Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'
import { MobileNav } from '../components/MobileNav'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Zero Trust Architecture in Modern Enterprises',
    excerpt: 'Zero Trust is more than a buzzword—it\'s a fundamental shift in how we approach security. Learn how to implement Zero Trust principles in your organization.',
    date: '2026-01-28',
    readTime: '8 min read',
    category: 'Security Architecture',
    image: '/images/blog/zero-trust.jpg'
  },
  {
    id: 2,
    title: 'NIST 800-53 Rev 5: What Security Engineers Need to Know',
    excerpt: 'A comprehensive guide to the latest NIST security controls and how they impact your compliance strategy in federal environments.',
    date: '2026-01-15',
    readTime: '12 min read',
    category: 'Compliance',
    image: '/images/blog/nist.jpg'
  },
  {
    id: 3,
    title: 'Automating Security with Ansible: A Practical Guide',
    excerpt: 'Discover how to leverage Ansible for security automation, from STIG compliance to vulnerability remediation.',
    date: '2026-01-05',
    readTime: '10 min read',
    category: 'Automation',
    image: '/images/blog/ansible.jpg'
  },
  {
    id: 4,
    title: 'Cloud Security Posture Management: AWS vs Azure',
    excerpt: 'Comparing cloud security tools and best practices across major cloud providers. Which platform offers better security controls?',
    date: '2025-12-20',
    readTime: '15 min read',
    category: 'Cloud Security',
    image: '/images/blog/cloud.jpg'
  },
  {
    id: 5,
    title: 'Incident Response Playbooks: Building Your First Runbook',
    excerpt: 'Step-by-step guide to creating effective incident response playbooks that your team can actually use during a crisis.',
    date: '2025-12-10',
    readTime: '9 min read',
    category: 'Incident Response',
    image: '/images/blog/incident.jpg'
  },
  {
    id: 6,
    title: 'The Future of SIEM: AI-Powered Threat Detection',
    excerpt: 'How machine learning is transforming Security Information and Event Management systems and what it means for security operations.',
    date: '2025-11-28',
    readTime: '11 min read',
    category: 'Threat Intelligence',
    image: '/images/blog/siem.jpg'
  }
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Eddie <span className="text-green-500">Barlow</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-green-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/eddie-barlow-jr-cism-68802716/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="http://instagram.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/mrcyber334?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

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
              <article key={post.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-green-500 transition-colors group">
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
                  <button className="inline-flex items-center gap-2 text-green-500 font-medium hover:text-green-400 transition-colors">
                    Read More
                    <ArrowRight size={16} />
                  </button>
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

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="text-gray-500 dark:text-gray-400">
            &copy; 2025 Eddie Barlow
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-gray-400 hover:text-green-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/eddie-barlow-jr-cism-68802716/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-green-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="http://instagram.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-green-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/mrcyber334?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-green-500 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
