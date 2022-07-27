<template>
  <main>

    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">

        <nav class="flex gap-x-4">
          <RouterLink v-show="comp_authenticated" to="/">Home</RouterLink>
          <RouterLink to="/job-post">Job Post</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink v-show="!comp_authenticated" to="/sign-in">Sign In</RouterLink>
          <a class="cursor-pointer" v-show="comp_authenticated" @click="func_logout">Logout</a>
        </nav>
      </div>
    </header>

    <RouterView />
  </main>
</template>

<script>
import { mapActions } from 'pinia';

import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

export default {

  components: {
    RouterLink,
    RouterView
  },

  setup() {
    const authUser = useAuthStore();

    return { authUser }
  },

  computed: {
    comp_authenticated() {
      return this.authUser.authenticated;
    }
  },

  methods: {
    ...mapActions(useAuthStore, ['logout']),

    async func_logout() {
      try {
        
        await this.logout();
        await this.$router.push({ name: 'sign-in' });

      } catch (error) {
         console.log(error);
      }
    }
  }
}

</script>
