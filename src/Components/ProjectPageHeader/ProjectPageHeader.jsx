import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './ProjectPageHeader.css'
function ProjectPageHeader(props) {
    return (
        <div className="projectpage-header-container-wrapper flex-col-end">
            <div className="projectpage-header-container">
                <div className="projectpage-name fb pointer" onClick={() => { props.history.push('/') }}><i className="f1-3 fas fa-arrow-left"></i> Pedro Damasceno</div>
                {/* <div className="projectpage-initiative">Initiative</div> */}
                <Link to="/about">
                    <div className="projectpage-about">About</div>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(ProjectPageHeader)
