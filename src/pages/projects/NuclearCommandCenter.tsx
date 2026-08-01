import '../../App.css'
import { ArrowLeft, Atom, Database, ExternalLink, Globe2, Map, RadioTower, Search, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../components/PageLayout'

const liveUrl = 'https://nuclear-central-command.vercel.app/'

const platformCapabilities = [
  {
    icon: Map,
    title: 'Geospatial Reactor Map',
    description:
      'Designed an interactive map for operational, offline, decommissioned, and planned nuclear reactors with location, capacity, and operating-status context.',
  },
  {
    icon: Search,
    title: 'Searchable Reactor Directory',
    description:
      'Developed a structured directory experience so users can search, compare, and explore nuclear reactor facilities and planned infrastructure.',
  },
  {
    icon: Database,
    title: 'Structured Energy Data',
    description:
      'Modeled reactor information by status, location, generating capacity, facility details, and industry relevance for clearer analysis.',
  },
  {
    icon: RadioTower,
    title: 'Sector Intelligence Foundation',
    description:
      'Designed the foundation for future API integrations and authoritative public datasets across nuclear energy and infrastructure monitoring.',
  },
]

const contributions = [
  'Designed an interactive geospatial reactor and energy-infrastructure map.',
  'Developed a comprehensive directory of existing and planned nuclear reactors.',
  'Structured reactor data by status, location, capacity, and facility details.',
  'Modernized application navigation, page layouts, and visual presentation.',
  'Designed a scalable foundation for integrating APIs and authoritative public datasets.',
  'Used AI-assisted development workflows to accelerate research, data organization, interface design, and implementation.',
]

const technologies = [
  'Full-stack web development',
  'React/Next.js',
  'Geospatial visualization',
  'Interactive mapping',
  'Data modeling',
  'API integration',
  'UI/UX modernization',
  'Energy-sector research',
  'AI-assisted software development',
]

export default function NuclearCommandCenter() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.12),transparent_25%)]" />
        <div className="max-w-6xl mx-auto">
          <Link to="/projects-in-development" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to The Forge
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Featured Project</p>
              <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
                Nuclear <span className="text-green-500">Command Center</span>
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                Designed and developed a modern nuclear energy intelligence platform that centralizes reactor data,
                infrastructure visibility, and industry insights in one interactive command-center application.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-gray-950 transition hover:bg-green-400"
                >
                  Launch Live Site
                  <ExternalLink size={18} />
                </a>
                <Link
                  to="/projects-in-development"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-green-500 hover:text-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                >
                  View The Forge
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.16),transparent_30%)]" />
              <div className="relative rounded-2xl border border-green-500/30 bg-gray-950 p-6 text-white">
                <div className="mb-10 flex items-center justify-between">
                  <span className="rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
                    ENERGY_INTEL_NODE
                  </span>
                  <Atom className="text-green-400" size={34} />
                </div>
                <div className="space-y-4">
                  {['Operational Reactors', 'Planned Facilities', 'Offline Assets', 'Decommissioned Sites'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-sm text-gray-200">{item}</span>
                      <span className="h-2 w-16 rounded-full bg-gradient-to-r from-green-400 to-sky-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Platform Capabilities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {platformCapabilities.map((capability) => (
              <article key={capability.title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/20">
                    <capability.icon className="text-green-500" size={22} />
                  </div>
                  <h3 className="text-xl font-bold">{capability.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="font-mono text-sm text-green-500">Project Summary</p>
            <h2 className="mt-2 text-3xl font-black">Command-Center Intelligence</h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
              The project focused on modernizing the user experience, improving data accuracy, and transforming complex
              nuclear infrastructure data into a clear, accessible command-center interface for researchers, energy
              professionals, policymakers, and industry stakeholders.
            </p>
          </div>

          <div className="space-y-3">
            {contributions.map((contribution) => (
              <div key={contribution} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <Sparkles className="mt-1 shrink-0 text-green-500" size={18} />
                <p className="text-gray-600 dark:text-gray-300">{contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center gap-3">
            <Globe2 className="text-green-500" size={28} />
            <h2 className="text-3xl font-black">Technologies & Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span key={technology} className="rounded-full bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-600 dark:text-green-400">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
