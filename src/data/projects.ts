import { Cloud, Code, Cpu, Lock, Monitor, Rocket, Zap } from 'lucide-react'
import type { ComponentType } from 'react'

export type IconType = ComponentType<{ size?: number; className?: string }>

export const featuredProject = {
  icon: Monitor,
  title: 'CARINA OS',
  status: 'In Development',
  progress: 45,
  description: 'A mission-grade, Debian-based operating system designed for engineers, scientists, and builders working in STEM, embedded systems, robotics, AI, and space-adjacent domains. Built around safe experimentation, hardware interaction, and reproducible workflows.',
  technologies: ['Debian', 'Linux', 'Containers', 'Embedded Systems', 'Robotics'],
  expectedRelease: 'Q3 2026',
  detailPage: '/projects/carina-os',
}

export const projectsInDevelopment = [
  {
    icon: Lock,
    title: 'SecureVault Pro',
    status: 'In Development',
    progress: 65,
    description: 'A next-generation password manager with zero-knowledge encryption and biometric authentication. Built with security-first principles and designed for both personal and enterprise use.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebAuthn', 'AES-256'],
    expectedRelease: 'Q2 2026',
  },
  {
    icon: Cpu,
    title: 'ThreatHunter AI',
    status: 'Alpha Testing',
    progress: 40,
    description: 'An AI-powered threat detection system that uses machine learning to identify and respond to security threats in real-time. Integrates with existing SIEM solutions.',
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Kafka', 'Docker'],
    expectedRelease: 'Q3 2026',
  },
  {
    icon: Cloud,
    title: 'CloudGuard Scanner',
    status: 'Planning',
    progress: 15,
    description: 'Automated cloud security posture management tool that scans AWS, Azure, and GCP environments for misconfigurations and compliance violations.',
    technologies: ['Go', 'Terraform', 'AWS SDK', 'Azure SDK', 'GCP SDK'],
    expectedRelease: 'Q4 2026',
  },
  {
    icon: Code,
    title: 'DevSecOps Pipeline Kit',
    status: 'In Development',
    progress: 55,
    description: 'A comprehensive toolkit for integrating security into CI/CD pipelines. Includes SAST, DAST, and dependency scanning with customizable policies.',
    technologies: ['GitHub Actions', 'Jenkins', 'SonarQube', 'OWASP ZAP', 'Trivy'],
    expectedRelease: 'Q2 2026',
  },
  {
    icon: Rocket,
    title: 'CyberRange Platform',
    status: 'Beta',
    progress: 80,
    description: 'A virtual cybersecurity training environment with realistic attack scenarios and hands-on labs. Perfect for training security teams and conducting exercises.',
    technologies: ['Kubernetes', 'Ansible', 'Proxmox', 'Caldera', 'ELK Stack'],
    expectedRelease: 'Q1 2026',
  },
  {
    icon: Zap,
    title: 'Incident Response Automator',
    status: 'Concept',
    progress: 5,
    description: 'SOAR platform for automating incident response workflows. Integrates with ticketing systems, communication tools, and security infrastructure.',
    technologies: ['Python', 'FastAPI', 'Redis', 'Celery', 'GraphQL'],
    expectedRelease: 'TBD',
  },
]

export const activeProjects = [
  {
    title: 'Starkid Command',
    description: 'A STEM-focused mobile and web application centered on space exploration and astronomy. Starkid Command allows users to track objects in space, monitor rocket launches in real-time, view moon phases, explore constellations, and learn about the equipment used in space exploration. The app aims to make astronomy accessible and engaging for students and space enthusiasts alike.',
    status: 'Active Development',
    team: '2 Engineers',
    startDate: 'October 2025',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'NASA API', 'SpaceX API'],
    progress: 65,
    link: '#',
  },
  {
    title: 'Automated Compliance Scanner',
    description: 'Developing an automated tool that scans infrastructure against NIST 800-53, FedRAMP, and STIG requirements. The scanner generates detailed compliance reports and provides remediation guidance for identified gaps.',
    status: 'Beta Testing',
    team: '2 Engineers',
    startDate: 'September 2025',
    technologies: ['Go', 'Terraform', 'AWS SDK', 'PostgreSQL', 'GraphQL'],
    progress: 85,
    link: '#',
  },
  {
    title: 'Threat Intelligence Platform',
    description: 'Creating a centralized threat intelligence platform that aggregates data from multiple feeds, correlates indicators of compromise (IOCs), and provides actionable intelligence for security operations teams.',
    status: 'Active Development',
    team: '4 Engineers',
    startDate: 'January 2026',
    technologies: ['Python', 'FastAPI', 'Redis', 'Neo4j', 'React'],
    progress: 35,
    link: '#',
  },
  {
    title: 'Security Awareness Training Portal',
    description: 'Building an interactive security awareness training platform with gamification elements, phishing simulations, and progress tracking. Designed to help organizations improve their security culture.',
    status: 'Planning Phase',
    team: '2 Engineers',
    startDate: 'February 2026',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    progress: 15,
    link: '#',
  },
]
