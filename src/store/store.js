import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [],
    products: [
      { 
        id: 4901,
        name: 'Blocks shape-sorting Toy',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 29,
        rating: 4
      },
      { 
        id: 8168,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 29,
        rating: 4
      },
      { 
        id: 3706,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 5
      },
      { 
        id: 6127,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 29,
        rating: 4
      },
      { 
        id: 9329,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 29,
        rating: 5
      },
      { 
        id: 8041,
        name: 'Hape scoot-around',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 3
      },
      { 
        id: 8677,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 29,
        rating: 5
      },
      { 
        id: 4576,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 2
      },
      { 
        id: 2408,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 2
      },
      { 
        id: 9672,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 2
      },
      { 
        id: 6921,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 2
      },
      { 
        id: 6126,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 2
      },
      { 
        id: 4510,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 2
      },
      { 
        id: 4931,
        name: 'Magna etiam tempor orci',
        category: 'playset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptate facilis voluptatibus, aliquam fugiat nobis sit tempora pariatur illum nisi asperiores dolores ipsum molestiae, aperiam nesciunt id suscipit. Debitis, similique?',
        price: 39,
        rating: 2
      },
    ],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, productIndex) {
      state.cart.splice(productIndex, 1)
    },
    UPDATE_PRODUCT_QUANTITY(state, { productId, newQuantity }) {
      const product = state.cart.find(item => item.id === productId)
      if (product) {
        product.quantity = newQuantity
      }
    }
  },
  actions: {
    addToCart({ commit, state }, productId) {
      const product = state.products.find(product => product.id === productId)
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit, state }, productId) {
      const productIndex = state.cart.findIndex(item => item.id === productId)
      if (productIndex !== -1) {
        commit('REMOVE_FROM_CART', productIndex)
      }
    },
    updateProductQuantity({ commit }, payload) {
      commit('UPDATE_PRODUCT_QUANTITY', payload)
    }
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    }
  }
});

export default store;

