import React, { useEffect, useState, useRef } from "react";
import {withRouter } from "react-router-dom";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import "./NavItem.css";
import {Link} from 'react-scroll'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function
function NavItem(props) {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  const [itemColor, setitemColor] = useState("black");
  const [navDes, setnavDes] = useState("");
  const [projectDates, setprojectDates] = useState("");
  const [activeState, setactiveState] = useState(false);
  
  useEffect(() => {
    // Setting date
    var d = new Date(props.project.timestamp);
    setprojectDates((prevState)=>(d.getMonth()+1) + '.' + d.getFullYear())

    var localnavdes=""
    for(let i =0 ;i<120;i++)
    {
      if(props.project.navbardescription[0].text[i]===undefined)
      break;
      
      localnavdes+=props.project.navbardescription[0].text[i]
    }
    setnavDes((prevState)=>`${localnavdes}...`)
    // if (props.currentUrl === `${props.project.title[0].text}`)
      // setitemColor("blue");
    // else setitemColor("black");
    return () => {};
  }, [props.currentUrl]);
  const handleSetActive = () =>{
    setactiveState(true)
    setitemColor("blue");
  }
  const handleSetInactive = () =>{
    setactiveState(false)
    setitemColor("black");
  }
  return (
    <Link to={`${props.project.title[0].text}`} smooth={true} offset={-90} hashSpy={true} spy={true} activeClass="active"
    onSetActive={handleSetActive}
    onSetInactive={handleSetInactive}>
      <div
        className="nav-item-container-wrapper flex-col pointer"
        style={{ color: `${itemColor}` }}
      >
        <h2 className="f1-5 item-heading">
          <span style={{ flex: "4"}}>{props.project.title[0].text}</span>
          <span className="item-date flex-end" style={{ flex: "1"}}>{projectDates}</span>
        </h2>
        <p className="item-para">
          {navDes}
        </p>
      </div>
      </Link>
  );
}

export default withRouter(NavItem);
