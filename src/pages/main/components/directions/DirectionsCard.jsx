import React from 'react';
import { directionsData } from '../../../../constants/directionsData';
import styles from './DirectionsCard.module.css';

const DirectionsCard = () => {
    return (
        <>
            {directionsData.map((data) => (
                <div className={styles.directionsCard}>
                    <img src={data.img} alt="" />
                    <div className={styles.directionTextContainer}>
                        <p className={styles.title}>{data.title}</p>
                        <p className={styles.subtitle}>{data.desc}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DirectionsCard;
