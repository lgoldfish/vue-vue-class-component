import Vue from 'vue';
import App from './App';
import {router} from './router';
import store from './models/store';
new Vue({
    el:'#app',
    components:{App},
    template:'<App/>',
    router,
    store
})