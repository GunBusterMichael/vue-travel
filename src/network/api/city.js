import requestAxios from '../request'

const getCityInfo = () => {
  return requestAxios({
    method: 'get',
    url: '/city.json',
  })
}

export default getCityInfo