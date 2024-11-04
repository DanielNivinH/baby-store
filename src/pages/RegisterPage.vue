<template>
  <main class="main">
    <Roots/>
    <div class="register">
      <div class="register-container">
        <div class="register-container__heading">Create a new account</div>
        <input class="register-container__email" type="text" placeholder="new username" v-model="username">
        <input class="register-container__email" type="email" placeholder="new email" v-model="email">
        <input class="register-container__password" type="password" placeholder="new password" v-model="password">
        <input class="register-container__password" type="password" placeholder="repeat password" v-model="repeatPassword">
        <button class="register-container__submit" @click="registerNewUser">register</button>
        <button class="register-container__login" @click="goToLogin">do you have an account? login here</button>
      </div>
    </div>
  </main>
</template>
<script>
import Roots from '@/components/navigation/Roots.vue'
export default {
  name: 'LoginPage',
  components: {
    Roots
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  },
  methods: {
    goToHome(){
      this.$router.push({ name: 'Home' })
    },
    goToLogin(){
      this.$router.push({ name: 'Login' })
    },
    registerNewUser(){
      if (this.password === this.repeatPassword) {
        try {
          this.$store.dispatch('registerNewUser', {
            username: this.username,
            email: this.email,
            password: this.password
          });
          alert('User registered successfully');
          this.goToHome()
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert('Passwords do not match');
      }
    },
  },
}
</script>
<style scoped lang="stylus">
.main 
  width 90%
  max-width 1080px
  margin 0 auto

  .register
    width 100%
    display flex
    justify-content center
    padding 0 0 10% 0

    .register-container
      padding 20px 0 0 0
      display grid
      max-width 500px
      grid-template-row repeat(4, 1fr)
      gap 10px

      .register-container__heading
        font-size 20px
        font-weight bold
        height 30px
      
      .register-container__email
        border-radius 5px
        height 30px
        border 3px solid #bbbbbb

      .register-container__password
        border-radius 5px
        height 30px
        border 3px solid #bbbbbb

      .register-container__submit
        background-color #0F83B2
        color #FFFF
        border-radius 5px
        height 30px
        border none

      .register-container__login
        border none
        text-align end
        font-size 12px
        background-color white
</style>