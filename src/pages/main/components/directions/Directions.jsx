import React from 'react';
import target from '../../../../assets/target.svg';
import DirectionsCard from './DirectionsCard';
import styles from './Directions.module.css';

const Directions = () => {
    return (
        <div className={`main-center-container ${styles.direction}`}>
            <img className={styles.targetSticker} src={target} alt="sticker" />
            <h2 className="text-left"> Мы рады представить нашу </h2>
            <div className="text-right">
                <div className="wrapper">
                    <h2 className="orange-color fs-36">стажировочную программу</h2>
                    <p className={styles.special}>
                        специально разработанную для начинающих программистов Java, Python, SQL,
                        FrontEnd, дизайнеров UX/UI и проектных менеджеров.
                    </p>
                </div>
            </div>
            <div className={styles.directionCardContainer}>
                <DirectionsCard />
            </div>
        </div>
    );
};

export default Directions;
