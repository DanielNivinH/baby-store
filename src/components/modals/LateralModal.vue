<template>
    <div class="container" @click="closeModal" v-if="showNavigationModal">
        <div class="container__modal" @click.stop>
          <div v-if="showHeading" class="modal-heading"/>
          <slot/>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'LateralModal',
    props: {
      showHeading: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        showNavigationModal: false,
      }
    },
    methods: {
      closeModal(){
        this.showNavigationModal = false
      },
      openModal(){
        this.showNavigationModal = true
      },
    }
  }
</script>
<style scoped lang="stylus">
.container
  background-color rgba(92, 92, 92, 50%)
  position fixed
  top 0px
  left 0px
  width 100vw
  height 100%
  z-index 1000
  min-width 740px

  .container__modal
    background-color white
    width 50%
    height 100%
    box-shadow 1px 0px 20px gray
    display flex
    max-width 320px
    align-items center
    flex-direction column

    .modal-heading
      width 100%
      height 51px
      background-image url('@/assets/imgs/svg/Upper-background.svg')
      background-repeat repeat no-repeat
      background-position top center
      background-attachment fixed
      margin 0 0 20px 0
</style>