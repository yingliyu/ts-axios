import { type } from 'os'

export type Method =
  | 'get'
  | 'Get'
  | 'delete'
  | 'DELETE'
  | 'post'
  | 'POST'
  | 'patch'
  | 'PATCH'
  | 'head'
  | 'HEAD'
  | 'put'
  | 'PUT'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params: any
}
