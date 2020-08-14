import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// iview ui库
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

// vant ui库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//axios接口
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
