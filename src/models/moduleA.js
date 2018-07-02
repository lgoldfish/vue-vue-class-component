export default {
    namespaced:true,
    state:{
        count:0
    },
    mutations:{
        addCount(state){
            state.count ++ 
        },
    },
    actions:{
        asyncAddCount({dispath,commit,state}){
            setTimeout(()=>{
                commit('addCount')
            },1000)
        }    
    }
}