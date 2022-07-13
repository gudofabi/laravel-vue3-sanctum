<template>
  <div class="login-page">
    <div class="relative flex flex-col items-center justify-center gap-y-4">
        <h1 class="text-xl">Login</h1>
        <input type="email" name="email" v-model="form.email" id="email" placeholder="Email">
        <input type="password" name="password" v-model="form.password" id="password" placeholder="Password">
        <button @click.prevent="func_login">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'

import { useAuthStore } from '../stores/auth'

export default {
    data() {
        return {
            error: '',
            loading: false,
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useAuthStore, ['login']),

        async func_login() {
            this.loading = true;
            this.error = null;

            try {
                
                await this.login(this.form);
                await this.$router.push({ name: 'home'  });

            } catch (error) {

                this.error = error.response;

            } finally {

                this.loading = false;

            }
            
        }
    }
}
</script>

<style>

</style>