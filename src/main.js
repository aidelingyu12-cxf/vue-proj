import Vue from 'vue'
import App from '@/App'

import VueCookie from 'vue-cookie'
import '@/element-ui'
import '@/icons'
import '@/element-ui-theme'
import '@/assets/scss/index.scss'
import cloneDeep from 'lodash/cloneDeep'

Vue.use(VueCookie)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
