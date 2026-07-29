import '../App.css'
import { ArrowLeft, Briefcase, Download, Flag, GraduationCap, MapPin, Phone, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'

const profileDetails = [
  { icon: MapPin, label: 'Location', value: 'Montgomery, AL' },
  { icon: Phone, label: 'Phone', value: '334-652-1366' },
  { icon: Flag, label: 'Citizenship', value: 'United States of America' },
  { icon: Shield, label: 'Clearance', value: 'Top Secret SSBI' },
  { icon: Briefcase, label: 'Employment', value: 'Owner of One Circle Solutions, Managed Security Services Provider' },
  { icon: GraduationCap, label: 'Education', value: 'Trenholm Technical College' },
]

export default function About() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.10),transparent_25%)]" />
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-green-500 transition hover:text-green-400">
            <ArrowLeft size={20} />
            Back Home
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
            <div>
              <p className="mb-5 font-mono text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                [ OPERATOR_PROFILE ]
              </p>
              <h1 className="mb-8 text-5xl font-black tracking-tight md:text-7xl">
                About <span className="text-green-500">Me</span>
              </h1>
              <div className="space-y-6 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                <p>
                  Results-driven Cybersecurity and Systems Administration Professional with over 20 years of experience
                  securing and optimizing IT infrastructures in highly regulated environments, including government and
                  defense sectors.
                </p>
                <p>
                  Expertise in Linux (RHEL, CentOS), cloud platforms (AWS, Azure), and automation tools (Ansible, Bash,
                  Terraform) to enhance system efficiency and security posture. Proven track record in vulnerability
                  management, incident response, and implementing compliance frameworks like NIST, FedRAMP, and ISO
                  standards.
                </p>
                <p>
                  Adept at designing and managing scalable cloud-native environments, containerized applications (Docker,
                  Kubernetes), and enterprise monitoring solutions (Splunk, ELK). Recognized for leadership in
                  cross-functional teams, technical documentation, and delivering solutions that reduce risk and support
                  mission-critical operations.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-950/5 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-8 flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-green-500/20 ring-2 ring-green-500 dark:border-gray-900">
                  <img
                    src="/images/profile.png"
                    alt="Eddie L. Barlow"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-black">Eddie L. Barlow</h2>
                  <p className="text-gray-500 dark:text-gray-400">Senior Cybersecurity Engineer</p>
                </div>
              </div>

              <ul className="space-y-5">
                {profileDetails.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon className="mt-1 shrink-0 text-green-500" size={20} />
                    <div>
                      <span className="font-semibold">{label}:</span>{' '}
                      <span className="text-gray-600 dark:text-gray-300">{value}</span>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Download className="mt-1 shrink-0 text-green-500" size={20} />
                  <div>
                    <a
                      href="/resume/Eddie_Barlow_Resume.pdf"
                      download
                      className="font-semibold text-green-500 transition hover:text-green-400"
                    >
                      Download Resume
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
