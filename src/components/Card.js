import React from "react"
import Location from "../images/Location.png"

function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.imageUrl} />
            <div className="info">
                <img className="pin" src={Location} />
                <p className="location">{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h3 className="title">{props.title}</h3>
                <p className="duration">{`${props.startDate} - ${props.endDate}`}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>        
    )
}

export default Card