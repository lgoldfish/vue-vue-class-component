import Vue from 'vue';
import Component from 'vue-class-component';
import MyTemplate from './routes/Template';
import ClassVue from './routes/ClassVue';
import './index.css';
@Component
export default class App extends Vue {
    render(){
        return (
              <div>
                 <ul>
                     <li>
                         <h1>template</h1>
                         <MyTemplate/> 
                    </li> 
                     <li>
                         <h1>vue-class</h1>
                         <ClassVue/>
                    </li> 
                 </ul>
                  <router-view ></router-view>
              </div>
        )
    }
}
