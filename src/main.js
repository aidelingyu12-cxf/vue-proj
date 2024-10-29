import Vue from 'vue'
import App from '@/App'

import '@/element-ui'
import '@/element-ui-theme'
import http from '@/utils/httpRequest'
import './mock/index'
Vue.prototype.$http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
