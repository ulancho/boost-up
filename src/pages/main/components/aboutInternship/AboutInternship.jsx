import React from 'react';
import internshipDesktop from '../../../../assets/internship.svg';
import internshipMobile from '../../../../assets/internship.png';
import styles from './AboutInternshipt.module.css';

const AboutInternship = () => {
    return (
        <div className={`main-center-container ${styles.aboutInternship}`}>
            <h2 className="text-left orange-color"> Стажировка в BoostUp - </h2>
            <div className="center-wrapper">
                <div className="img-container">
                    <img
                        className={styles.internshipDesktop}
                        src={internshipDesktop}
                        alt="стажировка"
                    />
                    <img
                        className={styles.internshipMobile}
                        src={internshipMobile}
                        alt="стажировка"
                    />
                </div>
                <div className="text-right">
                    <div className="wrapper">
                        <p className={styles.text}>
                            это не только ценный опыт, но и шанс стать частью нашей динамичной и
                            инновационной команды. Это ваш шанс прокачать свои навыки, узнать о
                            тонкостях работы в IT изнутри и сделать первый важный шаг в вашей
                            карьере.
                        </p>
                        <h2 className={`fs-25 fw-5 ${styles.subtitle}`}>
                            Присоединяйтесь к нам и ускорьте свое развитие в IT с BoostUp!{' '}
                        </h2>
                        <div className="pt-25">
                            <button className="btn ">Регистрация</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInternship;
