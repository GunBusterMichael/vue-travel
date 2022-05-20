/*
  如果用户开启了隐身模式，或关闭了 localStorage 功能，
  在运行到 localStorage 相关代码时，程序会停止运行。
  所以要用 try...catch 来捕获异常。
*/
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { }

const state = {
  /* 先读取 localStorage。如果 localStorage 为 undefined，则将 city 初始化为'北京' */
  city: localStorage.city || '北京',
}

export default state