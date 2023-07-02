import React from "react";
import internship from '../assets/internship.png'

const AboutInternship = () => {
    return (
        <>
            <div className="center-container">
                <h2 className="text-left orange-color">  Стажировка в BoostUp -   </h2>
                <div className="center-wrapper">
                    <img src={internship} alt="" />
                    <div className="text-right">
                        <div className="wrapper">
                            <p>это не только ценный опыт, но и шанс стать частью нашей динамичной и инновационной команды. Это ваш шанс прокачать
                                свои навыки, узнать о тонкостях работы в IT изнутри и сделать первый важный шаг в вашей карьере.</p>
                            <h2 className=" fs-25">Присоединяйтесь к нам и ускорьте
                                свое развитие в IT с BoostUp! </h2>
                            <div className="pt-25">
                                <button className="btn ">Регистрация</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutInternship;