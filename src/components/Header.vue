<template>
<header class="header">
  <div class="header__upper">
    <div class="account">
      <div class="account__login">Login</div>
      <div class="account__register">Register</div>
    </div>
  </div>
  <div class="header__lower">
    <div class="logo-container">
      <img class="logo-container__img" src="@/assets/imgs/svg/logo.svg" alt="">
    </div>
    <div class="navigation">
      <div class="navigation__options">
        <div class="navigation__option navigation__options--home">Home</div>
        <div class="navigation__option navigation__options--shop">Shop</div>
        <div class="navigation__option navigation__options--contact">Contact</div>
      </div>
      <div class="navigation__search">
        <div class="cart">
          <img class="cart__icon" src="" alt="">
        </div>
        <div class="search">
          <div class="search__input"></div>
          <div class="search__button"></div>
        </div>
      </div>
    </div>
  </div>
</header>
</template>
<style scoped lang="stylus">
.header
  width 100%

  .header__upper
    // background-color #0F83B2
    background-image: url('@/assets/imgs/svg/upper.svg')
    background-position: center
    height 51px
    padding 0 8% 10px 0
    display flex
    align-items center
    justify-content flex-end    

    .account
      width 18vh
      display flex
      justify-content space-between

      .account__login
        color white

      .account__register
        color white

  .header__lower
    height 164px

</style>