<template>
  <div class="filter">
    <div class="categories">
      <div class="categories__heading">Product categories</div>
      <div class="categorie">
        <img class="categorie__img" src="@/assets/imgs/svg/Plus.svg">
        <div class="categorie__text">Playsets</div>
      </div>
      <div class="categorie">
        <img class="categorie__img" src="@/assets/imgs/svg/Plus.svg">
        <div class="categorie__text">Control Toys</div>
      </div>
      <div class="categorie">
        <img class="categorie__img" src="@/assets/imgs/svg/Plus.svg">
        <div class="categorie__text">Educational Toys</div>
      </div>
      <div class="categorie">
        <img class="categorie__img" src="@/assets/imgs/svg/Plus.svg">
        <div class="categorie__text">Eco-Frienly Toys</div>
      </div>
      <div class="categorie">
        <img class="categorie__img" src="@/assets/imgs/svg/Plus.svg">
        <div class="categorie__text">Stuffed Toys</div>
      </div>
    </div>
    <div class="price">
      <div class="price__heading">Filter by price</div>
        <vue-slider
        v-model="price"
        :min="minPrice"
        :max="maxPrice"
        :dotSize="14"
        :height="5"
        :tooltip="'always'"
        :tooltipPlacement="'top'"
        :formatter="formatter"
        :marks="marks"
        class="slider"
        ></vue-slider>
        <div class="price__apply">
          <button class="apply__button" @click="applyFilter">Apply</button>
        </div>
      </div>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  name: 'ProductFilter',
  components: {
    VueSlider
  },
  data() {
    return {
      price: [20, 200],
      minPrice: 20,
      maxPrice: 200,
    }
  },
  methods: {
    formatter(value) {
      return `$${value.toFixed(2)}`
    },
    applyFilter() {
      console.log(`Filter applied: ${this.price[0]} - ${this.price[1]}`)
    }
  },
  computed: {
    marks() {
      return {
        [this.minPrice]: '$20.00',
        [this.maxPrice]: '$200.00'
      }
    }
  }
}
</script>
<style scoped lang="stylus">
.filter
  .categories
    border-radius 10px
    border 1px solid lightgray
    padding 20px 0 20px 10px
    margin 0 0 20px 0

    .categories__heading
      font-size 20px
      font-weight bold

    .categorie
      display flex

      .categorie__img
        padding 0 5px 0 0

  .price
    border-radius 10px
    border 1px solid lightgray
    padding 20px 0 20px 10px

    .price__heading
      font-size 20px
      font-weight bold

    .slider
      margin 50px 50px 0 40px
  
    .price__apply
      display flex
      justify-content flex-end
      margin 35px 50px 0 40px

      .apply__button
        background-color #0F83B2
        color white
        width 120px
        height 45px
        border none
        border-radius 10px
</style>