import Vue from 'vue'

/**
 * 日期格式化
 * @param {[type]} 'dateformat' [description]
 * @param {[type]} (date,       formater      [description]
 * return {[type]}  [description]
 */
Vue.filter('dateFormatTime', (date) => {
  if (date) {
    return date.substring(0, 10)
  }
})
