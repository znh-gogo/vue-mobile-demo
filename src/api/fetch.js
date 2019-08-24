import axios from 'axios'
import { Toast } from 'mint-ui'
import router from '@/router'

const service = axios.create({
  baseURL: '', // 接口域名的地址
  // headers: {
  //   'Content-Type': 'application/json;charset=UTF-8;',
  //   // 'Access-Control-Allow-Origin':'http://47.107.52.228:80'
  // },
  // withCredentials:true,
  // timeout: 30000
})
// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  let  loginRequest = 'Bearer '+ window.sessionStorage.getItem("token")
  if(window.sessionStorage.getItem("token")){
    config.headers['Authorization'] = loginRequest;
  }

  // else if (loginRequest == null) {
  //   Toast('用户未登陆')
  //   router.push({name: 'login'})
  // }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  // console.log(response)
  const res = response.data
  // if ( res.StatusCode !== 200 ) {
  //   if ( res.StatusCode === 422 && 401  ) {
  //     Toast(res.message)
  //     router.push({name: 'login'})
  //   } else {
  //     Toast(res.msg)
      // Message.error(res.message)
      // return Promise.reject(res)
  //   }
  // } else {
    return res
  // }
}, error => {
  // 对响应错误做点什么
  if (error.response.status===401){
    router.push('/login')
} else if(error.response.status===422){
  Toast(error.response.data.message)
}
  return Promise.reject(error) 
})


export default function request (url, data = {}, method = 'post') {
  return new Promise((resolve, reject) => {
    const options = {
      url,
      method
    }
    if (method.toLowerCase() === 'get') {
      options.params = data
    } else {
      options.data = data
    }
    service(options)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
        console.error(error)
      })
  })
}
