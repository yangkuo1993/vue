/**
 * 工具
 */
import Cookie from 'js-cookie'

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 存储cookie
 */
export const setCookie = (name, value, options = {}) => {
  Cookie.set(name, encodeURIComponent(value), options)
}

/**
 * 获取cookie
 */
export const getCookie = name => {
  return decodeURIComponent(Cookie.get(name))
}

/**
 * 删除cookie
 */
export const removeCookie = name => {
  Cookie.remove(name)
}

export const Version = class VersionGet {
  constructor (props) {
    this.IOSVersion = 'v1.0.2'
    this.ANDROIDVersion = 'v1.0.2'
  }
  platforms () {
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
    // const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    const isAndroidTRUE = isAndroid
    // this.isIOS = isiOS
    if (isAndroidTRUE) {
      this.platform = 'Android'
      return this.platform
    } else {
      this.platform = 'IOS'
      return this.platform
    }
  }
}
/*
* @type 校验类型
*   用户名：username
*   密码： password
*   手机号： phone
*   邮编： postCode
* @str 校验数据
* */
export const regexpVerify = (type, str) => {
  const usernameRegExp = /[A-Za-z0-9]{4,19}$/
  const passwordRegExp = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{5,19}$/
  const phoneRegExp = /^1[34578]\d{9}$/
  const codeRegExp = /^[1-9][0-9]{5}$/
  let regexp
  if (type === 'username') {
    regexp = usernameRegExp
  } else if (type === 'password') {
    regexp = passwordRegExp
  } else if (type === 'phone') {
    regexp = phoneRegExp
  } else if (type === 'postCode') {
    regexp = codeRegExp
  }
  const newRegExp = new RegExp(regexp)
  return newRegExp.test(str)
}
