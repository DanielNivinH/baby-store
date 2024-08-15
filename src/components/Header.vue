<template>
<header class="header">
  <div class="header__upper">
    <div class="shipping">
      <img class="shipping__icon" src="@/assets/imgs/svg/Shipping.svg" alt="">
      <p class="shipping__text">Free shipping with over $150</p>
    </div>
    <div class="account">
      <div class="account__login">Login</div>
      <div class="account__register">Register</div>
    </div>
  </div>
  <div class="header__lower">
    <div class="logo-container">
      <img class="logo-container__img" src="@/assets/imgs/svg/Logo.svg" alt="">
    </div>
    <div class="navigation">
      <div class="navigation__options">
        <div class="navigation__option navigation__options--home" @click="goToHome">Home</div>
        <div class="navigation__option navigation__options--shop" @click="goToShop">Shop</div>
        <div class="navigation__option navigation__options--contact">Pages</div>
        <div class="navigation__option navigation__options--contact">Blog</div>
        <div class="navigation__option navigation__options--contact">Contact</div>
      </div>
      <div class="navigation__search">
        <div class="cart">
          <img class="cart__icon" src="@/assets/imgs/svg/Cart.svg" alt="">
        </div>
        <searchBar/>
      </div>
    </div>
  </div>
</header>
</template>
<script>
import searchBar from '@/components/navigation/searchBar.vue'

export default {
  name: 'Header',
  components: {
    searchBar
  },
  methods: {
    goToHome(){
      this.$router.push({ name: 'Home' })
    },
    goToShop(){
      this.$router.push({ name: 'Shop' })
    }
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
      justify-content space-between

      .account__login
        color white

      .account__register
        color white

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

      .navigation__search
        display flex
        align-items center

        .cart
          padding 0 20px 0 0
</style>  