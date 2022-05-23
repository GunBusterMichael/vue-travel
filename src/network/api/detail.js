import requestAxios from '../request'

const getDetailInfo = function (params) {
  return requestAxios({
    method: 'get',
    url: '/detail.json',
    params
  })
}

export default getDetailInfo