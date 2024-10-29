<template>
  <main class="main">
    <section class="main__shop">
        <div class="shop-content">
          <div  class="shop-content__heading">Play, learn, & grow!</div>
          <div class="shop-content__text">Crafting smile with every toy, made for learning, fun and growth</div>
          <button class="shop-content__button" @click="goToShop()">Shop now</button>
        </div>
    </section>
    <section class="main__find">
      <div class="find">
        <p class="find__heading">Find the perfect Toy</p>
        <p class="find__text">Our Collections</p>
      </div>
      <div class="find-navigation">
        <div class="find-button"><img src="@/assets/imgs/png/playsets.png" class="find-button__img"  @click="goToShop('playset')" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Playsets</div></div>
        <div class="find-button"><img src="@/assets/imgs/png/control.png" class="find-button__img" @click="goToShop('control')" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Control Toys</div></div>
        <div class="find-button"><img src="@/assets/imgs/png/educational.png" class="find-button__img" @click="goToShop('educational')" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Educational Toys</div></div>
        <div class="find-button"><img src="@/assets/imgs/png/eco-friendly.png" class="find-button__img" @click="goToShop('eco-frienly')" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Eco-Frienly Toys</div></div>
        <div class="find-button"><img src="@/assets/imgs/png/stuffed.png" class="find-button__img" @click="goToShop('stuffed')" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Stuffed Toys</div></div>
      </div>
    </section>
    <!-- <section class="main__top-picks">
      <div class="top-picks">
        <div class="top-pick__heading">Top picks for your little ones</div>
      </div>
      <ProductsGroup
        :showPagination="false"
        :products="products"
      />
    </section> -->
    <section class="main__frames">
      <div class="frames-container">
        <div class="frames-container__discover"/>
        <div class="frames-container__discount">
          <div class="discount-data">
            <div class="discount-data__heading">Eco - Frienly Toys</div>
            <div class="discount-data__text">Flash sale 30%, extra discount for loyal customers</div>
            <button class="discount-data__button" @click="goToShop()">Shop now</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
// import ProductsGroup from '@/components/shop/ProductsGroup.vue'

export default {
  name: 'HomePage',
  components: {
    // ProductsGroup,
  },
  data() {
    return {
      topProducts: null,
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    goToShop(selectedFilter){
      this.$router.push({ name: 'Shop', params: { filter: selectedFilter } })
      window.scrollTo({
        top: 0,
      })
    },
    getProducts(){
      this.topProducts = this.products
    }
  },
  mounted() {
    this.getProducts()
  },
}
</script>
<style scoped lang="stylus">
.main 
  width 100%

  .main__shop
    width: 100%
    background-image url('@/assets/imgs/jpg/shop-now.jpg')
    background-size cover
    background-repeat no-repeat
    display flex
    justify-content flex-end
    background-size contain
    align-items center
    height auto
    aspect-ratio 16/9
    
    .shop-content
      width 50%

      .shop-content__heading
        font-weight 800
        font-size 62px
        line-height 1.0
        padding 0 20px 0 0
        color #1096B5
        text-shadow:
          4px 0 0 #ffffff,
          4px 4px 6px rgba(0, 0, 0, 0.3); 
      
      .shop-content__text
        font-weight 500
        color #375259
        line-height 1.2
        font-size 16px
        width 350px
        padding 20px 0 20px 0
      
      .shop-content__button
        background-color #FFE926
        width 180px
        height 50px
        border-radius 30px
        border none

  .main__find
    display flex
    flex-direction column
    align-items center
    padding 60px 0 8vw 0

    .find
      padding 0 0 40px 0
      
      .find__heading
        font-weight 400
        line-height 30px
        font-family Chalkboard SE, sans-serif
        font-size 34px
      
      .find__text
        text-align center

    .find-navigation
      display flex
      justify-content space-between
      width 80%

      .find-button
        display flex
        flex-direction column
        align-items center
        cursor pointer

        .find-button__img
          width 12vw
          height 9vw
          min-width 100px
          min-height 80px

        .find-button__text
          padding 10px 0 0 0
          font-size 16px
          font-weight 600

  .main__top-picks
    width 100%
    display flex
    flex-direction column
    align-items center
    padding 0 0 60px 0

    .top-picks

      .top-pick__heading
        font-size 34px
        font-weight 700
        padding 0 0 30px 0

  .main__frames
    display flex
    justify-content center
    padding 0 0 15% 0

    .frames-container
      width 90%
      display flex

      .frames-container__discover
        width 50%
        margin 10px
        background-image url('@/assets/imgs/png/discover-banner.png')
        background-size: cover
        background-repeat: no-repeat
        aspect-ratio: 16/9

      .frames-container__discount
        width 50%
        margin 10px
        background-image url('@/assets/imgs/png/discount-banner.png')
        background-size: cover
        background-repeat: no-repeat
        aspect-ratio: 16/9
        display flex
        justify-content flex-end
        align-items center

        .discount-data  
          width 55%

          .discount-data__heading
            font-size 20px
            font-weight bold
            color #1096B5
            text-shadow 0px 2px white

          .discount-data__text
            color #5f5f5f
            width 90%
            line-height 20px
            padding 0 0 5px 0

          .discount-data__button
            background-color #FFE926
            height 35px
            font-size 14px
            border-radius 30px
            border none
            width 90px

@media (max-width: 980px)
  .main 

    .main__find

      .find-navigation

        .find-button

          .find-button__img
            width 12vw
            height 9vw

    .main__top-picks
      width 100%
      display flex
      flex-direction column
      align-items center

@media (max-width: 720px)
  .main

    .main__find

      .find-navigation
        display grid
        grid-template-columns: 1fr 1fr
        grid-row-gap: 50px;
        width 45%

      .find-navigation > :nth-child(5)
        grid-column: 1 / -1
        justify-self: center

        .find-button
          display flex
          flex-direction column
          align-items center
          cursor pointer

          .find-button__img
            width 12vw
            height 9vw

    .main__frames
      display flex
      justify-content center
      padding 0 0 15% 0

      .frames-container
        width 60%
        display flex
        flex-direction column

        .frames-container__discover
          width 100%
          margin 10px
          background-image url('@/assets/imgs/png/discover-banner.png')
          background-size: cover
          background-repeat: no-repeat
          aspect-ratio: 16/9

        .frames-container__discount
          width 100%
          margin 10px
          background-image url('@/assets/imgs/png/discount-banner.png')
          background-size: cover
          background-repeat: no-repeat
          aspect-ratio: 16/9
          display flex
          justify-content flex-end
          align-items center

          .discount-data
            width 55%

            .discount-data__heading
              font-size 20px
              font-weight bold
              color #1096B5
              text-shadow 0px 2px white

            .discount-data__text
              color #5f5f5f
              width 90%
              line-height 20px
              padding 0 0 5px 0

            .discount-data__button
              background-color #FFE926
              height 35px
              font-size 14px
              border-radius 30px
              border none
              width 90px
</style>