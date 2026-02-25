import '../App.css'
import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { expertiseAreas, majorProjects } from '../data/portfolio'

export default function Portfolio() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Cyber Security <span className="text-green-500">Knowledge Center</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            This portfolio presents my Cyber Security skills and personal projects covering various domains including RMF, Nessus and ACAS, Defensive Cyber Operations, System Administration, Threat Intelligence, and more.
          </p>
        </div>
      </section>

      {/* Cyber Task Explanations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Cyber Security <span className="text-green-500">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4">
                  <area.icon className="text-green-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {area.description}
                </p>
              </div>
            ))}
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
            {majorProjects.map((project) => (
              <div key={project.title} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:border-green-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg">
                    <project.icon className="text-green-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                {project.summary.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 dark:text-gray-300 mb-4">
                    {paragraph}
                  </p>
                ))}
                <div className={`flex flex-wrap gap-2 ${project.link ? 'mb-4' : ''}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors font-semibold">
                    {project.linkLabel}
                  </a>
                ) : null}
              </div>
            ))}
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

    </PageLayout>
  )
}
