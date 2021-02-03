import * as Scroll from "react-scroll";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { goToTop } from "react-update-url-on-scroll";
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll";
var scroll = Scroll.animateScroll;

function Header(props) {
  const [nameColor, setnameColor] = useState("blue");
  const [activeState, setactiveState] = useState(false);

  useEffect(() => {
    // console.log(window.pageXOffset)
    // if (props.currentUrl === `/`) setnameColor("blue");
    // else setnameColor("black");
    return () => {
      // cleanup
    };
  }, [props.currentUrl]);
  const handleSetActive = () =>{
    setactiveState(true)
    setnameColor("blue");
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
        >
          <div
            className="name fb pointer"
            style={{ color: `${nameColor}` }}
            onClickk={() => {
              scroll.scrollToTop();
            }}
          >
            Pedro Damasceno
          </div>
        </Link>
        {/* <div className="name fb pointer" onClick={goToTop} style={{color:`${nameColor}`}}>Pedro Damasceno</div> */}
        <div className="initiative">Initiative</div>
        <Link to="/about">
          <div className="about">About</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
