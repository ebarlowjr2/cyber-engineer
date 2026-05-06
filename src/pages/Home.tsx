import '../App.css'
import { Mail, MapPin, Phone, Flag, Briefcase, GraduationCap, Shield, Github, Instagram, Twitter, Folder, Download, Linkedin } from 'lucide-react'
import TypedText from '../components/TypedText'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { ContactForm } from '../components/ContactForm'
import { certifications, experience, stats, techStack } from '../data/resume'

export default function Home() {
  return (
    <PageLayout>
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
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-5xl font-bold">Eddie L. Barlow</h1>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Available for Remote Work
                </Link>
              </div>
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
                I'm a Montgomery, AL based <strong className="text-green-500">Senior Cyber Security Engineer</strong> and <strong className="text-green-500">Owner of One Circle Solutions</strong>, a managed security services provider helping organizations strengthen cybersecurity, compliance, and infrastructure resilience.
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
                              <Link to="/blog" className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-700">
                                Blog
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
                    <span className="font-semibold">Employment:</span> Owner of One Circle Solutions, Managed Security Services Provider
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Education:</span> Trenholm Technical College
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Download className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <a
                      href="/resume/Eddie_Barlow_Resume.pdf"
                      download
                      className="font-semibold text-green-500 hover:text-green-400 transition-colors"
                    >
                      Download Resume
                    </a>
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
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors"
              >
                <stat.icon className="text-green-500 mx-auto mb-4" size={40} />
                <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">{stat.label}</h3>
                <div className="text-4xl font-bold">{stat.value}</div>
              </div>
            ))}
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
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors"
              >
                <Shield className="text-green-500 mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.subtitle}</p>
              </div>
            ))}
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
            {techStack.map((stack) => (
              <div key={stack.title}>
                <div className="flex items-center gap-2 mb-4">
                  <stack.icon className="text-green-500" size={24} />
                  <h3 className="text-xl font-bold">{stack.title}</h3>
                </div>
                <div className="space-y-2">
                  {stack.items.map((item) => (
                    <div key={item} className="text-gray-600 dark:text-gray-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            {experience.map((role) => (
              <div key={`${role.title}-${role.company}`} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                    <div className="text-green-500 font-semibold">{role.company} – {role.location}</div>
                  </div>
                  <div className="text-gray-400">{role.dates}</div>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-green-500">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                {'link' in role && role.link ? (
                  <div className="mt-6">
                    <Link to={role.link} className="text-green-500 hover:text-green-400 transition-colors font-semibold">
                      View Full Role Details →
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
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
              <ContactForm
                inputClassName="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                textareaClassName="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                buttonClassName="w-full bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                statusClassName="text-sm text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
