import { isPlainObject } from './util'
// 处理request data
export function transformRequest(data: any): any {
  // 是普通对象
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

// 处理response data
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    // string类型不一定是JSON字符串
    try {
      data = JSON.parse(data) // 尝试转换，JSON字符串转换成功
    } catch (error) {
      // do nothing
    }
  }
  return data
}
