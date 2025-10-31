import '../../App.css'
import { Linkedin, Github, Instagram, Twitter, ArrowLeft, Briefcase, Users, Clock, Target, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SMSDataSolutionsSrCyberSecurityEngineer() {
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
              Sr. Cyber Security Engineer
            </h1>
            <div className="text-xl text-green-500 font-semibold mb-2">
              SMS Data Solutions / Cyber Defenses Inc. – Maxwell-AFB Gunter Annex, Montgomery AL
            </div>
            <div className="text-gray-400 text-lg">
              October 2015 – March 2021
            </div>
          </div>

          {/* Role Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Role</span> Overview
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                As a Senior Cyber Security Engineer at SMS Data Solutions / Cyber Defenses Inc., I was responsible for administering comprehensive security for 12 security stacks supporting DISA implementations across Army, Air Force, and Navy networks. This role was at the forefront of Department of Defense cybersecurity operations, managing enterprise-scale security infrastructure in support of critical military missions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The position required deep expertise in host-based security systems, VMware virtualization, vulnerability management, and compliance frameworks. I worked extensively with McAfee HBSS (Host Based Security System), managing security for over 1,500 hosts and appliances in mixed virtual and physical environments while ensuring strict adherence to DISA STIGs and DoD security requirements.
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
                  <span className="text-gray-300">Administered comprehensive security for 12 security stacks supporting DISA implementations across Army, Air Force, and Navy networks</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Managed and supported 24 VMware environments consisting of 300 RHEL Servers with enterprise-grade security configurations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Administered host-based security system (McAfee HBSS) in a mixed virtual and physical environment for 1500+ hosts and appliances</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Led vulnerability management processes for 300+ Red Hat Enterprise Linux and Windows hosts, ensuring timely remediation of security findings</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Developed a SASE (Secure Access Service Edge) framework with zero-trust architecture, aligning with FedRAMP and NIST frameworks</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Performed security assessments, compliance audits, and risk assessments to maintain DoD security posture</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Coordinated with DISA, 24th Air Force, and other DoD entities on security stack implementations and optimizations</span>
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
                    <h3 className="text-xl font-bold mb-2 text-green-500">Morning (7:00 AM - 12:00 PM)</h3>
                    <p className="text-gray-300 mb-3">
                      My day typically began with reviewing overnight security events from the McAfee HBSS ePO console. I would check for any critical alerts, policy violations, or system health issues across all 12 security stacks. This was followed by a morning briefing with the security operations team to discuss the current threat landscape, ongoing incidents, and daily priorities.
                    </p>
                    <p className="text-gray-300 mb-3">
                      Mid-morning was dedicated to vulnerability management activities—reviewing Nessus scan results, prioritizing findings based on risk and mission impact, and coordinating remediation efforts with system administrators. I would also work on HBSS policy tuning to ensure optimal security coverage while minimizing false positives that could impact mission operations.
                    </p>
                    <p className="text-gray-300">
                      I regularly interfaced with VMware infrastructure, managing security configurations across 24 VMware environments and ensuring that virtual machine security policies were properly enforced. This included monitoring resource utilization, troubleshooting performance issues, and coordinating with the virtualization team on security-related changes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">Afternoon (1:00 PM - 5:00 PM)</h3>
                    <p className="text-gray-300 mb-3">
                      Afternoons were typically focused on compliance and audit activities. I would work on STIG compliance verification, conducting security configuration reviews, and preparing documentation for upcoming audits. This involved using SCAP (Security Content Automation Protocol) tools to validate system configurations against DISA STIGs and generating compliance reports for leadership.
                    </p>
                    <p className="text-gray-300 mb-3">
                      I spent considerable time on security stack maintenance and optimization—applying security patches, updating HBSS signatures and policies, and implementing security enhancements based on emerging threats. This required careful change management and coordination with multiple stakeholders to ensure changes didn't disrupt mission-critical operations.
                    </p>
                    <p className="text-gray-300">
                      Late afternoon often involved meetings with DISA representatives, Air Force Network Operations personnel, and other DoD security teams to discuss security stack performance, share lessons learned, and coordinate on enterprise-wide security initiatives. I also dedicated time to mentoring junior team members and documenting security procedures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">On-Call & Incident Response</h3>
                    <p className="text-gray-300">
                      As part of a 24/7 on-call rotation, I was responsible for responding to security incidents at any time. This included investigating potential security breaches, coordinating incident response activities, and implementing emergency security measures. During major incidents, I worked closely with the Air Force Computer Emergency Response Team (AFCERT) and other DoD security organizations to contain threats and restore normal operations.
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
                  I reported to the Program Manager for Cybersecurity Operations and worked as a senior member of a multi-disciplinary security team supporting DoD networks. The role required regular coordination with government customers, including Air Force Network Operations (AFNETOPS) leadership and DISA security personnel.
                </p>
                <p className="text-gray-300">
                  I participated in weekly program reviews with senior leadership to discuss security posture, compliance status, and upcoming security initiatives. I also provided technical input for contract deliverables and performance metrics reporting.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-green-500" size={32} />
                  <h3 className="text-2xl font-bold">Team Leadership</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  I served as a technical lead and mentor for a team of 5-6 junior and mid-level security engineers. This included providing hands-on training on HBSS administration, vulnerability management, and DoD security requirements. I conducted regular knowledge transfer sessions and developed training materials for new team members.
                </p>
                <p className="text-gray-300">
                  I also coordinated with cross-functional teams including system administrators, network engineers, and application developers to ensure security was integrated throughout the infrastructure lifecycle. This required strong communication skills and the ability to translate complex security requirements into actionable technical guidance.
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
                  <h3 className="text-xl font-bold mb-3 text-green-500">Security Platforms</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• McAfee HBSS/ePO</li>
                    <li>• McAfee VirusScan Enterprise</li>
                    <li>• HIPS (Host Intrusion Prevention)</li>
                    <li>• McAfee Policy Auditor</li>
                    <li>• ACAS (Nessus)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Infrastructure</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• VMware vSphere/ESXi</li>
                    <li>• Red Hat Enterprise Linux</li>
                    <li>• Windows Server 2012/2016</li>
                    <li>• Active Directory</li>
                    <li>• DISA Security Stacks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Compliance & Auditing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• DISA STIGs</li>
                    <li>• SCAP Tools</li>
                    <li>• SCC (SCAP Compliance Checker)</li>
                    <li>• ACAS/Tenable</li>
                    <li>• Splunk</li>
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
                    <h3 className="text-lg font-bold mb-1">Mission-Critical HBSS Outage Resolution</h3>
                    <p className="text-gray-300">Resolved a mission-critical enterprise outage affecting over 90% of Linux servers across the U.S. Air Force. The solution was adopted Air Force-wide and I briefed Maj. Gen. Vautrinot, Commander of 24th Air Force, on the resolution strategy.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Multi-Service Security Stack Management</h3>
                    <p className="text-gray-300">Successfully managed 12 security stacks across Army, Air Force, and Navy networks, maintaining 99.9% uptime and achieving "Excellent" ratings on all security audits and assessments during tenure.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">SASE Framework Development</h3>
                    <p className="text-gray-300">Developed and implemented a Secure Access Service Edge (SASE) framework with zero-trust architecture, aligning with FedRAMP and NIST frameworks, which became a model for other DoD security implementations.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Vulnerability Management Excellence</h3>
                    <p className="text-gray-300">Maintained vulnerability remediation rates exceeding 95% for critical and high-severity findings across 1,500+ hosts, consistently meeting or exceeding DoD cybersecurity metrics and compliance requirements.</p>
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
