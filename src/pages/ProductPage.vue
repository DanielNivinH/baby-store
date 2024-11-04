<template>
  <main class="main">
    <div class="product">
      <div class="product-pictures">
        <div class="pictures-principal">
          <img
            class="pictures-principal__fullscreen"
            src="@/assets/imgs/svg/Fullscreen.svg"
          />
          <img class="pictures-principal__img" :src="getProductImg()" />
        </div>
        <div class="pictures-secondary" v-if="false">
          <img class="picture-secondary" :src="getProductImg()" />
        </div>
      </div>
      <div class="product-info">
        <div class="product-info__heading">{{ product.name }}</div>
        <div class="product-info__price">${{ product.price }}.00</div>
        <div class="product-rating">
          <star-rating
            class="product-rating__stars"
            v-model="rating"
            :disabled="true"
          />
          <div class="product-rating__reviews">(0 Reviews)</div>
        </div>
        <div class="product-info__description">{{ product.description }}</div>
        <div class="product-share">
          <div class="product-share__text">Share this:</div>
          <img
            class="product-share__img"
            src="@/assets/imgs/svg/Instagram-gray.svg"
          />
          <img
            class="product-share__img"
            src="@/assets/imgs/svg/Twitter-gray.svg"
          />
          <img
            class="product-share__img"
            src="@/assets/imgs/svg/Facebook-gray.svg"
          />
          <img
            class="product-share__img"
            src="@/assets/imgs/svg/Pinterest-gray.svg"
          />
        </div>
        <div class="product-options">
          <QuantitySelector
            class="product-options__quantity"
            :quantity="this.quantity"
            @update-quantity="updateQuantity($event)"
          />
          <button
            class="product-options__add"
            @click="addToCart(product.id, quantity)"
          >
            <img src="@/assets/imgs/svg/Cart-white.svg" />Add to cart
          </button>
          <button class="product-options__favorites">
            <img src="@/assets/imgs/svg/Heart.svg" />
          </button>
        </div>
        <div class="product-info">
          <div class="product-info__heading">Short description</div>
          <div class="info-container">
            <div class="info-container__sku">Code: {{ product.id }}</div>
            <div class="info-container__category">
              category: {{ product.category[0] }}
              {{ GotMultipleCategories(product.category[1]) }}
              {{ product.category[1] }}
            </div>
          </div>
        </div>
        <div class="product-cards">
          <div class="product-cards__heading">Guaranteed Safe Checkout</div>
          <div class="cards__imgs">
            <img
              class="cards__img cards__imgs--visa"
              src="@/assets/imgs/svg/cards/Visa.svg"
            />
            <img
              class="cards__img cards__imgs--master"
              src="@/assets/imgs/svg/cards/MasterCard.svg"
            />
            <img
              class="cards__img cards__imgs--american"
              src="@/assets/imgs/svg/cards/American Express.svg"
            />
            <img
              class="cards__img cards__imgs--discover"
              src="@/assets/imgs/svg/cards/Discover Card.svg"
            />
            <img
              class="cards__img cards__imgs--union"
              src="@/assets/imgs/svg/cards/UnionPay.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import QuantitySelector from "@/components/selectors/QuantitySelector.vue";
import StarRating from "@/components/shop/StarRating.vue";

