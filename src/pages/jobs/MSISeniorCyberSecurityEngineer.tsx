import '../../App.css'
import { Linkedin, Github, Instagram, Twitter, ArrowLeft, Briefcase, Users, Clock, Target, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MSISeniorCyberSecurityEngineer() {
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
              Senior Cyber Security Engineer
            </h1>
            <div className="text-xl text-green-500 font-semibold mb-2">
              MSI (via USPO) – Montgomery, AL (Remote)
            </div>
            <div className="text-gray-400 text-lg">
              January 2025 – June 2025
            </div>
          </div>

          {/* Role Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Role</span> Overview
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                As a Senior Cyber Security Engineer at MSI, I lead the development and customization of enterprise cybersecurity tools and platforms, working with cutting-edge security technologies to protect critical infrastructure. This role combines deep technical expertise with strategic thinking to enhance the organization's security posture across multiple domains.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The position requires extensive knowledge of SIEM platforms, endpoint detection and response (EDR) solutions, cloud security, and automation frameworks. I work closely with cross-functional teams to design, implement, and optimize security solutions that meet both operational requirements and compliance standards.
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
                  <span className="text-gray-300">Lead the development and customization of cybersecurity tools and platforms, including integrations with Splunk, Armis, SentinelOne, and Microsoft IRM</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Design and implement custom dashboards, alert logic, and data ingestion pipelines within Splunk to improve threat hunting capabilities</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Engineer modifications to Azure-native tools and Microsoft IRM configurations, strengthening cloud and data security posture</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Customize and automate workflows within ServiceNow for streamlined vulnerability management and incident tracking</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Mentor junior engineers and contribute to knowledge-sharing initiatives for improved cyber tool lifecycle support</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Collaborate with stakeholders to define security requirements and translate them into technical implementations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Conduct security assessments and provide recommendations for improving the organization's security architecture</span>
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
                    <h3 className="text-xl font-bold mb-2 text-green-500">Morning (8:00 AM - 12:00 PM)</h3>
                    <p className="text-gray-300 mb-3">
                      The day typically begins with reviewing overnight security alerts and incident reports from the SIEM platform. I check Splunk dashboards for any anomalies or potential security events that occurred during off-hours. This is followed by a daily stand-up meeting with the security operations team to discuss priorities, ongoing projects, and any emerging threats.
                    </p>
                    <p className="text-gray-300">
                      Mid-morning is usually dedicated to hands-on technical work—developing custom Splunk queries, building new detection rules, or integrating new data sources into our security monitoring infrastructure. I also spend time reviewing pull requests from team members and providing technical guidance on security tool configurations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">Afternoon (1:00 PM - 5:00 PM)</h3>
                    <p className="text-gray-300 mb-3">
                      Afternoons often involve collaborative work sessions with other teams. This might include working with the cloud infrastructure team to enhance Azure security configurations, meeting with application developers to discuss secure coding practices, or coordinating with the compliance team on audit requirements.
                    </p>
                    <p className="text-gray-300">
                      I dedicate time to mentoring junior engineers, conducting code reviews, and documenting security procedures. There are also regular meetings with vendors and stakeholders to discuss tool enhancements, evaluate new security technologies, or troubleshoot integration issues with platforms like SentinelOne or Armis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">Evening (5:00 PM - 6:00 PM)</h3>
                    <p className="text-gray-300">
                      The end of the day is reserved for planning and preparation. I review the day's accomplishments, update project tracking in ServiceNow, and prepare for the next day's priorities. I also stay current with the latest security research, reading threat intelligence reports and security advisories to ensure our defenses remain effective against emerging threats.
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
                  I report directly to the Chief Information Security Officer (CISO) and work closely with the Director of Security Operations. This position provides strategic input on security architecture decisions and participates in executive-level security planning discussions.
                </p>
                <p className="text-gray-300">
                  The role involves regular interaction with senior leadership to communicate security posture, risk assessments, and recommendations for security investments.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-green-500" size={32} />
                  <h3 className="text-2xl font-bold">Team Leadership</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  I provide technical leadership and mentorship to a team of 3-4 junior and mid-level security engineers. This includes conducting regular one-on-one meetings, providing career guidance, and overseeing their professional development.
                </p>
                <p className="text-gray-300">
                  Additionally, I coordinate with cross-functional teams including cloud infrastructure, network operations, and application development teams, serving as the security subject matter expert for various projects.
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
                    <li>• Splunk Enterprise Security</li>
                    <li>• SentinelOne EDR</li>
                    <li>• Armis Asset Intelligence</li>
                    <li>• Microsoft Sentinel</li>
                    <li>• CrowdStrike Falcon</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Cloud & Infrastructure</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Microsoft Azure</li>
                    <li>• Azure Active Directory</li>
                    <li>• Microsoft IRM</li>
                    <li>• Azure Security Center</li>
                    <li>• Azure Sentinel</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Automation & ITSM</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ServiceNow</li>
                    <li>• Python</li>
                    <li>• PowerShell</li>
                    <li>• Ansible</li>
                    <li>• REST APIs</li>
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
                    <h3 className="text-lg font-bold mb-1">Enhanced Threat Detection</h3>
                    <p className="text-gray-300">Developed and deployed 50+ custom Splunk detection rules that reduced mean time to detect (MTTD) by 40% and improved threat hunting efficiency across the enterprise.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Automated Incident Response</h3>
                    <p className="text-gray-300">Built automated workflows in ServiceNow that streamlined incident response processes, reducing average incident resolution time by 35% and improving team efficiency.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Cloud Security Hardening</h3>
                    <p className="text-gray-300">Led Azure security configuration improvements that resulted in a 60% reduction in cloud security findings and achieved compliance with CIS Azure Foundations Benchmark.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Team Development</h3>
                    <p className="text-gray-300">Mentored 4 junior engineers who have since been promoted to mid-level positions, and created comprehensive training materials that improved team onboarding efficiency by 50%.</p>
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
