import api from './api';

export default {
    
    createSession() {
        return api.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    },

    login(params) {
        return api.post('http://127.0.0.1:8000/api/login', params);
    },
    
    logout() {
        return api.delete('http://127.0.0.1:8000/api/logout');
    },

    jobGet() {
        return api.get('http://127.0.0.1:8000/api/job-post');
    },

    paginateJob(page) {
        return api.get(`http://127.0.0.1:8000/api/job-post?page=${page}`);
    }

}