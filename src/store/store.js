import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const loadCartFromLocalStorage= () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const store = new Vuex.Store({
  state: {
    users: [],
    currentUser: null,
    cart: loadCartFromLocalStorage(),
    products: [
      { 
        id: 4901,
        name: 'Blocks shape-sorting Toy',
        category: ['playset', 'educational'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 29,
      },
      { 
        id: 8168,
        name: 'Magna etiam tempor orci',
        category: ['control'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 29,
      },
      { 
        id: 3706,
        name: 'Magna etiam tempor orci',
        category: ['playset'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
      { 
        id: 6127,
        name: 'Magna etiam tempor orci',
        category: ['stuffed'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 29,
      },
      { 
        id: 9329,
        name: 'Magna etiam tempor orci',
        category: ['control'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 29,
      },
      { 
        id: 8041,
        name: 'Hape scoot-around',
        category: ['eco-frienly'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
      { 
        id: 8677,
        name: 'Magna etiam tempor orci',
        category: ['eco-frienly'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 29,
      },
      { 
        id: 4576,
        name: 'Magna etiam tempor orci',
        category: ['playset', 'educational'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
      { 
        id: 2408,
        name: 'Magna etiam tempor orci',
        category: ['playset', 'educational'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
      { 
        id: 9672,
        name: 'Magna etiam tempor orci',
        category: ['playset', 'educational'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
      { 
        id: 6921,
        name: 'Magna etiam tempor orci',
        category: ['playset', 'educational'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
      { 
        id: 6126,
        name: 'Magna etiam tempor orci',
        category: ['playset', 'educational'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
      { 
        id: 4510,
        name: 'Magna etiam tempor orci',
        category: ['playset', 'educational'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
      { 
        id: 4931,
        name: 'Magna etiam tempor orci',
        category: ['playset', 'educational'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        interactions: 0,
        rating: 0,
        price: 39,
      },
    ],
  },
  mutations: {
    REGISTER_NEW_USER(state, user) {
      state.users.push(user)
    },
    LOGIN_USER(state, user) {
      state.currentUser = user
    },
    LOGOUT_USER(state) {
      state.currentUser = null
    },
    ADD_TO_CART(state, {product, quantity}) {
      const existingProduct = state.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += quantity
      } else {
        state.cart.push({ ...product, quantity: quantity })
      }
      saveCartToLocalStorage(state.cart)
    },
    REMOVE_FROM_CART(state, productIndex) {
      state.cart.splice(productIndex, 1)
      saveCartToLocalStorage(state.cart)
    },
    UPDATE_PRODUCT_QUANTITY(state, { productId, newQuantity }) {
      const product = state.cart.find(item => item.id === productId)
      if (product) {
        product.quantity = newQuantity
      }
      saveCartToLocalStorage(state.cart)
    },
    CLEAR_ALL_FROM_CART(state){
      state.cart = []
      saveCartToLocalStorage(state.cart)
    } 
  },
  actions: {
    registerNewUser({ commit , state }, newUserData) {
      const userExists = state.users.some(user => user.email === newUserData.email && user.name === newUserData.name)
      if (!userExists) {
        commit ('REGISTER_NEW_USER', newUserData)
        commit ('LOGIN_USER', newUserData)
      } else {
        alert('User already exists')
      }
    },
    loginUser({ commit, state },{ email, password }) {
      const user = state.users.find(user => user.email === email && user.password === password)
      if (user) {
        commit('LOGIN_USER', user);
      } else {
        alert('Invalid credentials');
      }
    },
    logoutUser({ commit, state }) {
      if (state.currentUser){
        commit('LOGOUT_USER');
      } else {
        alert('err')
      }
    },
    addToCart({ commit, state }, {productId, quantity}) {
      const product = state.products.find(product => product.id === productId)
      commit('ADD_TO_CART', {product, quantity});
    },
    removeFromCart({ commit, state }, productId) {
      const productIndex = state.cart.findIndex(item => item.id === productId)
      if (productIndex !== -1) {
        commit('REMOVE_FROM_CART', productIndex)
      }
    },
    updateProductQuantity({ commit }, payload) {
      commit('UPDATE_PRODUCT_QUANTITY', payload)
    },
    clearAllFromCart({commit}){
      commit('CLEAR_ALL_FROM_CART')
    }
  },
  getters: {
    isAuthenticated: state => !!state.currentUser,
    getCurrentUser: state => state.currentUser,
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    }
  }
});

export default store;

