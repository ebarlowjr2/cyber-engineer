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
            {/* Project 1: Enterprise Security Stack Implementation */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                  <Shield className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Enterprise Security Stack Implementation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Administered comprehensive security for 12 security stacks for DISA implementations across Army, Air Force, and Navy. Managed 24 VMware environments consisting of 300 RHEL Servers and administered a host-based security system in a mixed virtual and physical environment for 1500+ hosts and appliances.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">DISA</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">VMware</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">RHEL</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">HBSS</span>
              </div>
            </div>

            {/* Project 2: Cloud Infrastructure Migration */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                  <Network className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Cloud Infrastructure Migration</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Spearheaded enterprise infrastructure services for 700 users across four teams leveraging Oracle Cloud, Azure, and AWS. Led cloud workflow automation across eight zones, reducing process times by 25% and improving deployment efficiency. Conducted performance evaluations and system migrations for over 800 systems transitioning from on-premise to cloud environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Azure</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Oracle Cloud</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Automation</span>
              </div>
            </div>

            {/* Project 3: SASE Framework Development */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                  <Lock className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">SASE Framework with Zero-Trust Architecture</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Developed a Secure Access Service Edge (SASE) framework with a zero-trust architecture, aligning with FedRAMP and NIST frameworks. Designed and implemented security systems aligning with SABSA and NIST 800-53, leading to a 50% reduction in security incidents.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">SASE</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Zero-Trust</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">FedRAMP</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">NIST 800-53</span>
              </div>
            </div>

            {/* Project 4: Cybersecurity Tools Integration */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                  <AlertTriangle className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Cybersecurity Tools Integration & Customization</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Led the development and customization of cybersecurity tools and platforms, including integrations with Splunk, Armis, SentinelOne, and Microsoft IRM. Designed and implemented custom dashboards, alert logic, and data ingestion pipelines within Splunk to improve threat hunting capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Splunk</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">SentinelOne</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Microsoft IRM</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Armis</span>
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
