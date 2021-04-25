import React from "react";
import Project from "../Project";

function Portfolio() {
  const projectList = [
    {
      id: 1,
      name: "Project 1",
      image:
        "https://i.pinimg.com/236x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
      deployed: "https://github.com/pmac16/mvc-tech-blog",
      github: "https://github.com/pmac16",
    },
    {
      id: 2,
      name: "Project 2",
      image: "src/assets/project/Test.jpeg",
      deployed: "https://github.com/pmac16/mvc-tech-blog",
      github: "https://github.com/pmac16",
    },
    {
      id: 3,
      name: "Project 3",
      image: "src/assets/project/Test.jpeg",
      deployed: "https://github.com/pmac16/mvc-tech-blog",
      github: "https://github.com/pmac16",
    },
    {
      id: 4,
      name: "Project 4",
      image: "src/assets/project/Test.jpeg",
      deployed: "https://github.com/pmac16/mvc-tech-blog",
      github: "https://github.com/pmac16",
    },
  ];

  return (
    <section id="project">
      {projectList.map((project) => {
        return (
          <Project
            id={project.id}
            name={project.name}
            image={project.image}
            deployed={project.deployed}
            github={project.github}
            key={project.id}
          />
        );
      })}
    </section>
  );
}

export default Portfolio;
