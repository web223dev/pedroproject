import React from "react";
import "./Project.css";
function Project() {
  return (
    <div className="project-container-wrapper">
      <div className="project-container">
        <div className="project-container-headings">
            <div className="f1-5 flex-start project-heading">Érik, garagiste</div>
            <div className="f1-5 flex-end project-date mute-txt">22.12.2020</div>
        </div>
        <div className="project-container-content"></div>
      </div>
    </div>
  );
}

export default Project;
