import * as types from './mutation-types.js'
import loginApi from '../api/login/index'
export default {
  // 获取用户
  async getUser ({commit}, isLoading) {
    try {
      let result = await loginApi.demo()
      console.log(result)
      commit(types.GET_USER, result.data)
    } catch (e) {
      throw e
    }
  },
  // 显示加载动画
  async showLoading ({commit}, payload) {
    commit(types.SHOW_LODAING, payload)
  },
  /*
  * fetching 请求（可用可不用）
  * @param {payload}   action： 类型    params： payload
  * */
  async fetching ({dispatch, commit}, payload) {
    commit(types.SHOW_LODAING, true)
    await dispatch(payload.action, payload.params)
    commit(types.SHOW_LODAING, false)
  },
  // 登录
  async login ({commit}, payload) {
    try {
      let result = await loginApi.login({params: payload})
      commit(types.IS_LOGIN, payload)
      return result
    } catch (e) {
      throw e
    }
  }
}
