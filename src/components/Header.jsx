import React from "react";
import styles from "../styles/Header.module.css";
import logo from '../assets/logo.svg';
import communityPeople from '../assets/communityPeople.png';
import rocket from '../assets/rocket.png';


const Header = () => {
    return (
        <>
            <header>
                <div className={styles.headerTop}>
                    <img src={logo} alt="logo" />
                    <div>
                    <button className="btn">Регистрация</button>
                    </div>
                </div>

                <div className={styles.headerBottom}>
                    <div className="center-container">
                        <div>
                            <img className={`${styles.stickers} ${styles.rocket}`} src={rocket} alt="rocket" />
                            <h2>Начните свой <span className="orange-color"> профессиональный путь в IT </span>
                                с <span className="orange-color"> Boost Up </span>  - Вашим ускорителем развития!
                            </h2>
                        </div>
                        <div>
                            <p className="fw-6">
                                Вы окончили курсы или университет и хотите начать карьеру в IT?<br />
                                BoostUp станет вашим надёжным партнёром на этом пути.
                            </p>
                        </div>
                    </div>
                    <img className={styles.communityPeople} src={communityPeople} alt="logo" />
                </div>
            </header>
        </>
    )
}

export default Header;