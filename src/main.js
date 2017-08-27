
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css';    // 默认主题
import ElementUI from 'element-ui';
import "babel-polyfill";
 import util from './util'
Vue.use(ElementUI);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false
Vue.use(util);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
      render: h => h(App)
}).$mount('#app');

// Vue.prototype.ajax = function (){
//     alert(5555555)
// }