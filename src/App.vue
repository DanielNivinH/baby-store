<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="stylus">
*
  box-sizing border-box
  margin 0
  font-size 16px
  user-select: none

button
  cursor pointer

main
  flex-grow 1

#app
  display flex
  flex-direction column
  width 100%
  height 100%
  min-height 100vh
  min-width 320px
  position relative
  font-family 'Baloo Bhaina', sans-serif
  font-weight 300
</style>
