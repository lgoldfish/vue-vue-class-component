import Vue from 'vue';
import App from './App';
import {router} from './router';
import "./decorator/decorator"
new Vue({
    router,
    render:h=>h(App)
}).$mount('#app')