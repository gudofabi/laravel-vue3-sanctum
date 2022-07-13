import { useAuthStore } from "../../../stores/auth";

export default (to, from, next) => {

    const user = useAuthStore();

    if(user.authenticated) {
        next({ name: 'home' })
    }else {
        next();
    }
}