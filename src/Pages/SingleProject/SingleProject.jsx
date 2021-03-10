import React, { useEffect, useState } from 'react'
import ProjectPageHeader from '../../Components/ProjectPageHeader/ProjectPageHeader'
import './SingleProject.css'
// import ProjectPageHeader from "../../Components/ProjectPageHeader/ProjectPageHeader"
import Prismic from '@prismicio/client'
import MobileProject from "../../Components/MobileProject/MobileProject"

const apiEndpoint = 'https://portfolio-pedro.cdn.prismic.io/api/v2'
const accessToken = 'MC5ZQWM0NWhNQUFDWUFyN1RG.77-9O--_ve-_ve-_ve-_ve-_ve-_vQ3vv73vv73vv73vv73vv71Y77-9Be-_vSEBMe-_vU_vv73vv73vv71-bu-_ve-_ve-_vQQ'
const client = Prismic.client(apiEndpoint, { accessToken })

function SingleProject(props) {
    // Fetching data from prismic
    const [doc, setDocData] = useState(null)
    useEffect(() => {
        const selectedProject = props.match.params.uid
        // Fetching projects
        const fetchData = async () => {
            client.query(
                Prismic.Predicates.at('document.type', 'projects')
            ).then(function (res) {
                res.results.forEach(project => {
                    if(project.data.title[0].text.toLowerCase()===selectedProject.toLowerCase())       
                    {
                        setDocData((prevState) => project)
                    }             
                });
            });
        }
        fetchData()

    }, [])

    return (
        <div className="singleproject-page-wrappper">
            <div className="singleproject-header">
                <ProjectPageHeader />
            </div>
            <div className="singleproject-Content">
                {
                    doc && <MobileProject project={doc.data} />
                }
            </div>

        </div>
    )
}

export default SingleProject
