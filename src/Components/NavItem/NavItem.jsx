import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import "./NavItem.css";
function NavItem(props) {
  const [itemColor, setitemColor] = useState("lightgrey");
  const [navDes, setnavDes] = useState("");
  const [projectDates, setprojectDates] = useState("");

  useEffect(() => {
    // Setting date
    var d = new Date(props.project.timestamp);
    setprojectDates((prevState)=>(d.getMonth()+1) + '.' + d.getFullYear())

    var localnavdes=""
    for(let i =0 ;i<110;i++)
    {
      localnavdes+=props.project.navbardescription[0].text[i]
    }
    setnavDes((prevState)=>`${localnavdes}...`)
    if (props.currentUrl === `/${props.project.title[0].text}`)
      setitemColor("blue");
    else setitemColor("lightgrey");
    return () => {};
  }, [props.currentUrl]);
  
  return (
    <ScrollableLink href={`/${props.project.title[0].text}`}>
      <div
        className="nav-item-container-wrapper flex-col pointer"
        style={{ color: `${itemColor}` }}
      >
        <h2 className="f1-5 item-heading">
          <span style={{ flex: "3" }}>{props.project.title[0].text}</span>
          <span style={{ flex: "1" }}>{projectDates}</span>
        </h2>
        <p className="item-para">
          {navDes}
        </p>
        {/* <h2 className="item-date f1-5 fb">{props.project.projectdates}</h2> */}
      </div>
    </ScrollableLink>
  );
}

export default withRouter(NavItem);
