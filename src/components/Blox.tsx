import { useState } from 'react'
import { X, Send } from 'lucide-react'

interface Message {
  sender: 'blox' | 'user'
  text: string
}

const bloxResponses: Record<string, string> = {
  greeting: `Greetings! I am B.L.O.X. - Barlow Logic Operations Xecutive. I'm Eddie's digital assistant, here to help you learn more about his extensive experience, skills, hobbies, and business ventures. Feel free to ask me anything!`,
  
  experience: `Eddie has over 20 years of experience in cybersecurity and systems administration. He is the owner of One Circle Solutions, a managed security services provider, and has worked with the U.S. Air Force, DISA, and defense contractors securing classified and regulated environments. His expertise spans MSSP operations, CMMC, RMF, NIST, RHEL, AWS, Azure, vulnerability management, penetration testing, and incident response.`,
  
  skills: `Eddie's technical arsenal includes: Linux administration (RHEL, CentOS, Ubuntu), cloud platforms (AWS, Azure, Oracle Cloud, GCP), security tools (Splunk, Nessus, Qualys, SentinelOne, Trend Micro), automation (Ansible, Terraform, Bash, Docker), and compliance frameworks (NIST 800-53, FedRAMP, STIGs, RMF). He holds certifications including CISM, Azure AZ-104, Security+, and MCSA.`,
  
  hobbies: `Beyond cybersecurity, Eddie is passionate about technology innovation and continuous learning. He enjoys exploring emerging technologies, building personal tech projects, and staying current with the latest developments in AI and cloud computing. He's also interested in mentoring the next generation of cybersecurity professionals.`,
  
  business: `Eddie owns One Circle Solutions, a managed security services provider focused on cybersecurity consulting, vulnerability management, penetration testing, CMMC and NIST readiness, cloud security, and infrastructure hardening for commercial and regulated customers.`,
  
  projects: `Some of Eddie's notable projects include: resolving a mission-critical Air Force HBSS outage affecting 90% of Linux servers, leading the JRSS IL6 deployment for the DoD, designing the Prince George's County Cyber Lab for AI-driven cybersecurity training, and serving as Lead Cybersecurity Architect for the AFINC Weapon System - the first cyberspace weapon system designated by the U.S. Air Force.`,
  
  contact: `You can reach Eddie via email at eddiebarlowjr@gmail.com or phone at 334-652-1366. He's based in Montgomery, Alabama and is available for remote work worldwide. You can also connect with him on LinkedIn or check out his GitHub projects!`,
  
  availability: `Eddie is currently open to new opportunities! He's available for remote work and is seeking to join innovative cybersecurity teams. Feel free to reach out through the contact page or send him a message directly.`,
  
  default: `I'm not sure I understood that. You can ask me about Eddie's experience, skills, hobbies, business ventures, notable projects, contact information, or availability. How can I help you?`
}

function getBloxResponse(input: string): string {
  const lowerInput = input.toLowerCase()
  
  if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey') || lowerInput.includes('who are you') || lowerInput.includes('what are you')) {
    return bloxResponses.greeting
  }
  if (lowerInput.includes('experience') || lowerInput.includes('background') || lowerInput.includes('career') || lowerInput.includes('work history')) {
    return bloxResponses.experience
  }
  if (lowerInput.includes('skill') || lowerInput.includes('technical') || lowerInput.includes('certification') || lowerInput.includes('technology') || lowerInput.includes('tools')) {
    return bloxResponses.skills
  }
  if (lowerInput.includes('hobby') || lowerInput.includes('hobbies') || lowerInput.includes('interest') || lowerInput.includes('free time') || lowerInput.includes('personal')) {
    return bloxResponses.hobbies
  }
  if (lowerInput.includes('business') || lowerInput.includes('venture') || lowerInput.includes('entrepreneur') || lowerInput.includes('company')) {
    return bloxResponses.business
  }
  if (lowerInput.includes('project') || lowerInput.includes('achievement') || lowerInput.includes('accomplish') || lowerInput.includes('notable')) {
    return bloxResponses.projects
  }
  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach') || lowerInput.includes('linkedin')) {
    return bloxResponses.contact
  }
  if (lowerInput.includes('available') || lowerInput.includes('hire') || lowerInput.includes('opportunity') || lowerInput.includes('job') || lowerInput.includes('work with')) {
    return bloxResponses.availability
  }
  
  return bloxResponses.default
}

export default function Blox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'blox', text: bloxResponses.greeting }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return
    
    const userMessage: Message = { sender: 'user', text: inputValue }
    const bloxResponse: Message = { sender: 'blox', text: getBloxResponse(inputValue) }
    
    setMessages(prev => [...prev, userMessage, bloxResponse])
    setInputValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xs">B</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">B.L.O.X.</div>
                <div className="text-green-500 text-xs">Barlow Logic Operations Xecutive</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-green-500 text-gray-900' 
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
              <button 
                onClick={handleSend}
                className="bg-green-500 text-gray-900 p-2 rounded-lg hover:bg-green-400 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button - PIP Droid Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat with B.L.O.X."
      >
        <div className="relative">
          {/* Droid Body - Rounded rectangle like PIP */}
          <div className="w-16 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl border-2 border-gray-600 shadow-lg group-hover:border-green-500 transition-all duration-300 overflow-hidden">
            {/* Top Section - Sensor/Screen Area */}
            <div className="h-10 bg-gray-900 m-1 rounded-t-xl flex items-center justify-center gap-1">
              {/* Eyes/Sensors */}
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-400' : 'bg-green-500'} animate-pulse`}></div>
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-400' : 'bg-green-500'} animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Middle Section - Display */}
            <div className="mx-1 h-4 bg-gray-900 rounded flex items-center justify-center">
              <div className="w-6 h-1 bg-green-500 rounded"></div>
            </div>
            
            {/* Bottom Section - Details */}
            <div className="flex justify-center gap-1 mt-1">
              <div className="w-2 h-2 bg-green-500/50 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500/50 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500/50 rounded-full"></div>
            </div>
          </div>
          
          {/* Hover Label */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-green-500 text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            B.L.O.X.
          </div>
        </div>
      </button>
    </>
  )
}
