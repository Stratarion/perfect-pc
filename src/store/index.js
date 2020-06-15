
import Vue from 'vue'
import Vuex from 'vuex'
import active_setup from './active_setup';
import products from './products';

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    active_setup,
    products
  },
})

