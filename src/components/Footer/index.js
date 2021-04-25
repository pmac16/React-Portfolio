import React from "react";
import github from "../../assets/footer/github-brands.svg";
import linkedin from "../../assets/footer/linkedin-brands.svg";
import instagram from "../../assets/footer/instagram-brands.svg";

function Resume() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <a href="https://github.com/pmac16" target="_blank">
        <img
          src={github}
          className="my-2"
          style={{ width: 50 }}
          alt="linkedin"
        />
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
      <a href="https://www.instagram.com/p.mac16/" target="_blank">
        <img
          src={instagram}
          className="my-2"
          style={{ width: 50 }}
          alt="instagram"
        />
      </a>
    </footer>
  );
}

export default Resume;
