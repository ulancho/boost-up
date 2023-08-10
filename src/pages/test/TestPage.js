import React, { useEffect, useState } from 'react';
import HeaderTest from '../../components/HeaderTest/HeaderTest';
import styles from './TestPage.module.css';
import { API } from '../../api/api';

const Pagination = ({ length }) => {
    const components = [];

    for (let i = 0; i < length; i++) {
        components.push(<button className={styles.ellipse_widget}>{i + 1}</button>);
    }

    return <div className={styles.widget_wrapper}>{components}</div>;
};

const TestPage = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [totalQuestionCount, setTotalQuestionCount] = useState(0);
    const getQuestion = async () => {
        const student_exam_id = localStorage.getItem('student_exam_id');
        try {
            const { data, status } = await API.question(student_exam_id);
            if (status === 200) {
                setQuestion(data.question);
                setOptions(data.options);
                setTotalQuestionCount(data.totalQuestionCount);
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
                    <Pagination length={totalQuestionCount} />
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
