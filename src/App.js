import React, { useState } from "react";
import About from "./components/About";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/Contact";

function App() {
  const [content] = useState(["About", "Contact", "Portfolio", "Resume"]);
  const [currentContent, setCurrentContent] = useState(content[0]);

  return (
    <div>
      <Header
        content={content}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <main>
        <ContactForm></ContactForm>
        <About></About>
      </main>
    </div>
  );
}
export default App;
