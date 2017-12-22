import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(axios, { delayResponse: 2000 })

mock.onGet('/users', { params: { searchText: 'John' } }).reply(200, {
  users: [
    { id: 1, name: 'John Smith' }
  ]
})
// 登录模拟数据
mock.onGet('/login').reply(config => {
  console.log(config)
  if (config.params.username === 'yangkuo' && config.params.password === '123456') {
    return [200, {
      isLogin: true,
      message: '登录成功',
      status: 1
    }]
  } else {
    return [200, {
      isLogin: false,
      message: '用户名或密码错误',
      status: 0
    }]
  }
})
export default mock
