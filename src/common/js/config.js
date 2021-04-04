import store from '@/store'

/**
 * 环境配置
 * */
let baseUrl = ''
let headers = {}
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.2.204/'
  headers = {
    'X-Token': store.state.user.token
  }
}

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://192.168.2.204/'
  headers = {
    'X-Token': store.state.user.token
  }
}

/**
 * response状态响应结果
 * */
const validStatus = (response) => {
  if (response.code === 200) {
    return response.data
  } else {
    return response
  }
}
export { baseUrl, headers, validStatus }
