import React, { useEffect, useState } from "react";
import "./Project.css";
import sstatic from "./Assets/sstatic.PNG";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";

function Project(props) {
  const [itemColor, setitemColor] = useState("black");
  useEffect(() => {
    if (props.currentUrl === `/${props.projectName}`) setitemColor("blue");
    else setitemColor("black");
    return () => {
      // cleanup
    };
  }, [props.currentUrl]);
  const listenScrollEvent = () => {};
  return (
    <ScrollableSection name={props.urlName}>
      <div className="project-container-wrapper">
        <div className="project-container">
          <div className="project-container-headings">
            <div
              className="f1-5 flex-start project-heading"
              style={{ color: `${itemColor}` }}
            >
              {props.projectName}
            </div>
            <div className="f1-5 flex-end project-date mute-txt">
              22.12.2020
            </div>
          </div>
          <div className="project-container-content-left">
            <div className="project-container-content-left-img">
              <img
                style={{ width: "300px", height: "200px" }}
                src={sstatic}
                alt=""
              />
            </div>
            <div className="project-container-content-left-content">
              <p>
                <span className="fb">The garage opened in March 2018. </span>I
                managed to get paid in August. People repair their vehicles
                themselves and I accompany them. It is not a very profitable
                business, it will certainly be threatened at one point or
                another because we operate with an income-based pricing
                structure and the majority of people are on low prices. The bet
                that there are people with higher incomes to offset the others
                is not won. But for the year to come in any case we are quiet.
              </p>
              <p>
                <span className="fb">My career </span>
                has not always been linked to manual activities: I did a lot of
                environmental education, I was a technician in renewable
                energies ... I set up a lot of projects, worked to create
                institutional dialogue , I did animation in schools, in various
                associations. Pretty much everywhere. I have moved a lot. Then I
                got sick of it.
              </p>
              <p>
                <span className="fb">The garage opened in March 2018. </span>I
                managed to get paid in August. People repair their vehicles
                themselves and I accompany them. It is not a very profitable
                business, it will certainly be threatened at one point or
                another because we operate with an income-based pricing
                structure and the majority of people are on low prices. The bet
                that there are people with higher incomes to offset the others
                is not won. But for the year to come in any case we are quiet.
              </p>
              <p>
                <span className="fb">My career </span>
                has not always been linked to manual activities: I did a lot of
                environmental education, I was a technician in renewable
                energies ... I set up a lot of projects, worked to create
                institutional dialogue , I did animation in schools, in various
                associations. Pretty much everywhere. I have moved a lot. Then I
                got sick of it.
              </p>
            </div>
          </div>
          {/* <div className="project-container-content-right">
            <h2 className="f1">Company: Conduit</h2>
            <h2 className="f1">Managing Director: David Morales</h2>
            <h2 className="f1">Creative: Pedro Damasceno</h2>
          </div>
         */}
        </div>
      </div>
    </ScrollableSection>
  );
}

export default Project;
