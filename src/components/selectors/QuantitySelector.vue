<template>
  <div class="selector-container">
    <button class="selector-container__minus" @click="decrease">-</button>
    <button class="selector-container__number">{{quantity}}</button>
    <button  class="selector-container__plus" @click="increase">+</button>
  </div>
</template>
<script>
export default {
  name: 'QuantitySelector',
  props: {
    quantity: {
      type: Number,
      default: 1
    }
  },

  methods: {
    decrease(){
      if (this.quantity != 1) {
        this.$emit('update-quantity', this.quantity - 1)
      }
    },
    increase(){
      if (this.quantity < 20) {
        this.$emit('update-quantity', this.quantity + 1)
      }
    }
  },
}
</script>
<style scoped lang="stylus">
.selector-container
  width 100%
  height 30px
  border 2px solid #0F83B2
  display flex
  justify-content space-between
  border-radius 10px

  .selector-container__minus
    border none
    width 100%
    background-color white
    border-radius 10px
    font-size clamp(12px, 3vw, 14px)
    padding 0

  .selector-container__number
    border none
    width 100%
    background-color white
    font-weight 700
    font-size clamp(12px, 3vw, 14px)
    border-left 2px solid #0F83B2
    border-right 2px solid #0F83B2
    padding 0

  .selector-container__plus
    font-size clamp(12px, 3vw, 14px)
    border none
    width 100%
    background-color white
    border-radius 10px
    padding 0
</style>