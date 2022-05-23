import requestAxios from '../request'

const getHomeInfo = function (params) {
  return requestAxios({
    method: 'get',
    url: '/index.json',
    params
  })
}

export default getHomeInfo