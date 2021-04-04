/**
 *  全局公用方法
 * */

let _debounceTimeout = null,
  _throttleRunning = false

/**
 * 防抖
 * @param {Function} fn 执行函数
 * @param {Number} delay 延时ms
 */
export const debounce = (fn, delay = 500) => {
  clearTimeout(_debounceTimeout)
  _debounceTimeout = setTimeout(() => {
    fn()
  }, delay)
}
/**
 * 节流
 * @param {Function} fn 执行函数
 * @param {Number} delay 延时ms
 */
export const throttle = (fn, delay = 500) => {
  if (_throttleRunning) {
    return
  }
  _throttleRunning = true
  fn()
  setTimeout(() => {
    _throttleRunning = false
  }, delay)
}
/**
 * toast
 */
export const msg = (title = '', param = {}) => {
  if (!title) return
  uni.showToast({
    title,
    duration: param.duration || 1500,
    mask: param.mask || false,
    icon: param.icon || 'none'
  })
}
/**
 * 检查登录，token失效返回登录页面
 * @return {Boolean}
 */
export const isLogin = (options = {}) => {
  const token = uni.getStorageSync('userToken')
  if (token) {
    return true
  }
  if (options.nav !== false) {
    uni.navigateTo({
      url: '/pages/auth/login'
    })
  }
  return false
}
/**
 * 格式化时间戳 Y-m-d H:i:s
 * @param {String} format Y-m-d H:i:s
 * @param timeStamp
 * @return {String}
 */
export const date = (timeStamp, format) => {
  if ('' + timeStamp.length <= 10) {
    timeStamp = +timeStamp * 1000
  } else {
    timeStamp = +timeStamp
  }
  let _date = new Date(timeStamp),
    Y = _date.getFullYear(),
    m = _date.getMonth() + 1,
    d = _date.getDate(),
    H = _date.getHours(),
    i = _date.getMinutes(),
    s = _date.getSeconds()

  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  H = H < 10 ? '0' + H : H
  i = i < 10 ? '0' + i : i
  s = s < 10 ? '0' + s : s

  return format.replace(/[YmdHis]/g, (key) => {
    return { Y, m, d, H, i, s }[key]
  })
}
// 判断类型集合
export const checkStr = (str, type) => {
  switch (type) {
    case 'mobile': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'mobileCode': //6位数字验证码
      return /^[0-9]{6}$/.test(str)
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^([a-zA-Z0-9_]){6,18}$/.test(str)
    case 'payPwd': //支付密码 6位纯数字
      return /^[0-9]{6}$/.test(str)
    case 'postal': //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str)
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/.test(
        str
      )
    case 'IP': //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str
      )
    case 'date': //日期时间
      return (
        /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(
          str
        ) || /^(\d{4})-(\d{2})-(\d{2})$/.test(str)
      )
    case 'number': //数字
      return /^[0-9]$/.test(str)
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str)
    case 'lower': //小写
      return /^[a-z]+$/.test(str)
    case 'upper': //大写
      return /^[A-Z]+$/.test(str)
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    default:
      return true
  }
}
