<template>
  <footer class="footer">
    <div class="footer__Content">
      <div class="social">
        <img class="social__logo" src="@/assets/imgs/svg/Logo.svg" alt="logo">
        <p class="social__text">Nunc consequat interdum varius sit amet mattis.</p>
        <div class="social__buttons">
          <img class="social__button social__buttons--instagram" src="@/assets/imgs/svg/Instagram.svg" alt="Instagram">
          <img class="social__button social__buttons--twitter" src="@/assets/imgs/svg/Twitter.svg" alt="Twitter">
          <img class="social__button social__buttons--facebook" src="@/assets/imgs/svg/Facebook.svg" alt="Facebook">
          <img class="social__button social__buttons--pinterest" src="@/assets/imgs/svg/Pinterest.svg" alt="Pinterest">
        </div>
      </div>
      <div class="account">
        <div class="account__heading">My account</div>
        <div class="account__routes">
          <a class="account__route account__routes--tracking" href="">Track my order</a>
          <a class="account__route account__routes--terms" href="">Terms of use</a>
          <a class="account__route account__routes--wishlist" href="">Wishlist</a>
          <a class="account__route account__routes--feedback" href="">Submit Your feedback</a>
        </div>
      </div>
      <div class="services">
        <div class="services__heading">Customer sevice</div>
        <div class="schedules">
          <p class="schedules__days">Monday to Friday</p>
          <p class="schedules__hours">10am - 6pm(NewYork time)</p>
          <div class="contacts">
            <div class="number">
              <div class="number__text">Call us:</div>
              <a class="number__link" href="">123-456-7868</a>
            </div>
            <div class="email">
              <div class="email__text">Email us:</div>
              <a class="email__link" href="">info@example.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="stylus">
.footer
  background-image url('@/assets/imgs/jpg/Footer.jpg')
  width 100%
  height 566px
  background-size cover 
  background-repeat no-repeat
  background-position center center
  padding 0 0 0 5%

  .footer__Content
    width 75%
    height 100%
    display flex
    align-items center
    justify-content space-between

    .social
      width 220px
      height 180px

      .social__logo
        width 75%

      .social__text
        padding 10px 0 20px 0

      .social__buttons
        display flex

        .social__button
          padding 0 10px 0 0

    .account
      width 140px
      height 180px

      .account__heading
        padding 0 0 15px 0

      .account__routes
        display flex
        flex-direction column

        .account__route
          text-decoration none
          padding 0 0 8px 0
          color black
          font-size 14px

    .services
      width 240px
      height 180px

      .services__heading
        padding 0 0 15px 0

      .schedules

        .schedules__days
          padding 0 0 8px 0

        .schedules__hours
          padding 0 0 8px 0

        .contacts

          .number
            display flex
            padding 0 0 8px 0

            .number__link
              padding 0 0 0 5px
              text-decoration none
              color #0F83B2

          .email
            display flex
            padding 0 0 8px 0

            .email__link
              padding 0 0 0 5px
              text-decoration none
              color #0F83B2
</style>