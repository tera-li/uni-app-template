import { date } from '@/common/js/util'

/** 全局过滤器*/
/**
 * @function dateFormat
 * @param { String | Number } timeStamp - 时间戳
 * @param { String } format - 日期格式
 * */
export const dateFormat = (timeStamp, format = 'Y-m-d H:i:s') => {
  return date(timeStamp, format)
}
