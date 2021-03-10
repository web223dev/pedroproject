import React from 'react';
import { RichText } from "prismic-reactjs";
import "./AboutContent.css"
const AboutContent = (props) => {
    return (
        <div >
            {RichText.render(props.aboutContent.aboutdescription)}
            <div className="links">
                <a href={props.aboutContent.link1.url} target={props.aboutContent.link1.target}>Contact</a>
                <a className="link2" href={props.aboutContent.link2.url} target={props.aboutContent.link2.target}>IG</a>
                <a className="link3" href={props.aboutContent.link3.url} target={props.aboutContent.link3.target}>Music</a>
            </div>
        </div>
    )
}

export default AboutContent
