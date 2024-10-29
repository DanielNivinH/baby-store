<template>
  <div class="dropdown">
    <div class="dropdown-button" @click="dropDownAction">
      <div class="dropdown-button__name">{{ dropDownName }}</div>
      <img class="dropdown-button__arrow" :src="activeFilterIcons()">
    </div>
    <div class="dropdown__options" v-if="showOptions">
      <button class="dropdown__options--button" v-for="option in dropDownOptions" :key="option.id" @click="dropdownOptionAction(option.id)" >{{ option.name }}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelectDropDown',
  props: {
    dropDownName: String,
    dropDownOptions: Array,
  },
  data() {
    return {
      showOptions: false
    }
  },
  methods: {
    dropDownAction(){
      this.showOptions = !this.showOptions
    },
    dropdownOptionAction(optionId){
      this.$emit('dropdown-option-action', optionId)
      if (optionId) {
        this.dropDownAction()
      }
    },
    activeFilterIcons(){
      if (this.showOptions) {
        return require('@/assets/imgs/svg/arrows/Up.svg')
      } else {
        return require('@/assets/imgs/svg/arrows/Down.svg')
      }
    }
  },
}
</script>
<style scoped lang="stylus">
.dropdown
  display flex
  position relative
  align-items center
  flex-direction column

  .dropdown-button
    display grid
    grid-template-columns 1fr 1fr

    .dropdown-button__arrow
      width 30px

  .dropdown__options
    display grid
    position absolute
    border-radius 5px
    border 2px solid #d3d3d3
    background-color white
    overflow: hidden
    height auto
    top 32px
    width 250px
    z-index 100
    box-shadow: 0 3px 10px rgba(0, 0, 0, .2);
    
    .dropdown__options--button
      background none
      border none
      height 30px
      width auto

    .dropdown__options--button:hover
      background-color #d3d3d3
      transition 0.5s
</style>