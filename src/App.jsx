import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "@layout";
import { About, Resume, Projects, Contact, Journey } from '@pages';

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
