import React from 'react';
import SimpleHeader from './SimpleHeader';
import timer from '../../assets/Timer.svg';
import styles from '../../styles/MainTestPage.module.css';

const MainTestPage = () => {
    return (
        <>
            <div className="one-page">
                <SimpleHeader />
                <div className={`${styles.test_container} text-align-left margin-center`}>
                    <h2 className="fw-5 fs-25">
                        Вечер пятницы. Пришли друзья и предлагают посмотреть <br /> фильм. Ваша
                        очередь выбирать. Что включите?
                    </h2>
                    <img className="timer" src={timer} alt="" />

                    <form className={`${styles.test_card} mt-30`}>
                        <div className={`${styles.test_questions_wrap} text-align-left`}>
                            <input type="checkbox" name="vehicle1" />
                            <label for="vehicle1">
                                Обойдете всех и оцените, где меньше испорченных фруктов, какой
                                продавец самый дружелюбный, у кого ниже цена. Найдете лучший
                                вариант.
                            </label>
                        </div>

                        <div className={`${styles.test_questions_wrap} mt-30`}>
                            <input type="checkbox" name="firstOption" />
                            <label for="vehicle2">
                                У вас есть план. Зададите первому продавцу три вопроса: откуда
                                абрикосы, какой сорт, сладкие ли. Если продавец не сможет ответить
                                хотя бы на один, перейдете к следующей палатке.
                            </label>
                        </div>
                        <div className={`${styles.test_questions_wrap} mt-30`}>
                            <input type="checkbox" name="vehicle3" />
                            <label for="vehicle3">
                                {' '}
                                Купите у продавца, который выложил абрикосы без вмятин в ровные
                                красивые горки.
                            </label>
                        </div>
                        <div className={`${styles.test_questions_wrap} mt-30`}>
                            <input type="checkbox" name="vehicle3" />
                            <label for="vehicle3">
                                {' '}
                                Купите у продавца, который выложил абрикосы без вмятин в ровные
                                красивые горки.
                            </label>
                        </div>
                    </form>
                </div>
                <div className={styles.widget_wrapper}>
                    <button className={`${styles['ellipse_widget']} ${styles['e_w_orange']}`}>
                        1
                    </button>
                    <button className={styles.ellipse_widget}>2</button>{' '}
                    <button className={styles.ellipse_widget}>3</button>{' '}
                    <button className={styles.ellipse_widget}>4</button>{' '}
                    <button className={styles.ellipse_widget}>5</button>{' '}
                    <button className={styles.ellipse_widget}>6</button>{' '}
                    <button className={styles.ellipse_widget}>7</button>{' '}
                    <button className={styles.ellipse_widget}>8</button>{' '}
                    <button className={styles.ellipse_widget}>9</button>{' '}
                    <button className={`${styles.ellipse_widget_24} ${styles.ellipse_widget}`}>
                        10
                    </button>
                    <button className={`${styles.ellipse_widget_24} ${styles.ellipse_widget}`}>
                        11
                    </button>{' '}
                    <button className={`${styles.ellipse_widget_24} ${styles.ellipse_widget}`}>
                        12
                    </button>{' '}
                    <button className={`${styles.ellipse_widget_24} ${styles.ellipse_widget}`}>
                        13
                    </button>{' '}
                    <button className={`${styles.ellipse_widget_24} ${styles.ellipse_widget}`}>
                        14
                    </button>{' '}
                    <button className={`${styles.ellipse_widget_24} ${styles.ellipse_widget}`}>
                        15
                    </button>{' '}
                </div>
                <div className="mt-70 text-right">
                    <button className="btn btn-transparent mr-20 ">Назад </button>
                    <button className="btn btn-size-17-102">Далее</button>
                </div>
            </div>
        </>
    );
};

export default MainTestPage;
