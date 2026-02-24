import '../../App.css'
import { ArrowLeft, Briefcase, Users, Clock, Target, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../components/PageLayout'

export default function ThreeSquaredSeniorCyberSecurityEngineer() {
  return (
    <PageLayout className="min-h-screen bg-gray-900 text-white">
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
              3 Squared Technologies – Montgomery, AL (Remote)
            </div>
            <div className="text-gray-400 text-lg">
              June 2025 – Present
            </div>
          </div>

          {/* Role Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Role</span> Overview
            </h2>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                As a Senior Cyber Security Engineer at 3 Squared Technologies, I manage and secure five classified environments across Impact Level 4 (IL4) and Impact Level 6 (IL6) classifications, ensuring full compliance with DoD Cloud Security Requirements Guide (SRG), Security Technical Implementation Guides (STIGs), and Risk Management Framework (RMF) standards.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This role combines deep technical expertise in RHEL system administration, cloud migration, and security operations with strategic participation in Agile development processes and Technical Interchange Meetings. I work at the intersection of classified infrastructure management, DevSecOps practices, and mission-critical security operations supporting Department of Defense initiatives.
              </p>
            </div>
          </section>

          {/* Key Responsibilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Key</span> Responsibilities
            </h2>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Manage five classified environments — three IL4 and two IL6 — ensuring full compliance with DoD Cloud SRG, STIG, and RMF security standards</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Lead daily operations for RHEL-based systems including kernel tuning, SELinux configuration, system patching, and advanced hardening for mission-critical applications</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Support the migration of IL6 workloads to AWS IL6 (Cloud One), validating enclave configurations, cross-domain data flows, and secure automation baselines</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Participate in Agile sprints and Technical Interchange Meetings (TIMs) to coordinate migration milestones, sprint deliverables, and system accreditation artifacts</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Administer and secure Trend Micro Deep Security / Deep Visibility for intrusion detection, real-time monitoring, and forensic data analysis within IL6 boundaries</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Utilize ServiceNow for ticket triage, configuration management, and change control, ensuring traceability and compliance throughout the IL lifecycle</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Manage Bitbucket for source control and Artifactory for package management, maintaining secure DevSecOps practices within the IL6 enclave</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Perform advanced system performance tuning using dstat, vmstat, and perf, optimizing CPU, memory, and I/O for classified workloads</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Configure and maintain systemd services, LVM storage, and RAID arrays, ensuring redundancy and high availability in IL6 environments</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Conduct vulnerability scanning and STIG validation using ACAS/Tenable and OpenSCAP, remediating findings across all enclaves in coordination with cybersecurity teams</span>
                </li>
              </ul>
            </div>
          </section>

          {/* A Day in the Life */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">A Day</span> in the Life
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">Morning (7:00 AM - 12:00 PM)</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  My day begins with reviewing overnight system alerts and security events from Trend Micro Deep Security across all five classified environments. I check system health metrics, review any automated STIG compliance scans, and prioritize any critical vulnerabilities or configuration drift that occurred during off-hours. This is followed by the daily Agile stand-up where I provide updates on migration progress, security posture, and any blockers affecting the IL6 cloud migration effort.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Mid-morning is dedicated to hands-on RHEL system administration work—applying security patches, tuning kernel parameters, configuring SELinux policies, and performing system hardening activities. I also work on validating AWS IL6 enclave configurations, testing cross-domain data flows, and ensuring secure automation baselines are properly implemented. This often involves deep technical work with systemd services, LVM storage configurations, and RAID array management to ensure high availability.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">Afternoon (1:00 PM - 5:30 PM)</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Afternoons typically involve Technical Interchange Meetings (TIMs) with stakeholders to coordinate migration milestones, discuss sprint deliverables, and review system accreditation artifacts. I work closely with the cybersecurity team on vulnerability remediation, analyzing ACAS/Tenable scan results and implementing OpenSCAP STIG validations across all enclaves.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  I also spend significant time on DevSecOps activities—managing source control in Bitbucket, maintaining package repositories in Artifactory, and ensuring secure CI/CD pipelines for classified workloads. Performance tuning is another key focus, using tools like dstat, vmstat, and perf to optimize system resources for mission-critical applications. I work in ServiceNow throughout the day for ticket triage, configuration management, and change control documentation to maintain full traceability and compliance.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">Evening & On-Call (5:30 PM - 7:00 PM)</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  The end of the day is reserved for documentation, sprint planning, and preparing for the next day's priorities. I review and update system accreditation documentation, ensure all change control records are properly documented in ServiceNow, and prepare status reports for leadership on migration progress and security posture. As part of the on-call rotation, I remain available to respond to critical security incidents or system outages affecting the classified environments, ensuring 24/7 operational readiness for mission-critical DoD systems.
                </p>
              </div>
            </div>
          </section>

          {/* Team Structure & Supervision */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Team Structure</span> & Supervision
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">Reporting Structure</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I report to the Technical Lead and work as part of a cross-functional team supporting classified DoD environments. The role involves regular coordination with cybersecurity teams, cloud architects, and program management to ensure successful IL6 cloud migration and ongoing security operations.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Daily participation in Agile ceremonies and Technical Interchange Meetings ensures alignment with program objectives and provides visibility into technical challenges and migration progress.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">Collaboration</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  This role requires extensive collaboration across multiple teams including cybersecurity analysts, cloud engineers, DevSecOps practitioners, and program managers. I serve as the technical subject matter expert for RHEL systems and classified environment security.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Cross-functional coordination is essential for successful IL6 cloud migration, requiring close partnership with AWS specialists, security assessors, and accreditation teams to ensure compliance with DoD Cloud SRG and RMF requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies & Tools */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Technologies</span> & Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-green-500">Operating Systems & Infrastructure</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Red Hat Enterprise Linux (RHEL)</li>
                  <li>• SELinux</li>
                  <li>• systemd</li>
                  <li>• LVM & RAID</li>
                  <li>• Kernel Tuning</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-green-500">Cloud & Migration</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AWS IL6 (Cloud One)</li>
                  <li>• DoD Cloud SRG</li>
                  <li>• Cross-Domain Solutions</li>
                  <li>• Enclave Architecture</li>
                  <li>• Cloud Migration</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-green-500">Security & Compliance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Trend Micro Deep Security</li>
                  <li>• ACAS/Tenable</li>
                  <li>• OpenSCAP</li>
                  <li>• STIG Validation</li>
                  <li>• RMF/ATO Process</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-green-500">DevSecOps & Automation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Bitbucket</li>
                  <li>• Artifactory</li>
                  <li>• Bash Scripting</li>
                  <li>• Ansible</li>
                  <li>• CI/CD Pipelines</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-green-500">Monitoring & Performance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• dstat</li>
                  <li>• vmstat</li>
                  <li>• perf</li>
                  <li>• System Performance Tuning</li>
                  <li>• Forensic Analysis</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-green-500">ITSM & Project Management</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• ServiceNow</li>
                  <li>• Agile/Scrum</li>
                  <li>• JIRA</li>
                  <li>• Change Management</li>
                  <li>• Configuration Management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Key</span> Achievements
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">Multi-Enclave Security Management</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Successfully managing five classified environments (three IL4 and two IL6) with 100% compliance to DoD Cloud SRG, STIG, and RMF standards, maintaining continuous authorization to operate (ATO) status across all enclaves.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">IL6 Cloud Migration Support</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Providing critical technical support for the migration of IL6 workloads to AWS IL6 (Cloud One), validating secure enclave configurations and cross-domain data flows while maintaining operational security throughout the transition.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">Advanced RHEL Hardening</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Implemented comprehensive RHEL hardening across all classified systems including kernel tuning, SELinux policy optimization, and advanced security configurations, achieving 95%+ STIG compliance scores on all vulnerability assessments.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">DevSecOps Excellence</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Established secure DevSecOps practices within IL6 environments using Bitbucket and Artifactory, enabling automated deployment pipelines while maintaining strict security controls and audit traceability for classified workloads.
                </p>
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div className="mt-12">
            <Link to="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors">
              <ArrowLeft size={20} />
              Back to Resume
            </Link>
          </div>
        </div>
      </div>

    </PageLayout>
  )
}
