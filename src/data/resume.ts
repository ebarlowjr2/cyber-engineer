import { Award, Calendar, Cloud, Code, Database, Lock, Network, Server, Shield } from 'lucide-react'
import type { ComponentType } from 'react'

export type IconType = ComponentType<{ size?: number; className?: string }>

export const stats = [
  {
    icon: Calendar,
    label: 'Years of experience',
    value: '20+',
  },
  {
    icon: Award,
    label: 'Certifications',
    value: '7',
  },
  {
    icon: Server,
    label: 'Systems Secured',
    value: '1500+',
  },
  {
    icon: Shield,
    label: 'Security Stacks',
    value: '12',
  },
]

export const certifications = [
  {
    title: 'ISACA CISM',
    subtitle: 'Certified Information Security Manager',
  },
  {
    title: 'Azure Associate AZ-104',
    subtitle: 'Microsoft Azure Administrator',
  },
  {
    title: 'CompTIA Security+ CE',
    subtitle: 'Security+ Certification',
  },
  {
    title: 'MCSA Windows Server',
    subtitle: 'Microsoft Certified Solutions Associate',
  },
  {
    title: 'DISA HBSS',
    subtitle: 'Certificates 201, 301, and 501',
  },
  {
    title: 'NARTE Class III',
    subtitle: 'Certified Technician',
  },
]

export const techStack = [
  {
    icon: Server,
    title: 'Operating Systems',
    items: ['RHEL', 'CentOS', 'Ubuntu Server', 'Windows Server'],
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    items: ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud'],
  },
  {
    icon: Code,
    title: 'DevOps & Automation',
    items: ['Ansible', 'Docker', 'Terraform', 'Bash Scripting'],
  },
  {
    icon: Lock,
    title: 'Security Tools',
    items: ['Splunk', 'Nessus', 'Qualys', 'SentinelOne'],
  },
  {
    icon: Network,
    title: 'Network Security',
    items: ['Firewalls', 'IDS/IPS', 'EDR/XDR', 'SIEM'],
  },
  {
    icon: Database,
    title: 'Monitoring Tools',
    items: ['ELK Stack', 'Nagios', 'ServiceNow', 'JIRA'],
  },
  {
    icon: Server,
    title: 'Configuration',
    items: ['Apache', 'Git', 'Puppet', 'Chef'],
  },
  {
    icon: Shield,
    title: 'Compliance',
    items: ['NIST 800-53', 'FedRAMP', 'STIGs', 'RMF'],
  },
]

export const experience = [
  {
    title: 'Senior Cyber Security Engineer',
    company: '3 Squared Technologies',
    location: 'Montgomery, AL (Remote)',
    dates: 'June 2025 – Present',
    bullets: [
      'Manage five classified environments — three IL4 and two IL6 — ensuring full compliance with DoD Cloud SRG, STIG, and RMF security standards',
      'Lead daily operations for RHEL-based systems including kernel tuning, SELinux configuration, system patching, and advanced hardening for mission-critical applications',
      'Support the migration of IL6 workloads to AWS IL6 (Cloud One), validating enclave configurations, cross-domain data flows, and secure automation baselines',
      'Participate in Agile sprints and Technical Interchange Meetings (TIMs) to coordinate migration milestones, sprint deliverables, and system accreditation artifacts',
      'Administer and secure Trend Micro Deep Security / Deep Visibility for intrusion detection, real-time monitoring, and forensic data analysis within IL6 boundaries',
    ],
    link: '/jobs/3squared-senior-cyber-security-engineer',
  },
  {
    title: 'Senior Cyber Security Engineer',
    company: 'MSI (via USPO)',
    location: 'Montgomery, AL (Remote)',
    dates: 'January 2025 – June 2025',
    bullets: [
      'Lead the development and customization of cybersecurity tools and platforms, including integrations with Splunk, Armis, SentinelOne, and Microsoft IRM',
      'Designed and implemented custom dashboards, alert logic, and data ingestion pipelines within Splunk to improve threat hunting',
      'Engineered modifications to Azure-native tools and Microsoft IRM configurations, strengthening cloud and data security posture',
      'Customized and automated workflows within ServiceNow for streamlined vulnerability management and incident tracking',
      'Mentored junior engineers and contributed to knowledge-sharing initiatives for improved cyber tool lifecycle support',
    ],
    link: '/jobs/msi-senior-cyber-security-engineer',
  },
  {
    title: 'Cyber Security Engineer',
    company: 'TCecure, LLC',
    location: 'Baltimore, MD',
    dates: 'May 2022 – March 2025',
    bullets: [
      'Managed and secured RHEL-based systems by implementing robust configurations and patch management',
      'Integrated and maintained ELK Stack for real-time log analysis and monitoring critical systems',
      'Automated deployment and configuration processes for network assets, reducing manual errors and deployment time by 30%',
      'Conducted vulnerability assessments and remediation using Nessus and Rapid7 InsightVM',
      'Automated security tasks using Ansible and Bash, ensuring compliance with STIGs',
    ],
    link: '/jobs/tcecure-cyber-security-engineer',
  },
  {
    title: 'Network Engineering SME',
    company: 'Astrion US',
    location: 'Maxwell-AFB Gunter Annex, Montgomery AL',
    dates: 'March 2021 – May 2022',
    bullets: [
      'Spearheaded enterprise infrastructure services for 700 users across four teams leveraging Oracle Cloud, Azure, and AWS',
      'Led cloud workflow automation across eight zones, reducing process times by 25% and improving deployment efficiency',
      'Designed and implemented security systems aligning with SABSA and NIST 800-53, leading to a 50% reduction in security incidents',
      'Conducted performance evaluations and system migrations for over 800 systems transitioning from on-premise to cloud environments',
      'Engineered cloud management strategies achieving a 20% reduction in annual IT spending',
    ],
    link: '/jobs/astrion-network-engineering-sme',
  },
  {
    title: 'Sr. Cyber Security Engineer',
    company: 'SMS Data Solutions / Cyber Defenses Inc.',
    location: 'Maxwell-AFB Gunter Annex, Montgomery AL',
    dates: 'October 2015 – March 2021',
    bullets: [
      'Administered comprehensive security for 12 security stacks for DISA implementations across Army, Air Force, and Navy',
      'Managed and supported 24 VMware environments consisting of 300 RHEL Servers',
      'Administered a host-based security system in a mixed virtual and physical environment for 1500+ hosts and appliances',
      'Led vulnerability management processes for 300+ Red Hat Enterprise Linux and Windows hosts',
      'Developed a SASE framework with a zero-trust architecture, aligning with FedRAMP and NIST frameworks',
    ],
    link: '/jobs/sms-data-solutions-sr-cyber-security-engineer',
  },
]
