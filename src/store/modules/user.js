import {login} from '@/api/login'

const user = {
  actions: {
    Login({ commit }, userInfo) { // 在组件中使用this.$store.dispath("Login")调用
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {       // 封装promise
        login(username, userInfo.password).then(response => { // 使用login进行网络请求
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default user