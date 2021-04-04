import * as config from '@/common/js/config'

/**
 * @function request - 统一请求接口
 * @param { String } url - 请求的url
 * @param { String } method - 请求的方法
 * @param { Object } data - 请求的参数
 * @param { Number } timeout - 超时时间
 * */
export const request = ({
  url,
  method = 'get',
  data = {},
  timeout = 100000
}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.baseUrl + url,
      method: method,
      data: data,
      header: config.headers,
      timeout: timeout,
      success: (res) => {
        resolve(config.validStatus(res))
      },
      fail: (err) => {
        reject(config.validStatus(err))
      }
    })
  })
}
