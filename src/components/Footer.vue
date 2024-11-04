<template>
  <footer class="footer">
    <div class="footer__Content">
      <div class="social">
        <img class="social__logo" src="@/assets/imgs/svg/Store-Logo.svg" alt="logo">
        <p class="social__text">Nunc consequat interdum varius sit amet mattis.</p>
        <div class="social__buttons">
          <img class="social__button social__buttons--instagram" src="@/assets/imgs/svg/Instagram.svg" @contextmenu.prevent @dragstart.prevent>
          <img class="social__button social__buttons--twitter" src="@/assets/imgs/svg/Twitter.svg" @contextmenu.prevent @dragstart.prevent>
          <img class="social__button social__buttons--facebook" src="@/assets/imgs/svg/Facebook.svg" @contextmenu.prevent @dragstart.prevent>
          <img class="social__button social__buttons--pinterest" src="@/assets/imgs/svg/Pinterest.svg" @contextmenu.prevent @dragstart.prevent>
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
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped lang="stylus">
.footer
  background-image url('@/assets/imgs/jpg/Footer.jpg')
  width 100%
  height auto
  display flex
  justify-content center
  background-size contain
  background-repeat no-repeat
  aspect-ratio: 2.54 / 1

  .footer__Content
    width 100%
    max-width 1080px
    height 100%
    display grid
    gap 3%
    justify-content center
    align-items center
    grid-template-columns repeat(3, 1fr)

    .social
      width 100%
      height 50%
      padding 0 0 0 20px

      .social__logo
        width 75%

      .social__text
        width 90%
        padding 10px 0 20px 0

      .social__buttons
        display flex

        .social__button
          cursor pointer
          padding 0 10px 0 0

    .account
      width 100%
      height 50%

      .account__heading
        padding 0 0 15px 0
        font-weight 500
        font-size 18px

      .account__routes
        display flex
        flex-direction column

        .account__route
          text-decoration none
          padding 0 0 8px 0
          color black
          font-size 16px

    .services
      width 100%
      height 50%

      .services__heading
        padding 0 0 15px 0
        font-weight 500
        font-size 18px

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

@media (max-width: 720px)
  .footer
    background-image url('@/assets/imgs/jpg/Footer.jpg')
    width 100%
    height auto
    display flex
    justify-content center
    align-items center
    background-size contain
    background-repeat no-repeat
    aspect-ratio: 2.54 / 1

    .footer__Content
      width 100%
      max-width 1080px
      height 90%
      padding 0 5% 0 5%
      display grid
      gap 3%
      justify-content center
      align-items center
      grid-template-columns repeat(3, 1fr)

      .social
        width 100%
        height 100%
        padding 0

        .social__logo
          width 75%

        .social__text
          width 90%
          padding 0 0 0 0
          font-size clamp(8px, 2vw, 16px)

        .social__buttons
          display flex

          .social__button
            width 18%
            cursor pointer
            padding 0 2% 0 0

      .account
        width 100%
        height 100%

        .account__heading
          padding 0 0 0 0
          font-weight 500
          font-size clamp(10px, 2.5vw, 16px)

        .account__routes
          display flex
          flex-direction column

          .account__route
            text-decoration none
            padding 0 0 0 0
            color black
            font-size clamp(8px, 2vw, 16px)

      .services
        width 100%
        height 100%

        .services__heading
          padding 0 0 0 0
          font-weight 500
          font-size clamp(10px, 2.5vw, 16px)

        .schedules

          .schedules__days
            padding 0 0 0 0
            font-size clamp(8px, 2vw, 16px)

          .schedules__hours
            padding 0 0 0 0
            font-size clamp(8px, 2vw, 16px)

          .contacts

            .number
              display flex
              padding 0 0 0 0
              font-size clamp(6px, 2vw, 16px)

              .number__text
                font-size clamp(6px, 2vw, 16px)

              .number__link
                padding 0 0 0 5px
                text-decoration none
                color #0F83B2
                font-size clamp(6px, 2vw, 16px)

            .email
              display flex
              padding 0 0 8px 0
              font-size clamp(6px, 2vw, 16px)

              .email__text
                font-size clamp(6px, 2vw, 16px)

              .email__link
                padding 0 0 0 5px
                text-decoration none
                color #0F83B2
                font-size clamp(6px, 2vw, 16px)
</style>