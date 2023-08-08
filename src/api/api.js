import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.250.97.89:8008/api/v1/'
});

export const API = {
    getDirections() {
        return instance.get('direction/list');
    },
    registration(data) {
        return instance.post('student/append', data);
    }
};
