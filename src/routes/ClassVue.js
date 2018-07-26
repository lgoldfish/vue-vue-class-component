import Vue from 'vue';
import Component from 'vue-class-component';
import MyComponent from '../components/MyComponent'
@Component
export default class ClassVue  extends Vue{
    constructor(){
        super()
        this.props = 0
    }
    message = "hello i am class vue"
    count = 0
    created = ''
    mounted(){
        this.created = "加载完成了"
    }
    addCount(){
        this.count ++ 
    }
    getFromChild(value) {
        console.log('from child data',value)
    }
    get  filterCount(){
        if(this.count == 10) {
            alert(this.count)
        }
        return this.count * 10
    }
    render(){
        return (
            <div>
                <h1>{this.created}</h1>
                <h1>{this.message}</h1>
                <br/>
                <h1>count</h1>
                {this.count}
                <h1>filterCount</h1>
                {this.filterCount}
                <button onClick={this.addCount}>addCoun</button>
                <MyComponent getFromChild = {this.getFromChild} info={this.count}/>
            </div>
        )
    }
}