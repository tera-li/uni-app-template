import { date } from '@/common/js/util'

// 时间格式化
export const dateFormat = (timeStamp, format = 'Y-m-d H:i:s') => {
  return date(format, timeStamp)
}
