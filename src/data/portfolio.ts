import { AlertTriangle, CloudCog, Eye, FileCheck, Lock, Network, Shield } from 'lucide-react'
import type { ComponentType } from 'react'

export type IconType = ComponentType<{ size?: number; className?: string }>

export const expertiseAreas = [
  {
    icon: Shield,
    title: 'Defensive Cyber Operations (DCO)',
    description: 'I have over 18 years of experience in defensive cyber operations across public and private sectors, protecting systems by identifying vulnerabilities, hardening configurations, and detecting unauthorized activity across enterprise networks.',
  },
  {
    icon: FileCheck,
    title: 'STIGs and SRG',
    description: 'I have led STIG and SRG compliance efforts for DoD-aligned environments, using DISA baselines to harden systems and document remediation plans while maintaining ATO readiness.',
  },
  {
    icon: Network,
    title: 'Experienced SysAdmin',
    description: 'I have 20+ years of Linux and Windows systems administration experience, managing patching, configuration management, automation, and uptime for mission-critical environments.',
  },
  {
    icon: Lock,
    title: 'Risk Management Framework, A&A, and ATO',
    description: 'I have delivered RMF packages and A&A documentation aligned to NIST SP 800-37, driving systems through assessment and ATO while balancing mission needs and risk posture.',
  },
  {
    icon: AlertTriangle,
    title: 'ACAS and Nessus',
    description: 'I have managed enterprise vulnerability scanning with ACAS/Nessus, prioritizing findings, validating fixes, and coordinating remediation across Linux and Windows fleets.',
  },
  {
    icon: Eye,
    title: 'Cyber Threat Intelligence (CTI)',
    description: 'I build actionable CTI by correlating indicators, reviewing alerts, and translating threat data into defensive controls for SOC and engineering teams.',
  },
  {
    icon: Shield,
    title: 'Incident Response & Forensics',
    description: 'I have led incident response across regulated environments, coordinating containment, root-cause analysis, and recovery while documenting lessons learned.',
  },
  {
    icon: Network,
    title: 'Security Architecture & Zero Trust',
    description: 'I design layered security architectures, segment networks, and apply zero-trust principles to reduce attack surface and enforce least privilege.',
  },
  {
    icon: Lock,
    title: 'Identity & Access Management (IAM)',
    description: 'I implement role-based access controls, MFA policies, and access reviews to ensure identity governance aligns with compliance requirements.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Audits & Reporting',
    description: 'I translate technical controls into audit-ready evidence, build POA&Ms, and support continuous monitoring for compliance assessments.',
  },

]

