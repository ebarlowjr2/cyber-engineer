import '../../App.css'
import { ArrowLeft, CheckCircle2, Eye, Fingerprint, Layers, RadioTower, ShieldCheck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../components/PageLayout'

const pillars = [
  {
    icon: Eye,
    title: 'Visibility',
    description: 'Understand assets, users, devices, risks, and activity before trying to control or improve them.',
  },
  {
    icon: Fingerprint,
    title: 'Identity & Access',
    description: 'Build strong identity foundations with practical access controls, role alignment, and least privilege.',
  },
  {
    icon: ShieldCheck,
    title: 'Device Security',
    description: 'Harden endpoints, servers, and cloud-connected systems so the environment has a defensible baseline.',
  },
  {
    icon: RadioTower,
    title: 'Monitoring & Response',
    description: 'Create repeatable detection, alerting, investigation, and response practices before incidents happen.',
  },
]

const maturityPath = [
  'Establish foundational cyber hygiene and inventory awareness.',
  'Reduce identity, access, endpoint, and configuration risk.',
  'Add monitoring, logging, response playbooks, and operational ownership.',
  'Improve continuously through lessons learned, metrics, automation, and governance.',
]

export default function OrganicSecurityFramework() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/projects-in-development" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">Featured Project</p>
              <h1 className="text-4xl md:text-5xl font-bold mt-3">Organic Security Framework</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg leading-relaxed">
                The Organic Security Framework (OSF) is a practical cybersecurity model designed to help organizations
                build security that grows naturally alongside their people, processes, and technology.
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <Layers className="text-green-500" size={26} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Framework Focus</p>
                  <h2 className="text-xl font-bold">Security That Matures Naturally</h2>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                OSF turns security from a checklist into an operating model: visible, understandable, repeatable, and
                sustainable.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Many organizations struggle with cybersecurity because traditional frameworks can be complex,
              compliance-focused, or difficult to translate into everyday operations. The Organic Security Framework was
              created to bridge that gap by providing a clear, understandable approach to cybersecurity that focuses on
              real-world protection, operational readiness, and continuous improvement.
            </p>
            <p>
              At its core, OSF recognizes that effective cybersecurity is not a single product, policy, or project.
              Instead, it is a living system made up of interconnected layers that work together to reduce risk, improve
              visibility, and strengthen resilience over time.
            </p>
            <p>
              The framework begins with the Fabric Core—the foundational security capabilities every organization should
              understand and implement. These include identity management, access control, device awareness, monitoring
              and visibility, baseline protections, incident response readiness, and continuous improvement. Together,
              these elements form the security foundation upon which more advanced capabilities can be built.
            </p>
            <p>
              As organizations mature, the framework expands to incorporate additional layers such as security awareness
              training, operational processes, automation, vulnerability management, governance, and advanced security
              operations. This allows organizations to improve their security posture at a pace that aligns with their
              resources, business objectives, and risk profile.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Core Security Layers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <pillar.icon className="text-green-500" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div>
            <p className="text-sm uppercase tracking-wide text-green-500">Implementation Model</p>
            <h2 className="text-3xl font-bold mt-2 mb-4">From Hygiene to Operations</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Unlike many cybersecurity approaches that focus solely on technical controls, the Organic Security
              Framework emphasizes the relationship between people, technology, and operational practices. The goal is to
              create security that becomes part of normal business operations rather than an isolated compliance
              exercise.
            </p>
          </div>

          <div className="space-y-4">
            {maturityPath.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-sm font-bold text-green-500">
                  {index + 1}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-green-500" size={26} />
            <h2 className="text-2xl font-bold">Built for Practical Adoption</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            The Organic Security Framework is designed to support organizations of all sizes—from small businesses
            taking their first cybersecurity steps to larger organizations seeking a structured path toward security
            maturity. Whether the objective is protecting sensitive information, improving cyber awareness, preparing for
            compliance requirements, or strengthening operational resilience, OSF provides a practical roadmap for
            achieving meaningful security outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Simple enough for leaders to understand.',
              'Structured enough for engineers to implement.',
              'Flexible enough for organizations of different sizes.',
              'Operational enough to improve response readiness over time.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-8">
            Security is not a destination. It is a continuous process of learning, adapting, and improving. The Organic
            Security Framework provides the structure to help organizations make that journey with confidence.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
