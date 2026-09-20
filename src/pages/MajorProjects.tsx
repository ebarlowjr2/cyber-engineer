import '../App.css'
import { ArrowLeft, ArrowRight, Mail, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { majorProjects } from '../data/portfolio'

export default function MajorProjects() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_24%,rgba(34,197,94,0.16),transparent_28%),radial-gradient(circle_at_86%_16%,rgba(14,165,233,0.12),transparent_24%)]" />
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-green-500 transition-colors hover:text-green-400">
            <ArrowLeft size={20} />
            Back Home
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-sm text-green-500">High-Impact Cybersecurity Work</p>
              <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                Major <span className="text-green-500">Projects</span>
              </h1>
              <p className="mb-5 font-mono text-sm text-gray-500 dark:text-gray-400">[ MISSION_OUTCOMES_AND_DELIVERY ]</p>
              <p className="max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                Compact mission cards for enterprise cybersecurity projects, critical remediation, defensive architecture,
                data protection, cyber range development, and network modernization work where technical execution
                produced operational impact.
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <ShieldCheck className="text-green-500" size={26} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Project Focus</p>
                  <h2 className="text-xl font-bold">Operational Cyber Impact</h2>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Select a card to open a dedicated project page with deeper context, impact narrative, tags, and links.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {majorProjects.map((project, index) => {
              const Icon = project.icon

              return (
                <Link
                  key={project.title}
                  to={`/major-projects/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-950/5 transition hover:-translate-y-1 hover:border-green-500 hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-950 p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.22),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.25),rgba(15,23,42,0.98))]" />
                    <div className="absolute inset-x-6 top-6 h-px bg-green-500/40" />
                    <div className="absolute inset-y-6 left-6 w-px bg-green-500/40" />
                    <div className="relative flex h-full flex-col justify-between">
                      <span className="w-fit rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
                        MAJOR_PROJECT_{String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/15 transition group-hover:scale-105">
                          <Icon className="text-green-400" size={34} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-3 text-xl font-black tracking-tight text-slate-950 transition group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                      {project.title}
                    </h2>
                    <p className="mb-5 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {project.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase text-green-600 dark:text-green-400">
                      View Project
                      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-4 text-gray-600 dark:text-gray-300">Want to discuss how this experience maps to your environment?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-bold text-gray-950 transition hover:bg-green-400"
            >
              Contact Me
              <Mail size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
