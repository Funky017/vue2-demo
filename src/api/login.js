import request from '@/utils/request'

export function login(username,password) {
  return request({
    url:'http://localhost:8080/login',
    method:'post',
    data: {
      username,
      password
    }
  })
}
