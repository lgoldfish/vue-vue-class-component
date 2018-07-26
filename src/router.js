import Vue  from 'vue'
import Home from './routes/Home';
import About from './routes/About';
import TemplateVue from './routes/TemplateVue.vue'
import App from './App';
import VueRouter from 'vue-router';
import ClassVue from './routes/ClassVue'
Vue.use(VueRouter)
const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/about',component:About},
    {path:'/template',component:TemplateVue},
    {path:'/classvue',component:ClassVue},
]
export  const router = new VueRouter({
 routes
})