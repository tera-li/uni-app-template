import { request } from '@/common/js/request'

/**
 * @function userInfo
 * @param { Object } data - 请求参数
 */
export const userInfo = (data) => {
  return request({
    url: '123',
    method: 'get',
    data
  })
}
