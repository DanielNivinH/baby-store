<template>
  <LateralModal ref="lateralModal">
    <template v-slot>
      <div class="navigation-modal__buttons">
        <button class="modal__button navigation-modal__buttons--home" @click="goToHome">Home</button>
        <button class="modal__button navigation-modal__buttons--shop" @click="goToShop">Shop</button>
        <button class="modal__button navigation-modal__buttons--pages">Pages</button>
        <button class="modal__button navigation-modal__buttons--blog">Blog</button>
        <button class="modal__button navigation-modal__buttons--contact">Contact</button>
      </div>
    </template>
  </LateralModal>
</template>
<script>
import LateralModal from '@/components/modals/LateralModal.vue'

export default {
  name: 'NavigationModal',
  components: {
    LateralModal
  },
  methods: {
    openModal(){
      this.$refs.lateralModal.openModal()
    },
    goToHome(){
      this.$router.push({ name: 'Home' })
    },
    goToShop(){
      this.$router.push({ name: 'Shop' })
    },
  },
}
</script>
<style scoped lang="stylus">
.navigation-modal__buttons

  width 90%
  height 40vh
  max-height 520px
  display grid
  grid-column-start 1fr
  gap 12px
  padding 20px 0 0 0

  .modal__button
    width 100%
    max-height 80px
    background-color #0f83b2
    border none
    border-radius 30px
    color white
    font-size 22px
    font-family: Chalkboard SE, sans-serif
    font-weight bold
</style>
