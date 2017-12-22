import {axios} from '../index'
/**
 * 登录
 */

export default {
  demo () {
    return axios.get('/users', { params: { searchText: 'John' } })
  },
  // 登陆
  login (params) {
    return axios.get('/login', params)
  }
}
