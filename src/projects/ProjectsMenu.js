import React, { Component } from "react";
import classNames from "classnames";
// import projects from "./projectsData";
import "../styles/projectsMenu.css";
import data from "../assets/details.json";
import projectImg from "../assets/project-1.png";

const projects = data.projects;

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 0,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={projectImg} alt={project.title} />
        {/* <img src={project.links.images} alt={project.title}></img> */}
        <div>{project.content}</div>
        <div className="link-container">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a>
        </div>
      </div>
    ));
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"];

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index,
              })}
              onClick={() => this.handleProjectClick(index)}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
