import '../App.css'
import { Linkedin, Github, Instagram, Twitter, MessageCircle, MapPin, Mail, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header/Nav */}
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

      {/* Main Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Resume
          </Link>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-green-500">Available</span> for Remote Work
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm currently open to new opportunities. Let's connect and discuss how I can help secure your infrastructure.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Message Me Card */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-green-500" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-2">Message me</h3>
              <p className="text-gray-400">Monday - Friday from 7am - 5pm</p>
            </div>

            {/* Location Card */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-green-500" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-2">Montgomery, Alabama</h3>
              <p className="text-gray-400">Available for remote work worldwide.</p>
            </div>

            {/* Email Card */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Mail className="text-green-500" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-2">eddiebarlowjr@gmail.com</h3>
              <p className="text-gray-400">Contact me any time!</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-500 mb-2">Get In Touch</h2>
              <div className="w-12 h-1 bg-green-500 mb-8"></div>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500 mb-6">
                <img 
                  src="/images/profile.png" 
                  alt="Eddie L. Barlow - Senior Cyber Security Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 text-lg max-w-md">
                Got questions? Let's chat! Drop a message below or reach out via social media. I'm here to help!
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Github" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/eddie-barlow-jr-cism-68802716/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="http://instagram.com/ebarlowjr2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://x.com/mrcyber334?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="text-gray-400">
            &copy; 2025 Eddie Barlow
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
