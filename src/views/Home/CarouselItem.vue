<template>
  <div class="carousel-item-container" >
    <img :src="data.bigImg" alt="">
        <h1>{{data.title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    data: {},
  },
  mounted(){
    console.log(this.data);
  },
  computed:{
    
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";

.carousel-item-container {
  background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  h1{
    .self-center();
  }
}
</style>
