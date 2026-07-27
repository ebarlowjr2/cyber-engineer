import '../App.css'
import { ArrowLeft, ExternalLink, Mail, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { majorProjects } from '../data/portfolio'

export default function MajorProjects() {
  return (
    <PageLayout>
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back Home
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
            <div>
              <p className="text-green-500 font-mono text-sm mb-4">High-Impact Cybersecurity Work</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                Major <span className="text-green-500">Projects</span>
              </h1>
              <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-5">[ MISSION_OUTCOMES_AND_DELIVERY ]</p>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                A focused collection of enterprise cybersecurity projects, mission-critical recoveries, cyber range
                development, and DoD network defense initiatives where technical execution directly supported operational
                outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <ShieldCheck className="text-green-500" size={26} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Project Focus</p>
                  <h2 className="text-xl font-bold">Operational Cyber Impact</h2>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                These projects highlight leadership across defensive cyber operations, secure architecture, enterprise
                remediation, cyber training, and mission assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {majorProjects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-950/5 transition hover:-translate-y-1 hover:border-green-500 hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
                  <div className="relative min-h-72 overflow-hidden bg-gray-950 p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.35),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.15),rgba(15,23,42,0.95))]" />
                    <div className="absolute inset-x-8 top-8 h-px bg-green-500/40" />
                    <div className="absolute inset-y-8 left-8 w-px bg-green-500/40" />
                    <div className="relative flex h-full min-h-56 flex-col justify-between">
                      <span className="w-fit rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
                        MAJOR_PROJECT_{String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/15">
                          <project.icon className="text-green-400" size={34} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h2 className="mb-5 text-3xl font-black tracking-tight">{project.title}</h2>
                    <div className="space-y-4">
                      {project.summary.map((paragraph) => (
                        <p key={paragraph} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-bold text-gray-950 transition hover:bg-green-400"
                        >
                          {project.linkLabel ?? 'Learn More'}
                          <ExternalLink size={16} />
                        </a>
                      ) : null}
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-green-500 hover:text-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      >
                        Discuss This Project
                        <Mail size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
