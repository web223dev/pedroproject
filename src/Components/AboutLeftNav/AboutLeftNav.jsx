import React, { useEffect, useState } from "react";
import "./AboutLeftNav.css";
function AboutLeftNav(props) {
  const [projectDates, setprojectDates] = useState("");
  useEffect(() => {
    // Setting date
    var d = new Date(props.project.timestamp);
    setprojectDates((prevState) => d.getMonth() + 1 + "." + d.getFullYear());
    return () => {};
  }, []);
  return (
    <div className="about-nav-item-container-wrapper flex-col pointer">
      <h2 className="f1-5 about-item-heading">
        <span style={{ flex: "3" }}>{props.project.title[0].text}</span>
        <span style={{ flex: "1" }}>{props.project.projectdates}</span>
      </h2>
      <p className="about-item-para">
        The garage opened in March 2018 . I managed to get paid in August.
        People repair their vehicles themselves and I accompany them. It is
        not...
      </p>
      {/* <h2 className="item-date f1-5 fb">{props.project.projectdates}</h2> */}
    </div>
  );
}

export default AboutLeftNav;
