import React from "react";
import "../css/About.css"
import Travel from "../images/Travel.png"

function About() {
    return (
        <div className="about--container">
            <h2>Travel With Children, Around The World</h2>
            <p>Last Updated 17/03/2022.</p>
            <p>Travel is our passion and we made travel with kids our lifestyle and our business. We can show you how. We decided to travel the world with our kids to expand their horizons and education, 6 + years of non-stop around the world family travel later, we run this world travel blog and resource.</p>
            <p>Our kids are teens now but we continue to travel and share the world through this site.</p>
            <img src={Travel} />
        </div>
        
    )
}

export default About