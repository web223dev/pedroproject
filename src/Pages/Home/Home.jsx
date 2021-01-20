import React, { useEffect, useState } from "react";
import "./Home.css";
// import ScrollableSection, { ScrollableLink } from "react-update-url-on-scroll";
import Header from "../../Components/Header/Header";
import NavItem from "../../Components/NavItem/NavItem";
import Project from "../../Components/Project/Project";

import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'

// const apiEndpoint = 'https://aashirtest2.cdn.prismic.io/api/v2'
// const accessToken = 'MC5ZQWJuUHhNQUFDY0FyajZ2.A--_ve-_ve-_vT_vv70vTO-_ve-_ve-_vWhT77-9JX7vv73vv73vv70g77-977-977-9VV1cTU_vv73vv71FPw' // This is where you would add your access token for a Private repository
const apiEndpoint = 'https://portfolio-pedro.cdn.prismic.io/api/v2'  
const accessToken = 'MC5ZQWM0NWhNQUFDWUFyN1RG.77-9O--_ve-_ve-_ve-_ve-_ve-_vQ3vv73vv73vv73vv73vv71Y77-9Be-_vSEBMe-_vU_vv73vv73vv71-bu-_ve-_ve-_vQQ'
const client = Prismic.client(apiEndpoint, { accessToken })


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

  // Fetching data from prismic
  const [doc, setDocData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      client.query('').then(res => {
        setDocData((prevState) => res.results)
      })
    }
    fetchData()
  }, [])

  const listenScrollEvent = () => {
    // console.log(window.location.pathname)

    setcurrentUrl((prevState) => window.location.pathname)
  }
  return (
    <div className="home-wrapper-container">
      <div className="home-container">
        <div className="header" style={{ zIndex: "2" }}>
          <Header currentUrl={currentUrl} />
        </div>
        <div className="left-nav">
          <div className="left-nav-items">
            {
              doc ?
                doc.map((project, index) => {
                  return (
                    <NavItem currentUrl={currentUrl} projectName={"Project1"} project={project.data}/>
                  )
                })
                :
                null
            } 
          </div>
          <div className="left-nav-footer">
            <h1 className="f1-5" style={{color:"#8c8c8c"}}>Contact me IG</h1>
          </div>
        </div>
        <div className="projectsContent" >
          {
            doc ?
              doc.map((project, index) => {
                return (
                  <Project key={index} currentUrl={currentUrl} urlName={"Project1"} projectName={"Project1"} project={project.data} />
                )
              })
              :
              null
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
