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
