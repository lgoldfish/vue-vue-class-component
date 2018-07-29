<template>
    <div>
        <h1>Child</h1>
        <p>fromParent count: {{fromParent}}</p>
        <button @click="sendToParent"> ++ </button>
    </div>
</template>
<script>
export default {
    props:['fromParent'],
    data(){
        return {
        }
    },
    methods:{
        sendToParent(){
            this.$emit('sendToParent','666')
        }
    },
    created(){
    }
}
</script>
