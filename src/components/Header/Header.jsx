import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import communityPeopleSvg from '../../assets/communityPeople.svg';
import communityPeopleJpg from '../../assets/communityPeople.jpg';
import { ReactComponent as Rocket2 } from '../../assets/rocket.svg';

const Header = () => {
    return (
        <header>
            <div className={`main-center-container ${styles.headerTop}`}>
                <img src={logo} alt="logo" />
                <button className="btn">Регистрация</button>
            </div>
            <div className={`main-center-container ${styles.headerBottom}`}>
                <div className={styles.titleBox}>
                    <Rocket2 className={`${styles.rocket}`} />
                    <h2>
                        Начните свой{' '}
                        <span className="orange-color"> профессиональный путь в IT </span>с{' '}
                        <span className="orange-color"> Boost Up </span> - Вашим ускорителем
                        развития!
                    </h2>
                </div>
                <div className={styles.subtitleBox}>
                    <p className="fw-6">
                        Вы окончили курсы или университет и хотите начать карьеру в IT?
                        <br />
                        BoostUp станет вашим надёжным партнёром на этом пути.
                    </p>
                </div>
            </div>
            <img
                className={`${styles.communityPeople} ${styles.communityPeopleMobile}`}
                src={communityPeopleJpg}
                alt="communityPeople"
            />
            <img
                className={`${styles.communityPeople} ${styles.communityPeopleDesktop}`}
                src={communityPeopleSvg}
                alt="communityPeople"
            />
        </header>
    );
};

export default Header;
