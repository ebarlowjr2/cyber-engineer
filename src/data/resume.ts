import { Award, Calendar, Cloud, Database, Lock, Network, Server, Shield } from 'lucide-react'
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
    icon: Shield,
    title: 'Security and Monitoring',
    items: [
      'Splunk',
      'ELK Stack',
      'Wazuh',
      'SentinelOne',
      'ArcSight',
      'Trellix/McAfee HBSS',
      'Armis',
      'Nagios',
      'Cacti',
      'Netcool',
      'IDS/IPS',
      'SIEM',
      'EDR',
      'XDR',
    ],
  },
  {
    icon: Lock,
    title: 'Vulnerability and Penetration Testing',
    items: [
      'ACAS/Tenable',
      'Nessus',
      'Rapid7 InsightVM',
      'Qualys',
      'OpenVAS',
      'Nmap',
      'Burp Suite',
      'OWASP ZAP',
      'HP WebInspect',
      'Metasploit',
      'Kali Linux',
      'Wireshark',
      'tcpdump',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    items: [
      'AWS EC2',
      'AWS ELB',
      'AWS CloudWatch',
      'AWS EMR',
      'Microsoft Azure',
      'Google Cloud Platform',
      'Google Security Command Center',
      'Oracle Cloud Infrastructure',
    ],
  },
  {
    icon: Server,
    title: 'Operating Systems and Virtualization',
    items: [
      'Red Hat Enterprise Linux',
      'CentOS',
      'Oracle Linux',
      'Ubuntu Server',
      'SUSE Linux Enterprise Server',
      'Microsoft Windows Server',
      'VMware',
    ],
  },
  {
    icon: Network,
    title: 'Enterprise Infrastructure',
    items: [
      'Active Directory',
      'Group Policy',
      'IAM',
      'PKI and digital certificates',
      'DNS',
      'DHCP',
      'WSUS',
      'Firewalls',
      'VPNs',
      'Apache',
      'JSON',
      'ServiceNow',
      'JIRA',
      'Confluence',
    ],
  },
  {
    icon: Database,
    title: 'Digital Forensics and Incident Response',
    items: [
      'Endpoint artifact analysis',
      'Cloud and authentication log analysis',
      'Timeline reconstruction',
      'Evidence documentation',
      'Threat hunting',
      'Compromise assessment',
      'Malware analysis',
    ],
  },
]

export const experience = [
  {
    title: 'Founder / Senior Cybersecurity Consultant (MSSP)',
    company: 'One Circle Solutions',
    location: 'Montgomery, AL',
    dates: 'March 2018 - Present',
    bullets: [
      'Lead managed security service provider operations delivering cybersecurity, vulnerability management, penetration testing, compliance, and infrastructure security services for commercial and regulated customers',
      'Conduct CMMC and NIST 800-171 readiness assessments, identifying compliance gaps and developing remediation strategies aligned with DoD requirements',
      'Develop SSPs, POA&Ms, incident response procedures, security baselines, and continuous monitoring strategies aligned with CMMC, RMF, and NIST frameworks',
      'Engineer secure cloud and hybrid architectures across AWS, Azure, OCI, and Google Cloud using Zero Trust principles, MFA, segmentation, encryption, and least-privilege controls',
      'Build and manage centralized logging and monitoring platforms using Splunk, ELK Stack, Wazuh, SentinelOne, ArcSight, and Microsoft security tooling',
    ],
  },
  {
    title: 'Senior Cyber Security Engineer',
    company: 'USPO',
    location: 'Montgomery, AL (Remote)',
    dates: 'January 2025 - June 2025',
    bullets: [
      'Conducted advanced cloud penetration testing and security assessments across Google Cloud Platform, Azure, and hybrid enterprise environments',
      'Used Google Security Command Center, Splunk, SentinelOne, and custom detection engineering to perform threat hunting, attack simulation, and compromise assessments',
      'Performed vulnerability exploitation validation and cloud attack path analysis using Terraform, native cloud tooling, Nmap, Burp Suite, Kali Linux, and custom scripts',
      'Validated safeguards against NIST 800-53, RMF, FedRAMP, and CMMC control requirements',
      'Delivered detailed technical findings, remediation guidance, and executive-level risk assessments to engineering, compliance, and leadership stakeholders',
    ],
  },
  {
    title: 'Senior Cyber Security Engineer',
    company: 'TCecure, LLC',
    location: 'Baltimore, MD',
    dates: 'May 2022 - Present (Part-Time)',
    bullets: [
      'Conduct internal and external penetration testing engagements against enterprise Windows, Linux, cloud, and web application environments',
      'Perform vulnerability discovery, exploitation validation, and attack surface analysis using Nessus, Rapid7 InsightVM, Qualys, Nmap, Burp Suite, Metasploit, Kali Linux, Wireshark, TCPDump, and OpenVAS',
      'Execute web application penetration testing using HP WebInspect, Burp Suite, OWASP ZAP, and manual testing techniques',
      'Conduct Active Directory security assessments including user and group enumeration, privileged access reviews, delegation analysis, password policy validation, and attack path identification',
      'Produce penetration testing reports, executive risk summaries, remediation roadmaps, and technical findings documentation',
    ],
  },
  {
    title: 'Network Engineering SME',
    company: 'Astrion US',
    location: 'Maxwell-AFB Gunter Annex, Montgomery AL',
    dates: 'March 2021 - May 2022',
    bullets: [
      'Spearheaded enterprise infrastructure services for 700 users across four teams leveraging Oracle Cloud, Azure, and AWS',
      'Led cloud workflow automation across eight zones, reducing process times by 25% and improving deployment efficiency',
      'Designed and implemented security systems aligning with SABSA and NIST 800-53, leading to a 50% reduction in security incidents',
      'Conducted performance evaluations and system migrations for over 800 systems transitioning from on-premise to cloud environments',
      'Engineered cloud management strategies achieving a 20% reduction in annual IT spending',
    ],
  },
  {
    title: 'Sr. Cyber Security Engineer',
    company: 'SMS Data Solutions / Cyber Defenses Inc.',
    location: 'Maxwell-AFB Gunter Annex, Montgomery AL',
    dates: 'October 2015 - March 2021',
    bullets: [
      'Administered comprehensive security for 12 security stacks for DISA implementations across Army, Air Force, and Navy',
      'Managed and supported 24 VMware environments consisting of 300 RHEL Servers',
      'Administered a host-based security system in a mixed virtual and physical environment for 1500+ hosts and appliances',
      'Led vulnerability management processes for 300+ Red Hat Enterprise Linux and Windows hosts',
      'Developed a SASE framework with a zero-trust architecture, aligning with FedRAMP and NIST frameworks',
    ],
  },
  {
    title: 'Systems Administrator / Security Engineer',
    company: 'DISA / Lockheed Martin / NCR / Indus Corp',
    location: 'Montgomery, AL',
    dates: '2010 - 2015',
    bullets: [
      'Implemented and maintained systems aligned with NIST 800-53 and RMF security controls',
      'Managed patching, hardening, and vulnerability remediation across Linux and Windows environments',
      'Supported incident response, monitoring, and audit logging aligned with AU and IR controls',
      'Configured Active Directory, DNS, DHCP, and enterprise services with security best practices',
      'Developed automation scripts to enforce secure configurations and compliance baselines',
    ],
  },
  {
    title: 'Systems Administrator',
    company: 'National Cash Register (NCR)',
    location: 'Remote',
    dates: 'January 2007 - May 2010',
    bullets: [
      'Performed routine maintenance and troubleshooting on servers and point-of-sale systems, helping maintain 99.9% uptime for retail and business clients',
      'Installed, configured, and secured Windows and Linux servers, tailoring solutions to specific client requirements',
      'Conducted field installations of POS systems, integrating hardware, peripherals, and network configurations to support operational needs',
      'Implemented security measures on servers and POS systems, including firewalls, endpoint protection, and PCI DSS-aligned controls',
      'Delivered on-site technical support and problem resolution for a diverse client base, often under tight deadlines',
      'Upgraded and optimized server and POS hardware, including memory, processors, and storage components, to enhance performance',
      'Maintained network connectivity for distributed retail environments by configuring routers, switches, and access points',
      'Managed data backup and recovery operations to support business continuity after hardware failures or cyber incidents',
      'Trained end users on proper use and maintenance of POS systems and peripherals, reducing support tickets by 25%',
      'Documented maintenance logs, installation procedures, and incident reports for clients and management',
    ],
  },
]
