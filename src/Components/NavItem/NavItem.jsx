import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import "./NavItem.css";
function NavItem(props) {
  const [itemColor, setitemColor] = useState('black')
  useEffect(() => {
    if(props.currentUrl===`/${props.projectName}`)
    setitemColor('blue')
    else
    setitemColor('black')
    return () => {
    }
  }, [props.currentUrl])
  return (
    <ScrollableLink href={`/${props.projectName}`}>
      <div
        className="nav-item-container-wrapper flex-col pointer"
        style={{color:`${itemColor}`}}
      >
        <h2 className="f1-5">{props.projectName}</h2>
        <p className="f1-3">
          The garage opened in March 2018 . I managed to get paid in August.
          People repair their vehicles themselves and I accompany them. It is
          not...
        </p>
        <h2 className="item-date">22.12.2020</h2>
      </div>
    </ScrollableLink>
  );
}

export default withRouter(NavItem);
