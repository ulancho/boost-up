import React, { useEffect, useState } from 'react';
import styles from './RegistrationPage.module.css';
import MyInput from '../../components/MyInput/MyInput';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MySelect from '../../components/MySelect/MySelect';
import { API } from '../../api/api';

const FirstLoginPage = () => {
    const [directions, setDirections] = useState([]);
    const [directionsId, setDirectionsId] = useState([]);
    const getID = (data) => {
        const ids = data.map((item) => item.id.toString());
        setDirectionsId(ids);
    };

    const registration = async (values) => {
        console.log(values.date_of_birth);
        // try {
        //     const response = await API.registration(values);
        //     console.log(response);
        // } catch (e) {
        //     console.log(e);
        // } finally {
        //     console.log('done');
        // }
    };

    useEffect(() => {
        (async () => {
            try {
                const { data, status } = await API.getDirections();
                setDirections(data);
                getID(data);
            } catch {
                console.log('error');
            } finally {
                console.log('done');
            }
        })();
    }, []);

    console.log('FirstLoginPage');

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
                            .oneOf(directionsId, 'Недопустимое направление')
                            .required('Не заполненное поле')
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        registration(values);
                        setSubmitting(false);
                    }}>
                    <Form>
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
                        <MySelect label="Направление" name="direction_id" data={directions} />
                        <button type="submit" className="btn gray-btn">
                            Далее
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default FirstLoginPage;
