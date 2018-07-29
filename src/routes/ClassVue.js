import Vue from 'vue';
import Component from 'vue-class-component';
import ClassChild from '../components/ClassChild'
@Component({
    watch:{
        count(value){
            if(value == 10) {
                alert ('count is 10')
            }
        }
    },
})
export default class ClassVue extends Vue {
    count = 0;
    fromChild = null;
    addCount(){
        this.count ++ 
    }
    get getCount(){
        return this.count * 10
    }
    getFromChild(value) {
        this.fromChild = value
    }
    render(){
        return (
            <div>
            <p>count: {this.count}</p>
            <p>getCount: {this.getCount}</p>
            <button onClick={this.addCount}> + </button>
            <ClassChild fromParent={this.count} getFromChild={this.getFromChild} />
            <p>{this.fromChild}</p>
            </div>
        )
    }
}