import React from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";

const EducationSubheading = ({
  title,
  grade,
  dates,
  content,
  active,
  onClick,
  menuItem,
}) => {
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>{title}</h3>
      <div className="p-container">{content}</div>
      <div className="p-container">{`Grade/CGPA - ${grade}`}</div>
      <div className="p-container">{dates}</div>
    </div>
  );
};

export default EducationSubheading;
