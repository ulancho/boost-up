import React from "react";
import logo from "../assets/logoWhiteText.svg";
import instagramIcon from "../assets/instagramIcon.png";
import messageIcon from "../assets/messageIcon.png";
import whatsappIcon from "../assets/whatsappIcon.png";
import telegramIcon from "../assets/telegramIcon.png";

const Footer = () => {
    return (
        <>
            <footer>
                <img className="logo" src={logo} alt="logo" />
                <div>
                    <ul>
                        <li><a className="white-font fw-7" href="#">Регистрация</a></li>
                        <li><a className="white-font fw-7" href="#">Детям</a></li>
                        <li><a className="white-font fw-7" href="#">Взрослым</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a className="white-font fw-7" href="#">0555 088 488</a></li>
                        <li><p className="white-font fw-7">БЦ Maximum <br />
                            Турусбекова, 109/1</p></li>
                    </ul>
                </div>
                <div className="pt-20">
                    <a href="https://www.instagram.com/booster.school_/" className="icon-link" target="_blank">
                        <img src={instagramIcon} alt="" />
                    </a>
                    <a href="#" className="icon-link">
                        <img src={messageIcon} alt="" />
                    </a>
                    <a href="#" className="icon-link">
                        <img src={whatsappIcon} alt="" />
                    </a>
                    <a href="#" className="icon-link">
                        <img src={telegramIcon} alt="" />
                    </a>
                </div>
                <div>
                    <p className="white-font fw-7">©2023 Booster  UP <br />
                        IT school in Bishkek</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;