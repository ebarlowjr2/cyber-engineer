import '../App.css'
import { Linkedin, Mail, Github, Instagram, Twitter, Shield, FileCheck, Server, Lock, Network, AlertTriangle, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Eddie <span className="text-green-500">Barlow</span>
            </Link>
            <div className="flex gap-4">
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Cyber Security <span className="text-green-500">Knowledge Center</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This portfolio presents my Cyber Security skills and personal projects covering various domains including RMF, Nessus and ACAS, Defensive Cyber Operations, System Administration, Threat Intelligence, and more.
          </p>
        </div>
      </section>

      {/* Cyber Task Explanations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Cyber Security <span className="text-green-500">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Defensive Cyber Operations */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4">
                <Shield className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Defensive Cyber Operations (DCO)</h3>
              <p className="text-gray-300 mb-4">
                Defensive Security refers to protecting computer systems and networks from attack by identifying and mitigating vulnerabilities and implementing measures to prevent or detect unauthorized access or activity.
              </p>
            </div>

            {/* STIGs and SRG */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4">
                <FileCheck className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">STIGs and SRG</h3>
              <p className="text-gray-300 mb-4">
                Security Technical Implementation Guides are configuration standards developed by the Defense Information Systems Agency (DISA). They are designed to make device hardware and software as secure as possible.
              </p>
            </div>

            {/* System Administration */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4">
                <Server className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Experienced SysAdmin</h3>
              <p className="text-gray-300 mb-4">
                My experience as a System Administrator has allowed me to develop strong problem-solving skills and knowledge of software and hardware across Linux and Windows environments.
              </p>
            </div>

            {/* Risk Management Framework */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4">
                <Lock className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Risk Management Framework, A&A, and ATO</h3>
              <p className="text-gray-300 mb-4">
                The Risk Management Framework, presented in NIST SP 800-37, provides a disciplined and structured 6-step process that integrates information security and risk management activities into the system development life cycle. The A&A process establishes the extent to which a particular design and implementation meet a set of specified security requirements. ATO is the official management decision to authorize operation of an information system and explicitly accept the risk.
              </p>
            </div>

            {/* ACAS and Nessus */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4">
                <AlertTriangle className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">ACAS and Nessus</h3>
              <p className="text-gray-300 mb-4">
                Assured Compliance Assessment Solution (ACAS) vulnerability scanning is the mandated enterprise vulnerability scanning capability for network and components owned or operated by the DoD. Nessus is a remote security scanning tool that scans computers and identifies vulnerabilities by scanning the system registry, files, ports, missing patches, misconfigurations, and software flaws.
              </p>
            </div>

            {/* Cyber Threat Intelligence */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4">
                <Eye className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cyber Threat Intelligence (CTI)</h3>
              <p className="text-gray-300 mb-4">
                Cyber Threat Intelligence (CTI) helps organizations stay informed about new threats so they can protect themselves. Cyber security experts organize, analyze, and refine the information they gather about attacks to learn from and use it to protect businesses better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Major <span className="text-green-500">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: McAfee HBSS VSE Air Force Outage Resolution */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                  <Shield className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Mission-Critical Air Force HBSS Outage Resolution</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Resolved a mission-critical enterprise outage affecting over 90% of Linux servers across the U.S. Air Force caused by improper tuning of McAfee HBSS VirusScan Enterprise (VSE). Diagnosed and corrected the configuration at the 26th Network Operations Squadron (26th NOS), restoring full endpoint protection functionality and preventing widespread degradation of cybersecurity readiness.
              </p>
              <p className="text-gray-300 mb-4">
                After implementing the fix locally, the solution was rapidly adopted across all Air Force Network Operations Centers (AFNETs) and disseminated through the 24th Air Force, becoming the official remediation standard.
              </p>
              <p className="text-gray-300 mb-4">
                In recognition of the impact, I was flown to Lackland Air Force Base to brief Maj. Gen. Suzanne M. "Zan" Vautrinot, Commander of 24th Air Force, Air Forces Cyber, and Air Force Network Operations, on the resolution strategy and system optimization techniques that stabilized the HBSS platform Air Force–wide.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">McAfee HBSS</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">24th Air Force</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Enterprise Security</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Crisis Resolution</span>
              </div>
            </div>

            {/* Project 2: JRSS IL6 Deployment */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                  <Network className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Joint Regional Security Stacks (JRSS) IL6 Deployment</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Served as the Lead Cybersecurity Engineer for the deployment of the Joint Regional Security Stacks (JRSS) into the Impact Level 6 (IL6) enclave of the Department of Defense (DoD) network — a pivotal modernization effort under the Joint Information Environment (JIE) initiative. Oversaw the secure integration of firewall, IPS, web proxy, and routing services into a unified security architecture designed to consolidate and harden network defenses across multiple combatant commands.
              </p>
              <p className="text-gray-300 mb-4">
                Led cross-functional teams across DISA, 24th Air Force, and AFINC to validate configurations, apply STIG-compliant baselines, and ensure full interoperability with classified systems and existing enclave security policies. Authored and executed comprehensive test plans and migration runbooks, mitigating risks during transition and maintaining continuous mission operations.
              </p>
              <p className="text-gray-300 mb-4">
                The successful IL6 JRSS deployment significantly enhanced visibility, threat correlation, and real-time response capabilities across Air Force Cyber Command. The implementation set the model for subsequent JRSS rollouts in other high-side DoD networks and reinforced the Air Force's posture under the Cybersecurity Service Provider (CSSP) framework.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">JRSS</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">IL6</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">DISA</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">JIE</span>
              </div>
            </div>

            {/* Project 3: Prince George's County Cyber Lab */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                  <Lock className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Prince George's County Cyber Lab Development</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Served as the Principal Engineer for the design and development of the Prince George's County Cyber Lab — a next-generation, AI-driven cybersecurity training environment engineered to bridge the gap between academic simulation and enterprise-grade infrastructure.
              </p>
              <p className="text-gray-300 mb-4">
                Led the end-to-end architecture of the lab, integrating real-world enterprise systems, network segmentation, threat emulation, and AI-assisted analysis tools to create a fully functional cyber range supporting defensive and offensive training scenarios. Designed progressive, role-based labs that evolve from foundational security concepts to complex, real-world incident response and threat-hunting exercises.
              </p>
              <p className="text-gray-300 mb-4">
                The platform delivers hands-on, immersive training for students and professionals, incorporating automated lab orchestration, virtual machine provisioning, and real-time monitoring dashboards. Its innovative design established a scalable model for regional cyber education and workforce development, helping to strengthen local talent pipelines and support DoD-aligned cyber readiness initiatives.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">AI-Driven Training</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Cyber Range</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Workforce Development</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Lab Architecture</span>
              </div>
            </div>

            {/* Project 4: AFINC Weapon System */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                  <AlertTriangle className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Air Force Intranet Control (AFINC) Weapon System</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Served as the Lead Cybersecurity Architect for the Air Force Intranet Control (AFINC) Weapon System — the first-ever cyberspace weapon system formally designated by the U.S. Air Force and a cornerstone capability of the Air Force Network Operations (AFNETOPS) mission. The AFINC Weapon System is responsible for operating, defending, and controlling the flow of all network traffic into and out of the Air Force's enterprise network, serving as the primary gateway protecting the .mil and .gov domains.
              </p>
              <p className="text-gray-300 mb-4">
                Led architectural design, security engineering, and compliance validation across the system's core components, including boundary defense, proxy services, IDS/IPS integration, and traffic management. Collaborated closely with DISA, 24th Air Force, and U.S. Cyber Command to align system configurations with evolving DoD directives and the Cybersecurity Service Provider (CSSP) framework.
              </p>
              <p className="text-gray-300 mb-4">
                My efforts directly contributed to the AFINC Weapon System achieving Full Operational Capability (FOC) status, enabling continuous network defense, centralized visibility, and cyber threat mitigation for the entire Department of Defense Information Network (DoDIN). This milestone represented a historic advancement in the Air Force's ability to conduct, command, and sustain operations within cyberspace as a recognized warfighting domain.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">AFINC</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Weapon System</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">AFNETOPS</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">DoDIN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic text-gray-300 mb-6 border-l-4 border-green-500 pl-6">
            "The journey is never ending. There's always gonna be growth, improvement, adversity; you just gotta take it all in and do what's right, continue to grow, continue to live in the moment. Strength and growth come only through continuous effort and struggle."
          </blockquote>
          <p className="text-lg text-gray-300 mb-8">
            I have continuously challenged myself to learn, grow, and overcome challenges. I am seeking to join a group of innovative Cyber Security professionals who share my passion.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
            <Mail size={20} />
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
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
