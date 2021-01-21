import React, { useEffect, useState } from "react";
import "./MobileProject.css";
// import sstatic from "./Assets/sstatic.PNG";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'

const apiEndpoint = "https://portfolio-pedro.cdn.prismic.io/api/v2";
const accessToken =
  "MC5ZQWM0NWhNQUFDWUFyN1RG.77-9O--_ve-_ve-_ve-_ve-_ve-_vQ3vv73vv73vv73vv73vv71Y77-9Be-_vSEBMe-_vU_vv73vv73vv71-bu-_ve-_ve-_vQQ";
const client = Prismic.client(apiEndpoint, { accessToken });




function MobileProject(props) {
  const [itemColor, setitemColor] = useState("black");
  const [projectDates, setprojectDates] = useState("");


  
  useEffect(() => {
        // Setting date
        var d = new Date(props.project.timestamp);
        setprojectDates((prevState)=>(d.getMonth()+1) + '.' + d.getFullYear())
    if (props.currentUrl === `/${props.project.title[0].text}`) setitemColor("blue");
    else setitemColor("black");

    return () => {
    };
  }, [props.currentUrl]);
  return (
      <div className="mobile-project-container-wrapper">
        <div className="mobile-project-container">
          <div className="mobile-project-container-headings f1-5">
            <div
              className="f1-5 flex-start mobile-project-heading fb"
              style={{ color: `${itemColor}` }}
            >
              {props.project.title[0].text}
            </div>
            <div className="f1-5 flex-end mobile-project-date">
              {projectDates}
            </div>
          </div>
          <div className="mobile-project-container-content-div">
            <div className="mobile-project-container-content-left">
              <div className="mobile-project-container-content-left-img">
                <ImageCarousel projectId={props.project.title[0].text} projectimages={props.project.projectimages}/>
              </div>
              <div className="mobile-project-container-content-left-content">
                {
                  props.project.description.map((para,index)=>{
                    return(
                      <p key={index} className={para.type}>{para.text}</p>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default MobileProject;
