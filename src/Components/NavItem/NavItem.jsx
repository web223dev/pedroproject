import React from "react";
import { withRouter } from "react-router-dom";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import "./NavItem.css";
function NavItem(props) {
  console.log(`/${props.projectName}`)
  return (
    <ScrollableLink href={`/${props.projectName}`}>
      <div
        className="nav-item-container-wrapper flex-col pointer"
        onClick={() => {
          console.log(props);
        }}
      >
        <h2>{props.projectName}</h2>
        <p className="1rem">
          Le garage a ouvert en mars 2018. J’ai réussi à me salarier en août.
          Les gens réparent eux-mêmes leur véhicule et je les accompagne. Ce
          n’est pas pas une activité très rentable Le garage a ouvert en mars
          2018. J’ai réussi à me salarier en août. Les gens réparent eux-mêmes
          leur véhicule et je les accompagne. Ce n’est pas pas une activité très
          rentable
        </p>
        <h2 className="item-date">22.12.2020</h2>
      </div>
    </ScrollableLink>
  );
}

export default withRouter(NavItem);
