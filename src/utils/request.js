import axios from "axios";

const request = axios.create({
  timeout: 5000,
  baseURL: 'http://geek.itheima.net/v1_0',
})

request.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 监控401 token失效
  // console.dir(error)
  // if (error.response.status === 401) {
  //   removeToken()
  //   router.navigate('/login')
  //   window.location.reload()
  // }
  return Promise.reject(error)
})

export default request;