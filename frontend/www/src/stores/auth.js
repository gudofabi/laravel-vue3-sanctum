import { defineStore } from 'pinia';
import repository from '../api/repository';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null,
    }),
    getters: {
        authUser: state => state.user,
        authenticated: state => state.user !== null
    },
    actions: {

        async login(params) {
            await repository.createSession();
            const { data } = await repository.login(params);
            // console.log(data);
            this.user = data.user;
            sessionStorage.user = JSON.stringify(data.user)
        },

        async logout() {
            await repository.logout();
            this.user = null;
            sessionStorage.removeItem('user');
        }
    },
    
})