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

#app
  font-family Roboto, sans-serif;
  font-weight: 300;

</style>
