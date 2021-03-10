import React, { useEffect, useState } from 'react'
import "./AboutContent.css"
const AboutContent = (props) => {

    const [paragraph, setParagraph] = useState([]);


    useEffect(() => {
        var paragraphArr = props.aboutContent.aboutdescription;
        setParagraph(paragraphArr)
    }, [])


    return (
        <div >
            {
                paragraph.map(element => {
                    console.log(element);
                    return (
                        <p>{element.text}</p>
                    )
                })
            }

            <div className="links">
                <a href={props.aboutContent.link1.url} target={props.aboutContent.link1.target}>Contact</a>
                <a className="link2" href={props.aboutContent.link2.url} target={props.aboutContent.link2.target}>IG</a>
                <a className="link3" href={props.aboutContent.link3.url} target={props.aboutContent.link3.target}>Music</a>
            </div>
        </div>
    )
}

export default AboutContent
