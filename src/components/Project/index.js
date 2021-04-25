import React from "react";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <a href={props.deployed}>Deployed Site</a>
          </li>
          <li>
            <a href={props.github}>Github Repository</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
