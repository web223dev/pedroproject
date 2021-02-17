import * as Scroll from "react-scroll";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { goToTop } from "react-update-url-on-scroll";
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll";
import { Link as RouteLink, withRouter}  from "react-router-dom";
var scroll = Scroll.animateScroll;

function Header(props) {
  // for chaning name color 
  const mediaMatch = window.matchMedia('(max-width: 850px)');
  const [nameColor, setnameColor] = useState("blue");

  const [activeState, setactiveState] = useState(false);

  useEffect(() => {
    if(window.scrollY===0)
    setnameColor("blue");
    else
    setnameColor("black");
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
            onClick={() => {
              props.history.push("/");
            }}
          >
            {
              props.aboutPageFlag && mediaMatch.matches?
              <span style={{color:"#8c8c8c", fontWeight:"400"}}>
              <i className="f1-3 fas fa-arrow-left"></i> Pedro Damasceno
              </span>
              :
              props.aboutPageFlag && !mediaMatch.matches ?
              <span style={{color:"black", fontWeight:"400"}}>
              <i className="f1-3 fas fa-arrow-left"></i> Pedro Damasceno
              </span>
              :
              <span>
              Pedro Damasceno
              </span>
            }
          </div>
        </Link>
        {
          props.aboutPageFlag ?
          null
          :
          <div className="initiative">Initiative</div>

        }
        <RouteLink to="/about">
          <div className="about">About</div>
        </RouteLink>
      </div>
    </div>
  );
}

export default withRouter(Header);
