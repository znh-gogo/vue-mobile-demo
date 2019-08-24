import request from './fetch.js'

const api = {
// 例子
  login (data) {
    return request('http://localhost:3000/mobile/api/login', data, 'post')
  },
  register(data) {
    return request('http://localhost:3000/mobile/api/register', data, 'post')
  },


}

export default api
