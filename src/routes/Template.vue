<template>
    <div>
        <p>count:{{count}}</p>
        <p>getCount: {{getCount}}</p>
        <button @click="addCount" > + </button>
        <TemplateChild :fromParent = "count" @sendToParent="getFromChild"/>
        <p>来自子组件:{{fromChild}}</p>
    </div>
</template>
<script>
import TemplateChild from '../components//TemplateChild';
export default {
    components:{TemplateChild},
    data(){
        return {
            count : 0,
            fromChild:null
        }
    },
    methods:{
        addCount(){
            this.count ++ 
        },
        getFromChild(value){
            console.log('value',value)
            this.fromChild = value
        }
    },
    computed:{
        getCount(){
        return  this.count * 10
        }
    },
    watch:{
        count(value){
            if(value === 10) {
                alert('count is,10')
            }
        }
    }
}
</script>