export default {
  name: "ProductPage",
  components: {
    StarRating,
    QuantitySelector,
  },
  data() {
    return {
      rating: 0,
      quantity: 1,
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
  methods: {
    GotMultipleCategories(otherCategory) {
      const categoryConection = "and";
      if (otherCategory) {
        return categoryConection;
      }
    },
    goToCart() {
      this.$router.push({ name: "myCart" });
    },
    updateQuantity(newQuantity) {
      this.quantity = newQuantity;
    },
    getProductImg() {
      return require(`@/assets/imgs/png/products/${this.product.id}.png`);
    },
    addToCart(productId, quantity) {
      this.goToCart();
      this.$store.dispatch("addToCart", { productId, quantity });
    },
  },
  mounted() {
    if (this.product) {
      this.rating = this.product.rating;
    }
  },
};
</script>
<style scoped lang="stylus">
.main
  margin 0 auto
  width 90%
  max-width 1080px

  .product
    padding 5% 0 0 0
    display grid
    grid-template-columns repeat(2, 1fr)

    .product-pictures
      display flex
      align-items center
      justify-content center
      flex-direction column

      .pictures-principal
        position relative
        width 53%
        min-width 240px

        .pictures-principal__fullscreen
          position absolute
          right 10px
          top 20px
          cursor pointer

        .pictures-principal__img
          width 100%

      .pictures-secondary
        width 53%
        min-width 240px
        display grid
        grid-template-columns 1fr 1fr 1fr
        column-gap 10px

        .picture-secondary
          width 100%

    .product-info
      display flex
      flex-direction column
      justify-content center

      .product-info__heading
        font-size 20px
        font-weight bold

      .product-info__price
        font-size 22px
        font-weight bold

      .product-rating
        display flex

        .product-rating__stars
          padding 0 10px 0 0

      .product-info__description
        width 80%
        padding 0 0 20px 0
        line-height 18px

      .product-share
        display grid
        width 28%
        min-width 200px
        grid-template-columns 2fr 1fr 1fr 1fr 1fr
        column-gap 5px

      .product-share__text
        width 80px
        font-weight bold

      .product-share__img
        width 100%

      .product-options
        display grid
        grid-template-columns repeat(2, 2fr) 1fr
        gap 1%
        padding 20px 0 25px 0
        width 60%
        max-width 275px
        justify-content space-between

        .product-options__add
          width 100%
          background-color #0F83B2
          color white
          border-radius 10px
          border none
          display flex
          align-items center
          justify-content space-between
          text-align center
          font-weight 100
          font-size 12px
          padding 0 10px 0 5px

        .product-options__favorites
          border-radius 10px
          border 2px solid lightgray

      .product-info
        display flex
        flex-direction column
        border 2px solid lightgray
        width 80%
        border-radius 10px
        padding 5px 20px 0 20px
        margin 0 0 25px 0

        .product-info__heading
          font-size 17px

        .info-container
          display flex
          justify-content space-between

      .product-cards
        border 2px solid lightgray
        border-radius 10px
        width 80%
        padding 5px 20px 0 20px
        margin 0 0 60px 0

        .product-cards__heading
          font-size 17px
          font-weight bold

        .cards__imgs
          display grid
          grid-template-columns repeat(5, 1fr)
          max-width 250px
          display flex
          justify-content space-between

@media (max-width: 880px)
  .main

    .product
      padding 5% 0 0 0
      display grid
      grid-template-columns 1fr

      .product-pictures
        display flex
        align-items center
        justify-content center
        flex-direction column

        .pictures-principal
          position relative
          width 53%
          min-width 240px
          max-width 280px

          .pictures-principal__fullscreen
            position absolute
            right 10px
            top 20px
            cursor pointer

          .pictures-principal__img
            width 100%

        .pictures-secondary
          width 53%
          min-width 240px
          display grid
          grid-template-columns repeat(3, 1fr)
          column-gap 10px

          .picture-secondary
            width 100%

      .product-info
        margin 0 auto
        display flex
        flex-direction column
        width 85%
        justify-content center

        .product-info__heading
          font-size 20px
          font-weight bold

        .product-info__price
          font-size 22px
          font-weight bold

        .product-rating
          display flex

          .product-rating__stars
            padding 0 10px 0 0

        .product-info__description
          width 100%
          padding 0 0 20px 0
          line-height 18px

        .product-share
          display grid
          width 28%
          min-width 200px
          grid-template-columns 2fr repeat(4, 1fr)
          column-gap 5px

        .product-share__text
          width 80px
          font-weight bold

        .product-share__img
          width 100%

        .product-options
          display grid
          grid-template-columns repeat(2, 2fr) 1fr
          gap 1%
          padding 20px 0 25px 0
          width 100%
          max-width 275px
          justify-content space-between

          .product-options__add
            width 100%
            background-color #0F83B2
            color white
            border-radius 10px
            border none
            display flex
            align-items center
            justify-content space-between
            text-align center
            font-weight 100
            font-size clamp(12px, 3vw, 14px)
            padding 0 10px 0 5px

          .product-options__favorites
            border-radius 10px
            border 2px solid lightgray

        .product-info
          display flex
          flex-direction column
          border 2px solid lightgray
          width 100%
          border-radius 10px
          padding 5px 20px 0 20px
          margin 0 0 25px 0

          .product-info__heading
            font-size 17px

          .info-container
            display flex
            justify-content space-between

        .product-cards
          border 2px solid lightgray
          border-radius 10px
          width 100%
          margin 0 0 90px 0

          .product-cards__heading
            margin 0 auto
            font-size 17px
            line-height 1.2
            font-weight bold

          .cards__imgs
            margin 0 auto
            display grid
            grid-template-columns repeat(5, 1fr)

            .cards__img
              width 100%
</style>
