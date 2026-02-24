import '../../App.css'
import { Monitor, Shield, Cpu, Terminal, Users, CheckCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../components/PageLayout'

const keyProblems = [
  'Linux systems becoming polluted by experiments and ad-hoc installs',
  'Unsafe testing directly on the host OS',
  'Inconsistent device permissions (USB, serial, microcontrollers)',
  'Complex setup for embedded and robotics tooling',
  'Lack of clear separation between "mission work" and "experimentation"',
  'GUIs that are either forced or tightly coupled to the OS',
  'Distributions that feel generic or unfocused for technical work'
]

const coreFeatures = [
  {
    title: 'True OS Identity',
    description: 'CARINA presents itself as its own Debian-based operating system, not a customized Ubuntu image, with distinct branding, tooling, and lifecycle.'
  },
  {
    title: 'Profile-Driven Environments',
    description: 'Users apply purpose-built profiles (Core, FlightDeck, MissionLab) instead of manually configuring systems, ensuring consistency and repeatability.'
  },
  {
    title: 'Built-In Sandbox System',
    description: 'CARINA Sandbox provides fast, disposable execution environments using containers, allowing users to test code safely without polluting the host OS.'
  },
  {
    title: 'Time-Bound Experiments (TTL)',
    description: 'Sandboxes support automatic expiration, preventing forgotten test environments and improving system hygiene.'
  },
  {
    title: 'Mission-Safe Execution Model',
    description: 'All experimental code runs in isolation by default, laying the groundwork for future AI-assisted execution without compromising system integrity.'
  },
  {
    title: 'Hardware-First Defaults',
    description: 'CARINA removes common Linux friction around USB, serial, and microcontroller access using sane udev rules and group-based permissions.'
  },
  {
    title: 'MissionLab Tooling',
    description: 'Embedded and robotics tooling (Arduino CLI, PlatformIO, ROS tooling, OpenOCD) is integrated as optional overlays, not forced installs.'
  },
  {
    title: 'Headless-First, GUI-Optional Design',
    description: 'CARINA works cleanly in headless environments while allowing the GUI to be enabled or disabled without breaking the system.'
  },
  {
    title: 'Auditable and Transparent Operations',
    description: 'Sandbox actions, system changes, and execution paths are logged, making CARINA suitable for education, research, and regulated environments.'
  },
  {
    title: 'Future-Ready for AI and Automation',
    description: 'The platform is designed to safely support AI advisory and execution systems without granting uncontrolled access to the host OS.'
  }
]

const targetAudience = [
  'Engineers and scientists who build and test systems, not just run apps',
  'Embedded and robotics developers tired of fighting Linux permissions',
  'Educators and labs needing reproducible, clean environments',
  'Field and mission-oriented teams using laptops, Toughbooks, or small PCs',
  'Builders who want control, safety, and clarity—not bloat'
]

export default function CarinaOS() {
  return (
    <PageLayout>
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/projects-in-development" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg">
              <Monitor className="text-green-500" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                CARINA <span className="text-green-500">OS</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Mission-Grade Linux for STEM and Space-Focused Engineering</p>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              CARINA OS is a mission-grade, Debian-based operating system designed for engineers, scientists, and builders working in STEM, embedded systems, robotics, AI, and space-adjacent domains. Unlike traditional Linux distributions that prioritize general-purpose desktops or server workloads, CARINA is built around safe experimentation, hardware interaction, and reproducible workflows.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              CARINA addresses long-standing pain points in Linux by providing a clean system identity, profile-driven environments, built-in sandboxing, and hardware-friendly defaults that eliminate common friction around permissions, device access, and environment pollution. The result is an OS that feels intentional, controlled, and ready for real-world engineering work—from laptops and Toughbooks to small PCs and field nodes.
            </p>
            <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
              CARINA is not a themed remix. It is a focused platform for building, testing, and deploying technology safely.
            </p>
          </div>

                    <div className="mb-8">
                      <img 
                        src="/images/projects/carina-os-banner.png" 
                        alt="CARINA Linux" 
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="text-green-500" size={28} />
            <h2 className="text-3xl font-bold">Key Problems CARINA Solves</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {keyProblems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="text-green-500" size={28} />
            <h2 className="text-3xl font-bold">Core Features Embedded in CARINA OS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-500 mb-2">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-green-500" size={28} />
            <h2 className="text-3xl font-bold">Who CARINA Is For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-start gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                <Terminal className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-green-500">Get Started?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            CARINA OS is currently in active development. Stay tuned for download links and documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              Get Notified
            </Link>
            <Link to="/projects-in-development" className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-700">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
