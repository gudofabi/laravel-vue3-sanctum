import axios from 'axios'

let instance = axios.create({
    withCredentials: true
});

instance.interceptors.request.use(request => {
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';
    request.headers['Authorization'] = `Bearer ${sessionStorage.getItem('access_token')}`;
    return request;
})

instance.interceptors.response.use(
    response => { return response; },
    error => { 
        if(error.response.status === 401) {
            sessionStorage.removeItem('user'); // Remove session storage when 401 error detected.
            // window.location.reload();
        }

        return Promise.reject(error);
    }
)

export default instance;