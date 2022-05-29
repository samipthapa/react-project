import React from "react"
import Logo from "../images/Logo.png"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} />
            <p>my travel blog.</p>
            <ul className="nav--links">
                <li><Link to="/" className="routes">Home</Link></li>
                <li><Link to="/about" className="routes">About</Link></li>
                <li><Link to="/login" className="routes">Login</Link></li>
            </ul>       
        </div>
    )
}

export default Navbar