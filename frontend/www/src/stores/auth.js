import { defineStore } from 'pinia';
import repository from '../api/repository';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // count: 0,
        // title: 'My Counter Title'
        user: null
    }),
    getters: {
        // oddOrEven: (state) => {
        //     if(state.count % 2 === 0) return 'even';
        //     return 'odd';
        // }
        authUser: state => state.user,
        authenticated: state => state.user !== null
    },
    actions: {
        // increaseCounter(amount) {
        //     this.count += amount;
        // },
        // decreaseCounter(amount) {
        //     this.count -= amount;
        // }

        async login(params) {
            await repository.createSession();
            const { data } = await repository.login(params);
            // console.log(data);
            this.user = data;
        }
    },
    
})