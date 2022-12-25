import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './utils/request'
import store from './store'
// mavonEditor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//typo.css
import "./assets/css/typo.css";
//自定义css
import './assets/css/base.css'
//semantic-ui
import 'semantic-ui-css/semantic.min.css'
//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//v-viewer
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
