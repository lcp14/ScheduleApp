import Vue from 'vue';
import App from './App';
import router from './router';
// Bulma + Vue components
import Buefy from 'buefy'

Vue.use(Buefy)


new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");