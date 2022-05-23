const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = {
  /* 配置代理 */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          /* 服务器会自动到 public 文件夹中寻找 mock 文件夹 */
          '^/api': '/mock'
        }
      }
    }
  },

  /* 进行 webpack 配置 */
  chainWebpack: config => {
    /* 配置别名 */
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('styles', path.join(__dirname, './src/assets/styles'))
      .set('components', path.join(__dirname, './src/components'))
      .set('views', path.join(__dirname, './src/views'))
      .set('store', path.join(__dirname, './src/store'))
      .set('router', path.join(__dirname, './src/router'))
      .set('assets', path.join(__dirname, './src/assets'))
      .set('common', path.join(__dirname, './src/common'))
      .set('network', path.join(__dirname, './src/network'))
      .set('public', path.join(__dirname, './public'))
  }
}
