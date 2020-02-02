import Vue from 'vue';
import VueMeta from 'vue-meta';
import Axios from 'axios';
import App from './App.vue';

import router from './router/router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';

Vue.use(VueMeta);

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
