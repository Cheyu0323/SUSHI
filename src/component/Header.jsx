import React from 'react'
import "../style/header.scss"
const Header = ({childRef, startOrder}) => {
    return (
        <header ref={childRef}>
            <div className="logo">
                <div>
                    CHEYU's
                </div>
                <div>SUSHI</div>
            </div>
            <div className="navBtn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
                <li onClick={startOrder}>MENU</li>
                <li>ABOUT AS</li>
                <li>CONTACT US</li>
            </nav>
        </header>
    )
}

export default Header
