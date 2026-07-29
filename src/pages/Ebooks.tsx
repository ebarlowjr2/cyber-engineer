import '../App.css'
import { ArrowLeft, BookOpen, Download, ExternalLink, FileText, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'

const featuredBook = {
  title: 'Organic Security Framework',
  subtitle: 'Security That Grows With Your Business',
  status: 'Now Available',
  description:
    'A practical cybersecurity framework for leaders, builders, and security teams who need security that grows naturally alongside people, processes, and technology.',
}

const placeholderPdfs = [
  {
    title: 'CISA Cybersecurity Essentials',
    source: 'Cybersecurity and Infrastructure Security Agency',
    description: 'A practical starter guide for leaders and teams building baseline cyber resilience.',
    href: 'https://www.cisa.gov/sites/default/files/publications/Cyber_Essentials_Toolkit_Chapter_1_Yourself_0.pdf',
  },
  {
    title: 'NIST Cybersecurity Framework 2.0',
    source: 'National Institute of Standards and Technology',
    description: 'A widely used framework for managing, reducing, and communicating cybersecurity risk.',
    href: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
  },
  {
    title: 'CISA Zero Trust Maturity Model',
    source: 'Cybersecurity and Infrastructure Security Agency',
    description: 'Guidance for modernizing identity, device, network, workload, and data security capabilities.',
    href: 'https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf',
  },
]

export default function Ebooks() {
  return (
    <PageLayout>
      <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back Home
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-amber-500">
                Now Available // Cyber Reading Room
              </p>
              <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
                eBook <span className="text-green-500">Library</span>
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                A growing shelf of cybersecurity guides, frameworks, and practical field notes. My own ebooks will live
                here as they are released.
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <BookOpen className="text-green-500" size={26} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">{featuredBook.status}</p>
                  <h2 className="text-xl font-bold">{featuredBook.title}</h2>
                </div>
              </div>
              <p className="mb-2 font-semibold text-green-600 dark:text-green-400">{featuredBook.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-300">{featuredBook.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-sm text-green-500">Temporary PDF Shelf</p>
              <h2 className="text-4xl font-bold">Cyber Reference Downloads</h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Your original ebooks can replace these anytime.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {placeholderPdfs.map((pdf) => (
              <article
                key={pdf.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-lg shadow-gray-950/5 transition hover:-translate-y-1 hover:border-green-500 hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-sky-400 to-amber-400" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15">
                  <FileText className="text-green-500" size={28} />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {pdf.source}
                </p>
                <h3 className="mb-4 text-2xl font-black leading-tight">{pdf.title}</h3>
                <p className="mb-8 text-gray-600 dark:text-gray-300">{pdf.description}</p>
                <a
                  href={pdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-green-600 transition hover:text-green-500 dark:text-green-400"
                >
                  Open PDF
                  <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-900">
          <ShieldCheck className="mx-auto mb-4 text-green-500" size={42} />
          <h2 className="mb-4 text-3xl font-black">More eBooks Coming Soon</h2>
          <p className="mx-auto mb-6 max-w-2xl text-gray-600 dark:text-gray-300">
            This page is ready for your own PDF uploads. When you have the files, we can add them to the site and turn
            these cards into direct downloads.
          </p>
          <a
            href="/resume/Eddie_Barlow_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-gray-950 transition hover:bg-green-400"
          >
            Sample Download
            <Download size={18} />
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
