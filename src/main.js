import Vue from 'vue'
import App from '@/App'

import '@/element-ui'
import '@/element-ui-theme'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
