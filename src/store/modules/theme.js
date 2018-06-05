export default {
  state: {
    themeName: 'star'
  },
  mutations: {
    // 设置主题
    setTheme (state, themeName) {
      state.themeName = themeName
    }
  }
}