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
    // 请求拦截
    uni.addInterceptor('request', {
      invoke(args) {
        // request 触发前拼接 url
        console.log(args)
        args.url = 'https://localhost:8080/' + args.url
      },
      success(res) {
        console.log('请求成功', res)
        resolve(res)
      },
      fail(err) {
        console.log('请求失败', err)
        reject(err)
      }
    })
    // 请求接口配置
    uni.request({
      url: url,
      method: method,
      data: data,
      header: {},
      timeout: timeout
    })
  })
}
