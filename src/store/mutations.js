const mutations = {
  changeCity(state, city) {
    state.city = city
    /* 将当前 city 保存到浏览器的 localStorage 中 */
    try {
      localStorage.city = city
    } catch (e) { }
  }
}

export default mutations