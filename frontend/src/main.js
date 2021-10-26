import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { createProvider } from './vue-apollo'


import "bootstrap";
import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";
import "jquery";
import "popper.js";

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider({
    httpEndpoint: 'http://localhost:8000/graphql',
    wsEndpoint: null,
  }),
  render: h => h(App)
}).$mount('#app')
