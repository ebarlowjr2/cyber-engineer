import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import MSISeniorCyberSecurityEngineer from './pages/jobs/MSISeniorCyberSecurityEngineer'
import TCecureCyberSecurityEngineer from './pages/jobs/TCecureCyberSecurityEngineer'
import AstrionNetworkEngineeringSME from './pages/jobs/AstrionNetworkEngineeringSME'
import SMSDataSolutionsSrCyberSecurityEngineer from './pages/jobs/SMSDataSolutionsSrCyberSecurityEngineer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/jobs/msi-senior-cyber-security-engineer" element={<MSISeniorCyberSecurityEngineer />} />
        <Route path="/jobs/tcecure-cyber-security-engineer" element={<TCecureCyberSecurityEngineer />} />
        <Route path="/jobs/astrion-network-engineering-sme" element={<AstrionNetworkEngineeringSME />} />
        <Route path="/jobs/sms-data-solutions-sr-cyber-security-engineer" element={<SMSDataSolutionsSrCyberSecurityEngineer />} />
      </Routes>
    </Router>
  )
}

export default App
