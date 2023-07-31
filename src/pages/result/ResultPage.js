import React from 'react';
import HeaderTest from '../../components/HeaderTest/HeaderTest';
import styles from './ResultPage.module.css';
import trophy from '../../assets/trophy.svg';

const ResultPage = () => {
    return (
        <div className="one-page">
            <HeaderTest />
            <div className={`${styles.results_card} text-align-center mb-8`}>
                <h2 className={`${styles.fs_24} orange-color fw-5 fs-36`}>Поздравляем</h2>
                <div className="center-wrapper">
                    <p className={`${styles.fs_20} fs-25`}>Ваш результат</p>
                    <h2 className={`${styles.fs_24} orange-color`}>100</h2>
                    <p className={`${styles.fs_22} fs-25 fw-3 unbounded-font`}> Баллов</p>
                </div>
                <img className={styles.trophy} src={trophy} alt="" />
                <p className={styles.fs_16}>
                    Поздравляем вам удалось пройти тест и набрать достаточное количество балов
                </p>
                <p className="fs-20 fw-4 unbounded-font mb-8 pt-12 ">Интервью состоится</p>
                <h2 className="orange-color fw-5">23.09.2023 16:05</h2>
                <button className="btn mt-30 btn-size-17-102">Готово</button>
            </div>
        </div>
    );
};

export default ResultPage;
