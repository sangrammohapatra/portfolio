import classNames from "classnames";
import "../styles/skillsMenu.css";
import frontendIcon from "../assets/eagle-emblem.png";
import data from "../assets/details.json";
import React from "react";

const SkillsMenu = (props) => {
  const skills = data.skills;

  const renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-sub-container-1">
        <h3>{skill.title}</h3>
        <div className="level-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? "filled" : "unfilled"
              }`}
            />
          ))}
        </div>
      </div>
    ));
  };

  const currentIcon = frontendIcon;
  return (
    <div className="skill-menu">
      <div
        className={classNames("skill-item", {
          activeSkill: true,
        })}
      >
        <h2 className="skill-title">MY SKILLS</h2>
      </div>

      <img className="skill-icon" src={currentIcon} alt="current skill" />
      <div className="skill-sub-container">{renderContent(skills)}</div>
    </div>
  );
};

export default SkillsMenu;
