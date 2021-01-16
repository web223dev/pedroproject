import React, { useEffect } from "react";
import "./Home.css";
import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import Header from "../../Components/Header/Header";
import NavItem from "../../Components/NavItem/NavItem";
function Home() {
  return (
    <div className="home-wrapper-container">
      <ScrollableSection name={"project1"}>
        <div className="home-container">
          <div className="header" style={{ zIndex: "2" }}>
            <Header />
          </div>
          <div className="left-nav">
            <div className="left-nav-items">
            <NavItem/><NavItem/><NavItem/><NavItem/><NavItem/><NavItem/><NavItem/><NavItem/><NavItem/><NavItem/>
            </div>
            <div className="left-nav-footer">
              <h1 className="mute-txt f1-5">Contact me IG</h1>
            </div>
          </div>
          <div className="projectsContent">
            <h1 className="test" style={{ zIndex: "3" }}>
              Content
            </h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
            <h1 style={{ zIndex: "1" }}>Content</h1>
          </div>
        </div>
      </ScrollableSection>
      {/* <ScrollableSection name={"project2"}>
        <div className="home-container2">
          <h1>Project2-Home</h1>
        </div>
      </ScrollableSection>
      <ScrollableSection name={"project3"}>
        <div className="home-container3">
          <h1>Project3-Home</h1>
        </div>
      </ScrollableSection>
     */}
    </div>
  );
}

export default Home;
