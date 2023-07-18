import React from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";
import { Chip } from "@mui/material";

const ExperienceSubheading = ({
  title,
  summary,
  dates,
  content,
  active,
  onClick,
  skills,
  menuItem,
}) => {
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>{title}</h3>
      <p className="p-container">{content}</p>
      <div className="p-container">{summary}</div>
      <div className="p-container">{dates}</div>
      <div className="p-container">
        {skills.map((item, index) => {
          return <Chip label={item} variant="outlined" key={index} sx={{color:"white"}} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceSubheading;
