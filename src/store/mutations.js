import * as types from './mutation-types.js'
import vue from 'vue'
/*
* mutations变量   驼峰命名转换函数
* 此函数只适用于 mutations变量
* @type String {value}
* */
function camel (value) {
  if (!(typeof value === 'string')) {
    throw TypeError('驼峰命名转化函数只接受字符串')
  }
  let name = value.toLowerCase()
  const nameArray = name.split('_')
  let resultName = ''
  try {
    for (let i = 0; i < nameArray.length; i++) {
      if (i === 0) {
        resultName += nameArray[i]
      } else {
        let firstLetter = nameArray[i][0].toUpperCase()
        let nameResidueArray = nameArray[i].split('')
        let tempArray = nameResidueArray.splice(1)
        let residueLetter = tempArray.join('')
        resultName = resultName + (firstLetter + residueLetter)
      }
    }
    return resultName
  } catch (e) {
    throw new Error('驼峰命名函数发生异常' + e)
  }
}
export default {
  // 获取用户
  [types.GET_USER] (state, payload) {
    state[camel(types.GET_USER)] = {
      stateData: payload,
      time: Date.now()
    }
  },
  // 展示隐藏加载
  [types.SHOW_LODAING] (state, payload) {
    if (payload) {
      vue.$vux.loading.show({
        text: 'Loading'
      })
    } else {
      vue.$vux.loading.hide()
    }
    state[camel(types.SHOW_LODAING)] = payload
  },
  // 登录状态
  [types.IS_LOGIN] (state, payload) {
    state[camel(types.IS_LOGIN)] = payload
  }
}
