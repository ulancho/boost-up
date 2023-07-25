import React from 'react';
import styles from './RegistrationPage.module.css';

const FirstLoginPage = () => {
    return (
        <div className={styles.login_container}>
            <div className={`${styles.max_width570} text-align-center`}>
                <h4>Добро пожаловать</h4>
                <p className={styles.gray_font}>
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable.{' '}
                </p>
                <div>
                    <div className={styles.circle}>1</div>
                    <div className={styles.dash}></div>
                    <div className={styles.circle}>2</div>
                    <div className={styles.dash}></div>
                    <div className={styles.circle}>3</div>
                </div>
            </div>
            <form action="">
                <div className={`${styles.login_form} text-align-center`}>
                    <span className="text-left">
                        <div className={`${styles.circle} ${styles.width_24}`}>1</div>
                        <p className="orange-color fs-25 fw-5">Информация о тебе</p>
                    </span>
                    <p className={`${styles.gray_font} text-align-left fs-16 fw-3`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                    <div className={styles.form_group}>
                        <label for="name">
                            <p>Имя</p>
                        </label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.form_group}>
                        <label for="lastname">
                            <p>Фамилия</p>
                        </label>
                        <input type="text" name="lastname" />
                    </div>
                    <div className={styles.form_group}>
                        <label for="surname">
                            <p>Отчество</p>
                        </label>
                        <input type="text" name="surname" />
                    </div>
                    <p className="text-align-left fs-14 fw-4 gray-font ml-0 pt-25">
                        Укажи дату своего рождения
                    </p>
                    <div className={`${styles.wrap_items} center-wrapper`}>
                        <div className={`${styles.form_group} ${styles.width190} mr-20 mt-0`}>
                            <label for="day">
                                <p>День</p>
                            </label>
                            <select name="day"></select>
                        </div>
                        <div className={`${styles.form_group} ${styles.width190} mr-20 mt-0`}>
                            <label for="month">
                                <p>Месяц</p>
                            </label>
                            <select name="month"></select>
                        </div>
                        <div className={`${styles.form_group} ${styles.width190} mt-0`}>
                            <label for="year">
                                <p>Год</p>
                            </label>
                            <select id="select_year" start="1900" end="2022" name="year"></select>
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <p className="text-align-left fs-14 fw-4 gray-font">
                            Место учебы (текущее или последнее образовательное учреждение)
                        </p>
                        <input type="text" />
                    </div>
                    <div className={styles.form_group}>
                        <p className="text-align-left fs-14 fw-4 gray-font">
                            Образовательные курсы (какие курсы прошли по IT)
                        </p>
                        <input type="text" />
                    </div>
                    <div className="center-wrapper">
                        <div className={`${styles.form_group} ${styles.width300} mr-20`}>
                            <p className="text-align-left fs-14 fw-4 gray-font">
                                Номер телефона (номер должен быть
                                <br /> зарегистрирован в Telegram или WhatsApp)
                            </p>
                            <select></select>
                        </div>
                        <div className={`${styles.form_group} ${styles.width300} pt-12`}>
                            <p className="text-align-left fs-14 fw-4 gray-font">Направление </p>
                            <select></select>
                        </div>
                    </div>
                    <button className="btn gray-btn">Далее</button>
                </div>
            </form>
        </div>
    );
};

export default FirstLoginPage;
