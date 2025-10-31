import '../../App.css'
import { Linkedin, Github, Instagram, Twitter, ArrowLeft, Briefcase, Users, Clock, Target, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TCecureCyberSecurityEngineer() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Eddie <span className="text-green-500">Barlow</span>
          </Link>
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
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Resume
          </Link>

          {/* Job Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cyber Security Engineer
            </h1>
            <div className="text-xl text-green-500 font-semibold mb-2">
              TCecure, LLC – Baltimore, MD
            </div>
            <div className="text-gray-400 text-lg">
              May 2022 – March 2025
            </div>
          </div>

          {/* Role Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Role</span> Overview
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                As a Cyber Security Engineer at TCecure, I was responsible for managing and securing enterprise Linux-based systems while implementing comprehensive security monitoring and automation solutions. This role focused heavily on hands-on technical work, including system hardening, vulnerability management, and building security infrastructure from the ground up.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The position required deep expertise in RHEL administration, security automation using Ansible and Bash scripting, and implementing enterprise-grade monitoring solutions. I worked in a fast-paced environment supporting critical government and commercial clients with stringent security and compliance requirements.
              </p>
            </div>
          </section>

          {/* Key Responsibilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Key</span> Responsibilities
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Managed and secured RHEL-based systems by implementing robust configurations and comprehensive patch management processes</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Integrated and maintained ELK Stack (Elasticsearch, Logstash, Kibana) for real-time log analysis and monitoring of critical systems</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Automated deployment and configuration processes for network assets, reducing manual errors and deployment time by 30%</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Conducted comprehensive vulnerability assessments and remediation using Nessus and Rapid7 InsightVM</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Automated security tasks using Ansible and Bash scripting, ensuring compliance with DISA STIGs and security best practices</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Performed security assessments and penetration testing to identify and remediate vulnerabilities before they could be exploited</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Maintained detailed documentation of security configurations, procedures, and incident response playbooks</span>
                </li>
              </ul>
            </div>
          </section>

          {/* A Day in the Life */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">A Day</span> in the Life
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">Morning (7:30 AM - 12:00 PM)</h3>
                    <p className="text-gray-300 mb-3">
                      My day typically started with reviewing overnight system logs and security alerts in the ELK Stack dashboards. I would check for any anomalies, failed login attempts, or suspicious activities that occurred during off-hours. This was followed by a quick team sync to discuss priorities and any urgent security issues that needed immediate attention.
                    </p>
                    <p className="text-gray-300">
                      The bulk of the morning was spent on hands-on technical work—applying security patches to RHEL systems, running vulnerability scans with Nessus, and analyzing the results. I would also work on Ansible playbooks to automate repetitive security tasks like STIG compliance checks, user access reviews, and configuration audits across multiple systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">Afternoon (1:00 PM - 5:30 PM)</h3>
                    <p className="text-gray-300 mb-3">
                      Afternoons were dedicated to vulnerability remediation and system hardening activities. I would work through the vulnerability scan results, prioritizing critical and high-severity findings, and implementing fixes. This involved everything from updating software packages to reconfiguring services and applying security hardening measures.
                    </p>
                    <p className="text-gray-300 mb-3">
                      I also spent time building and maintaining the ELK Stack infrastructure—creating custom Logstash filters to parse different log formats, developing Kibana dashboards for security monitoring, and tuning Elasticsearch indices for optimal performance. This required close collaboration with system administrators and application teams to ensure proper log collection and analysis.
                    </p>
                    <p className="text-gray-300">
                      Late afternoon typically included documentation work, updating security procedures, and preparing reports on security posture for management. I would also participate in change advisory board meetings to review and approve security-related changes to production systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">On-Call Rotation</h3>
                    <p className="text-gray-300">
                      As part of a rotating on-call schedule, I was responsible for responding to security incidents outside of normal business hours. This included investigating security alerts, coordinating incident response activities, and implementing emergency patches or configuration changes when critical vulnerabilities were discovered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Structure & Supervision */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Team Structure</span> & Supervision
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-green-500" size={32} />
                  <h3 className="text-2xl font-bold">Reporting Structure</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  I reported to the Senior Security Architect and worked as part of a 6-person security engineering team. The role involved regular coordination with the Security Operations Center (SOC) team, system administrators, and network engineers to ensure comprehensive security coverage.
                </p>
                <p className="text-gray-300">
                  Weekly meetings with the security leadership team provided opportunities to discuss security initiatives, share threat intelligence, and align on strategic security priorities for the organization.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-green-500" size={32} />
                  <h3 className="text-2xl font-bold">Collaboration</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  While this was an individual contributor role, I worked closely with junior security analysts, providing guidance on vulnerability remediation techniques and security best practices. I also served as a technical resource for the broader IT team on Linux security and automation topics.
                </p>
                <p className="text-gray-300">
                  Cross-functional collaboration was essential, working with development teams on secure deployment practices, infrastructure teams on system hardening, and compliance teams on audit preparation and STIG implementation.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies & Tools */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Technologies</span> & Tools
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Operating Systems</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Red Hat Enterprise Linux 7/8</li>
                    <li>• CentOS 7/8</li>
                    <li>• Ubuntu Server</li>
                    <li>• Windows Server 2016/2019</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Security Tools</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Nessus Professional</li>
                    <li>• Rapid7 InsightVM</li>
                    <li>• OpenSCAP</li>
                    <li>• AIDE (File Integrity)</li>
                    <li>• Tripwire</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Monitoring & Automation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ELK Stack</li>
                    <li>• Ansible</li>
                    <li>• Bash Scripting</li>
                    <li>• Python</li>
                    <li>• Git/GitLab</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Key</span> Achievements
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Automation Excellence</h3>
                    <p className="text-gray-300">Developed 40+ Ansible playbooks that automated security configuration tasks across 200+ RHEL systems, reducing deployment time by 30% and eliminating configuration drift.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">ELK Stack Implementation</h3>
                    <p className="text-gray-300">Built and deployed a comprehensive ELK Stack solution that centralized logging for 150+ systems, improving security visibility and reducing incident investigation time by 45%.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Vulnerability Reduction</h3>
                    <p className="text-gray-300">Led vulnerability management program that reduced critical and high-severity vulnerabilities by 75% over 12 months through systematic scanning, prioritization, and remediation processes.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">STIG Compliance</h3>
                    <p className="text-gray-300">Achieved 95%+ STIG compliance across all managed RHEL systems through automated compliance checking and remediation, passing multiple security audits with zero critical findings.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Resume */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              <ArrowLeft size={20} />
              Back to Resume
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">© 2025 Eddie Barlow</div>
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
