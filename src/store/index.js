import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

// 全局state对象，保存所有组件的公共数据
const state = sessionStorage.getItem('state')?JSON.parse(sessionStorage.getItem('state')): ({
    user: {
        name: ''
    }
})
// 监听state对象的值得最新状态（计算属性）
const getters = {
    getUser(state) {
        return state.user;
    }
}

// 唯一可以修改state值（同步执行）
const mutations = {
    updateUser(state, user) {
        state.user = user;
    }
}
// 异步执行mutations犯法
const actions = {
    asyncUpdateUser(context, user) {
        context.commit("updateUser",user);
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})





