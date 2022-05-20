import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

/* 使用 vuex 插件 */
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})