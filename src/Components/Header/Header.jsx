import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header-container-wrapper flex-col-end">
            <div className="header-container">
                <div className="f1-5 name">Pedro Damasceno</div>
                <div className="f1-5 initiative mute-txt">Initiative</div>
                <div className="f1-5 about mute-txt">About</div>
            </div>
        </div>
    )
}

export default Header
