<template>
  <div class="location">
    <div class="location__root">Home /&nbsp;</div>
    <div class="location__active">{{ currentRouteName }}</div>
  </div>
</template>
<script>
export default {
  name:'Roots',
  data() {
    return {
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>
<style scoped lang="stylus">
.location
  display flex
  padding 5px 0 30px 0

  .location__root
    font-weight bold

  .location__active
    font-weight bold
    color #0F83B2
</style>