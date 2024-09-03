<template>
  <div class="product">
    <div class="products-group">
      <Product class="products-group__product"
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-if="showPagination" class="products-pagination">
      <button class="products-pagination__button"
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="updateCurrentPage(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import Product from '@/components/shop/Product.vue'

export default {
  name: 'ProductsGroup',
  components: {
    Product,
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    productsPerPage: {
      type: Number,
      default: 8,
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      const end = start + this.productsPerPage;
      return this.products.slice(start, end);
    },
  },
  methods: {
    updateCurrentPage(page) {
      this.$emit('update:currentPage', page);
    },
  },
};
</script>

<style scoped lang="stylus">
.products-group
  margin 0 auto
  width 90%
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr
  overflow hidden
  grid-column-gap 20px
  grid-row-gap 20px

.products-pagination
  display flex
  justify-content center
  padding 40px 0 0 0
  width 90%
  margin 0 auto

  .products-pagination__button
    background-color white
    border 1px solid #ddd
    margin 0 5px
    padding 5px 10px
    width 40px
    height 40px
    cursor pointer
    border-radius 50px

  .products-pagination__button.active
    background-color #0F83B2
    color white

@media (max-width: 980px)
  .products-group
    grid-template-columns 1fr 1fr 1fr

@media (max-width: 720px)
  .products-group
    width 70%
    grid-template-columns 1fr 1fr

</style>
