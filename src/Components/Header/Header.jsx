import * as Scroll from "react-scroll";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { goToTop } from "react-update-url-on-scroll";
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll";
import { Link as RouteLink}  from "react-router-dom";
var scroll = Scroll.animateScroll;

function Header(props) {
  const [nameColor, setnameColor] = useState("blue");
  const [activeState, setactiveState] = useState(false);

  useEffect(() => {
    if(window.scrollY===0)
    setnameColor("black");
    else
    setnameColor("blue");
    // console.log(window.pageXOffset)
    // if (props.currentUrl === `/`) setnameColor("blue");
    // else setnameColor("black");
    return () => {
      // cleanup
    };
  }, [window.scrollY]);
  const handleSetActive = () =>{
    setactiveState(true)
    setnameColor("blue");
    // goToTop()
  }
  const handleSetInactive = () =>{
    setactiveState(false)
    setnameColor("black");
  }
  return (
    <div className="header-container-wrapper flex-col-end" id="">
      <div className="header-container">
        <Link
          to=""
          onSetActive={handleSetActive}
          onSetInactive={handleSetInactive}
          onClick={()=>{
            goToTop();
          }}
        >
          <div
            className="name fb pointer"
            style={{ color: `${nameColor}` }}
          >
            Pedro Damasceno
          </div>
        </Link>
        {/* <div className="name fb pointer" onClick={goToTop} style={{color:`${nameColor}`}}>Pedro Damasceno</div> */}
        <div className="initiative">Initiative</div>
        <RouteLink to="/about">
          <div className="about">About</div>
        </RouteLink>
      </div>
    </div>
  );
}

export default Header;
