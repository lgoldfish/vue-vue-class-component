<template>
    <div>
     <h1>{{created}}</h1>
    {{message}}    
    <br/>
    <h1>count</h1>
    {{count}}
    <h1>filterCount</h1>
    {{filterCount}}
    <button @click="addCount">addCount</button>
    <VueComponent :info="count"/>
</div>
</template>
<script>
import VueComponent from '../components/VueComponent.vue'
export default {
    props:["props"],
    components:{VueComponent},
    data(){
        return {
            message:"hello i am template vue",
            count:0,
            created:''
        }
    },
    mounted(){
        this.created = "加载完成了"
    },
    methods:{
        addCount(){
            this.count ++ 
        }
    },
    computed:{
        filterCount(){
            return this.count * 10
        }
    },
    watch:{
        count(value){
            if(value == 10) {
                alert(value)
            }
        }
    }
}
</script>

