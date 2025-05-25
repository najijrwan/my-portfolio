import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="xl:flex xl:flex-col xl:items-end xl:gap-[25px]">
        <Hero />
        <Navbar />
      </div>
      <div className="lg:relative lg:w-max lg:m-auto xl:min-w-[75%] xl:w-[75%] xl:m-0">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
