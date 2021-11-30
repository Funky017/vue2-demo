import request from '@/utils/request'

export function login(username,password) {
  return request({
    url:'',
    method:'post',
    data: {
      username,
      password
    }
  })
}
