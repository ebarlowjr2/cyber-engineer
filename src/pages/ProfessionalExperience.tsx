import '../App.css'
import { ArrowLeft, Briefcase, ChevronDown, ChevronUp, Cpu, MapPin, Radar, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { certifications, experience, stats, techStack } from '../data/resume'

function getRoleId(title: string, company: string) {
  return `${title}-${company}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default function ProfessionalExperience() {
  const [expandedRole, setExpandedRole] = useState<string | null>(getRoleId(experience[0].title, experience[0].company))

  return (
    <PageLayout>
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back Home
          </Link>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-end">
            <div>
              <p className="text-green-500 font-mono text-sm mb-4">Career Signal Map</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                Professional <span className="text-green-500">Experience</span>
              </h1>
              <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-5">[ ROLE_HISTORY_DETAILED_VIEW ]</p>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                A deeper look at the cybersecurity, systems engineering, cloud, compliance, and mission-defense roles
                that shaped my operational experience across commercial, federal, and DoD environments.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-green-500/5 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <Radar className="text-green-500" size={26} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Experience Matrix</p>
                  <h2 className="text-xl font-bold">Expandable Role Cards</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                    <stat.icon className="mx-auto mb-2 text-green-500" size={24} />
                    <p className="text-2xl font-black text-green-500">{stat.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <Briefcase className="mx-auto mb-2 text-green-500" size={24} />
                  <p className="text-2xl font-black text-green-500">{experience.length}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Roles Mapped</p>
                </div>
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <ShieldCheck className="mx-auto mb-2 text-green-500" size={24} />
                  <p className="text-2xl font-black text-green-500">{certifications.length}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-mono text-sm text-green-500">Credential Stack</p>
            <h2 className="text-4xl font-black tracking-tight">Certifications</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <article
                key={cert.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-950/5 transition hover:border-green-500 hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="relative overflow-hidden bg-gray-950 p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.32),transparent_40%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.96))]" />
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
                      CERT_{String(index + 1).padStart(2, '0')}
                    </span>
                    <ShieldCheck className="text-green-400" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-black">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-mono text-sm text-green-500">Operational Toolkit</p>
            <h2 className="text-4xl font-black tracking-tight">Core Tech Stack</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {techStack.map((stack, index) => (
              <article
                key={stack.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-950/5 transition hover:border-green-500 hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="grid sm:grid-cols-[0.34fr_0.66fr]">
                  <div className="relative min-h-44 overflow-hidden bg-gray-950 p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.35),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.15),rgba(15,23,42,0.96))]" />
                    <div className="absolute inset-x-6 top-6 h-px bg-green-500/40" />
                    <div className="absolute inset-y-6 left-6 w-px bg-green-500/40" />
                    <div className="relative flex h-full min-h-32 flex-col justify-between">
                      <span className="w-fit rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
                        STACK_{String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/15">
                        <stack.icon className="text-green-400" size={30} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-4 text-2xl font-black tracking-tight">{stack.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-medium text-green-600 dark:text-green-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {experience.map((role, index) => {
              const roleId = getRoleId(role.title, role.company)
              const isExpanded = expandedRole === roleId
              const visibleBullets = isExpanded ? role.bullets : role.bullets.slice(0, 2)

              return (
                <article
                  key={roleId}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-950/5 transition hover:border-green-500 hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
                    <div className="relative min-h-72 overflow-hidden bg-gray-950 p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.35),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.15),rgba(15,23,42,0.96))]" />
                      <div className="absolute inset-x-8 top-8 h-px bg-green-500/40" />
                      <div className="absolute inset-y-8 left-8 w-px bg-green-500/40" />
                      <div className="relative flex h-full min-h-56 flex-col justify-between">
                        <div className="flex items-center justify-between gap-4">
                          <span className="rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
                            ROLE_{String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="font-mono text-xs text-green-300/80">{role.dates}</span>
                        </div>

                        <div>
                          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/15">
                            {index < 2 ? (
                              <ShieldCheck className="text-green-400" size={34} />
                            ) : index < 4 ? (
                              <Cpu className="text-green-400" size={34} />
                            ) : (
                              <Briefcase className="text-green-400" size={34} />
                            )}
                          </div>
                          <p className="font-mono text-xs uppercase tracking-wider text-green-300/80">
                            mission_node::{role.company.replace(/\s+/g, '_')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h2 className="mb-2 text-3xl font-black tracking-tight">{role.title}</h2>
                          <p className="font-semibold text-green-500">{role.company}</p>
                          <p className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin size={16} />
                            {role.location}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setExpandedRole(isExpanded ? null : roleId)}
                          className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-green-500 hover:text-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? 'Collapse Details' : 'Expand Details'}
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>

                      <ul className="space-y-3">
                        {visibleBullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-gray-600 dark:text-gray-300">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {!isExpanded && role.bullets.length > visibleBullets.length ? (
                        <p className="mt-5 font-mono text-sm text-gray-500 dark:text-gray-400">
                          + {role.bullets.length - visibleBullets.length} additional details available
                        </p>
                      ) : null}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
