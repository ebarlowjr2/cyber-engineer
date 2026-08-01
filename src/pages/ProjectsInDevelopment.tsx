import '../App.css'
import { ArrowRight, ExternalLink, Github, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { featuredProjects } from '../data/projects'

const nuclearCommandCenterUrl = 'https://nuclear-central-command.vercel.app/'

const projectVisuals: Record<string, { category: string; image?: string; accent: string; tags: string[] }> = {
  'CARINA OS': {
    category: 'Systems',
    image: '/images/projects/carina-os-banner.png',
    accent: 'from-green-500 via-cyan-400 to-sky-500',
    tags: ['Linux', 'Sandboxing', 'Engineering OS'],
  },
  'StarKid Command': {
    category: 'Education',
    image: '/images/projects/starkid-command-1.png',
    accent: 'from-sky-500 via-indigo-400 to-green-500',
    tags: ['STEM', 'Space Data', 'AI Missions'],
  },
  'Organic Security Framework': {
    category: 'Security Framework',
    accent: 'from-amber-400 via-green-500 to-cyan-400',
    tags: ['Cyber Hygiene', 'Identity', 'Operations'],
  },
  'Nuclear Command Center': {
    category: 'Energy Intelligence',
    accent: 'from-lime-400 via-sky-500 to-cyan-400',
    tags: ['Geospatial Data', 'React/Next.js', 'Energy Sector'],
  },
}

const forgeFilters = ['All', 'Systems', 'Education', 'Security Framework', 'Energy Intelligence']

export default function ProjectsInDevelopment() {
  return (
    <PageLayout>
      <section className="pt-36 pb-14 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-gray-950/60">
        <div className="max-w-7xl mx-auto">
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
            [ PORTFOLIO_AND_ARTIFACTS ]
          </p>
          <h1 className="mb-8 text-6xl font-black tracking-tight md:text-7xl">
            The <span className="text-sky-600 dark:text-sky-400">Forge</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-gray-300">
            From mission-ready operating systems to space-powered STEM learning, practical cybersecurity frameworks, and
            energy intelligence platforms, this archive features systems built for traceability, resilience, and
            real-world impact.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {forgeFilters.map((filter, index) => (
            <span
              key={filter}
              className={`rounded-full border px-5 py-2 text-sm font-bold ${
                index === 0
                  ? 'border-slate-950 bg-slate-950 text-white dark:border-green-500 dark:bg-green-500 dark:text-gray-950'
                  : 'border-gray-300 bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {featuredProjects.map((project, index) => {
            const visual = projectVisuals[project.title]
            const Icon = project.icon

            return (
              <article
                key={project.title}
                className="group block overflow-hidden rounded-xl border border-gray-200 bg-slate-50 shadow-xl shadow-gray-950/5 transition hover:-translate-y-1 hover:border-sky-500 hover:shadow-sky-500/10 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="grid gap-0 lg:grid-cols-[0.54fr_0.46fr]">
                  <div className="relative min-h-80 p-6 sm:p-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${visual.accent} opacity-10`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px]" />
                    <div className="relative flex h-full min-h-72 items-center justify-center">
                      <div className="w-full max-w-2xl overflow-hidden rounded-xl border-4 border-slate-950 bg-slate-950 shadow-2xl shadow-slate-950/30 dark:border-green-500/30">
                        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950 px-4 py-3">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-amber-400" />
                          <span className="h-3 w-3 rounded-full bg-green-400" />
                          <span className="ml-auto font-mono text-xs text-slate-400">forge_node_{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        {visual.image ? (
                          <div className="aspect-video bg-slate-900">
                            <img src={visual.image} alt={`${project.title} preview`} className="h-full w-full object-cover" />
                          </div>
                        ) : (
                          <div className="relative aspect-video overflow-hidden bg-slate-950 p-8">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.35),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.25),transparent_28%)]" />
                            <div className="relative flex h-full flex-col justify-between rounded-lg border border-green-500/30 bg-slate-950/70 p-6">
                              <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                                  <Icon className="text-green-400" size={26} />
                                </div>
                                <span className="font-mono text-sm uppercase tracking-widest text-green-300">OSF</span>
                              </div>
                              <p className="max-w-sm text-2xl font-black text-white">Layered security that matures naturally.</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <p className="font-mono text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        {visual.category}
                      </p>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Featured_Mission
                      </p>
                    </div>

                    <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-950 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                      {project.title}
                    </h2>
                    <p className="mb-8 text-xl leading-relaxed text-slate-600 dark:text-gray-300">{project.description}</p>

                    <div className="mb-10 flex flex-wrap gap-3">
                      {visual.tags.map((tag) => (
                        <span key={tag} className="rounded border border-gray-200 bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                      <Link
                        to={project.detailPage}
                        className="inline-flex items-center gap-2 rounded bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-sky-600 dark:bg-green-500 dark:text-gray-950 dark:hover:bg-green-400"
                      >
                        See Details
                        <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                      </Link>
                      {project.title === 'Nuclear Command Center' ? (
                        <a
                          href={nuclearCommandCenterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded border border-sky-500/40 bg-white px-6 py-3 font-bold text-sky-600 transition hover:border-green-500 hover:text-green-500 dark:bg-gray-900 dark:text-sky-400"
                        >
                          Live Link
                          <ExternalLink size={18} />
                        </a>
                      ) : null}
                      <span className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        <Sparkles size={16} />
                        {project.status} · {project.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to <span className="text-green-500">collaborate?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            These are the three primary systems currently shaping the portfolio. If one of them aligns with your mission,
            let’s connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              <Mail size={20} />
              Get In Touch
            </Link>
            <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700">
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
