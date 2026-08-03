import '../App.css'
import { ArrowRight, Check, Download, Mail, MapPin, Phone, Shield, Github, Instagram, Twitter, Linkedin, Trophy } from 'lucide-react'
import TypedText from '../components/TypedText'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { ContactForm } from '../components/ContactForm'
import { getAllBlogPosts } from '../lib/blog'

const homeFeaturePanels = [
  {
    eyebrow: 'MISSION OUTCOMES, DELIVERY, ENTERPRISE DEFENSE',
    title: 'Major Projects',
    typed: ['solve mission outages', 'modernize security stacks', 'build cyber ranges'],
    problem: 'High-impact cyber work needs context beyond a job title or short resume bullet.',
    solutions: [
      'Explore enterprise remediation and defense projects.',
      'Review DoD network architecture and cyber range work.',
      'See how technical execution supported mission outcomes.',
    ],
    primaryLabel: 'View Major Projects',
    primaryHref: '/major-projects',
    secondaryLabel: 'Experience Matrix',
    secondaryHref: '/professional-experience',
    visual: 'OPS',
  },
  {
    eyebrow: 'SYSTEMS, AI, SECURITY FRAMEWORKS',
    title: 'The Forge',
    typed: ['ship mission-ready tools', 'prototype cyber systems', 'build resilient platforms'],
    problem: 'Great ideas need a place to become real systems, not just notes in a backlog.',
    solutions: [
      'CARINA OS for safe engineering workflows.',
      'StarKid Command for space-powered STEM learning.',
      'Organic Security Framework for practical cyber maturity.',
    ],
    primaryLabel: 'Open The Forge',
    primaryHref: '/projects-in-development',
    secondaryLabel: 'Major Projects',
    secondaryHref: '/major-projects',
    visual: 'FORGE',
  },
  {
    eyebrow: 'STRATEGY, PATTERN RECOGNITION, FUN',
    title: 'Play Me in Chess',
    typed: ['practice strategic thinking', 'sharpen pattern recognition', 'make the next move'],
    problem: 'Cybersecurity and chess both reward patience, pattern recognition, and calm decision-making under pressure.',
    solutions: [
      'Chess.com username: ebeeeze.',
      'Scan the QR code to friend me and play sometime.',
      'Friendly games welcome; brilliant sacrifices not guaranteed.',
    ],
    primaryLabel: 'Open Chess.com',
    primaryHref: 'https://www.chess.com/member/ebeeeze',
    secondaryLabel: 'Scan QR Code',
    secondaryHref: '#chess',
    visual: '♞',
  },
]

