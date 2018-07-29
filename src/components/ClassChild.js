import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
    props:['fromParent','getFromChild']
})
export default class ClassChild extends Vue {
    sendToParent(){
        this.getFromChild('666')
    }
    created(){
        console.log('props',this.getFromChild)  
    }
    render(){
        return (
            <div>
                <h1>Child</h1>
                <p>form parent count : {this.fromParent}</p>
                <button onClick = {this.sendToParent}> ++ </button>
            </div>
        )
    }
}