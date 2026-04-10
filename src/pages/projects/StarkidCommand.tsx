import '../../App.css'
import { ArrowLeft, Cpu, Globe, Maximize2, Radar, Rocket, Shield, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../components/PageLayout'
import { useState } from 'react'
import { Dialog, DialogContent } from '../../components/ui/dialog'

const highlights = [
  {
    icon: Rocket,
    title: 'Mission Engine',
    description: 'Turns live space events into interactive missions and STEM challenges tied to real-world data.',
  },
  {
    icon: Radar,
    title: 'Real-Time Space Intelligence',
    description: 'Aggregates launches, asteroid flybys, space weather, and astronomical events into a single feed.',
  },
  {
    icon: Cpu,
    title: 'AI-Assisted Learning',
    description: 'C.O.M.E.T. delivers guidance, explains events, and helps users complete mission objectives.',
  },
  {
    icon: Users,
    title: 'Learning Tracks',
    description: 'Structured pathways for math, physics, cybersecurity, Linux systems, and AI learning.',
  },
]

const systemComponents = [
  {
    icon: Globe,
    title: 'Command Center',
    description: 'Operational hub with space data, mission alerts, and real-time dashboards.',
  },
  {
    icon: Sparkles,
    title: 'Explore',
    description: 'Deep dives into astronomical objects, events, and educational content.',
  },
  {
    icon: Shield,
    title: 'STEM Activities',
    description: 'Guided modules and challenges organized by subject and difficulty.',
  },
  {
    icon: Rocket,
    title: 'Mission System',
    description: 'Event-driven challenges that simulate aerospace, engineering, and cyber scenarios.',
  },
]

const screenshots = [
  { label: 'Command Center Dashboard', file: '/images/projects/starkid-command-1.png' },
  { label: 'Mission Alert Flow', file: '/images/projects/starkid-command-2.png' },
  { label: 'STEM Track Overview', file: '/images/projects/starkid-command-3.png' },
]

export default function StarkidCommand() {
  const [activeShot, setActiveShot] = useState<(typeof screenshots)[number] | null>(null)

  return (
    <PageLayout>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/projects-in-development" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <div className="mb-10">
            <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">Featured Project</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">StarKid Command</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
              StarKid Command is a cross-platform web and mobile application designed to transform real-world space
              events into interactive STEM learning experiences.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              The platform combines real-time space data, AI-assisted learning, and a mission-based educational
              framework to engage students, educators, and space enthusiasts in science, engineering, and technology.
            </p>
            <p>
              It aggregates live space intelligence—including launches, asteroid flybys, space weather, lunar events,
              and astronomical phenomena—and converts these events into dynamic learning opportunities through an
              integrated mission engine. Users interact with the platform through a Command Center dashboard that
              presents real-time space data alongside mission alerts generated from ongoing events.
            </p>
            <p>
              The core of the platform is a modular STEM engine that powers both structured learning tracks and
              dynamically generated missions. Missions are automatically generated from real-world space events and
              require users to solve applied STEM problems to progress.
            </p>
            <p>
              The platform is built as a monorepo with shared domain logic. The web application uses React + Vite, while
              the mobile app uses React Native + Expo. Shared business logic is implemented in a common core package to
              ensure feature parity across platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Platform Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <item.icon className="text-green-500" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Major Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {systemComponents.map((item) => (
              <div key={item.title} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <item.icon className="text-green-500" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Screenshots</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            A quick look at the StarKid Command experience.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {screenshots.map((shot) => (
              <button
                key={shot.label}
                type="button"
                onClick={() => setActiveShot(shot)}
                className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900 text-left transition hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                aria-label={`Open ${shot.label} screenshot`}
              >
                <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <img
                    src={shot.file}
                    alt={shot.label}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                    <Maximize2 size={14} />
                    View
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 px-4 py-3">{shot.label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(activeShot)} onOpenChange={(open) => setActiveShot(open ? activeShot : null)}>
        <DialogContent className="max-w-4xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-0">
          {activeShot ? (
            <div className="flex flex-col">
              <img src={activeShot.file} alt={activeShot.label} className="w-full h-auto" />
              <div className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{activeShot.label}</div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </PageLayout>
  )
}
