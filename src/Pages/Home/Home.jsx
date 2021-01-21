import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import NavItem from "../../Components/NavItem/NavItem";
import Project from "../../Components/Project/Project";

import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'
import MobileNavItem from "../../Components/MobileNavItem/MobileNavItem";

const apiEndpoint = 'https://portfolio-pedro.cdn.prismic.io/api/v2'
const accessToken = 'MC5ZQWM0NWhNQUFDWUFyN1RG.77-9O--_ve-_ve-_ve-_ve-_ve-_vQ3vv73vv73vv73vv73vv71Y77-9Be-_vSEBMe-_vU_vv73vv73vv71-bu-_ve-_ve-_vQQ'
const client = Prismic.client(apiEndpoint, { accessToken })


function Home(props) {
  const [currentUrl, setcurrentUrl] = useState('/')
  const [contactIGLink, setcontactIGLink] = useState(null);

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
    // Fetching projects
    const fetchData = async () => {
      client.query(
        Prismic.Predicates.at('document.type', 'projects')
      ).then(function (res) {
        setDocData((prevState) => res.results)
      });
    }
    fetchData()

    // Fetching contact link
    const fetchContactLink = async () => {
      client.query(
        Prismic.Predicates.at('document.type', 'contactlink')
      ).then(function (res) {
        setcontactIGLink((prevState) => res.results[0].data)
      });
    }
    fetchContactLink()
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


      <div className="mobileNav">
        {
          
          doc ?
          doc.map((project, index) => {
            return (
              <MobileNavItem project={project.data} />
            )
          })
          :
          null
      
        }
      </div>

        <div className="left-nav">
          <div className="left-nav-items">
            {
              doc ?
                doc.map((project, index) => {
                  return (
                    <NavItem currentUrl={currentUrl} projectName={"Project1"} project={project.data} />
                  )
                })
                :
                null
            }
          </div>
          <div className="left-nav-footer bg-white">
            {
              contactIGLink ?
                <a className="bg-white" style={{flex:"1"}} href={contactIGLink.contactlink.url} target="_blank"><h1 className="pointer bg-white contactMe" style={{ color: "#8c8c8c"}}>Contact me</h1></a>
                :
                null
            }
            {
              contactIGLink ?
                <a className="bg-white flex-end" style={{flex:"1",paddingRight:"2.5rem"}} href={contactIGLink.contactlink.url} target="_blank"><h1 className="pointer bg-white instagram" style={{ color: "#8c8c8c"}}>IG</h1></a>
                :
                null
            }
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

