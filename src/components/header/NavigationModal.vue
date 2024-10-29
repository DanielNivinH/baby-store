<template>
  <LateralModal ref="lateralModal">
    <template v-slot>
      <div class="navigation-modal__buttons">
        <button class="modal__button navigation-modal__buttons--home" @click="goToHome">Home</button>
        <button class="modal__button navigation-modal__buttons--shop" @click="goToShop">Shop</button>
        <button class="modal__button navigation-modal__buttons--contact" @click="goToContact">Contact</button>
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
    closeModal(){
      this.$refs.lateralModal.closeModal()
    },
    goToHome(){
      this.$router.push({ name: 'Home' })
      this.closeModal()
    },
    goToShop(){
      this.$router.push({ name: 'Shop' })
      this.closeModal()
    },
    goToContact(){
      this.$router.push({ name: 'Contact' })
      this.closeModal()
    },
  },
}
</script>
<style scoped lang="stylus">
.navigation-modal__buttons
  width 90%
  height 10vh
  max-height 520px
  display grid
  grid-column-start 1fr
  gap 12px

  .modal__button
    width 100%
    max-height 50px
    background-color #0f83b2
    border none
    border-radius 30px
    color white
    font-size 22px
    font-family: Chalkboard SE, sans-serif
    font-weight bold
</style>
