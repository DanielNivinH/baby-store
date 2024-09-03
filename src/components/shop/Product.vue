<template>
  <div class="product">
    <div class="product-heading">
      <div class="product-heading__add">
        <div class="availability">SALE</div>
        <div class="add">
          <img class="add__wishlist" src="@/assets/imgs/svg/Heart.svg" @contextmenu.prevent @dragstart.prevent/>
          <img class="add__cart" src="@/assets/imgs/svg/Cart-2.svg" @contextmenu.prevent @dragstart.prevent/>
        </div>
      </div>
      <img class="product-heading__img" @click="goToProductPage(product.id)" :src="getProductImg()" 
        @contextmenu.prevent 
        @dragstart.prevent>
    </div>
    <div class="product-view" @click="goToProductPage(product.id)">
      <p class="product-view__name">{{product.name}}</p>
      <p class="product-view__price">${{product.price}}.00</p>
      <star-rating v-model="rating" :disabled="true"></star-rating>
    </div>
  </div>
</template>
<script>
import StarRating from '@/components/shop/StarRating.vue'

export default {
  name: 'Product',
  components: {
    StarRating,
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      rating: this.product.rating
    }
  },
  methods: {
    getProductImg(){
      return require(`@/assets/imgs/png/products/${this.product.id}.png`)
    },
    goToProductPage(productId) {
      this.$router.push(`/product/${productId}`)
    }
  },
}
</script>
<style scoped lang="stylus">
.product
  height 60%
  border-radius 15px

  .product-heading
    position relative
    border-radius 15px

    .product-heading__add
      top 15px
      position absolute
      display flex
      width 100%
      justify-content space-between
      padding 0 20px 0 10px

      .availability
        background-color #F27373
        color white
        border-radius 20px
        width 60px
        height 25px
        text-align center

      .add
        display flex
        flex-direction column

        .add__wishlist
          border none
          width 20px
          padding 0 0 8px 0

        .add__cart
          border none
          width 20px
          padding 0 0 8px 0

    .product-heading__img
      cursor pointer
      top 0
      z-index -10
      width 100%

  .product-view

    .product-view__name
      cursor pointer
      font-weight 500
      font-size 18px

    .product-view__price
      color #1BBF00
      font-weight 700
      font-size 20px
      height 28px

.product:hover
  transition 0.5s
</style>