import React from 'react';
import programmers from '../assets/programmers.png';
import target from '../assets/target.png';
import DirectionsCard from './DirectionsCard';

const Directions = () => {
    return (
        <div className="center-container">
            <img className="target-sticker" src={target} alt="sticker" />
            <h2 className="text-left"> Мы рады представить нашу </h2>
            <div className="text-right">
                <div className="wrapper">
                    <h2 className="orange-color fs-36">стажировочную программу</h2>
                    <p>
                        специально разработанную для начинающих программистов Java, Python, SQL,
                        FrontEnd, дизайнеров UX/UI и проектных менеджеров.
                    </p>
                </div>
            </div>
            <div className="center-wrapper">
                <DirectionsCard />
            </div>
        </div>
    );
};

export default Directions;
