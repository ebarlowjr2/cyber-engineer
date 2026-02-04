import '../App.css'
import { Linkedin, Mail, Github, Instagram, Twitter, Code, Cpu, Cloud, Lock, Rocket, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'

const projects = [
  {
    icon: Lock,
    title: 'SecureVault Pro',
    status: 'In Development',
    progress: 65,
    description: 'A next-generation password manager with zero-knowledge encryption and biometric authentication. Built with security-first principles and designed for both personal and enterprise use.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebAuthn', 'AES-256'],
    expectedRelease: 'Q2 2026'
  },
  {
    icon: Cpu,
    title: 'ThreatHunter AI',
    status: 'Alpha Testing',
    progress: 40,
    description: 'An AI-powered threat detection system that uses machine learning to identify and respond to security threats in real-time. Integrates with existing SIEM solutions.',
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Kafka', 'Docker'],
    expectedRelease: 'Q3 2026'
  },
  {
    icon: Cloud,
    title: 'CloudGuard Scanner',
    status: 'Planning',
    progress: 15,
    description: 'Automated cloud security posture management tool that scans AWS, Azure, and GCP environments for misconfigurations and compliance violations.',
    technologies: ['Go', 'Terraform', 'AWS SDK', 'Azure SDK', 'GCP SDK'],
    expectedRelease: 'Q4 2026'
  },
  {
    icon: Code,
    title: 'DevSecOps Pipeline Kit',
    status: 'In Development',
    progress: 55,
    description: 'A comprehensive toolkit for integrating security into CI/CD pipelines. Includes SAST, DAST, and dependency scanning with customizable policies.',
    technologies: ['GitHub Actions', 'Jenkins', 'SonarQube', 'OWASP ZAP', 'Trivy'],
    expectedRelease: 'Q2 2026'
  },
  {
    icon: Rocket,
    title: 'CyberRange Platform',
    status: 'Beta',
    progress: 80,
    description: 'A virtual cybersecurity training environment with realistic attack scenarios and hands-on labs. Perfect for training security teams and conducting exercises.',
    technologies: ['Kubernetes', 'Ansible', 'Proxmox', 'Caldera', 'ELK Stack'],
    expectedRelease: 'Q1 2026'
  },
  {
    icon: Zap,
    title: 'Incident Response Automator',
    status: 'Concept',
    progress: 5,
    description: 'SOAR platform for automating incident response workflows. Integrates with ticketing systems, communication tools, and security infrastructure.',
    technologies: ['Python', 'FastAPI', 'Redis', 'Celery', 'GraphQL'],
    expectedRelease: 'TBD'
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'Beta':
      return 'bg-blue-500/20 text-blue-400'
    case 'Alpha Testing':
      return 'bg-purple-500/20 text-purple-400'
    case 'In Development':
      return 'bg-green-500/20 text-green-400'
    case 'Planning':
      return 'bg-yellow-500/20 text-yellow-400'
    case 'Concept':
      return 'bg-gray-500/20 text-gray-400'
    default:
      return 'bg-gray-500/20 text-gray-400'
  }
}

export default function ProjectsInDevelopment() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Eddie <span className="text-green-500">Barlow</span>
            </Link>
            <div className="flex items-center gap-4">
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
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Projects in <span className="text-green-500">Development</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A glimpse into the cybersecurity tools and platforms I'm currently building. These projects represent my vision for making security more accessible and effective.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                      <project.icon className="text-green-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-green-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-400">Expected Release</span>
                  <span className="text-sm text-green-500 font-medium">{project.expectedRelease}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in <span className="text-green-500">Collaborating?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always looking for talented individuals to collaborate on these projects. Whether you're a developer, security researcher, or just passionate about cybersecurity, let's connect!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              <Mail size={20} />
              Get In Touch
            </Link>
            <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700">
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="text-gray-400">
            © 2025 Eddie Barlow
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
