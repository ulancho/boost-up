import React from "react";
import programmers from '../assets/programmers.png'


const DirectionsCard = () => {
    return (
        <>
            <div className="directions-card">
                <img src={programmers} alt="" />
                <p className="title">Программисты</p>
                <p className="subtitle">Java, Python, SQL, FrontEnd - у нас есть проекты, которые ждут вашего вклада. Вы получите возможность погрузиться в реальные задачи, применить и углубить свои знания, работая рука об руку с опытными менторами.</p>
            </div>
        </>
    )
}

export default DirectionsCard;