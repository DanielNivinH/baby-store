<template>
  <main class="main">
    <section class="main__shop">
        <div class="shop-content">
          <div  class="shop-content__heading">Play, learn, & grow!</div>
          <div class="shop-content__text">Crafting smile with every toy, made for learning, fun and growth</div>
          <button class="shop-content__button">Shop now</button>
        </div>
    </section>
    <section class="main__find">
      <div class="find">
        <p class="find__heading">Find the perfect Toy</p>
        <p class="find__text">Our Collections</p>
      </div>
      <div class="find-navigation">
        <div class="find-button"><img src="@/assets/imgs/png/playsets.png" class="find-button__img" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Playsets</div></div>
        <div class="find-button"><img src="@/assets/imgs/png/control.png" class="find-button__img" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Control Toys</div></div>
        <div class="find-button"><img src="@/assets/imgs/png/educational.png" class="find-button__img" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Educational Toys</div></div>
        <div class="find-button"><img src="@/assets/imgs/png/eco-friendly.png" class="find-button__img" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Eco-Frienly Toys</div></div>
        <div class="find-button"><img src="@/assets/imgs/png/stuffed.png" class="find-button__img" @contextmenu.prevent @dragstart.prevent><div class="find-button__text">Stuffed Toys</div></div>
      </div>
    </section>
    <section class="main__top-picks">
      <div class="top-picks">
        <div class="top-pick__heading">Top picks for your little ones</div>
        <div class="filters">
          <button class="filter filters--featured">Featured</button>
          <button class="filter filters--best-seller">Best seller</button>
          <button class="filter filters--new-arrivals">New arrivals</button>
        </div>
      </div>
      <ProductsGroup
        :showPagination="false"
      />
    </section>
  </main>
</template>
<script>
import ProductsGroup from '@/components/shop/ProductsGroup.vue'

export default {
  name: 'HomePage',
  components: {
    ProductsGroup,
  }
}
</script>
<style scoped lang="stylus">
.main 
  width 100%

  .main__shop
    width: 100%
    background-image url('@/assets/imgs/jpg/shop-now.jpg')
    background-size: cover
    background-repeat: no-repeat
    display flex
    justify-content flex-end
    background-size: contain
    align-items center
    height: auto;
    aspect-ratio: 16/9
    

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
    padding 60px 0 30px 0

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
        padding 0 0 10px 0

      .filters
        display flex
        justify-content center
        padding 0 0 20px 0

        .filter
          height 35px
          width 140px
          border none
          background-color white
          

        .filter:hover
          background-color #F8EDF8
          border-radius 20px
          transition 0.5s

@media (max-width: 980px)
  .main 
    width 100%

    .main__shop
      width: 100%
      background-image url('@/assets/imgs/jpg/shop-now.jpg')
      background-size: cover
      background-repeat: no-repeat
      display flex
      justify-content flex-end
      background-size: contain
      align-items center
      height: auto;
      aspect-ratio: 16/9
      

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
      padding 60px 0 30px 0

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

          .find-button__text
            padding 10px 0 0 0
            font-size 16px
            font-weight 600

    .main__top-picks
      width 100%
      display flex
      flex-direction column
      align-items center

      .top-picks

        .top-pick__heading
          font-size 34px
          font-weight 700
          padding 0 0 10px 0

        .filters
          display flex
          justify-content center
          padding 0 0 20px 0

          .filter
            height 35px
            width 140px
            border none
            background-color white
            

          .filter:hover
            background-color #F8EDF8
            border-radius 20px
            transition 0.5s

@media (max-width: 720px)
  .main 
    width 100%

    .main__shop
      width: 100%
      background-image url('@/assets/imgs/jpg/shop-now.jpg')
      background-size: cover
      background-repeat: no-repeat
      display flex
      justify-content flex-end
      background-size: contain
      align-items center
      height: auto;
      aspect-ratio: 16/9
      

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
      padding 60px 0 30px 0

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

          .find-button__text
            padding 10px 0 0 0
            font-size 16px
            font-weight 600

    .main__top-picks
      width 100%
      display flex
      flex-direction column
      align-items center

      .top-picks

        .top-pick__heading
          font-size 34px
          font-weight 700
          padding 0 0 10px 0

        .filters
          display flex
          justify-content center
          padding 0 0 20px 0

          .filter
            height 35px
            width 140px
            border none
            background-color white
            

          .filter:hover
            background-color #F8EDF8
            border-radius 20px
            transition 0.5s

</style>