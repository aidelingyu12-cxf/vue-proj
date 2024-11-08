import Vue from 'vue'
import App from '@/App'
import  Mock  from './mock'
import router from './router'
import '@/element-ui'
import '@/element-ui-theme'
import http from '@/utils/httpRequest'
import '@/mock'
import '../static/config'
Vue.prototype.$http = http
Vue.use(Mock);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
