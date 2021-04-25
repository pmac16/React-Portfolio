import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <h1 id="about">Resume</h1>
      <div className="my-2">
        <h2 className="mx-2">Skills</h2>
        <h3 className="mx-2">Front End</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>Javascript/jQuery</li>
          <li>Frameworks</li>
          <li>Responsive Design</li>
          <li>Version Control/Git</li>
          <li>Testing/Debugging</li>
          <li>Browser Developer Tools</li>
          <li>Web Performance</li>
          <li>Command Line</li>
        </ul>
        <h3 className="mx-2">Back End</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>SQL</li>
          <li>Restful APIs</li>
          <li>Server Handling</li>
          <li>Database Management</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
