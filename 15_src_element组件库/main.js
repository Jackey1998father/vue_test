
import Vue from 'vue'
import App from './App.vue'
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button, Row, DatePicker } from 'element-ui';

Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);



Vue.config.productionTip = false

//应用ElementUI
// Vue.use(ElementUI);






new Vue({
  el: '#app',
  template: `<h1>你好啊</h1>`,
  render: h => h(App),
  data(){
    return{
      value:""
    }
  }


})



