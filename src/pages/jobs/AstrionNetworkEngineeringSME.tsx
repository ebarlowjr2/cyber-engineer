import '../../App.css'
import { ArrowLeft, Briefcase, Users, Clock, Target, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../components/PageLayout'

export default function AstrionNetworkEngineeringSME() {
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
              Network Engineering SME
            </h1>
            <div className="text-xl text-green-500 font-semibold mb-2">
              Astrion US – Maxwell-AFB Gunter Annex, Montgomery AL
            </div>
            <div className="text-gray-400 text-lg">
              March 2021 – May 2022
            </div>
          </div>

          {/* Role Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-500">Role</span> Overview
            </h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                As a Network Engineering Subject Matter Expert at Astrion US, I served as the technical lead for enterprise infrastructure services supporting 700+ users across multiple teams at Maxwell Air Force Base. This role combined strategic cloud architecture with hands-on technical leadership, focusing on multi-cloud environments spanning Oracle Cloud, Microsoft Azure, and Amazon Web Services.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The position required expertise in cloud migration strategies, security architecture design, and cost optimization across diverse cloud platforms. I was responsible for leading large-scale infrastructure transformations while ensuring security, compliance, and operational excellence throughout the migration process.
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
                  <span className="text-gray-300">Spearheaded enterprise infrastructure services for 700 users across four teams, leveraging Oracle Cloud, Azure, and AWS platforms</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Led cloud workflow automation across eight zones, reducing process times by 25% and improving deployment efficiency</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Designed and implemented security systems aligning with SABSA and NIST 800-53 frameworks, leading to a 50% reduction in security incidents</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Conducted performance evaluations and system migrations for over 800 systems transitioning from on-premise to cloud environments</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Engineered cloud management strategies achieving a 20% reduction in annual IT spending through optimization and right-sizing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Provided technical leadership and architecture guidance for complex multi-cloud integration projects</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Developed and maintained infrastructure-as-code solutions using Terraform and CloudFormation for consistent deployments</span>
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
                      My mornings typically began with reviewing cloud infrastructure metrics and cost reports across all three cloud platforms. I would analyze resource utilization, identify optimization opportunities, and check for any security alerts or compliance issues that arose overnight. This was followed by a daily stand-up with the infrastructure team to align on priorities and discuss any blockers.
                    </p>
                    <p className="text-gray-300">
                      The rest of the morning was often dedicated to architecture design work—creating cloud infrastructure diagrams, documenting migration strategies, or developing Terraform modules for new service deployments. I also spent time reviewing and approving infrastructure change requests, ensuring they met security and architectural standards before implementation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">Afternoon (1:00 PM - 5:00 PM)</h3>
                    <p className="text-gray-300 mb-3">
                      Afternoons were typically focused on hands-on technical work and collaboration. I would work on cloud migration projects—assessing on-premise systems, planning migration strategies, and executing cutover activities. This involved coordinating with application owners, testing migrated workloads, and troubleshooting any issues that arose during the migration process.
                    </p>
                    <p className="text-gray-300 mb-3">
                      I regularly met with stakeholders from different teams to discuss their infrastructure needs, provide technical guidance on cloud architecture decisions, and help them optimize their cloud resources. These sessions often involved whiteboarding solutions, discussing trade-offs between different cloud services, and planning capacity for upcoming projects.
                    </p>
                    <p className="text-gray-300">
                      Late afternoon was reserved for automation work—developing scripts to automate routine tasks, building CI/CD pipelines for infrastructure deployments, and creating monitoring dashboards to track system health and performance across all cloud environments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-500">Strategic Planning</h3>
                    <p className="text-gray-300">
                      Beyond daily operations, I dedicated time each week to strategic planning activities—evaluating new cloud services, conducting proof-of-concept testing, and developing long-term infrastructure roadmaps. I also participated in architecture review boards and provided technical input on major IT initiatives.
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
                  I reported directly to the Director of Infrastructure Services and served as the senior technical advisor for cloud architecture decisions. This position required regular interaction with executive leadership to provide updates on cloud migration progress, cost optimization initiatives, and strategic infrastructure planning.
                </p>
                <p className="text-gray-300">
                  As a Subject Matter Expert, I was frequently called upon to provide technical expertise for high-level decision-making, including vendor evaluations, technology selections, and long-term infrastructure strategy development.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-green-500" size={32} />
                  <h3 className="text-2xl font-bold">Team Leadership</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  I provided technical leadership and mentorship to a team of 8 infrastructure engineers and cloud specialists across four functional teams. This included conducting technical training sessions, reviewing their work, and helping them develop their cloud engineering skills.
                </p>
                <p className="text-gray-300">
                  I also coordinated closely with security teams, network operations, and application development groups to ensure seamless integration of cloud services with existing infrastructure and adherence to security and compliance requirements.
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
                  <h3 className="text-xl font-bold mb-3 text-green-500">Cloud Platforms</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Oracle Cloud Infrastructure</li>
                    <li>• Microsoft Azure</li>
                    <li>• Amazon Web Services</li>
                    <li>• Azure Active Directory</li>
                    <li>• AWS IAM</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Infrastructure as Code</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Terraform</li>
                    <li>• AWS CloudFormation</li>
                    <li>• Azure Resource Manager</li>
                    <li>• Ansible</li>
                    <li>• PowerShell DSC</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-500">Monitoring & Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Azure Monitor</li>
                    <li>• AWS CloudWatch</li>
                    <li>• Datadog</li>
                    <li>• Grafana</li>
                    <li>• ServiceNow</li>
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
                    <h3 className="text-lg font-bold mb-1">Large-Scale Cloud Migration</h3>
                    <p className="text-gray-300">Successfully led the migration of 800+ systems from on-premise infrastructure to multi-cloud environments with zero unplanned downtime, completing the project 2 months ahead of schedule.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Cost Optimization</h3>
                    <p className="text-gray-300">Implemented cloud cost optimization strategies that reduced annual IT spending by 20% ($500K+ savings) through right-sizing, reserved instances, and automated resource management.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Security Architecture</h3>
                    <p className="text-gray-300">Designed and implemented comprehensive security architecture aligned with SABSA and NIST 800-53, resulting in a 50% reduction in security incidents and successful completion of multiple security audits.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Automation Excellence</h3>
                    <p className="text-gray-300">Developed automation frameworks that reduced cloud deployment times by 25% and improved consistency across eight cloud zones, enabling faster delivery of infrastructure services to end users.</p>
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

    </PageLayout>
  )
}
