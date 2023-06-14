// 该文件用于创建Vuex中最核心的store

//准备actions，用于响应组件中的动作
const actions = {
    jia: function (miniStore, value) {   //接受两个参数，一个是小型miniStore（里面包含下一百要的mutations方法），另一个参数是传来的数据
        console.log("action中的jia被调用了", miniStore, value);
        miniStore.commit('JIA', value)   //②当执行到commit函数传入JIA的时候，会执行mutations对象里面的“JIA”函数
    },
    jian: function (miniStore, value) {
        console.log("action中的jian被调用了", miniStore, value);
        miniStore.commit('JIAN', value)
    },
    jishuzizeng: function (miniStore, value) {
        if (miniStore.state.sum % 2 != 0) {
            console.log("action中的jishuzizeng被调用了", miniStore, value);
            miniStore.commit('JISHUZIZENG', value)
        }
    },
    waitAdd: function (miniStore, value) {

        setTimeout(() => {
            console.log("action中的jian被调用了", miniStore, value);
            miniStore.commit('WAITtAdd', value)
        }, 1000)
    },
}
//用于操作数据（state）
const mutations = {
    JIA(state, value) {    //接受两个参数，一个是state对象（里面包含着一开始存储的数据，可对他进行修改），另一个参数是传来的数据
        console.log("mutations中的jia被调用了", state, value);
        state.sum = parseInt(value) + parseInt(state.sum)   //③修改了state中的sum数据了 ，目的达到了！！
    },
    JIAN(state, value) {
        console.log("mutations中的jia被调用了", state, value);
        state.sum = parseInt(state.sum) - parseInt(value)
    },
    JISHUZIZENG(state, value) {

        console.log("mutations中的jia被调用了", state, value);
        state.sum = parseInt(value) + parseInt(state.sum)

    },
    WAITtAdd(state, value) {

        console.log("mutations中的jia被调用了", state, value);
        state.sum = parseInt(value) + parseInt(state.sum)

    }

}
//准备state，用于存储数据
const state = {
    sum: 0     //保存数据，用store可读可写
}
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

Vue.use(Vuex) // 引入vuex并且使用vuex，就可以在Vue和vc的实例对象中添加store配置项

//创建store，并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state

})

