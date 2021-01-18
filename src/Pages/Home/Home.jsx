import React, { useEffect, useState } from "react";
import "./Home.css";
// import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import Header from "../../Components/Header/Header";
import NavItem from "../../Components/NavItem/NavItem";
import Project from "../../Components/Project/Project";
function Home(props) {
  const [currentUrl, setcurrentUrl] = useState('/')
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    setTimeout(() => {
      listenScrollEvent()
    }, 500);
    return () => {
      // cleanup
    }
  }, [window.location.pathname])
  const listenScrollEvent=()=>{
    // console.log(window.location.pathname)

    setcurrentUrl((prevState)=>window.location.pathname)
  }
  return (
    <div className="home-wrapper-container">
        <div className="home-container">
          <div className="header" style={{ zIndex: "2" }}>
            <Header currentUrl={currentUrl}/>
          </div>
          <div className="left-nav">
            <div className="left-nav-items">
              <NavItem currentUrl={currentUrl} projectName={"Project1"}/>
              <NavItem currentUrl={currentUrl} projectName={"Project2"}/>
              <NavItem currentUrl={currentUrl} projectName={"Project3"}/>
              <NavItem currentUrl={currentUrl} projectName={"Project4"}/>
              <NavItem currentUrl={currentUrl} projectName={"Project5"}/>
            </div>
            <div className="left-nav-footer">
              <h1 className="mute-txt f1-5">Contact me IG</h1>
            </div>
          </div>
          <div className="projectsContent" >
            <Project currentUrl={currentUrl} urlName={"Project1"} projectName={"Project1"}/>
            <Project currentUrl={currentUrl} urlName={"Project2"} projectName={"Project2"}/>
            <Project currentUrl={currentUrl} urlName={"Project3"} projectName={"Project3"}/>
            <Project currentUrl={currentUrl} urlName={"Project4"} projectName={"Project4"}/>
            <Project currentUrl={currentUrl} urlName={"Project5"} projectName={"Project5"}/>
          </div>
        </div>
    </div>
  );
}

export default Home;
