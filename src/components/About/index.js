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
          style={{ width: 400, height: 400 }}
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
            From a young age, I have always loved learning. However, the passion
            I had for learning did not extend to math, technology, or science.
            When I became a teacher, you can imagine my surprise when I
            discovered that though I had hated these subjects as a child, I
            loved teaching them as an adult. I learned the creativity involved
            with math; there is always more than one way to solve a problem. I
            discovered female scientists I had never learned about and shared
            their research discoveries with my students. I attended coding
            professional developments so I could teach my students to code. And
            through all of this, I discovered how deep my own love of this field
            had become. I knew I needed to learn more.
            <br></br> <br></br>I got into teaching because I wanted to make a
            difference in my community. I wanted all of my students to have the
            same academic outcomes as students in high-income areas. My shift
            into computer coding comes from the same desire.
            <br></br> <br></br>
            Through my learnings from UC Berkeley's coding bootcamp, I plan on
            continuing my work in ensuring that all students have access to
            quality educational programming.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
