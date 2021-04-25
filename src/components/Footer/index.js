import React from "react";
import github from "../../assets/footer/github.png";
import linkedin from "../../assets/footer/linkedin.png";
import instagram from "../../assets/footer/instagram.jpeg";
function Resume() {
  return (
    <footer className="flex-row">
      <a href="https://github.com/pmac16" target="_blank">
        <img src={github} className="my-2" style={{ width: 50 }} alt="github" />
      </a>

      <a
        href="https://www.linkedin.com/in/priya-macpherson-60a1851b/"
        target="_blank"
      >
        <img
          src={linkedin}
          className="my-2"
          style={{ width: 50 }}
          alt="linkedin"
        />
      </a>
      <a href="https://www.instagram.com/p.mac16/" target="_blank"></a>
      <img
        src={instagram}
        className="my-2"
        style={{ width: 50 }}
        alt="instagram"
      />
    </footer>
  );
}

export default Resume;