export const majorProjects = [
  {
    title: 'Mission-Critical Air Force HBSS Outage Resolution',
    slug: 'air-force-hbss-outage-resolution',
    icon: Shield,
    shortDescription: 'Restored Air Force-wide HBSS endpoint protection after a mission-critical Linux server outage degraded cybersecurity readiness across the enterprise.',
    summary: [
      'Resolved a mission-critical enterprise outage affecting over 90% of Linux servers across the U.S. Air Force caused by improper tuning of McAfee HBSS VirusScan Enterprise (VSE). Diagnosed and corrected the configuration at the 26th Network Operations Squadron (26th NOS), restoring full endpoint protection functionality and preventing widespread degradation of cybersecurity readiness.',
      'After implementing the fix locally, the solution was rapidly adopted across all Air Force Network Operations Centers (AFNETs) and disseminated through the 24th Air Force, becoming the official remediation standard.',
      'In recognition of the impact, I was flown to Lackland Air Force Base to brief Maj. Gen. Suzanne M. "Zan" Vautrinot, Commander of 24th Air Force, Air Forces Cyber, and Air Force Network Operations, on the resolution strategy and system optimization techniques that stabilized the HBSS platform Air Force–wide.',
    ],
    tags: ['McAfee HBSS', '24th Air Force', 'Enterprise Security', 'Crisis Resolution'],
  },
  {
    title: 'Joint Regional Security Stacks (JRSS) IL6 Deployment',
    slug: 'jrss-il6-deployment',
    icon: Network,
    shortDescription: 'Led secure IL6 JRSS deployment work that modernized classified DoD network defense with unified firewall, IPS, proxy, and routing services.',
    summary: [
      'Served as the Lead Cybersecurity Engineer for the deployment of the Joint Regional Security Stacks (JRSS) into the Impact Level 6 (IL6) enclave of the Department of Defense (DoD) network — a pivotal modernization effort under the Joint Information Environment (JIE) initiative. Oversaw the secure integration of firewall, IPS, web proxy, and routing services into a unified security architecture designed to consolidate and harden network defenses across multiple combatant commands.',
      'Led cross-functional teams across DISA, 24th Air Force, and AFINC to validate configurations, apply STIG-compliant baselines, and ensure full interoperability with classified systems and existing enclave security policies. Authored and executed comprehensive test plans and migration runbooks, mitigating risks during transition and maintaining continuous mission operations.',
      'The successful IL6 JRSS deployment significantly enhanced visibility, threat correlation, and real-time response capabilities across Air Force Cyber Command. The implementation set the model for subsequent JRSS rollouts in other high-side DoD networks and reinforced the Air Force\'s posture under the Cybersecurity Service Provider (CSSP) framework.',
    ],
    tags: ['JRSS', 'IL6', 'DISA', 'JIE'],
    link: 'https://disa.mil/-/media/Files/DISA/News/Events/Symposium/2---Griffin_JRSS-PANEL_approved_FINAL.pdf',
    linkLabel: 'Learn More About JRSS →',
  },
  {
    title: 'Air Force Network (AFNET) Enterprise Migration',
    slug: 'afnet-enterprise-migration',
    icon: Network,
    shortDescription: 'Supported a major Air Force cyberspace modernization effort consolidating networks, accounts, servers, and sites into a standardized enterprise model.',
    summary: [
      'Served as a technical lead supporting the Air Force Network (AFNET) enterprise migration effort, a major cyberspace modernization milestone that moved Air Force user accounts and workstations into a centrally managed, standardized network architecture aligned with the Department of Defense Joint Information Environment (JIE) vision.',
      'Contributed technical leadership across enterprise migration planning, implementation coordination, infrastructure standardization, and risk reduction as disparate Air Force networks were consolidated into a more defensible AFNET operating model. The effort supported improved situational awareness, scalability, command and control, and consistency across Air Force network operations.',
      'The AFNET migration milestone consolidated 646,000 email boxes and 12,318 servers across 275 sites, reducing fragmentation from legacy unit-specific networks while improving cybersecurity, operational maintainability, and warfighter access to information services across the Air Force enterprise.',
    ],
    tags: ['AFNET', 'JIE', 'Enterprise Migration', 'Network Modernization'],
    link: 'https://www.af.mil/News/Article-Display/Article/475200/cyberspace-milestone-reached-for-air-force-network/',
    linkLabel: 'Learn More About AFNET →',
  },
  {
    title: "Prince George's County Cyber Lab Development",
    slug: 'prince-georges-county-cyber-lab',
    icon: Lock,
    shortDescription: 'Designed an AI-assisted cyber range that blends enterprise infrastructure, threat emulation, and hands-on workforce development labs.',
    summary: [
      'Served as the Principal Engineer for the design and development of the Prince George\'s County Cyber Lab — a next-generation, AI-driven cybersecurity training environment engineered to bridge the gap between academic simulation and enterprise-grade infrastructure.',
      'Led the end-to-end architecture of the lab, integrating real-world enterprise systems, network segmentation, threat emulation, and AI-assisted analysis tools to create a fully functional cyber range supporting defensive and offensive training scenarios. Designed progressive, role-based labs that evolve from foundational security concepts to complex, real-world incident response and threat-hunting exercises.',
      'The platform delivers hands-on, immersive training for students and professionals, incorporating automated lab orchestration, virtual machine provisioning, and real-time monitoring dashboards. Its innovative design established a scalable model for regional cyber education and workforce development, helping to strengthen local talent pipelines and support DoD-aligned cyber readiness initiatives.',
    ],
    tags: ['AI-Driven Training', 'Cyber Range', 'Workforce Development', 'Lab Architecture'],
  },
  {
    title: 'Air Force Intranet Control (AFINC) Weapon System',
    slug: 'afinc-weapon-system',
    icon: AlertTriangle,
    shortDescription: 'Contributed architecture and security engineering for the Air Force cyber weapon system defending traffic into and out of the enterprise network.',
    summary: [
      'Served as the Lead Cybersecurity Architect for the Air Force Intranet Control (AFINC) Weapon System — the first-ever cyberspace weapon system formally designated by the U.S. Air Force and a cornerstone capability of the Air Force Network Operations (AFNETOPS) mission. The AFINC Weapon System is responsible for operating, defending, and controlling the flow of all network traffic into and out of the Air Force\'s enterprise network, serving as the primary gateway protecting the .mil and .gov domains.',
      'Led architectural design, security engineering, and compliance validation across the system\'s core components, including boundary defense, proxy services, IDS/IPS integration, and traffic management. Collaborated closely with DISA, 24th Air Force, and U.S. Cyber Command to align system configurations with evolving DoD directives and the Cybersecurity Service Provider (CSSP) framework.',
      'My efforts directly contributed to the AFINC Weapon System achieving Full Operational Capability (FOC) status, enabling continuous network defense, centralized visibility, and cyber threat mitigation for the entire Department of Defense Information Network (DoDIN). This milestone represented a historic advancement in the Air Force\'s ability to conduct, command, and sustain operations within cyberspace as a recognized warfighting domain.',
    ],
    tags: ['AFINC', 'Weapon System', 'AFNETOPS', 'DoDIN'],
    link: 'https://www.hanscom.af.mil/News/Article-Display/Article/846805/first-cyberspace-weapon-system-attains-full-operational-capability-status/',
    linkLabel: 'Learn More About AFINC →',
  },
  {
    title: 'USPS Enterprise USB Whitelisting and DLP Rollout',
    slug: 'usps-enterprise-usb-whitelisting-dlp',
    icon: Lock,
    shortDescription:
      'Led cybersecurity execution for a nationwide USPS DLP rollout that blocked unauthorized USB storage across the enterprise while preserving approved business operations.',
    summary: [
      'Led cybersecurity efforts for a United States Postal Service enterprise data loss prevention initiative to block unapproved USB storage across a nationwide operating environment supporting 30,972 retail offices and approximately 780,000 total workers.',
      'Partnered with the Post Office CTO organization to gather requirements, define operational constraints, and establish an approved hardware baseline using Armis device intelligence before enforcement began.',
      'Built the operational rollout model by coordinating daily bridge lines, creating a help desk intake and escalation process, and aligning communications across cybersecurity, infrastructure, endpoint support, and business stakeholders.',
      'Scheduled and executed the enterprise-wide USB control enforcement using SentinelOne, enabling approved device access while reducing removable-media data loss risk across the Postal Service network.',
    ],
    tags: ['USPS', 'DLP', 'USB Control', 'SentinelOne', 'Armis'],
  },
  {
    title: 'Air Force ERP Common Services OCI Modernization',
    slug: 'air-force-erp-common-services-oci-modernization',
    icon: CloudCog,
    shortDescription:
      'Led process development and technical integration planning to translate legacy on-premises Air Force ERP capabilities into secure Oracle Cloud Infrastructure alternatives.',
    summary: [
      'Served as the Lead Process Developer and Technical Integration Subject Matter Expert for the Air Force Enterprise Resource Planning Common Services (ERP CS) modernization effort, helping shape the transition from legacy on-premises technologies to shared services within Oracle Cloud Infrastructure (OCI) on Cloud One.',
      'Developed a cloud-focused, Department of Defense-style Analysis of Alternatives (AoA) process that gave program leaders a repeatable method for evaluating legacy capabilities against OCI-native and cloud-compatible options. The approach considered mission fit, cybersecurity, integration dependencies, operational risk, sustainment, and migration feasibility instead of treating cloud adoption as a one-for-one technology replacement.',
      'Translated technical requirements and legacy service dependencies into actionable cloud alternatives, serving as an integration bridge among program leadership, cybersecurity teams, application owners, infrastructure engineers, and mission partners. This work helped stakeholders make defensible modernization decisions while preserving mission continuity and supporting continuous Authority to Operate readiness.',
      'The broader ERP CS platform provides standardized OCI hosting, application support, and layered cybersecurity services for major Air Force mission applications including DEAMS, AFIPPS, and MRO. My contribution established the process and technical decision framework needed to align those shared cloud capabilities with complex legacy workloads.',
    ],
    tags: ['Air Force ERP CS', 'Oracle Cloud', 'Cloud One', 'AoA', 'Technical Integration'],
    link: 'https://sam.gov/workspace/contract/opp/1eb34015cf254a1ca0c2f4a6f79c84b2/view',
    linkLabel: 'View ERP CS Program Source',
  },

]
