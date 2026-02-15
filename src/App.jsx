import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "@layout/Layout";
import About from "./pages";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Journey from "./pages/journey";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="journey" element={<Journey />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
