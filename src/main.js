import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.prototype.router = router
import store from './store'
import './plugins/element.js'
import './mintuijs/mintuijs.js'
import './video/video.js'
import {registe,Thelogin} from './custom/custom.js'
Vue.use(registe)
Vue.use(Thelogin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')