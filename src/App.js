import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Experience from './pages/experience/Experience'
import Contact from './pages/contact/Contact.jsx'
import Projects from './pages/projects/Projects'
import Navbar from './Navbar.jsx';
import CreateProject from './pages/createproject/CreateProject.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init({
    duration: 3000,
  });
  return (
    <div className="App">
    
      <div className='app-container'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createproject" element={<CreateProject/>} />
        <Route path="*" element={<h1>No page Found</h1>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
