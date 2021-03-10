import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import NavItem from "../../Components/NavItem/NavItem";
import Project from "../../Components/Project/Project";

import Prismic from '@prismicio/client'
import MobileNavItem from "../../Components/MobileNavItem/MobileNavItem";

const apiEndpoint = 'https://portfolio-pedro.cdn.prismic.io/api/v2'
const accessToken = 'MC5ZQWM0NWhNQUFDWUFyN1RG.77-9O--_ve-_ve-_ve-_ve-_ve-_vQ3vv73vv73vv73vv73vv71Y77-9Be-_vSEBMe-_vU_vv73vv73vv71-bu-_ve-_ve-_vQQ'
const client = Prismic.client(apiEndpoint, { accessToken }); 

function Home(props) {
  const [currentUrl, setcurrentUrl] = useState('/')
  const [contactIGLink, setcontactIGLink] = useState(null);

  useEffect(() => {
    window.matchMedia("(min-width:850px)")
    {
      window.addEventListener("scroll", listenScrollEvent);
    }

    return () => {
      // cleanup
    }
  }, [])
  useEffect(() => {
    window.matchMedia("(min-width:850px)")
    {
      listenScrollEvent()
    }

    return () => {
      // cleanup
    }
  }, [window.location.hash])

  // Fetching data from prismic
  const [doc, setDocData] = useState([]); 

  useEffect(() => {
    // Fetching projects
    const fetchData = async () => {
      await client.query(
        Prismic.Predicates.at('document.type', 'projects'),
        // Sort DocData in ascending order based on projectDate
        { orderings : '[my.projects.projectdates]' }
      ).then(function (res) {
        setDocData((prevState) => res.results);
      });
    }; 
    fetchData();

    // Fetching contact link
    const fetchContactLink = async () => {
      client.query(
        Prismic.Predicates.at('document.type', 'contactlink')
      ).then(function (res) {
        setcontactIGLink((prevState) => res.results[0].data)
      });
    };
    fetchContactLink();
  }, [])

  const listenScrollEvent = () => {
    const withoutHash = window.location.hash.replaceAll("#","")
    setcurrentUrl((prevState) => withoutHash.replaceAll("%20"," "))
  }

  return (
    <div className="home-wrapper-container">
      <div className="home-container">

        <div className="header" style={{ zIndex: "2" }}>
          <Header currentUrl={currentUrl} />
        </div>

      {/* Mobile Nav */}
      <div className="mobileNav">
        <div className="mobile-nav-items">
        {
          
          doc ?
          doc.map((project) => {
            return (
              <MobileNavItem project={project.data} key={project.id} />
            )
          })
          :
          null
      
        }
        </div>

        <div className="mobile-nav-footer bg-blue">
        {
              contactIGLink ?
                <a className="bg-white" style={{flex:"1"}} href='mailto:hi@pedrodamasceno.com' target="_blank"><h1 className="pointer bg-white" style={{ color: "#8c8c8c",fontSize:"16px"}}>Contact me</h1></a>
                :
                null
            }
            {
              contactIGLink ?
                <a className="bg-white flex-col-start" style={{flex:"1",alignItems:"flex-end"}} href='https://www.instagram.com/pedrose/' target="_blank"><h1 className="pointer bg-white" style={{ color: "#8c8c8c",fontSize:"16px"}}>IG</h1></a>
                :
                null
            }
        </div>
      </div>
      {/* Desktop Nav */}
        <div className="left-nav">
          <div className="left-nav-items">
            {
              doc ?
              doc.map((project) => {
                  return (
                    <NavItem currentUrl={currentUrl} projectName={"Project1"} project={project.data} key={project.id} />
                  )
                })
                :
                null
            }
          </div>
          <div className="left-nav-footer bg-white">
            {
              contactIGLink ?
                <a className="bg-white" style={{flex:"1"}} href='mailto:hi@pedrodamasceno.com' target="_blank"><h1 className="pointer bg-white contactMe" style={{ color: "#8c8c8c",fontSize:"16px"}}>Contact me</h1></a>
                :
                null
            }
            {
              contactIGLink ?
                <a className="bg-white flex-end" style={{flex:"1",paddingRight:"2.5rem"}} href='https://www.instagram.com/pedrose/' target="_blank"><h1 className="pointer bg-white instagram" style={{ color: "#8c8c8c",fontSize:"16px"}}>IG</h1></a>
                :
                null
            }
          </div>
        </div>
        <div className="projectsContent" >
          {
            doc ?
            doc.map((project) => {
                return (
                  <Project key={project.id} currentUrl={currentUrl}  project={project.data} />
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

