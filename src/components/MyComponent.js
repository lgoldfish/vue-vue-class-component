import Vue from 'vue';
import Component from 'vue-class-component';
import ClassVue from '../routes/ClassVue'
@Component({
    props: ['info','getFromChild']
})
export default class MyComponent extends Vue {
    count = 10

    sendToParent(){
        this.count = this.count * 2
        // this.$emit('getFromChild',this.count)
        this.getFromChild(this.count)
    }
    mounted(){
        console.log('props',this.info,)
    }
    render(){
        return (
            <div>
                this is MyComponent component 
                <h1>from parent count</h1>
                {this.info}
                <button  onClick = {this.sendToParent}> send to parent</button>
            </div>
        )
    }
}