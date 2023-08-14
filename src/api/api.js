import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.250.97.89:8008/api/v1/'
});

export const API = {
    getDirections() {
        return instance.get('direction/list');
    },
    registration(body) {
        return instance.post('student/append', body);
    },
    start(id) {
        return instance.post('exam/start?student_exam_id=' + id);
    },
    question(id) {
        return instance.get('exam/question/next?student_exam_id=' + id);
    },
    answer(body) {
        return instance.put('exam/question/answer', body);
    }
};
