import React from "react";
import coverImage from "../../assets/cover/PM.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: 200 }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          My name is Priya Macpherson. I am a full stack web developer based in
          Oakland, CA. Previously I was an elementary school teacher and taught
          5th grade.
        </p>
      </div>
    </section>
  );
}

export default About;
