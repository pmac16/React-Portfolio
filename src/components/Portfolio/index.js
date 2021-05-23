import React from "react";
import Project from "../Project";
import recipe from "../../assets/project/Recipe.png";
import quiz from "../../assets/project/quiz.png";
import budget from "../../assets/project/budget.png";
import weather from "../../assets/project/weather.png";
import scheduler from "../../assets/project/scheduler.png";
import portfolio from "../../assets/project/portfolio.png";
import Kathryn_Hansen from "../../assets/project/Kathryn_Hansen.png";
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
      id: 4,
      name: "Budget Tracker",
      image: budget,
      deployed: "https://dry-river-42304.herokuapp.com/",
      github: "https://github.com/pmac16/PWA-budget-tracker",
    },
    {
      id: 5,
      name: "Weather Dashboard",
      image: weather,
      deployed: "https://pmac16.github.io/weather-dashboard/",
      github: "https://github.com/pmac16/weather-dashboardweather",
    },
    {
      id: 6,
      name: "Hourly Scheduler",
      image: scheduler,
      deployed: "https://pmac16.github.io/day-scheduler/",
      github: "https://github.com/pmac16/day-scheduler",
    },
    {
      id: 7,
      name: "Kathryn Hansen Art Website",
      image: Kathryn_Hansen,
      deployed: "https://kathryn-hansen.herokuapp.com/",
      github: "https://github.com/Emilykidd3/kathryn-hansen",
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