export default function Home() {
  const latestPosts = getAllBlogPosts().slice(0, 3)

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.10),transparent_25%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="max-w-5xl mx-auto">
          <div>
            <div className="mb-6">
              <code className="text-green-500 text-sm font-mono">
                &lt;code&gt; I secure and optimize
                <br />
                <span className="inline-flex items-baseline">
                  <TypedText
                    phrases={[
                      'IT infrastructures',
                      'cloud-native environments',
                      'security postures',
                      'Linux & Windows systems',
                      'Azure and AWS platforms',
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    backDelay={1600}
                    startDelay={200}
                    loop
                    cursorChar="|"
                  />
                </span>
                <br />
                &lt;/code&gt;
              </code>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h1 className="text-5xl font-bold md:text-7xl">
                Cybersecurity <span className="text-green-500">Engineering Leadership</span>
              </h1>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Available for Remote Work
              </Link>
            </div>

            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-green-500/20 ring-2 ring-green-500 dark:border-gray-900">
                <img
                  src="/images/profile.png"
                  alt="Eddie L. Barlow - Senior Cyber Security Engineer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  I'm Eddie L. Barlow.
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  I build secure systems, cyber programs, and resilient infrastructure.
                </p>
              </div>
            </div>

              <div className="flex gap-4 mb-6">
                <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-green-500 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/eddie-barlow-jr-cism-68802716/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-500 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="http://instagram.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://x.com/mrcyber334?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-500 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm a Montgomery, AL based <strong className="text-green-500">Senior Cyber Security Engineer</strong> and <strong className="text-green-500">Owner of One Circle Solutions</strong>, a managed security services provider helping organizations strengthen cybersecurity, compliance, and infrastructure resilience.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                With over 20 years of experience in cybersecurity and systems administration, I specialize in <strong className="text-green-500">vulnerability management</strong>, <strong className="text-green-500">incident response</strong>, and implementing compliance frameworks like <strong className="text-green-500">NIST</strong> and <strong className="text-green-500">FedRAMP</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-green-400"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="/resume/Eddie_Barlow_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:border-green-500 hover:text-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Guided Scroll Panels */}
      <section className="bg-white dark:bg-gray-950">
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {homeFeaturePanels.map((panel, index) => (
            <article
              key={panel.title}
              id={panel.title === 'Play Me in Chess' ? 'chess' : undefined}
              className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_50%,rgba(14,165,233,0.08),transparent_28%),linear-gradient(rgba(14,165,233,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.045)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]" />
              <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="mb-5 font-mono text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    {panel.eyebrow}
                  </p>
                  <h2 className="mb-5 text-5xl font-black tracking-tight text-slate-950 dark:text-white">
                    {panel.title}
                  </h2>
                  <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
                    I’m here to{' '}
                    <span className="font-bold text-green-500">
                      <TypedText
                        phrases={panel.typed}
                        typeSpeed={48}
                        backSpeed={28}
                        backDelay={1500}
                        startDelay={index * 250}
                        loop
                        cursorChar="|"
                      />
                    </span>
                  </p>

                  <div className="mb-6">
                    <h3 className="mb-2 text-lg font-black text-orange-500">Problem:</h3>
                    <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">{panel.problem}</p>
                  </div>

                  <div className="mb-10">
                    <h3 className="mb-4 text-lg font-black">Solutions:</h3>
                    <ul className="space-y-3">
                      {panel.solutions.map((solution) => (
                        <li key={solution} className="flex gap-3 text-lg text-gray-600 dark:text-gray-300">
                          <Check className="mt-1 shrink-0 text-green-500" size={20} />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {panel.primaryHref.startsWith('http') ? (
                      <a
                        href={panel.primaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-950 bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-green-500 hover:text-slate-950 dark:border-green-500 dark:bg-green-500 dark:text-slate-950 dark:hover:bg-green-400"
                      >
                        {panel.primaryLabel}
                        <ArrowRight size={18} />
                      </a>
                    ) : (
                      <Link
                        to={panel.primaryHref}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-950 bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-green-500 hover:text-slate-950 dark:border-green-500 dark:bg-green-500 dark:text-slate-950 dark:hover:bg-green-400"
                      >
                        {panel.primaryLabel}
                        <ArrowRight size={18} />
                      </Link>
                    )}
                    <Link
                      to={panel.secondaryHref}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-bold text-slate-950 transition hover:border-green-500 hover:text-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    >
                      {panel.secondaryLabel}
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center rounded-[2rem] border border-gray-200 bg-slate-50 shadow-2xl shadow-slate-950/10 dark:border-gray-800 dark:bg-gray-900">
                    <div className="absolute inset-6 rounded-[1.5rem] border border-sky-500/20" />
                    <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_25%,rgba(34,197,94,0.18),transparent_30%),radial-gradient(circle_at_70%_75%,rgba(14,165,233,0.16),transparent_30%)]" />
                    <div
                      className={`relative flex items-center justify-center border border-slate-950 bg-white font-black text-slate-950 shadow-xl dark:border-green-500/40 dark:bg-slate-950 dark:text-green-400 ${
                        panel.title === 'Play Me in Chess'
                          ? 'h-80 w-72 rounded-[1.75rem] p-3 sm:h-96 sm:w-80'
                          : 'h-44 w-44 rounded-3xl text-4xl'
                      }`}
                    >
                      {panel.title === 'Play Me in Chess' ? (
                        <div className="flex h-full w-full flex-col items-center justify-center text-center">
                          <img
                            src="/images/social/chess-com-ebeeeze.jpg"
                            alt="Chess.com friend QR code for ebeeeze"
                            className="mx-auto mb-4 h-full max-h-72 w-full rounded-2xl object-cover object-center sm:max-h-80"
                          />
                          <Trophy className="mx-auto mb-2 text-green-500" size={28} />
                          <span className="block text-xl">ebeeeze</span>
                        </div>
                      ) : (
                        panel.visual
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Intelligence Briefs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-gray-950/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-5 font-mono text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                &gt; SYSTEM_LOGS
              </p>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Intelligence <span className="text-green-500">Briefs</span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex w-fit items-center gap-2 rounded border border-slate-200 bg-white px-6 py-4 font-bold text-slate-900 shadow-sm transition hover:border-green-500 hover:text-green-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
            >
              See Full Blog
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group relative min-h-72 overflow-hidden rounded border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:border-sky-500 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-green-400 to-cyan-400" />
                <div className="absolute inset-x-6 bottom-0 h-1 bg-gradient-to-r from-slate-800 via-sky-500 to-green-400 opacity-80 dark:from-gray-700" />
                <p className="mb-4 font-mono text-sm font-bold text-slate-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </p>
                <h3 className="mb-5 text-2xl font-black leading-tight text-slate-900 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                  {post.title}
                </h3>
                <p className="mb-10 line-clamp-3 text-lg leading-relaxed text-slate-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <span className="absolute bottom-7 left-7 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase text-sky-600 dark:text-sky-400">
                  Read Log
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">Education</span>
          </h2>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Associate's Degree in Information Technology</h3>
                <div className="text-green-500 font-semibold">Trenholm Technical College, Montgomery, AL</div>
              </div>
              <div className="text-gray-400">2006</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Completed comprehensive training in information technology fundamentals, networking, systems administration, and cybersecurity principles that laid the foundation for a successful career in IT security.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">Get</span> in touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <Shield size={80} className="text-green-500 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Have a cybersecurity project or need an experienced security engineer? I'd love to hear from you. Reach out via email or phone to discuss how I can help secure your infrastructure.
                </p>
              </div>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-400 mb-1">Location</dt>
                  <dd className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="text-green-500" size={20} />
                    Montgomery, AL, United States
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-400 mb-1">Email</dt>
                  <dd className="flex items-center gap-2">
                    <Mail className="text-green-500" size={20} />
                    <a href="mailto:eddiebarlowjr@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                      eddiebarlowjr@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-400 mb-1">Phone</dt>
                  <dd className="flex items-center gap-2">
                    <Phone className="text-green-500" size={20} />
                    <a href="tel:334-652-1366" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                      334-652-1366
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-400 mb-1">LinkedIn</dt>
                  <dd className="flex items-center gap-2">
                    <Linkedin className="text-green-500" size={20} />
                    <a href="https://www.linkedin.com/in/eddie-barlow-jr-68802716" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                      eddie-barlow-jr-68802716
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <ContactForm
                inputClassName="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                textareaClassName="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                buttonClassName="w-full bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                statusClassName="text-sm text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
