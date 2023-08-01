import React from 'react';
import styles from './RegistrationPage.module.css';
import MyInput from '../../components/MyInput/MyInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FirstLoginPage = () => {
    return (
        <div className={styles.login_container}>
            <div className={`${styles.max_width570} text-align-center`}>
                <h4>Добро пожаловать</h4>
                <p className="gray-font">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable.{' '}
                </p>
                <div className={styles.next_step_container}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.circle} ${styles.orange_circle}`}>1</div> <br />
                        <p className="fs-16 fw-5 orange-color pt-10">Данные</p>
                    </div>
                    <div className={`${styles.dash} mr-30`}></div>
                    <div className={`${styles.wrapper}`}>
                        <div className={styles.circle}>2</div>
                        <br />
                        <p className={`${styles.gray_font} fs-16 fw-5 pt-10`}>Тестировании</p>
                    </div>
                    <div className={`${styles.dash} ml-30`}></div>
                    <div className={`${styles.wrapper}`}>
                        <div className={styles.circle}>3</div>
                        <br />
                        <p className={`${styles.gray_font} fs-16 fw-5 pt-10`}>Готово</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.login_form} text-align-center`}>
                <span className="text-left">
                    <div className={`${styles.circle} ${styles.width_24_orange_circle}`}>1</div>
                    <p className="orange-color fs-25 fw-5">Информация о тебе</p>
                </span>
                <p className={` gray-font text-align-left fs-16 fw-3 pt-10`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut.
                </p>
                <Formik
                    initialValues={{
                        name: ''
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Не заполненное поле')
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        await new Promise((r) => setTimeout(r, 500));
                        setSubmitting(false);
                    }}>
                    <>
                        <MyInput type="text" label="Имя" name="name" />
                        <MyInput type="text" label="Фамилия" name="lastname" />
                        <MyInput type="text" label="Отчество" name="surname" />

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
                                <select
                                    id="select_year"
                                    start="1900"
                                    end="2022"
                                    name="year"></select>
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
                    </>
                </Formik>
                <button className="btn gray-btn">Далее</button>
            </div>
        </div>
    );
};

export default FirstLoginPage;
