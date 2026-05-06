import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Advocacy from './pages/Advocacy'
import ProjectsInDevelopment from './pages/ProjectsInDevelopment'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ActiveProjects from './pages/ActiveProjects'
import CarinaOS from './pages/projects/CarinaOS'
import StarkidCommand from './pages/projects/StarkidCommand'
import SecretGate from './pages/SecretGate'
import InterviewChecksheet from './pages/InterviewChecksheet'
import ScrollToTop from './components/ScrollToTop'
import Blox from './components/Blox'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Blox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/projects-in-development" element={<ProjectsInDevelopment />} />
                                <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/active-projects" element={<ActiveProjects />} />
        <Route path="/projects/carina-os" element={<CarinaOS />} />
        <Route path="/projects/starkid-command" element={<StarkidCommand />} />
        <Route path="/danger-zone" element={<SecretGate />} />
        <Route path="/interview-checksheet" element={<InterviewChecksheet />} />
      </Routes>
    </Router>
  )
}

export default App
