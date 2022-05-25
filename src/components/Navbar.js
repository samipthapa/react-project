import React from "react"
import Logo from "../images/Logo.png"

function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} />
            <p>my travel blog.</p>
        </div>
    )
}

export default Navbar