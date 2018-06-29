import Vue from 'vue';
import Component from 'vue-class-component';
import './index.css';

@Component ({})
class App extends Vue {
    data(){
        return {
            count:0
        }
    }
    created(){

    }
    render(){
        return (
            <div id='app'>
              hello world
            </div>
        )
    }
}

new Vue({
    el:'#app',
    components:{App},
    template:'<App/>'
})