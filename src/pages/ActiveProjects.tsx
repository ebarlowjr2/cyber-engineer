import '../App.css'
import { Linkedin, Github, Instagram, Twitter, ExternalLink, Calendar, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'
import { MobileNav } from '../components/MobileNav'

const activeProjects = [
  {
    title: 'Enterprise SIEM Dashboard',
    description: 'Building a custom security information and event management dashboard that aggregates logs from multiple sources, provides real-time threat detection, and generates automated incident reports. The platform integrates with Splunk, ELK Stack, and custom data sources.',
    status: 'Active Development',
    team: '3 Engineers',
    startDate: 'November 2025',
    technologies: ['React', 'Python', 'Elasticsearch', 'Kafka', 'Docker'],
    progress: 70,
    link: '#'
  },
  {
    title: 'Automated Compliance Scanner',
    description: 'Developing an automated tool that scans infrastructure against NIST 800-53, FedRAMP, and STIG requirements. The scanner generates detailed compliance reports and provides remediation guidance for identified gaps.',
    status: 'Beta Testing',
    team: '2 Engineers',
    startDate: 'September 2025',
    technologies: ['Go', 'Terraform', 'AWS SDK', 'PostgreSQL', 'GraphQL'],
    progress: 85,
    link: '#'
  },
  {
    title: 'Threat Intelligence Platform',
    description: 'Creating a centralized threat intelligence platform that aggregates data from multiple feeds, correlates indicators of compromise (IOCs), and provides actionable intelligence for security operations teams.',
    status: 'Active Development',
    team: '4 Engineers',
    startDate: 'January 2026',
    technologies: ['Python', 'FastAPI', 'Redis', 'Neo4j', 'React'],
    progress: 35,
    link: '#'
  },
  {
    title: 'Security Awareness Training Portal',
    description: 'Building an interactive security awareness training platform with gamification elements, phishing simulations, and progress tracking. Designed to help organizations improve their security culture.',
    status: 'Planning Phase',
    team: '2 Engineers',
    startDate: 'February 2026',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    progress: 15,
    link: '#'
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'Active Development':
      return 'bg-green-500/20 text-green-400'
    case 'Beta Testing':
      return 'bg-blue-500/20 text-blue-400'
    case 'Planning Phase':
      return 'bg-yellow-500/20 text-yellow-400'
    default:
      return 'bg-gray-500/20 text-gray-400'
  }
}

export default function ActiveProjects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Eddie <span className="text-green-500">Barlow</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-green-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/eddie-barlow-jr-cism-68802716/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="http://instagram.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/mrcyber334?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Active <span className="text-green-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A look at the cybersecurity tools and platforms I'm actively building. These projects represent real-world solutions to security challenges I've encountered throughout my career.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {activeProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <a href={project.link} className="text-green-500 hover:text-green-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="text-green-500" />
                    <span>Started: {project.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Users size={16} className="text-green-500" />
                    <span>{project.team}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500 dark:text-gray-400">Progress</span>
                    <span className="text-green-500 font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to <span className="text-green-500">Collaborate?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always looking for talented individuals to collaborate on these projects. Whether you're a developer, security researcher, or just passionate about cybersecurity, let's connect!
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="text-gray-500 dark:text-gray-400">
            &copy; 2025 Eddie Barlow
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-gray-400 hover:text-green-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/eddie-barlow-jr-cism-68802716/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-green-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="http://instagram.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-green-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/mrcyber334?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-green-500 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
