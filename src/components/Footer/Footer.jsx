import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logoWhiteText.svg';
import instagramIcon from '../../assets/instagramIcon.svg';
import messageIcon from '../../assets/messageIcon.svg';
import whatsappIcon from '../../assets/whatsappIcon.svg';
import telegramIcon from '../../assets/telegramIcon.svg';

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`main-center-container ${styles.footerContainer}`}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <a className="white-font fw-7" href="#">
                                Регистрация
                            </a>
                        </li>
                        <li>
                            <a className="white-font fw-7" href="#">
                                Детям
                            </a>
                        </li>
                        <li>
                            <a className="white-font fw-7" href="#">
                                Взрослым
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.address}>
                    <ul>
                        <li>
                            <a className="white-font fw-7" href="#">
                                0555 088 488
                            </a>
                        </li>
                        <li>
                            <p className="white-font fw-7">
                                БЦ Maximum <br />
                                Турусбекова, 109/1
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.socialMediaWrapper}>
                    <a href="#" target="_blank">
                        <img src={instagramIcon} alt="" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={messageIcon} alt="" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={whatsappIcon} alt="" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={telegramIcon} alt="" />
                    </a>
                </div>
                <div className={styles.copyRight}>
                    <p className="white-font fw-7 ">
                        ©2023 Booster  UP <br />
                        IT school in Bishkek
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
