import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import './About.css'
import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'
import AboutLeftNav from '../../Components/AboutLeftNav/AboutLeftNav'

const apiEndpoint = 'https://portfolio-pedro.cdn.prismic.io/api/v2'
const accessToken = 'MC5ZQWM0NWhNQUFDWUFyN1RG.77-9O--_ve-_ve-_ve-_ve-_ve-_vQ3vv73vv73vv73vv73vv71Y77-9Be-_vSEBMe-_vU_vv73vv73vv71-bu-_ve-_ve-_vQQ'
const client = Prismic.client(apiEndpoint, { accessToken })


function About() {
    const [currentUrl, setcurrentUrl] = useState('/about')

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

    return (
        <div className="about-container-wrapper">
            <div className="about-container">
                <div className="about-header">
                    <Header currentUrl={currentUrl} />
                </div>
                <div className="about-left-nav">
                    {
                        doc ?
                            doc.map((project, index) => {
                                return (
                                    <AboutLeftNav currentUrl={currentUrl} projectName={"Project1"} project={project.data} />
                                )
                            })
                            :
                            null
                    }
                    <h1 className="f1-5" style={{ color: "#8c8c8c" }}>Contact me IG</h1>
                </div>
                <div className="about-content"></div>
            </div>
        </div>
    )
}

export default About
