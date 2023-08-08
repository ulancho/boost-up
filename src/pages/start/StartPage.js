import React from 'react';
import HeaderTest from './../../components/HeaderTest/HeaderTest';
import { API } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const StartTestPage = () => {
    const navigate = useNavigate();

    const startExam = async () => {
        const student_exam_id = localStorage.getItem('student_exam_id');
        try {
            const { data, status } = await API.start(student_exam_id);
            if (status === 200) {
                navigate('/test');
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log('finally startExam');
        }
    };

    return (
        <div className="one-page">
            <HeaderTest />
            <div className="align-to-height">
                <div className="text-align-center">
                    <h2 className="fw-5 fs-25 mt-240 ">
                        Пройдите быстрый тест 15 вопросов за 15 минут <br /> выберите один или
                        несколько правильных ответов
                    </h2>
                    <button onClick={startExam} className="btn fw-7 mt-30">
                        Начать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartTestPage;
