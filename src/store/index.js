import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    products: [],
    loading: false,
    error: null,
    cart: [],
    cartCount: null,
  },
  mutations: {
    setProduct: (state, payload) => {
      state.products = payload
    },
    addProduct: (state, payload) => {
      state.products.push(payload)
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    addToCart(state, product) {
      state.cart.push(product);
      state.cartCount++;
    }
  },
  actions: {
    getProduct: async (context, payload) => {
      try {
        let {
          data
        } = await Axios.get('http://5c1fddedf3e8d200133b659d.mockapi.io/products');
        context.commit('setProduct', data)
      } catch (error) {
        context.commit('setLoading', true)
      }


    },
    saveProduct: async (context, payload) => {
      let {
        data
      } = await Axios.post('http://5c1fddedf3e8d200133b659d.mockapi.io/products', {
        title: payload.title,
        description: payload.description,
        price: payload.price,
        category: payload.category,
        src: payload.src,
        disable: payload.disable
      });
      context.commit('addProduct', payload)
    },
    setLoading({
      commit
    }, payload) {
      commit('setLoading', payload)
    }
  },
  getters: {
    PRODUCTS: state => {
      return state.products
    },
    productById(state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    },
    CARTCOUNT: state => {
      return state.cartCount
    },
    loading: state => {
      return state.loading
    }
  }
})
