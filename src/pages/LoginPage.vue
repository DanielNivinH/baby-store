<template>
  <main class="main">
    <div class="login">
      <Roots/>
      <div class="login-container">
        <div class="login-container__heading">Login with your account</div>
        <input class="login-container__email" type="text" placeholder="email" v-model="email">
        <input class="login-container__password" type="text" placeholder="password" v-model="password">
        <button class="login-container__submit" @click="loginUser">login</button>
        <button class="login-container__register" @click="goToRegister">You dont have an account? register here</button>
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
      email: '',
      password: '',
    };
  },
  methods: {
    goToHome(){
      this.$router.push({ name: 'Home' })
    },
    loginUser() {
      try {
        this.$store.dispatch('loginUser', {
          email: this.email,
          password: this.password
        });
        alert('Login successful');
        this.goToHome()
      } catch (error) {
        alert(error.message);
      }
    },
    goToRegister(){
      this.$router.push({ name: 'Register' })
    },
  }
}
</script>
<style scoped lang="stylus">
.main 
  width 100%

  .login
    width 90%
    margin 0 auto
    height 400px

    .login-container
      padding 20px 0 0 0
      width 35%
      margin 0 auto
      display grid
      grid-template-row 1fr 1fr 1fr 1fr
      gap 10px

      .login-container__heading
        font-size 20px
        font-weight bold
        height 30px
      
      .login-container__email
        border-radius 5px
        height 30px
        border 3px solid #bbbbbb

      .login-container__password
        border-radius 5px
        height 30px
        border 3px solid #bbbbbb

      .login-container__submit
        background-color #0F83B2
        color #FFFF
        border-radius 5px
        height 30px
        border none

      .login-container__register
        border none
        text-align end
        font-size 12px
        background-color white
</style>