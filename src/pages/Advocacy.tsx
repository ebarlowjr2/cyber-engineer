import '../App.css'
import { Mail, GraduationCap, Atom, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'

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
    <PageLayout>
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

    </PageLayout>
  )
}
