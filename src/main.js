import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css';
// 引入api 
import * as API from './api'
// 引入路由器对象
import router from './router'

import './assets/iconfont/iconfont.css'
// 把API挂载到vue的原型上    所有组件通过this.$API访问
Vue.prototype.$API = API    

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
