import React from "react";
import coverImage from "../../assets/cover/PM.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <img
          src={coverImage}
          className="my-2"
          style={{ width: 200 }}
          alt="cover"
        />
        <div
          style={{
            display: "flex",
            alignItems: "left",
            justifyContent: "space-between",
            margin: 30,
          }}
        >
          <p>
            My name is Priya Macpherson. I am a full stack web developer based
            in Oakland, CA. Previously I was an elementary school teacher and
            taught 5th grade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
