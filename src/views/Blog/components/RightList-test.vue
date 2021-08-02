<template>
    <rightList :list="list" @func="handleSelect" />
</template>

<script>
import RightList from './RightList.vue'
export default {
    components:{
        RightList 
    },
    data(){
        return {
            list:[
                {name:'a',isSelect:false},
                {name:'b',isSelect:false},
                {name:'c',
                isSelect:false,
                children:[
                    {name:'c-1',isSelect:false},
                    {name:'c-2',isSelect:false},
                    {name:"c-3",isSelect:false,children:[{name:'c-3-1'}]},
                ]
                },
            ]
        }
    },
    methods:{
        handleSelect(item){
            console.log(item);
        }
    }
}
</script>

<style>

</style>