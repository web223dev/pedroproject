import React, { useEffect, useState } from "react";
import "./AboutLeftNav.css";
import {withRouter} from 'react-router-dom'
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
      if(props.project.navbardescription[0].text[i]===undefined)
      break;
      
      localnavdes+=props.project.navbardescription[0].text[i]
    }
    setnavDes((prevState)=>`${localnavdes}...`)
    return () => {};
  }, []);
  const navigate = (projectRoute) => {
      // props.history.push(`/`)
      window.location.href = `/#${projectRoute}`;
  }
  return (
    <div className="about-nav-item-container-wrapper flex-col pointer" onClick={(e)=>{navigate(props.project.title[0].text)}}>
      <h2 className="f1-5 about-item-heading">
        <span style={{ flex: "5" }}>{props.project.title[0].text}</span>
        <span className="item-date flex-end"style={{ flex: "1" }}>{projectDates}</span>
      </h2>
      <p className="about-item-para">
      {navDes}
      </p>
    </div>
  );
}

export default withRouter(AboutLeftNav);
