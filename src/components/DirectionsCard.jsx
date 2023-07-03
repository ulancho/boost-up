import React from "react";
import { directionsData } from "../constants/directionsData";





const DirectionsCard = () => {
    return (
        <>
        {directionsData.map((data) => (
            <div className="directions-card">
                <img src={data.img} alt="" />
                <div className="direction-text-container">
                     <p className="title">{data.title}</p>
                <p className="subtitle">{data.desc}</p>
                </div>
               
            </div>
        ))}
            
        </>
    )
}

export default DirectionsCard;
