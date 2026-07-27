import '../App.css'
import { ArrowRight, ExternalLink, Mail, Terminal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { expertiseAreas, majorProjects } from '../data/portfolio'

const filters = ['All', 'Cyber Ops', 'Compliance', 'Architecture', 'Vulnerability', 'Intelligence', 'Systems', 'Major Projects']

const expertiseCategories: Record<string, string> = {
  'Defensive Cyber Operations (DCO)': 'Cyber Ops',
  'STIGs and SRG': 'Compliance',
  'Experienced SysAdmin': 'Systems',
  'Risk Management Framework, A&A, and ATO': 'Compliance',
  'ACAS and Nessus': 'Vulnerability',
  'Cyber Threat Intelligence (CTI)': 'Intelligence',
  'Incident Response & Forensics': 'Cyber Ops',
  'Security Architecture & Zero Trust': 'Architecture',
  'Identity & Access Management (IAM)': 'Architecture',
  'Compliance Audits & Reporting': 'Compliance',
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const archiveItems = useMemo(
    () => [
      ...expertiseAreas.map((area) => ({
        ...area,
        category: expertiseCategories[area.title] ?? 'Cyber Ops',
        type: 'Capability',
        featured: ['Defensive Cyber Operations (DCO)', 'Risk Management Framework, A&A, and ATO', 'Security Architecture & Zero Trust'].includes(area.title),
        link: undefined as string | undefined,
        linkLabel: undefined as string | undefined,
        tags: area.title
          .replace(/[(),&]/g, '')
          .split(' ')
          .filter((word) => word.length > 2)
          .slice(0, 4),
      })),
      ...majorProjects.map((project) => ({
        ...project,
        category: 'Major Projects',
        type: 'Operation',
        featured: true,
        description: project.summary[0],
        link: project.link,
        linkLabel: project.linkLabel,
      })),
    ],
    [],
  )

  const visibleItems = archiveItems.filter((item) => activeFilter === 'All' || item.category === activeFilter)

  return (
    <PageLayout>
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-end">
            <div>
              <p className="text-green-500 font-mono text-sm mb-4">Engineering, Defense & Mission Readiness</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                The Cyber <span className="text-green-500">Forge</span>
              </h1>
              <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-5">[ PORTFOLIO_AND_ARTIFACTS ]</p>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                A mission archive of cybersecurity operations, security engineering capabilities, compliance leadership,
                and high-impact projects built across DoD, public-sector, and private-sector environments.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-xl shadow-green-500/5">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/20">
                  <Terminal className="text-green-500" size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Operator Summary</p>
                  <h2 className="text-xl font-bold">Cybersecurity Engineer</h2>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  ['20+', 'Years IT'],
                  ['18+', 'Cyber Ops'],
                  ['DoD', 'Mission Systems'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4">
                    <p className="text-2xl font-black text-green-500">{value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? 'border-green-500 bg-green-500 text-gray-950'
                    : 'border-gray-300 bg-white text-gray-600 hover:border-green-500 hover:text-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="all" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-sm text-green-500">Mission Archive</p>
              <h2 className="text-4xl font-bold">Capabilities & Operations</h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{visibleItems.length} artifacts shown</p>
          </div>

          <div className="grid gap-8">
            {visibleItems.map((item, index) => (
              <article
                key={`${item.type}-${item.title}`}
                className="group grid gap-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-950/5 transition hover:-translate-y-1 hover:border-green-500 hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900 md:grid-cols-[0.42fr_0.58fr]"
              >
                <div className="relative min-h-64 overflow-hidden bg-gray-950 p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.35),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(15,23,42,0.95))]" />
                  <div className="absolute inset-x-8 top-8 h-px bg-green-500/40" />
                  <div className="absolute inset-y-8 left-8 w-px bg-green-500/40" />
                  <div className="relative flex h-full min-h-52 flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
                        {item.category}
                      </span>
                      {item.featured ? (
                        <span className="font-mono text-xs text-green-300">FEATURED_MISSION</span>
                      ) : null}
                    </div>
                    <div>
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/15">
                        <item.icon className="text-green-400" size={34} />
                      </div>
                      <p className="font-mono text-xs text-green-300/80">artifact_{String(index + 1).padStart(2, '0')}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">{item.type}</p>
                  <h3 className="mb-4 text-3xl font-black tracking-tight">{item.title}</h3>
                  <p className="mb-5 text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-medium text-green-600 dark:text-green-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-green-600 transition hover:text-green-500 dark:text-green-400"
                      >
                        {item.linkLabel ?? 'View Source'}
                        <ExternalLink size={16} />
                      </a>
                    ) : null}
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 transition hover:text-green-500 dark:text-gray-300"
                    >
                      Discuss This Capability
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic text-gray-600 dark:text-gray-300 mb-6 border-l-4 border-green-500 pl-6 text-left">
            "The journey is never ending. There's always gonna be growth, improvement, adversity; you just gotta take it all in and do what's right, continue to grow, continue to live in the moment. Strength and growth come only through continuous effort and struggle."
          </blockquote>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I have continuously challenged myself to learn, grow, and overcome challenges. I am seeking to join a group of innovative Cyber Security professionals who share my passion.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
            <Mail size={20} />
            Get In Touch
          </Link>
        </div>
      </section>

    </PageLayout>
  )
}
