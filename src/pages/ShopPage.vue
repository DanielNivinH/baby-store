<template>
  <main class="main">
    <Roots class="roots"/>
    <div class="shop">
      <ProductFilter class="filter"/>
      <div class="products">
        <div class="products__heading">Educational Toys</div>
        <div class="products-settings">
          <div class="settings">
            <img class="settings__grid" src="@/assets/imgs/svg/Grid.svg">
            <img class="settings__list" src="@/assets/imgs/svg/List.svg">
            <div class="settings__sort">Default sorting</div>
          </div>
          <div class="products-settings__shown">Showing 1-9 of 24 results</div>
        </div>
        <ProductsGroup
        :currentPage.sync="currentPage"
        :productsPerPage="8"
        :showPagination="true"
        />
      </div>
    </div>
  </main>
</template>
<script>
import ProductsGroup from '@/components/shop/ProductsGroup.vue'
import ProductFilter from '@/components/navigation/ProductFilter.vue'
import Roots from '@/components/navigation/Roots.vue'
export default {
  name: 'ShopPage',
  components: {
    ProductsGroup,
    ProductFilter,
    Roots
  },
  data() {
    return {
      currentPage: 1,
    };
  },
}
</script>
<style scoped lang="stylus">
.main
  padding 0 0 0 5%

  .shop
    display grid
    padding 0 0 60px 0
    grid-template-columns 1fr 3fr
    
    .products
      display flex
      flex-direction column
      align-items center

      .products__heading
        font-size 30px
        font-weight bold
        padding 0 0 15px 0
        width 90%

      .products-settings
        display flex
        justify-content space-between
        width 90%
        padding 0 0 15px 0

        .settings
          display grid
          grid-template-columns 1fr 1fr 2fr

@media (max-width: 880px)
  .main
    padding 0 0 0 0

    .roots
      padding 0 0 0 5%

    .shop
      display grid
      padding 0 0 60px 0
      grid-template-columns 1fr

      .filter
        display none
      
      .products
        display flex
        flex-direction column
        align-items center

        .products__heading
          font-size 30px
          font-weight bold
          padding 0 0 15px 0
          width 90%

        .products-settings
          display flex
          justify-content space-between
          width 90%
          padding 0 0 15px 0

          .settings
            display grid
            grid-template-columns 1fr 1fr 2fr
</style>