import Vue  from 'vue'
import Home from './routes/Home';
import About from './routes/About';
import App from './App';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const routes = [
    // {path:'/',component:App},
    {path:'/home',component:Home},
    {path:'/about',component:About}
]
export  const router = new VueRouter({
 routes
})