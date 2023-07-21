import React from 'react';
import SimpleHeader from './SimpleHeader';

const StartTestPage = () => {
    return (
        <div className="one-page">
            <SimpleHeader />
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
