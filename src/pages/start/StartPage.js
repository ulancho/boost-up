import React from 'react';
import HeaderTest from './../../components/HeaderTest/HeaderTest';
import styles from './Start.module.css';

const StartTestPage = () => {
    return (
        <div className="one-page">
            <HeaderTest />
            <div className="align-to-height">
                <div className="text-align-center">
                    <h2 className="fw-5 fs-25 mt-240 ">
                        Пройдите быстрый тест 15 вопросов за 15 минут <br /> выберите один или
                        несколько правильных ответов
                    </h2>
                    <button className="btn fw-7 mt-30">Начать</button>
                </div>
            </div>
        </div>
    );
};

export default StartTestPage;
