import '../App.css'
import { Linkedin, Mail, MapPin, Phone, Calendar, Flag, Briefcase, GraduationCap, Award, Shield, Server, Cloud, Code, Network, Database, Lock, Github, Instagram, Twitter, Folder } from 'lucide-react'
import TypedText from '../components/TypedText'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold">
              Eddie <span className="text-green-500">Barlow</span>
            </a>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <code className="text-green-500 text-sm font-mono">
                  &lt;code&gt; I secure and optimize
                  <br />
                  <span className="inline-flex items-baseline">
                    <TypedText
                      phrases={[
                        'IT infrastructures',
                        'cloud-native environments',
                        'security postures',
                        'Linux & Windows systems',
                        'Azure and AWS platforms',
                      ]}
                      typeSpeed={50}
                      backSpeed={30}
                      backDelay={1600}
                      startDelay={200}
                      loop
                      cursorChar="|"
                    />
                  </span>
                  <br />
                  &lt;/code&gt;
                </code>
              </div>
              <h1 className="text-5xl font-bold mb-4">Eddie L. Barlow</h1>
              <div className="flex gap-4 mb-6">
                <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-green-500 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/eddie-barlow-jr-cism-68802716/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-500 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="http://instagram.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://x.com/mrcyber334?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-500 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm a Montgomery, AL based <strong className="text-green-500">Senior Cyber Security Engineer</strong>, currently working at <strong className="text-green-500">3 Squared Technologies</strong> securing and optimizing IT infrastructures in highly regulated environments.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                With over 20 years of experience in cybersecurity and systems administration, I specialize in <strong className="text-green-500">vulnerability management</strong>, <strong className="text-green-500">incident response</strong>, and implementing compliance frameworks like <strong className="text-green-500">NIST</strong> and <strong className="text-green-500">FedRAMP</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
                  <Mail size={20} />
                  Contact Me
                </a>
                <Link to="/portfolio" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
                  <Folder size={20} />
                  Portfolio
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link to="/advocacy" className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-700">
                  Advocacy
                </Link>
                <Link to="/projects-in-development" className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-700">
                  Projects in Development
                </Link>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Available for Remote Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img 
                  src="/images/profile.png" 
                  alt="Eddie L. Barlow - Senior Cyber Security Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">About</span> me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Results-driven Cybersecurity and Systems Administration Professional with over 20 years of experience securing and optimizing IT infrastructures in highly regulated environments, including government and defense sectors.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expertise in Linux (RHEL, CentOS), cloud platforms (AWS, Azure), and automation tools (Ansible, Bash, Terraform) to enhance system efficiency and security posture. Proven track record in vulnerability management, incident response, and implementing compliance frameworks like NIST, FedRAMP, and ISO standards.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Adept at designing and managing scalable cloud-native environments, containerized applications (Docker, Kubernetes), and enterprise monitoring solutions (Splunk, ELK). Recognized for leadership in cross-functional teams, technical documentation, and delivering solutions that reduce risk and support mission-critical operations.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Location:</span> Montgomery, AL
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Phone:</span> 334-652-1366
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Flag className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Citizenship:</span> United States of America
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Clearance:</span> Top Secret SSBI
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Employment:</span> 3 Squared Technologies
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Education:</span> Trenholm Technical College
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">Stats</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Calendar className="text-green-500 mx-auto mb-4" size={40} />
              <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Years of experience</h3>
              <div className="text-4xl font-bold">20+</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Award className="text-green-500 mx-auto mb-4" size={40} />
              <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Certifications</h3>
              <div className="text-4xl font-bold">7</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Server className="text-green-500 mx-auto mb-4" size={40} />
              <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Systems Secured</h3>
              <div className="text-4xl font-bold">1500+</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Shield className="text-green-500 mx-auto mb-4" size={40} />
              <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Security Stacks</h3>
              <div className="text-4xl font-bold">12</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Award className="text-green-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">ISACA CISM</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Certified Information Security Manager</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Award className="text-green-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Azure Associate AZ-104</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Microsoft Azure Administrator</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Award className="text-green-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">CompTIA Security+ CE</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Security+ Certification</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Award className="text-green-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">MCSA Windows Server</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Microsoft Certified Solutions Associate</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Award className="text-green-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">DISA HBSS</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Certificates 201, 301, and 501</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
              <Award className="text-green-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">NARTE Class III</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Certified Technician</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">Core</span> tech stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server className="text-green-500" size={24} />
                <h3 className="text-xl font-bold">Operating Systems</h3>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">RHEL</div>
                <div className="text-gray-600 dark:text-gray-300">CentOS</div>
                <div className="text-gray-600 dark:text-gray-300">Ubuntu Server</div>
                <div className="text-gray-600 dark:text-gray-300">Windows Server</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="text-green-500" size={24} />
                <h3 className="text-xl font-bold">Cloud Platforms</h3>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">AWS</div>
                <div className="text-gray-600 dark:text-gray-300">Azure</div>
                <div className="text-gray-600 dark:text-gray-300">Google Cloud</div>
                <div className="text-gray-600 dark:text-gray-300">Oracle Cloud</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-green-500" size={24} />
                <h3 className="text-xl font-bold">DevOps & Automation</h3>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">Ansible</div>
                <div className="text-gray-600 dark:text-gray-300">Docker</div>
                <div className="text-gray-600 dark:text-gray-300">Terraform</div>
                <div className="text-gray-600 dark:text-gray-300">Bash Scripting</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lock className="text-green-500" size={24} />
                <h3 className="text-xl font-bold">Security Tools</h3>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">Splunk</div>
                <div className="text-gray-600 dark:text-gray-300">Nessus</div>
                <div className="text-gray-600 dark:text-gray-300">Qualys</div>
                <div className="text-gray-600 dark:text-gray-300">SentinelOne</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Network className="text-green-500" size={24} />
                <h3 className="text-xl font-bold">Network & Security</h3>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">Firewall Management</div>
                <div className="text-gray-600 dark:text-gray-300">IDS/IPS</div>
                <div className="text-gray-600 dark:text-gray-300">EDR/XDR</div>
                <div className="text-gray-600 dark:text-gray-300">SIEM</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Database className="text-green-500" size={24} />
                <h3 className="text-xl font-bold">Monitoring Tools</h3>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">ELK Stack</div>
                <div className="text-gray-600 dark:text-gray-300">Nagios</div>
                <div className="text-gray-600 dark:text-gray-300">ServiceNow</div>
                <div className="text-gray-600 dark:text-gray-300">JIRA</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server className="text-green-500" size={24} />
                <h3 className="text-xl font-bold">Configuration</h3>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">Apache</div>
                <div className="text-gray-600 dark:text-gray-300">Git</div>
                <div className="text-gray-600 dark:text-gray-300">Puppet</div>
                <div className="text-gray-600 dark:text-gray-300">Chef</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-green-500" size={24} />
                <h3 className="text-xl font-bold">Compliance</h3>
              </div>
              <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">NIST 800-53</div>
                <div className="text-gray-600 dark:text-gray-300">FedRAMP</div>
                <div className="text-gray-600 dark:text-gray-300">STIGs</div>
                <div className="text-gray-600 dark:text-gray-300">RMF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">Professional</span> Experience
          </h2>
          <div className="space-y-8">
            {/* Senior Cyber Security Engineer - 3 Squared Technologies */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Senior Cyber Security Engineer</h3>
                  <div className="text-green-500 font-semibold">3 Squared Technologies – Montgomery, AL (Remote)</div>
                </div>
                <div className="text-gray-400">June 2025 – Present</div>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><span className="text-green-500">•</span> Manage five classified environments — three IL4 and two IL6 — ensuring full compliance with DoD Cloud SRG, STIG, and RMF security standards</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Lead daily operations for RHEL-based systems including kernel tuning, SELinux configuration, system patching, and advanced hardening for mission-critical applications</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Support the migration of IL6 workloads to AWS IL6 (Cloud One), validating enclave configurations, cross-domain data flows, and secure automation baselines</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Participate in Agile sprints and Technical Interchange Meetings (TIMs) to coordinate migration milestones, sprint deliverables, and system accreditation artifacts</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Administer and secure Trend Micro Deep Security / Deep Visibility for intrusion detection, real-time monitoring, and forensic data analysis within IL6 boundaries</li>
              </ul>
              <div className="mt-6">
                <Link to="/jobs/3squared-senior-cyber-security-engineer" className="text-green-500 hover:text-green-400 transition-colors font-semibold">
                  View Full Role Details →
                </Link>
              </div>
            </div>

            {/* Senior Cyber Security Engineer - MSI */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Senior Cyber Security Engineer</h3>
                  <div className="text-green-500 font-semibold">MSI (via USPO) – Montgomery, AL (Remote)</div>
                </div>
                <div className="text-gray-400">January 2025 – June 2025</div>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><span className="text-green-500">•</span> Lead the development and customization of cybersecurity tools and platforms, including integrations with Splunk, Armis, SentinelOne, and Microsoft IRM</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Designed and implemented custom dashboards, alert logic, and data ingestion pipelines within Splunk to improve threat hunting</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Engineered modifications to Azure-native tools and Microsoft IRM configurations, strengthening cloud and data security posture</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Customized and automated workflows within ServiceNow for streamlined vulnerability management and incident tracking</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Mentored junior engineers and contributed to knowledge-sharing initiatives for improved cyber tool lifecycle support</li>
              </ul>
              <div className="mt-6">
                <Link to="/jobs/msi-senior-cyber-security-engineer" className="text-green-500 hover:text-green-400 transition-colors font-semibold">
                  View Full Role Details →
                </Link>
              </div>
            </div>

            {/* Cyber Security Engineer - TCecure */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Cyber Security Engineer</h3>
                  <div className="text-green-500 font-semibold">TCecure, LLC – Baltimore, MD</div>
                </div>
                <div className="text-gray-400">May 2022 – March 2025</div>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><span className="text-green-500">•</span> Managed and secured RHEL-based systems by implementing robust configurations and patch management</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Integrated and maintained ELK Stack for real-time log analysis and monitoring critical systems</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Automated deployment and configuration processes for network assets, reducing manual errors and deployment time by 30%</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Conducted vulnerability assessments and remediation using Nessus and Rapid7 InsightVM</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Automated security tasks using Ansible and Bash, ensuring compliance with STIGs</li>
              </ul>
              <div className="mt-6">
                <Link to="/jobs/tcecure-cyber-security-engineer" className="text-green-500 hover:text-green-400 transition-colors font-semibold">
                  View Full Role Details →
                </Link>
              </div>
            </div>

            {/* Network Engineering SME - Astrion */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Network Engineering SME</h3>
                  <div className="text-green-500 font-semibold">Astrion US – Maxwell-AFB Gunter Annex, Montgomery AL</div>
                </div>
                <div className="text-gray-400">March 2021 – May 2022</div>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><span className="text-green-500">•</span> Spearheaded enterprise infrastructure services for 700 users across four teams leveraging Oracle Cloud, Azure, and AWS</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Led cloud workflow automation across eight zones, reducing process times by 25% and improving deployment efficiency</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Designed and implemented security systems aligning with SABSA and NIST 800-53, leading to a 50% reduction in security incidents</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Conducted performance evaluations and system migrations for over 800 systems transitioning from on-premise to cloud environments</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Engineered cloud management strategies achieving a 20% reduction in annual IT spending</li>
              </ul>
              <div className="mt-6">
                <Link to="/jobs/astrion-network-engineering-sme" className="text-green-500 hover:text-green-400 transition-colors font-semibold">
                  View Full Role Details →
                </Link>
              </div>
            </div>

            {/* Sr. Cyber Security Engineer - SMS Data Solutions */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Sr. Cyber Security Engineer</h3>
                  <div className="text-green-500 font-semibold">SMS Data Solutions / Cyber Defenses Inc. – Maxwell-AFB Gunter Annex, Montgomery AL</div>
                </div>
                <div className="text-gray-400">October 2015 – March 2021</div>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><span className="text-green-500">•</span> Administered comprehensive security for 12 security stacks for DISA implementations across Army, Air Force, and Navy</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Managed and supported 24 VMware environments consisting of 300 RHEL Servers</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Administered a host-based security system in a mixed virtual and physical environment for 1500+ hosts and appliances</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Led vulnerability management processes for 300+ Red Hat Enterprise Linux and Windows hosts</li>
                <li className="flex gap-2"><span className="text-green-500">•</span> Developed a SASE framework with a zero-trust architecture, aligning with FedRAMP and NIST frameworks</li>
              </ul>
              <div className="mt-6">
                <Link to="/jobs/sms-data-solutions-sr-cyber-security-engineer" className="text-green-500 hover:text-green-400 transition-colors font-semibold">
                  View Full Role Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">Education</span>
          </h2>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Associate's Degree in Information Technology</h3>
                <div className="text-green-500 font-semibold">Trenholm Technical College, Montgomery, AL</div>
              </div>
              <div className="text-gray-400">2006</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Completed comprehensive training in information technology fundamentals, networking, systems administration, and cybersecurity principles that laid the foundation for a successful career in IT security.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-green-500">Get</span> in touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <Shield size={80} className="text-green-500 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Have a cybersecurity project or need an experienced security engineer? I'd love to hear from you. Reach out via email or phone to discuss how I can help secure your infrastructure.
                </p>
              </div>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-400 mb-1">Location</dt>
                  <dd className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="text-green-500" size={20} />
                    Montgomery, AL, United States
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-400 mb-1">Email</dt>
                  <dd className="flex items-center gap-2">
                    <Mail className="text-green-500" size={20} />
                    <a href="mailto:eddiebarlowjr@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                      eddiebarlowjr@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-400 mb-1">Phone</dt>
                  <dd className="flex items-center gap-2">
                    <Phone className="text-green-500" size={20} />
                    <a href="tel:334-652-1366" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                      334-652-1366
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-400 mb-1">LinkedIn</dt>
                  <dd className="flex items-center gap-2">
                    <Linkedin className="text-green-500" size={20} />
                    <a href="https://www.linkedin.com/in/eddie-barlow-jr-68802716" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                      eddie-barlow-jr-68802716
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
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
