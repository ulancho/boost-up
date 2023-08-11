import React, { useEffect, useState } from 'react';
import HeaderTest from '../../components/HeaderTest/HeaderTest';
import styles from './TestPage.module.css';
import { API } from '../../api/api';

const Pagination = ({ length, questionNum }) => {
    const components = [];

    for (let i = 0; i < length; i++) {
        let activeClass = '';
        if (questionNum === i + 1) {
            activeClass = 'e_w_orange';
        }

        components.push(
            <button key={i} className={`${styles.ellipse_widget} ${styles[activeClass]}`}>
                {i + 1}
            </button>
        );
    }

    return <div className={styles.widget_wrapper}>{components}</div>;
};

const TestPage = () => {
    const [question, setQuestion] = useState('');
    const [questionId, setQuestionId] = useState(null);
    const [options, setOptions] = useState([]);
    const [totalQuestionCount, setTotalQuestionCount] = useState(0);
    const [questionNum, setQuestionNum] = useState(0);
    const [answers, setAnswers] = useState([]);

    const getQuestion = async () => {
        const student_exam_id = localStorage.getItem('student_exam_id');
        try {
            const { data, status } = await API.question(student_exam_id);
            if (status === 200) {
                setQuestion(data.question);
                setOptions(data.options);
                setTotalQuestionCount(data.totalQuestionCount);
                setQuestionNum(data.questionNum);
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log('finally getQuestion');
        }
    };

    const checkId = (arr, id) => arr.findIndex((item) => item === id);

    const deleteIdInAnswers = (arr, index) => {
        arr.splice(index, 1);
        setAnswers(arr);
    };

    const onChangeAnswer = (e) => {
        const arr = [...answers];
        const id = +e.target.value;
        const index = checkId(arr, id);

        if (e.target.checked) {
            if (index < 0) {
                arr.push(id);
                setAnswers(arr);
            }
        } else {
            if (index >= 0) {
                deleteIdInAnswers(arr, index);
            }
        }
    };

    const onWards = () => {};

    useEffect(() => {
        getQuestion();
    }, []);

    console.log('TestPage reload');

    return (
        <div className="main-center-container">
            <HeaderTest />
            <div className={styles.question_container}>
                <h2 className={`${styles.fs_14} ${styles.question} fw-5 fs-25`}>{question}</h2>
                <div className={`${styles.test_card} ${styles.mt_20} mt-30`}>
                    {options.map((item, index) => {
                        return (
                            <div key={index} className={`${styles.option}`}>
                                <input
                                    type="checkbox"
                                    id={item.option_id}
                                    value={item.option_id}
                                    name="questions"
                                    onChange={onChangeAnswer}
                                />
                                <label htmlFor={item.option_id}>{item.option}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/*нумерация*/}
            <div className={styles.container_for_order_reverse}>
                <div className={styles.order2}>
                    <Pagination length={totalQuestionCount} questionNum={questionNum} />
                </div>
                <div className={`${styles.order1} mt-70`}>
                    <div className={`text-right`}>
                        <button className={`${styles.btn_17_102} btn btn-transparent mr-20`}>
                            Назад
                        </button>
                        <button className="btn btn-size-17-102" onClick={onWards}>
                            Далее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;
