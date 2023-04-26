import React from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Home.js";


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Navbar />
      <About />
      <Projects />
      <Skills />
      <Certifications /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
