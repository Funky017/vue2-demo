import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'

Vue.use(Vuex)

const state = new Vuex.Store({
    modules: {
        user    // 使用user.js的action
    }
})

export default state





