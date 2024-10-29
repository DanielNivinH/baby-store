<template>
  <main class="main">
    <div class="contact">
      <Roots/>
      <div class="contact__heading">Contact</div>
      <section class="contact-information">
        <div class="information-phone">
          <img class="information-phone__img" src="@/assets/imgs/svg/contact/Phone.svg">
          <div class="information-phone__heading">Phone number</div>
          <div class="information-phone__information">123-456-7868</div>
        </div>
        <div class="information-email">
          <img class="information-email__img" src="@/assets/imgs/svg/contact/Envelope.svg">
          <div class="information-email__heading">Email</div>
          <div class="information-email__information">info@example.com</div>
        </div>
        <div class="information-address">
          <img class="information-address__img" src="@/assets/imgs/svg/contact/Address.svg">
          <div class="information-address__heading">Address place</div>
          <div class="information-address__information">1930 marigold lane, way Miami, Flodida USA</div>
        </div>
      </section>
      <section class="contact-us">
        <div class="contact-us__map">
          <img src="@/assets/imgs/png/map.png">
        </div>
        <div class="contact-us-form">
          <div class="contact-us-form__heading">Contact Us</div>
          <input class="contact-us-form__input" type="text" placeholder="Your name">
          <input class="contact-us-form__input" type="text" placeholder="Phone number">
          <input class="contact-us-form__input" type="text" placeholder="Email address">
          <input class="contact-us-form__textarea" type="textarea">
          <button class="contact-us-form__button">Send</button>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import Roots from '@/components/navigation/Roots.vue'
export default {
  name: 'ContactPage',
  components: {
    Roots
  }
}
</script>
<style scoped lang="stylus">
.main 
  width 100%

  .contact
    margin 0 auto
    width 90%

  .contact__heading
    font-weight 700
    font-size 22px

  .contact-information
    display flex
    justify-content space-between
    padding 0 0 50px 0

    .information-phone
      width 32%
      display flex
      flex-direction column
      justify-content center
      align-items center
      border 2px solid #bbbbbb
      border-radius 15px
      padding 10px

      .information-phone__img
        width 10%
        padding 0 0 10px 0

      .information-phone__heading 
        font-weight bold

    .information-email
      width 32%
      display flex
      flex-direction column
      justify-content center
      align-items center
      border 2px solid #bbbbbb
      border-radius 15px
      padding 10px

      .information-email__img
        width 10%
        padding 0 0 10px 0

      .information-email__heading 
        font-weight bold

    .information-address
      width 32%
      display flex
      flex-direction column
      align-items center
      border 2px solid #bbbbbb
      border-radius 15px
      padding 10px

      .information-address__img
        width 10%
        padding 0 0 10px 0

      .information-address__heading 
        font-weight bold

      .information-address__information
        text-align center

  .contact-us
    width 100%
    display flex
    padding 0 0 5% 0

    .contact-us__map
      width 50%

    .contact-us__map img
      width 100%

    .contact-us-form
      width 50%
      margin 0 0 0 20px
      display grid
      flex-direction column
      padding 0 0 0 10px
      grid-template-columns 1fr
      grid-template-rows 2fr 2fr 2fr 2fr 4fr 3fr
      height 100%
      gap 10px

      .contact-us-form__heading
        font-weight bold
        font-size 18px

      .contact-us-form__input
        border 2px solid #bbbbbb
        border-radius 10px

      .contact-us-form__textarea 
        border 2px solid #bbbbbb
        border-radius 10px

      .contact-us-form__button
        background-color #0F83B2
        border-radius 10px
        border none
        color white
        width 20%
        margin 10px 0 0 0
        height 80%
</style>