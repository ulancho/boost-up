import React, { useEffect, useState } from 'react';
import HeaderTest from '../../components/HeaderTest/HeaderTest';
import timer from '../../assets/Timer.svg';
import styles from './TestPage.module.css';
import { API } from '../../api/api';

const TestPage = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const getQuestion = async () => {
        const student_exam_id = localStorage.getItem('student_exam_id');
        try {
            const { data, status } = await API.question(student_exam_id);
            if (status === 200) {
                setQuestion(data.question);
                setOptions(data.options);
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log('finally getQuestion');
        }
    };

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <div className="main-center-container">
            <HeaderTest />
            <div className={styles.question_container}>
                <h2 className={`${styles.fs_14} ${styles.question} fw-5 fs-25`}>{question}</h2>
                <form className={`${styles.test_card} ${styles.mt_20} mt-30`}>
                    {options.map((item) => {
                        return (
                            <div className={`${styles.option}`}>
                                <input
                                    type="checkbox"
                                    id={item.option_id}
                                    value={item.option_id}
                                    name="questions"
                                />
                                <label htmlFor={item.option_id}>{item.option}</label>
                            </div>
                        );
                    })}
                </form>
            </div>

            {/*нумерация*/}
            <div className={styles.container_for_order_reverse}>
                <div className={styles.order2}>
                    <div className={styles.widget_wrapper}>
                        <button className={`${styles['ellipse_widget']} ${styles['e_w_orange']}`}>
                            1
                        </button>
                        <button className={styles.ellipse_widget}>2</button>
                        <button className={styles.ellipse_widget}>3</button>
                        <button className={styles.ellipse_widget}>4</button>
                        <button className={styles.ellipse_widget}>5</button>
                        <button className={styles.ellipse_widget}>6</button>
                        <button className={styles.ellipse_widget}>7</button>
                        <button className={styles.ellipse_widget}>8</button>
                        <button className={styles.ellipse_widget}>9</button>
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
                </div>
                <div className={styles.order1}>
                    <div className={`${styles.center_container} mt-70 text-right mr-107`}>
                        <button className={`${styles.btn_17_102} btn btn-transparent mr-20`}>
                            Назад{' '}
                        </button>
                        <button className="btn btn-size-17-102">Далее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;
