import React from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";
import {
  SiGithub,
  SiLeetcode,
  SiGeeksforgeeks,
  SiLinkedin,
} from "react-icons/si";
import { IoIosDocument } from "react-icons/io";
import { Button } from "@mui/material";

const ProfileSubheading = ({ type, link, active, onClick, menuItem }) => {
  const subContainerClass = `sub-container-${menuItem}`;
  let Icon;
  switch (type) {
    case "github":
      Icon = SiGithub;
      break;
    case "linkedIn":
      Icon = SiLinkedin;
      break;
    case "leetcode":
      Icon = SiLeetcode;
      break;
    case "geeksforgeeks":
      Icon = SiGeeksforgeeks;
      break;
    case "resume":
      Icon = IoIosDocument;
      break;
    default:
      break;
  }
  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>
        <Icon />
        {"     "} {type.toUpperCase()}
      </h3>
      <p className="p-container">{link}</p>

      <div className="p-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="outlined" sx={{ color: "white" }}>
            Visit
          </Button>
        </a>
      </div>
      {/* <div className="p-container">{dates}</div> */}
    </div>
  );
};

export default ProfileSubheading;
