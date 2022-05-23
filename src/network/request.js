import axios from 'axios'
/* 导入请求的 config */
import requestConfig from './config/config'

// 创建 axios 实例
/*
  requestAxios 是一个 axios 实例。
  在 request 文件中，对该实例进行最基本的配置：
    baseURL、timeout、请求拦截和响应拦截。

  我们要用这个 axios 实例去请求不同的数据。这些数据可以分为三类：
    home、detail 和 city。这三类就是三种 API。
    所以要将 requestAxios 导出到配置 API 的 js 文件中。
    在配置 API 的文件中，要配置 url、method 和 params。

  在一个 API 中，还有不同的 JSON 数据。
    请求这些不同数据的 url 和 method 是不变的，所以可以在管理 API 的 js 文件中配置。
    但是 params 是不同的，只有在真正请求数据的时候才能确定。
    所以，将管理 API 的 js 文件中，已经设置好 url 和 method 的 requestAxios 实例包裹在一个函数中。这个函数接收一个参数：params 对象，并将这个 params 对象传给 requestAxios 实例，再将这个实例返回出来。
    所以，这个包裹着 requestAxios 实例的函数的作用，就是接收 params 并将配置好 params 的 axios 实例返回。

  在真正要请求数据的 vue 文件中，我们调用包裹 requestAxios 实例的函数，并将 params 值传给这个函数。函数返回出来的 requestAxios 实例就会将数据获取到网页中。
*/
const requestAxios = axios.create({
  baseURL: requestConfig.baseURL,
  timeout: 5000
})

// 请求拦截
requestAxios.interceptors.request.use(
  // 请求成功时进行拦截
  // config 是这次请求的配置
  config => {
    // 在请求发送前做一些处理
    return config
  },

  // 请求失败时进行拦截
  error => {
    /* 返回一个状态为 reject 的 Promise 实例，并会立即执行 catch 方法或 then() 中的第二个函数 */
    Promise.reject(error)
  }
)

// 响应拦截
requestAxios.interceptors.response.use(
  // 响应成功时进行拦截
  // res 是请求到的数据
  res => {
    // 只返回数据中需要展示到页面上的 data
    return res.data.data
  },

  // 响应失败时进行拦截
  error => {
    console.log(error);
  }
)

export default requestAxios