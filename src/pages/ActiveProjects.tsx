import '../App.css'
import { ExternalLink, Calendar, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { activeProjects } from '../data/projects'

function getStatusColor(status: string) {
  switch (status) {
    case 'Active Development':
      return 'bg-green-500/20 text-green-400'
    case 'Beta Testing':
      return 'bg-blue-500/20 text-blue-400'
    case 'Planning Phase':
      return 'bg-yellow-500/20 text-yellow-400'
    default:
      return 'bg-gray-500/20 text-gray-400'
  }
}

export default function ActiveProjects() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Active <span className="text-green-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A look at the cybersecurity tools and platforms I'm actively building. These projects represent real-world solutions to security challenges I've encountered throughout my career.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {activeProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <a href={project.link} className="text-green-500 hover:text-green-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="text-green-500" />
                    <span>Started: {project.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Users size={16} className="text-green-500" />
                    <span>{project.team}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500 dark:text-gray-400">Progress</span>
                    <span className="text-green-500 font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to <span className="text-green-500">Collaborate?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always looking for talented individuals to collaborate on these projects. Whether you're a developer, security researcher, or just passionate about cybersecurity, let's connect!
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>

    </PageLayout>
  )
}
