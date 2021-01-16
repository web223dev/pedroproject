import React, { useEffect } from "react";
import "./Home.css";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
function Home() {
  return (
    <div className="home-wrapper-container">
 
      <ScrollableSection name={"project1"}>
        <div className="home-container">
          <h1>Project1-Home</h1>
        </div>
      </ScrollableSection>
      <ScrollableSection name={"project2"}>
        <div className="home-container2">
          <h1>Project2-Home</h1>
        </div>
      </ScrollableSection>
      <ScrollableSection name={"project3"}>
        <div className="home-container3">
          <h1>Project3-Home</h1>
        </div>
      </ScrollableSection>
    </div>
  );
}

export default Home;
