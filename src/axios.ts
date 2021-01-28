import { AxiosStatic, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/merge-config'

function createInstance(config: AxiosRequestConfig): AxiosStatic {
  // 创建一个实例
  const context = new Axios(config)

  // instance指向Axios原型上的request方法，this绑定上下文
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context) // 将Axios类的原型属性和实例属性拷贝到instance
  return instance as AxiosStatic
}

const axios = createInstance(defaults)

axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config))
}

export default axios
