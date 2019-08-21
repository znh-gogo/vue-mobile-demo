import request from './fetch.js'

const api = {
// 例子
  login (data) {
    return request('http://47.107.52.228:80/m/auth/login.action', data, 'post')
  },
  getCode(num,data) {
    return request('http://47.107.52.228:80/m/phone/'+num+'/code.action', data, 'post')
  },
  

}

export default api
