import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./MobileNavItem.css";

const MobileNavItem = (props) => {
    const [projectDates, setprojectDates] = useState("");
    const [navDes, setnavDes] = useState("");
  
    useEffect(() => {
      // Setting date
      var d = new Date(props.project.timestamp);
      setprojectDates(() => d.getMonth() + 1 + "." + d.getFullYear());
      var localnavdes=""
      for(let i =0 ;i<120;i++)
      {
        if(props.project.navbardescription[0].text[i]===undefined)
          break;
          
          localnavdes+=props.project.navbardescription[0].text[i]
      }
      setnavDes(()=>`${localnavdes}...`)
      return () => {};
    }, []);
    const handleRedirection = (route) =>{
      props.history.push(`/projects/${route}`)
    }    
    return (
        <div className="mobile-nav-item-container-wrapper flex-col pointer" onClick={(e)=>{handleRedirection(props.project.title[0].text)}}>
        <h2 className="f1-5 mobile-item-heading">
          <span style={{ flex: "5" }}>{props.project.title[0].text}</span>
          <span style={{ flex: "1" }} className="mobile-item-date flex-end">{projectDates}</span>
        </h2>
        <p className="mobile-item-para">
        {navDes}
        </p>
        {/* <h2 className="item-date f1-5 fb">{props.project.projectdates}</h2> */}
      </div>
    );
}

export default withRouter(MobileNavItem)
