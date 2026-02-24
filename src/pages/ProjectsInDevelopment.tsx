import '../App.css'
import { Mail, Github, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { featuredProject, projectsInDevelopment } from '../data/projects'

const projects = projectsInDevelopment

function getStatusColor(status: string) {
  switch (status) {
    case 'Beta':
      return 'bg-blue-500/20 text-blue-400'
    case 'Alpha Testing':
      return 'bg-purple-500/20 text-purple-400'
    case 'In Development':
      return 'bg-green-500/20 text-green-400'
    case 'Planning':
      return 'bg-yellow-500/20 text-yellow-400'
    case 'Concept':
      return 'bg-gray-500/20 text-gray-400'
    default:
      return 'bg-gray-500/20 text-gray-400'
  }
}

export default function ProjectsInDevelopment() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Projects in <span className="text-green-500">Development</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A glimpse into the cybersecurity tools and platforms I'm currently building. These projects represent my vision for making security more accessible and effective.
          </p>
        </div>
      </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Featured Project</h2>
                <div className="bg-white dark:bg-gray-900 border-2 border-green-500 rounded-lg p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-14 h-14 bg-green-500/20 rounded-lg">
                        <featuredProject.icon className="text-green-500" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{featuredProject.title}</h3>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(featuredProject.status)}`}>
                          {featuredProject.status}
                        </span>
                      </div>
                    </div>
                  </div>
            
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredProject.description}</p>
            
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500 dark:text-gray-400">Progress</span>
                      <span className="text-green-500">{featuredProject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${featuredProject.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800 gap-4">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Expected Release: </span>
                      <span className="text-sm text-green-500 font-medium">{featuredProject.expectedRelease}</span>
                    </div>
                    <Link to={featuredProject.detailPage} className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors text-sm">
                      Learn More & Download
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                      <project.icon className="text-green-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-green-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-400">Expected Release</span>
                  <span className="text-sm text-green-500 font-medium">{project.expectedRelease}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in <span className="text-green-500">Collaborating?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always looking for talented individuals to collaborate on these projects. Whether you're a developer, security researcher, or just passionate about cybersecurity, let's connect!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              <Mail size={20} />
              Get In Touch
            </Link>
            <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700">
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
