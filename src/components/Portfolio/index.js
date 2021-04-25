import React from "react";
import Project from "../Project";
import recipe from "../../assets/project/Recipe.png";
import quiz from "../../assets/project/quiz.png";

function Portfolio() {
  const projectList = [
    {
      id: 1,
      name: "Recipe Finder",
      image: recipe,
      deployed: "https://pmac16.github.io/recipe-finder/",
      github: "https://github.com/pmac16/recipe-finder",
    },
    {
      id: 2,
      name: "Quiz Challenge",
      image: quiz,
      deployed: "https://pmac16.github.io/javascript-quiz-challenge/",
      github: "https://github.com/pmac16/javascript-quiz-challenge",
    },
    {
      id: 3,
      name: "Social Network",
      image: "src/assets/project/Test.jpeg",
      deployed: "https://github.com/pmac16/MongoDb-social-network",
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
    <section id="project" className="wrapper">
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
