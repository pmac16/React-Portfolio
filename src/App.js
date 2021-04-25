import React, { useState } from "react";
import About from "./components/About";
import "./index.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [content] = useState(["About", "Contact", "Portfolio", "Resume"]);
  const [currentContent, setCurrentContent] = useState(content[0]);

  return (
    <div>
      <Header
        content={content}
        setCurrentContent={setCurrentContent}
        currentContent={currentContent}
      />
      <main>
        {currentContent === "About" && <About />}
        {currentContent === "Contact" && <Contact />}
        {currentContent === "Portfolio" && <Portfolio />}
        {currentContent === "Resume" && <Resume />}
      </main>
      <Footer />
    </div>
  );
}
export default App;
