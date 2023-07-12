import React from 'react';
import SimpleHeader from './SimpleHeader';
import trophy from '../../assets/trophy.svg';

const TestResults = () => {
    return (
        <div className="one-page">
            <SimpleHeader />

            <div className="results-card text-align-center">
                <h2 className="orange-color fw-5 fs-36">Поздравляем</h2>
                <div className="center-wrapper">
                    <p className="fs-25">Ваш результат</p>
                    <h2 className="orange-color">100</h2>
                    <p className="fs-25 fw-3 unbounded-font"> Баллов</p>
                </div>
                <img src={trophy} alt="" />
                <p>Поздравляем вам удалось пройти тест и набрать достаточное количество балов</p>
                <p className="fs-20 fw-4 unbounded-font mb-8 pt-12 ">Интервью состоится</p>
                <h2 className="orange-color fw-5">23.09.2023 16:05</h2>
                <button className="btn mt-30 btn-size-17-102">Готово</button>
            </div>
        </div>
    );
};

export default TestResults;
