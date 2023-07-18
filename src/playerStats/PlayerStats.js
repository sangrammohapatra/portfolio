import React from "react";
import "../styles/playerStats.css";
import data from "../assets/details.json";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>{data.body.name}</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>{data.body.designation}</h2>
    </div>
  );
};

export default PlayerStats;
