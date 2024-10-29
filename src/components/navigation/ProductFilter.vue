<template>
  <div class="filter">
    <div class="categories">
      <div class="categories__heading">Product categories</div>
      <ProductFilterCategories
      ref="FilterCategories"
      :productCategories="productCategories"
      @set-filters="setFilters"/>
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
          <button class="apply__button" @click="setPriceFilters()">Apply</button>
        </div>
      </div>
  </div>
</template>
<script>
import ProductFilterCategories from '@/components/navigation/ProductFilterCategories.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  name: 'ProductFilter',
  components: {
    VueSlider,
    ProductFilterCategories
  },
  props: {
    productCategories: {
      type: Array,
    },
  },
  data() {
    return {
      price: [5, 100],
      minPrice: 5,
      maxPrice: 100,
    }
  },
  computed: {
    marks() {
      return {
        [this.minPrice]: '$5.00',
        [this.maxPrice]: '$100.00'
      }
    }
  },
  methods: {
    formatter(value) {
      return `$${value.toFixed(2)}`
    },
    setFilters(filter) {
      this.$emit('set-filters', filter)
    },
    setPriceFilters() {
      this.$emit('set-price-filters', this.price)
    },
  },
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