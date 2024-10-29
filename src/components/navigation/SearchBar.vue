<template>
  <div class="search">
    <input placeholder="Search" class="search__input" type="text">
    <div class="search__button"/>
  </div>
</template>
<style scoped lang="stylus">
.search
  display flex
  height 45px
  position relative

  .search__input
    border-radius 26px
    border 2px solid #D4D4D4
    height 100%
    padding 0 0 0 20px

  .search__button
    cursor pointer
    position absolute
    right 0px
    background-color #0F83B2
    background-image url('@/assets/imgs/svg/Search.svg')
    width 45px
    height 45px
    border-radius 45px
    background-repeat no-repeat
    background-position center center
</style>