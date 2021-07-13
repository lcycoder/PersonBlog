<template>
  <ul class="right-list-container">
    <li
      v-for="(item, index) in list"
      :key="index"
      :class="{ active: item.isSelect }"
    >
     <span @click="handleClick(item)" :class="{active:item.isSelect}"> {{ item.name }}</span>
      <RightList :list="item.children" @func="handleClick"></RightList>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    //每一项的值应该是一个对象
    // [{name:'xxx'},children:[{name:'yyy',chi}]]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
      handleClick(item){
        this.$emit("func",item)
      }
  }
};
</script>

<style scoped lang='less' >
ul{
    list-style: none;
}
</style>