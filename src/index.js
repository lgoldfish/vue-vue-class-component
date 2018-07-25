import Vue from 'vue';
import App from './App';
import {router} from './router';
import store from './models/store';
new Vue({
    router,
    store,
    render:h=>h(App)
}).$mount('#app')