import React, { useState } from "react";
import About from "./components/About";
import "./index.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
// import ContactForm from "./components/Contact";
import Project from "./components/Project";
import projects from "./projects.json";

function App() {
  const [content] = useState(["About", "Contact", "Portfolio", "Resume"]);
  const [currentContent, setCurrentContent] = useState(content[0]);
  // const [contactSelected, setContactSelected] = useState(false);

  const [projectList, setProjectList] = useState(projects);
  return (
    <div>
      <Header
        content={content}
        setCurrentContent={setCurrentContent}
        currentContent={currentContent}
      ></Header>
      <main>
        <Portfolio>
          <h1>Projects</h1>
          {projectList.map((projects) => (
            <Project
              id={projects.id}
              name={projects.name}
              image={projects.image}
              deployed={projects.deployed}
              github={projects.github}
              key={projects.id}
            ></Project>
          ))}
        </Portfolio>
        <About></About>
      </main>
    </div>
  );
}
export default App;
