import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import EducationSubheading from "./EducationSubheading";
import subheadingsData from "./subheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";
import ExperienceSubheading from "./ExperienceSubheading";
import ProfileSubheading from "./ProfileSubheading";

export default class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };

  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    });
  };

  render() {
    const { activeMenuItem, activeSubheading } = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "EXPERIENCE", "MY PROFILES"];
    const activeMenuTitle = menuItems[activeMenuItem - 1];
    const activeMenuIcon =
      activeMenuTitle === "PERSONAL"
        ? personalIcon
        : activeMenuTitle === "EDUCATION"
        ? educationIcon
        : careerIcon;

    const subheadings = subheadingsData[activeMenuItem];

    return (
      <>
        <div className="menu">
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
        </div>
        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
            <h3>{activeMenuTitle}</h3>
          </div>
          {subheadings.map((subheading, index) => {
            switch (activeMenuTitle) {
              case "PERSONAL":
                return (
                  <AboutSubheading
                    key={index}
                    title={subheading.title}
                    content={subheading.content}
                    active={activeSubheading === index + 1}
                    onClick={() => this.handleSubheadingClick(index + 1)}
                    menuItem={activeMenuItem}
                  />
                );
              case "EXPERIENCE":
                return (
                  <ExperienceSubheading
                    key={index}
                    title={subheading.role}
                    content={`${subheading.companyName}, ${subheading.location}`}
                    dates={`${subheading.startDate} - ${subheading.endDate}`}
                    summary={subheading.content}
                    skills={subheading.skills}
                    active={activeSubheading === index + 1}
                    onClick={() => this.handleSubheadingClick(index + 1)}
                    menuItem={activeMenuItem}
                  />
                );
              case "EDUCATION":
                return (
                  <EducationSubheading
                    key={index}
                    title={subheading.degree}
                    content={`${subheading.instituteName}, ${subheading.location}`}
                    dates={`${subheading.startDate} - ${subheading.endDate}`}
                    grade={subheading.grade}
                    active={activeSubheading === index + 1}
                    onClick={() => this.handleSubheadingClick(index + 1)}
                    menuItem={activeMenuItem}
                  />
                );
              case "MY PROFILES":
                return (
                  <ProfileSubheading
                    key={index}
                    type={subheading.type}
                    link={subheading.link}
                    active={activeSubheading === index + 1}
                    onClick={() => this.handleSubheadingClick(index + 1)}
                    menuItem={activeMenuItem}
                  />
                );
              default:
                return <></>;
            }
          })}
        </div>
      </>
    );
  }
}
