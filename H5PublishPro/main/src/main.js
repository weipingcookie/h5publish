import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css' //全局css reset
import './assets/css/element-default.css' //element默认样式修改css文件
import index from './components/component/index.js'
import vuescroll from 'vuescroll'
import 'c-swipe/dist/swipe.css';
import './single-spa-config.js'
import { Swipe, SwipeItem } from 'c-swipe';
// axios.defaults.withCredentials=true
// axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

Vue.prototype.Axios = axios
Vue.config.productionTip = false

Vue.use(index)
Vue.use(ElementUI)
Vue.use(vuescroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
