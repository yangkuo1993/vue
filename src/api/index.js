/**
 * axios 默认参数配置
 */
import axios from 'axios'
import { baseUrl } from '@/config/env'
import vue from 'vue'
const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'appKey': '4194b8dbd6624131bfccbdd6f7140776',
  //   'timestamp': new Date().toISOString(),
  //   'signatureNonce': '123',
  //   'platform': '3',
  //   'signature': '123'
  // },
  cancelToken: source.token
})

// http request 拦截器
axios.interceptors.request.use(
config => {
  // if (store.state.token) {
  //   config.headers.Authorization = `token ${store.state.token}`;
  // }
  return config
},
err => {
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(
res => {
  console.log(res)
  if (res.data.status === 0) {
    vue.$vux.alert.show({
      title: '提示',
      content: res.data.message
    })
  }
  return res
},
err => {
  return Promise.reject(err)
})

export {
  axios,
  source
}
