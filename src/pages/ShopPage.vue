<template>
  <main class="main">
    <Roots class="roots" />
    <div class="shop">
      <ProductFilter
        class="filter"
        ref="ProductFilter"
        @set-filters="setFilters"
        @set-price-filters="setPriceFilters"
        :productCategories="productCategories"
      />
      <FilterModal ref="navigationModal">
        <ProductFilter
          class="show-filter"
          ref="ProductFilter"
          @set-filters="setFilters"
          @set-price-filters="setPriceFilters"
          :productCategories="productCategories"
        />
      </FilterModal>
      <div class="products">
        <div class="products-settings">
          <div class="settings">
            <img
              class="settings__filter"
              src="@/assets/imgs/svg/Filter.svg"
              @click="openFilterModal"
            />
            <SelectDropDown
              ref="SelectDropdown"
              @dropdown-option-action="sortFilter"
              :dropDownOptions="dropDownParameters.dropDownOptions"
              :dropDownName="dropDownParameters.dropDownName"
            />
          </div>
          <div class="products-settings__shown">
            Showing 1-{{ productsPerPage }} of {{ products.length }} results
          </div>
        </div>
        <ProductsGroup
          :currentPage.sync="currentPage"
          :productsPerPage="productsPerPage"
          :showPagination="true"
          :products="filteredProducts"
        />
      </div>
    </div>
  </main>
</template>
<script>
import ProductsGroup from "@/components/shop/ProductsGroup.vue";
import ProductFilter from "@/components/navigation/ProductFilter.vue";
import FilterModal from "@/components/navigation/FilterModal.vue";
import SelectDropDown from "@/components/navigation/SelectDropDown.vue";
import Roots from "@/components/navigation/Roots.vue";

export default {
  name: "ShopPage",
  components: {
    ProductsGroup,
    ProductFilter,
    FilterModal,
    SelectDropDown,
    Roots,
  },
  data() {
    return {
      dropDownParameters: {
        dropDownName: "Default sorting",
        dropDownOptions: [
          { name: "Higher price to Lower price", id: 1 },
          { name: "Lower price to Higher price", id: 2 },
        ],
      },
      currentPage: 1,
      productsPerPage: 8,
      filteredProducts: [],
      showFilterModal: false,
      activeFilters: [],
      productCategories: [
        { name: "Playsets", tag: "playset" },
        { name: "Control Toys", tag: "control" },
        { name: "Educational Toys", tag: "educational" },
        { name: "Eco-Frienly Toys", tag: "eco-frienly" },
        { name: "Stuffed Toys", tag: "stuffed" },
      ],
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    selectedFilter() {
      return this.$route.params.filter;
    },
  },
  methods: {
    sortFilter(filterId) {
      if (filterId === 1 || !filterId) {
        this.dropDownParameters.dropDownName = "Higher price";
        this.filteredProducts.sort((a, b) => b.price - a.price);
      }
      if (filterId === 2) {
        this.dropDownParameters.dropDownName = "Lower price";
        this.filteredProducts.sort((a, b) => a.price - b.price);
      }
      this.resetPages();
    },
    openFilterModal() {
      this.$refs.navigationModal.openModal();
    },
    resetPages() {
      this.currentPage = 1;
    },
    setFilters(filter) {
      const getRepeatedFilters = this.activeFilters.filter(
        (repeatedFilter) => repeatedFilter === filter
      );
      if (getRepeatedFilters == false) {
        this.activeFilters.push(filter);
      } else {
        const fixedFilters = this.activeFilters.filter(
          (repeatedFilter) => repeatedFilter !== filter
        );
        this.activeFilters = fixedFilters;
      }
      this.UpdateProducts(filter);
      this.$refs.ProductFilter.setPriceFilters();
      this.resetPages();
    },
    setPriceFilters(price) {
      this.setDefaultProducts();
      this.UpdateProducts();
      const applyPriceFilter = this.filteredProducts.filter(
        (product) => product.price >= price[0] && product.price <= price[1]
      );
      this.filteredProducts = applyPriceFilter;
      this.resetPages();
    },
    setDefaultProducts() {
      this.filteredProducts = this.products;
      this.$refs.SelectDropdown.dropdownOptionAction();
    },
    UpdateProducts() {
      const products = this.products;
      const filtered = products.filter((product) =>
        this.activeFilters.some((filterCategory) =>
          product.category.includes(filterCategory)
        )
      );
      if (filtered.length !== 0) {
        this.filteredProducts = filtered;
      } else {
        this.setDefaultProducts();
      }
    },
    setMountedFilters(filter) {
      this.$refs.ProductFilter.$refs.FilterCategories.setFilters(filter);
      this.$refs.SelectDropdown.dropdownOptionAction();
    },
  },
  mounted() {
    if (this.selectedFilter) {
      this.setMountedFilters(this.selectedFilter);
    } else {
      this.setDefaultProducts();
    }
  },
};
</script>
<style scoped lang="stylus">
.main
  max-width 1080px
  width 90%
  margin 0 auto

  .shop
    display grid
    padding 0 0 60px 0
    grid-template-columns 1fr 3fr

    .products
      display flex
      flex-direction column
      align-items center

      .products-settings
        display flex
        justify-content space-between
        width 90%
        padding 20px 0 3% 0
        align-items center

        .settings
          display grid
          grid-template-columns repeat(2, 1fr)

          .settings__filter
            width 32px
            display none

        .products-settings__shown
          line-height: 1.2

@media (max-width: 880px)
  .main
    width 90%
    margin 0 auto

    .shop
      display grid
      padding 0 0 60px 0
      justify-content center
      align-items center
      grid-template-columns 1fr

      .filter
        display none

      .show-filter
        display block

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
          padding 20px 0 15px 0

          .settings
            display grid
            grid-template-columns 1fr 2fr
            align-items center

            .settings__filter
              width 30px
              display block
              margin 0 auto

            .settings__sort
              text-align center
</style>
