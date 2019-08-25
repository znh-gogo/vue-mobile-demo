import request from './fetch.js'

const api = {
// 例子
  login (data) {
    return request('http://localhost:3000/mobile/api/login', data, 'post')
  },
  register(data) {
    return request('http://localhost:3000/mobile/api/register', data, 'post')
  },
  showAccount(id,data) {
    return request('http://localhost:3000/mobile/api/showAccount/'+id,data, 'post')
  },
  changeNickname(data) {
    return request('http://localhost:3000/mobile/api/updateNickname', data, 'post')
  },
  changeDescription(data) {
    return request('http://localhost:3000/mobile/api/updateDescription', data, 'post')
  },
  changeEmail(data) {
    return request('http://localhost:3000/mobile/api/updateEmail', data, 'post')
  },
  changeTelephone(data) {
    return request('http://localhost:3000/mobile/api/updateTelephone', data, 'post')
  },
  changePassword(data) {
    return request('http://localhost:3000/mobile/api/updatePassword', data, 'post')
  },
  changeHeadimg(data) {
    return request('http://localhost:3000/mobile/api/updateHeadimg', data, 'post')
  },
  uploadImg(data) {
    return request('http://localhost:3000/mobile/api/upload', data, 'post')
  },
}

export default api
