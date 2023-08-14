import React, { useEffect, useState } from 'react';
import HeaderTest from '../../components/HeaderTest/HeaderTest';
import styles from './ResultPage.module.css';
import trophy from '../../assets/trophy.svg';
import { API } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const ResultPage = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState(true);
    const getResult = async () => {
        const student_exam_id = localStorage.getItem('student_exam_id');

        const { data, status } = await API.stop(student_exam_id);
    };

    const onClickDone = () => {
        localStorage.clear();
        navigate('/');
    };

    useEffect(() => {
        getResult();
    }, []);

    return (
        <div className="main-center-container">
            <HeaderTest />
            <div className={`${styles.results_card} text-align-center mb-8`}>
                <h2 className={`${styles.fs_24} orange-color fw-5 fs-36`}>Вы прошли тест!</h2>
                <img className={`${styles.trophy} mt-30`} src={trophy} alt="" />
                <p className={`${styles.fs_16} mt-30`}>
                    Ожидайте результаты. В ближайшее время с вами свяжется наш менеджер
                </p>
                <button className="btn mt-30 btn-size-17-102" onClick={onClickDone}>
                    Готово
                </button>
            </div>
        </div>
    );
};

export default ResultPage;
