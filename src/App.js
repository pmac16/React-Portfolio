import React, { useState } from "react";
import About from "./components/About";
import "./App.css";
import Header from "./components/Header";

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
        <About></About>
      </main>
    </div>
  );
}
export default App;
