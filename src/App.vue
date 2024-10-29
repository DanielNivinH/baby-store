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
  min-height: calc(100vh - 215px - (100vw / 2.54))

#app
  position relative
  font-family Baloo Bhaina, sans-serif
  font-weight: 300;
  min-width 740px
</style>
