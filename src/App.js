import Vue from 'vue';
import Component from 'vue-class-component';
import Home from './routes/Home';
import About from './routes/About';

import './index.css';
@Component ({
    components:{
        About,
        Home
    }
})
export default class App extends Vue {
    age = undefined;
    // age = null;
    data(){
        return {
            count:0
        }
    }
    name = 'vue-class'
    created(){
        this.name = 'vue-class-02'
        this.count = 1
        this.age = 18
    }
    addCount = () =>{
        console.log('add +')
        this.$store.commit('moduleA/addCount')
    }
    asynacAddCount = () => {
        console.log('async add')
        // throw new Error()/
        this.$store.dispatch('moduleA/asyncAddCount')
    }
    render(){
        return (
            <div id='app'>
              {/* hello world
              {this.count}
              <br/>
              {this.name}
              <br/>
              {this.age} */}
              {this.$store.state.moduleA.count}
              <button onClick={this.addCount}> addCount</button>
              <button onClick={this.asynacAddCount}> Aysnc AddCount</button>
              <div>
                  <h1>vue-router</h1>
                  <router-link to='/home'>go to home</router-link> <br/>
                  <router-link to='/about'>go to about</router-link> <br/>
                  <router-link to = "/template">go to template</router-link>
                  <router-link to = "/classvue">go to class vue</router-link>
                  <router-view ></router-view>
              </div>
            </div>
        )
    }
}
