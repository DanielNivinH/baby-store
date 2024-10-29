<template>
      <div>
        <div class="categorie" v-for="categorie in productCategories" :key="categorie.tag">
          <img class="categorie__img" :src="activeFilterIcons( categorie.tag )">
          <div class="categorie__text" @click="setFilters( categorie.tag )">{{categorie.name}}</div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'ProductFilterCategorie',
  props: {
    productCategories: {
      type: Array,
    },
  },
  data() {
    return {
      activeCategories: {}
    }
  },
  methods: {
    setFilters(filter) {
      this.$set(this.activeCategories, filter, !this.activeCategories[filter])
      this.$emit('set-filters', filter)
    },
    activeFilterIcons(tag){
      if (this.activeCategories[tag]) {
        return require('@/assets/imgs/svg/Minus.svg')
      } else {
        return require('@/assets/imgs/svg/Plus.svg')
      }
    }
  },
}
</script>
<style scoped lang="stylus">
.categorie
  display flex

  .categorie__img
    width 20px
    padding 0 5px 0 0
</style>