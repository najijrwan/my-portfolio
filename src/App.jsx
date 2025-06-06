import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Hero from './components/Hero';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Career1 from "./pages/Career1";

function App() {
  return (
    <Router>
      <Hero />
      <div className="
      lg:relative lg:w-max xl:m-0! lg:m-auto xl:min-w-[75%] xl:w-[75%] ">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
