import React from "react";
import "./NavItem.css";
function NavItem() {
  return (
    <div className="nav-item-container-wrapper flex-col pointer">
      <h2>Érik, garagiste</h2>
      <p className="1rem">
        Le garage a ouvert en mars 2018. J’ai réussi à me salarier en août. Les
        gens réparent eux-mêmes leur véhicule et je les accompagne. Ce n’est pas
        pas une activité très rentable
        Le garage a ouvert en mars 2018. J’ai réussi à me salarier en août. Les gens réparent eux-mêmes leur véhicule et je les accompagne. Ce n’est pas pas une activité très rentable
      </p>
      <h2 className="item-date">22.12.2020</h2>
    </div>
  );
}

export default NavItem;
