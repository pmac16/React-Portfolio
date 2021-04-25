import React from "react";
import coverImage from "../../assets/cover/PM.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: 100 }}
        alt="cover"
      />
      <p>
        {" "}
        My name is Priya Macpherson. I am a full stack web developer based in
        Oakland, CA. Previously I was an elementary school teacher and taught
        5th grade.
      </p>
    </section>
  );
}

export default About;
