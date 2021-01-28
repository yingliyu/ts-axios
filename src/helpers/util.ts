// 缓存
const toString = Object.prototype.toString
// isDate
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
// isObject
// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

// isPlainObject
export function isPlainObject(val: any): val is Object {
  return val !== null && toString.call(val) === '[object Object]'
}

// 拷贝(从from拷贝到to)
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

// 深拷贝工具函数[将多个对象属性拷贝到一个结果对象中]
export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)
  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}
