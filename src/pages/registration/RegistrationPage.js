import React from 'react';
import styles from './RegistrationPage.module.css';
import MyInput from '../../components/MyInput/MyInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MySelect from '../../components/MySelect/MySelect';

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
                        first_name: '',
                        lastname: '',
                        patronymic: '',
                        date_of_birth: '',
                        study_place: '',
                        study_course: '',
                        phone_number: '',
                        direction_id: ''
                    }}
                    validationSchema={Yup.object({
                        first_name: Yup.string().required('Не заполненное поле'),
                        lastname: Yup.string().required('Не заполненное поле'),
                        patronymic: Yup.string().required('Не заполненное поле'),
                        date_of_birth: Yup.string().required('Не заполненное поле'),
                        study_place: Yup.string().required('Не заполненное поле'),
                        study_course: Yup.string().required('Не заполненное поле'),
                        phone_number: Yup.string().required('Не заполненное поле'),
                        direction_id: Yup.string()
                            .oneOf(['1'], 'Invalid Job Type')
                            .required('Не заполненное поле')
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        await new Promise((r) => setTimeout(r, 500));
                        setSubmitting(false);
                    }}>
                    <>
                        <MyInput type="text" label="Имя" name="first_name" />
                        <MyInput type="text" label="Фамилия" name="lastname" />
                        <MyInput type="text" label="Отчество" name="patronymic" />
                        <MyInput
                            type="date"
                            label="Укажите дату своего рождения"
                            name="date_of_birth"
                        />
                        <MyInput
                            type="text"
                            label="Место учебы (текущее или последнее образовательное учреждение)"
                            name="study_place"
                        />
                        <MyInput
                            type="text"
                            label="Образовательные курсы (какие курсы прошли по IT)"
                            name="study_course"
                        />
                        <MyInput
                            type="number"
                            label="Номер телефона (номер должен быть зарегистрирован в Telegram или WhatsApp)"
                            name="phone_number"
                        />
                        <MySelect label="Направление" name="direction_id" />
                    </>
                </Formik>
                <button className="btn gray-btn">Далее</button>
            </div>
        </div>
    );
};

export default FirstLoginPage;
