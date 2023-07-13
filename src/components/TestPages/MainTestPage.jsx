import React from 'react';
import SimpleHeader from './SimpleHeader';
import timer from '../../assets/Timer.svg';

const MainTestPage = () => {
    return (
        <>
            <div className="one-page">
                <SimpleHeader />
                <div className="text-align-left margin-center test-container">
                    <h2 className="fw-5 fs-25">
                        Вечер пятницы. Пришли друзья и предлагают посмотреть <br /> фильм. Ваша
                        очередь выбирать. Что включите?
                    </h2>
                    <img className="timer" src={timer} alt="" />

                    <form className="test-card mt-30">
                        <div className=" text-align-left">
                            <input type="checkbox" name="vehicle1" />
                            <label for="vehicle1">
                                Обойдете всех и оцените, где меньше испорченных фруктов, какой
                                продавец самый дружелюбный, у кого ниже цена. Найдете лучший
                                вариант.
                            </label>
                        </div>

                        <div className="mt-30">
                            <input type="checkbox" name="vehicle2" />
                            <label for="vehicle2">
                                У вас есть план. Зададите первому продавцу три вопроса: откуда
                                абрикосы, какой сорт, сладкие ли. Если продавец не сможет ответить
                                хотя бы на один, перейдете к следующей палатке.
                            </label>
                        </div>
                        <div className="mt-30">
                            <input type="checkbox" name="vehicle3" />
                            <label for="vehicle3">
                                {' '}
                                Купите у продавца, который выложил абрикосы без вмятин в ровные
                                красивые горки.
                            </label>
                        </div>
                        <div className="mt-30">
                            <input type="checkbox" name="vehicle3" />
                            <label for="vehicle3">
                                {' '}
                                Купите у продавца, который выложил абрикосы без вмятин в ровные
                                красивые горки.
                            </label>
                        </div>
                    </form>
                    <div className="mt-30">
                        <button className="ellipse-widget e-w-orange">1</button>{' '}
                        <button className="ellipse-widget">2</button>{' '}
                        <button className="ellipse-widget">3</button>{' '}
                        <button className="ellipse-widget">4</button>{' '}
                        <button className="ellipse-widget">5</button>{' '}
                        <button className="ellipse-widget">6</button>{' '}
                        <button className="ellipse-widget">7</button>{' '}
                        <button className="ellipse-widget">8</button>{' '}
                        <button className="ellipse-widget">9</button>{' '}
                        <button className="ellipse-widget">10</button>{' '}
                        <button className="ellipse-widget">11</button>{' '}
                        <button className="ellipse-widget">12</button>{' '}
                        <button className="ellipse-widget">13</button>{' '}
                        <button className="ellipse-widget">14</button>{' '}
                        <button className="ellipse-widget">15</button>{' '}
                    </div>
                    <div className="mt-70 text-right">
                        <button className="btn btn-transparent mr-20 ">Назад </button>
                        <button className="btn btn-size-17-102">Далее</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainTestPage;
