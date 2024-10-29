<template>
<header class="header">
  <div class="header__upper">
    <div class="shipping">
      <img class="shipping__icon" src="@/assets/imgs/svg/Shipping.svg" 
      @contextmenu.prevent 
      @dragstart.prevent>
      <p class="shipping__text">Free shipping with over $150</p>
    </div>
    <div v-if="!this.currentUser" class="account">
      <div class="account__login" @click="goToLogin">Login</div>
      <div class="account__register" @click="goToRegister">Register</div>
    </div>
    <div v-else class="account-registered">
      <div class="account-registered__logout" @click="logoutUser">Logout</div>
      <div class="account-registered__user">{{ this.currentUser.username }}</div>
    </div>
  </div>
  <div class="header__lower">
    <div class="logo-container">
      <img class="logo-container__img" src="@/assets/imgs/svg/Store-Logo.svg" 
      @contextmenu.prevent 
      @dragstart.prevent
      @click="goToHome">
    </div>
    <div class="navigation">
      <div class="navigation__options">
        <div class="navigation__option navigation__options--home" @click="goToHome">Home</div>
        <div class="navigation__option navigation__options--shop" @click="goToShop">Shop</div>
        <div class="navigation__option navigation__options--contact" @click="goToContact">Contact</div>
      </div>
      <button class="navigation__button" @click="openNavigationModal">
        <img class="button__img" src="@/assets/imgs/svg/Menu.svg">
      </button>
      <div class="navigation__search">
        <div class="cart" @contextmenu.prevent @dragstart.prevent>
          <img @click="goToCart" class="cart__icon" src="@/assets/imgs/svg/Cart.svg" alt="">
          <div v-if="totalItems" class="cart__alert">{{ totalItems }}</div>
        </div>
        <SearchBar/>
        <NavigationModal ref="navigationModal"/>
      </div>
    </div>
  </div>
</header>
</template>
<script>
import SearchBar from '@/components/navigation/SearchBar.vue'
import NavigationModal from '@/components/header/NavigationModal.vue'

export default {
  name: 'Header',
  components: {
    SearchBar,
    NavigationModal
  },
  data() {
    return {
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    },
    cart() {
      return this.$store.state.cart
    },
    totalItems() {
      return this.cart.reduce((total, product) => total + product.quantity, 0)
    }
  },
  methods: {
    goToHome(){
      this.$router.push({ name: 'Home' })
    },
    goToShop(){
      this.$router.push({ name: 'Shop' })
    },
    goToCart(){
      this.$router.push({ name: 'myCart' })
    },
    goToLogin(){
      this.$router.push({ name: 'Login' })
    },
    goToRegister(){
      this.$router.push({ name: 'Register' })
    },
    goToContact(){
      this.$router.push({ name: 'Contact' })
    },
    openNavigationModal(){
      this.$refs.navigationModal.openModal()
    },
    logoutUser() {
        this.$store.dispatch('logoutUser')
        alert('Logout successful');
    },
  },
}

</script>
<style scoped lang="stylus">
.header
  width 100%
  height 215px

  .header__upper
    background-image: url('@/assets/imgs/svg/Upper-background.svg')
    background-position: center
    height 51px
    padding 0 8% 15px 8%
    display flex
    align-items center
    justify-content space-between

    .shipping
      display flex
      align-items center

      .shipping__text
        color white
        padding 0 0 0 10px

    .account
      width 16vw
      display flex
      min-width 125px
      justify-content space-between

      .account__login
        color white
        cursor pointer

      .account__register
        color white
        cursor pointer

    .account-registered
      width 16vw
      display flex
      min-width 125px
      justify-content space-between

      .account-registered__logout
        color white
        cursor pointer

      .account-registered__user
        color white
        cursor pointer

  .header__lower
    height 164px
    padding 0 5% 0 5%
    display flex
    align-items center
    justify-content space-between

    .logo-container
      width 180px

    .navigation
      display flex
      width 75%
      justify-content space-between
    
      .navigation__options
        display flex
        padding 0 5% 0 5%
        width 60%
        justify-content space-between
        align-items center
        
        .navigation__option
          cursor pointer

      .navigation__button
        display none

      .navigation__search
        display flex
        align-items center

        .cart
          margin 10px 20px 0 0
          cursor pointer
          position relative

          .cart__alert
            top -6px
            right -12px
            position absolute
            width 20px
            height 20px
            background-color #E3B110
            border-radius 50px
            color white
            text-align center
            line-height 27px

@media (max-width: 980px)
  .header
    width 100%
    height 215px

    .header__upper
      background-image: url('@/assets/imgs/svg/Upper-background.svg')
      background-position: center
      height 51px
      padding 0 8% 15px 8%
      display flex
      align-items center
      justify-content space-between

      .shipping
        display flex
        align-items center

        .shipping__text
          color white
          padding 0 0 0 10px

      .account
        width 16vw
        display flex
        justify-content space-between

        .account__login
          color white
          cursor pointer

        .account__register
          color white
          cursor pointer

    .header__lower
      height 164px
      padding 0 5% 0 5%
      display flex
      align-items center
      justify-content space-between

      .logo-container
        width 180px

      .navigation
        display flex
        width 75%
        justify-content space-between
      
        .navigation__options
          display flex
          padding 0 5% 0 5%
          width 60%
          justify-content space-between
          align-items center
          
          .navigation__option
            cursor pointer

        .navigation__search
          display flex
          align-items center

          .cart
            margin 10px 20px 0 0
            cursor pointer

@media (max-width: 880px)
  .header
    width 100%
    height 215px

    .header__upper
      background-image: url('@/assets/imgs/svg/Upper-background.svg')
      background-position: center
      height 51px
      padding 0 8% 15px 8%
      display flex
      align-items center
      justify-content space-between

      .shipping
        display flex
        align-items center

        .shipping__text
          color white
          padding 0 0 0 10px

      .account
        width 16vw
        display flex
        justify-content space-between

        .account__login
          color white
          cursor pointer

        .account__register
          color white
          cursor pointer

    .header__lower
      height 164px
      padding 0 5% 0 5%
      display flex
      align-items center
      justify-content space-between

      .logo-container
        width 180px

      .navigation
        display flex
        width 75%
        justify-content space-between
      
        .navigation__options
          display none
          padding 0 5% 0 5%
          width 60%
          justify-content space-between
          align-items center
          
          .navigation__option
            cursor pointer

        .navigation__button
          display block
          background-color white 
          border none
          width 60px
          height 60px

          .button__img
            width 70%
            height 70%

        .navigation__search
          display flex
          align-items center

          .cart
            margin 10px 20px 0 0
            cursor pointer
</style>  