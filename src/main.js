import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'minireset.css'
import './assets/styles/index.scss'
import './assets/iconFonts/iconfont.css'
import { setRem } from './utils/rem.js'

Vue.config.productionTip = false
/* 设置rem */
setRem(document, window)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
