import '../App.css'
import { Linkedin, Mail, Github, Instagram, Twitter, GraduationCap, Atom, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'

const advocacyItems = [
  {
    icon: Atom,
    title: 'Nuclear Energy Advocacy',
    description: 'Advocating for nuclear energy as a clean, reliable, and essential part of our energy future. Nuclear power is one of the safest and most efficient forms of energy generation, yet remains misunderstood by many.',
    initiatives: ['Nuclear produces zero carbon emissions during operation', 'A single uranium fuel pellet contains as much energy as 17,000 cubic feet of natural gas', 'Nuclear plants have the highest capacity factor of any energy source at 93%', 'France generates over 70% of its electricity from nuclear power', 'Modern reactor designs are passively safe and cannot melt down like older designs']
  },
  {
    icon: DollarSign,
    title: 'Financial Literacy Education',
    description: 'Promoting financial literacy and education to help individuals and communities build wealth, understand investing, and achieve financial independence. Financial knowledge is a powerful tool for breaking cycles of poverty and creating generational wealth.',
    initiatives: ['Teaching budgeting and saving fundamentals', 'Educating on investing and compound interest', 'Promoting understanding of credit scores and debt management', 'Advocating for financial education in schools', 'Supporting programs that teach entrepreneurship and business skills']
  },
  {
    icon: GraduationCap,
    title: 'STEM Education',
    description: 'Promoting STEM education, particularly in underrepresented communities. Early exposure to science, technology, engineering, and mathematics can inspire the next generation of innovators, engineers, and problem solvers.',
    initiatives: ['School outreach programs and workshops', 'Coding bootcamps for youth', 'Mentorship programs connecting students with STEM professionals', 'Advocating for increased STEM funding in schools', 'Supporting hands-on learning through robotics and maker spaces']
  }
]

export default function Advocacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Eddie <span className="text-green-500">Barlow</span>
            </Link>
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

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Causes I <span className="text-green-500">Advocate For</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Beyond my technical work, I'm passionate about making a positive impact in the cybersecurity community and beyond. Here are the causes and initiatives I actively support and advocate for.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advocacyItems.map((item, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4">
                  <item.icon className="text-green-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-500 uppercase tracking-wide">Key Initiatives</h4>
                  <ul className="space-y-1">
                    {item.initiatives.map((initiative, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {initiative}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to <span className="text-green-500">Get Involved?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you share these passions or want to collaborate on any of these initiatives, I'd love to hear from you. Together, we can make a bigger impact in our communities.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
            <Mail size={20} />
            Get In Touch
          </Link>
        </div>
      </section>

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
