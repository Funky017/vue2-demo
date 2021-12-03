import request from '@/utils/request'

export function getGoodsList(params) {
  return request({
    url:'/order/list',
    method:'get',
    param: params
  })
}

export function deleteById(params) {
  return request({
    url:'/order/deleteById',
    method:'post',
    params:params
  })
}