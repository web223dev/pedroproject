import React, { useEffect, useState } from "react";
import "./AboutLeftNav.css";
function AboutLeftNav(props) {
  const [projectDates, setprojectDates] = useState("");
  const [navDes, setnavDes] = useState("");

  useEffect(() => {
    // Setting date
    var d = new Date(props.project.timestamp);
    setprojectDates((prevState) => d.getMonth() + 1 + "." + d.getFullYear());
    var localnavdes=""
    for(let i =0 ;i<110;i++)
    {
      localnavdes+=props.project.navbardescription[0].text[i]
    }
    setnavDes((prevState)=>`${localnavdes}...`)
    return () => {};
  }, []);
  return (
    <div className="about-nav-item-container-wrapper flex-col pointer">
      <h2 className="f1-5 about-item-heading">
        <span style={{ flex: "5" }}>{props.project.title[0].text}</span>
        <span style={{ flex: "1" }}>{projectDates}</span>
      </h2>
      <p className="about-item-para">
      {navDes}
      </p>
      {/* <h2 className="item-date f1-5 fb">{props.project.projectdates}</h2> */}
    </div>
  );
}

export default AboutLeftNav;
