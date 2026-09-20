import '../App.css'
import { ArrowLeft, ExternalLink, Mail, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { majorProjects } from '../data/portfolio'

export default function MajorProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = majorProjects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <PageLayout>
        <section className="px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-xl dark:border-gray-800 dark:bg-gray-900">
            <h1 className="mb-4 text-4xl font-black">Project Not Found</h1>
            <p className="mb-8 text-gray-600 dark:text-gray-300">That major project could not be located.</p>
            <Link to="/major-projects" className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-gray-950 hover:bg-green-400">
              <ArrowLeft size={18} />
              Back to Major Projects
            </Link>
          </div>
        </section>
      </PageLayout>
    )
  }

  const Icon = project.icon

  return (
    <PageLayout>
      <section className="relative overflow-hidden px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.12),transparent_26%)]" />
        <div className="mx-auto max-w-6xl">
          <Link to="/major-projects" className="mb-8 inline-flex items-center gap-2 font-semibold text-green-500 transition hover:text-green-400">
            <ArrowLeft size={20} />
            Back to Major Projects
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] border border-green-500/30 bg-slate-950 p-8 text-white shadow-2xl shadow-green-950/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.28),transparent_32%),linear-gradient(135deg,rgba(14,165,233,0.10),rgba(15,23,42,0.96))]" />
              <div className="relative flex min-h-72 flex-col justify-between">
                <span className="w-fit rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.22em] text-green-300">
                  Mission Record
                </span>
                <div>
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-green-500/30 bg-green-500/15">
                    <Icon className="text-green-300" size={42} />
                  </div>
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-green-300/80">
                    major_project::{project.slug}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-xl shadow-gray-950/5 dark:border-gray-800 dark:bg-gray-900 md:p-10">
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400">Major Project</p>
              <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">{project.title}</h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-bold text-green-700 dark:text-green-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-xl shadow-gray-950/5 dark:border-gray-800 dark:bg-gray-900 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <ShieldCheck className="text-green-500" size={28} />
              <h2 className="text-3xl font-black tracking-tight">Impact Narrative</h2>
            </div>
            <div className="space-y-5">
              {project.summary.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-[2rem] border border-green-500/30 bg-green-500/10 p-6 dark:bg-green-500/5">
            <h2 className="mb-4 text-2xl font-black">Project Actions</h2>
            <div className="space-y-3">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-bold text-gray-950 transition hover:bg-green-400"
                >
                  {project.linkLabel ?? 'Learn More'}
                  <ExternalLink size={16} />
                </a>
              ) : null}
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-green-500 hover:text-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
              >
                Discuss This Project
                <Mail size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  )
}
