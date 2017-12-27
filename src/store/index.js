import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import state from './state'
import oces from './modules/index' // OCES

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    oces
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
