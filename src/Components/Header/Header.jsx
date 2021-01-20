import React, { useEffect, useState } from 'react'
import './Header.css'
import { goToTop } from 'react-update-url-on-scroll'

function Header(props) {
    const [nameColor, setnameColor] = useState('blue')
    useEffect(() => {
        // console.log(window.pageXOffset)
        if(props.currentUrl===`/`)
        setnameColor('blue')
        else
        setnameColor('black')
      return () => {
        // cleanup
      }
    }, [props.currentUrl])
    return (
        <div className="header-container-wrapper flex-col-end">
            <div className="header-container">
                <div className="name fb pointer" onClick={goToTop} style={{color:`${nameColor}`}}>Pedro Damasceno</div>
                <div className="initiative">Initiative</div>
                <div className="about">About</div>
            </div>
        </div>
    )
}

export default Header
