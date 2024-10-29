<template>
  <main class="main">
    <Roots/>
    <div class="main__heading">Your Cart</div>
    <div v-if="cart.length > 0" class="cart">
      <div class="cart__sections">
        <div class="section cart__sections--product">Product</div>
        <div class="section cart__sections--price">Price</div>
        <div class="section cart__sections--quantity">Quantity</div>
        <div class="section cart__sections--subtotal">Subtotal</div>
        <div class="section cart__sections--action">Action</div>
      </div>
      <div class="cart-product" 
        v-for="product in cart" 
        :key="product.id">
        <div class="product-item">
          <img class="product-item__img" :src="getProductImg(product)">
          <div class="product-item__name">{{ product.name }}</div>
        </div>
        <div class="cart-product__price">${{ product.price }}.00</div>
        <div class="cart-product__quantity">
          <QuantitySelector
            :quantity="product.quantity" 
            @update-quantity="updateQuantity(product.id, $event)"/>
        </div>
        <div class="cart-product__subtotal">${{productSubtotal(product.quantity, product.price)}}.00</div>
        <div class="cart-product__remove">
          <img @click="removeFromCart(product.id)" src="@/assets/imgs/svg/Cross.svg">
        </div>
      </div>
    </div>
    <div class="empty-cart" v-else>
      oh! it looks like you don't have any product added jet...
    </div>
    <div class="options">
      <button class="option options__continue-shopping" @click="goToShop()">Continue Shopping</button>
      <button class="option options__update-card" @click="clearAllFromCart()">Clear Cart</button>
    </div>
    <div class="checkout">
      <div class="calculated-price">
        <div class="calculated-price__heading">Cart total</div>
        <div class="subtotal">
          <div class="subtotal__text">Subtotal</div>
          <div class="subtotal__cost">${{ productTotalPrice }}.00</div>
        </div>
        <div class="total">
          <div class="total__text">Total</div>
          <div class="total__cost">${{ productTotalPrice > 0 && productTotalPrice < 150 ? productTotalPrice + 20 : productTotalPrice }}.00</div>
        </div>
        <button class="calculated-price__checkout">Procced to checkout</button>
      </div>
    </div>
  </main>
</template>
<script>
import QuantitySelector from '@/components/selectors/QuantitySelector.vue'
import Roots from '@/components/navigation/Roots.vue'
export default {
  name: 'CartPage',
  components: {
    Roots,
    QuantitySelector
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    productTotalPrice() {
      return this.cart.reduce((total, product) => {
        return total + (product.price * product.quantity)
      }, 0)
    },
  },
  methods: {
    goToShop(){
      this.$router.push({ name: 'Shop' })
      window.scrollTo({
        top: 0,
      })
    },
    removeFromCart(productId) {
      alert('Product Deleted!')
      this.$store.dispatch('removeFromCart', productId);
    },
    getProductImg(product) {
      return require(`@/assets/imgs/png/products/${product.id}.png`)
    },
    updateQuantity(productId, newQuantity) {
      this.$store.dispatch('updateProductQuantity', { productId, newQuantity })
    },
    clearAllFromCart(){
      this.$store.dispatch('clearAllFromCart')
    },
    productSubtotal(quatity, price) {
      const productSubtotal = quatity * price
      return productSubtotal
    },
  },
}

</script>
<style scoped lang="stylus">
.main
  margin 0 auto
  width 90%

  .main__heading
    font-size 24px
    font-weight 700

  .cart
    width 100%
    margin 0 0 20px 0

    .cart__sections
      background-color #EAEAEA
      display grid
      align-items center 
      grid-template-columns 3fr 1fr 1fr 1fr 1fr
    
      .section
        text-align center

      .cart__sections--product
        text-align initial
        padding 0 0 0 10px

    .cart-product
      display grid
      height 160px
      grid-template-columns 3fr 1fr 1fr 1fr 1fr       
      align-items center 
      border-bottom 2px solid #EAEAEA 

      .product-item
        display flex
        padding 0 0 0 10px
        align-items center

        .product-item__img
          width 140px
      
        .product-item__name
          padding 0 0 0 20px

      .cart-product__price
        text-align center

      .cart-product__quantity
        margin 0 auto

      .cart-product__subtotal
        text-align center

      .cart-product__remove
        margin 0 auto
        cursor pointer

  .empty-cart      
    padding 5% 0 5% 0
    text-align center
    font-weight 700
    font-size 24px
    color gray
    height 100%
    border-bottom 2px solid lightgray

  .options
    display flex
    justify-content flex-end
    padding 40px 0 60px 0
    gap 2%

    .option
      background-color lightgray
      border none
      width 200px
      height 35px
      border-radius 10px

    .option:hover
      background-color #0F83B2
      transition 0.3s
      border none
      border-radius 10px

  .checkout
    display flex
    justify-content flex-end
    margin 0 0 60px 0

    .calculated-price
      width 35%
      border 2px solid lightgray
      border-radius 10px
      padding 10px 2% 0 2%

      .calculated-price__heading
        font-weight bold
        font-size 18px

      .subtotal
        display flex
        justify-content space-between
        width 100%

        .subtotal__text
          font-weight bold

      .total
        display flex
        justify-content space-between
        width 100%

        .subtotal__cost
          font-weight bold

      .calculated-price__checkout
        background-color #FFE926
        width 100%
        height 60px
        font-weight bold
        border-radius 10px
        border none
        margin 0 0 20px 0

@media (max-width: 820px)
  .main

    .options
      display flex
      justify-content space-between
      padding 40px 0 60px 0
      gap 2%

      .option
        background-color lightgray
        border none
        width 50%
        height 35px
        border-radius 10px

    .checkout
      display flex
      justify-content center
      margin 0 0 60px 0

      .calculated-price
        width 100%
        border 2px solid lightgray
        border-radius 10px
        padding 10px 2% 0 2%

</style>