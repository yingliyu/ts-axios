import { isPlainObject } from './util'
export function transformRequest(data: any): any {
  // 是普通对象
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
