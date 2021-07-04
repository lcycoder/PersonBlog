<template>
  <div class="home-container" ref="container">
    <ul>
      <li v-for="item in banners" :key="item.id">
        <CarouselItem/>
      </li>
    </ul>
    <div class="icon icon-up">
      <Icon type="arrowUp"></Icon>
    </div>
    <div class="icon icon-down">
      <Icon type="arrowDown"></Icon>
    </div>
  <ul class="indicator">
    <li v-for="item in banners" :key="item.id"></li>
  </ul>
  </div>
</template>

<script>
import {getBanners} from "@/api/banner";
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon"
export default {
  components:{
    CarouselItem,
    Icon,
  },
  data(){
    return {
      banners:[],
    }
  },
  methods: {
    
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import '~@/styles/var.less';
.home-container{
  width:100%;
  height: 100%;
  position: relative;
  ul{
    margin: 0;
  }
}
.icon{    //////// 
  .self-center();
  font-size: 30px;
color: @gray;
cursor: pointer;
  @gap:15px;
  &.icon-up{
    top: @gap;
  }
  &.icon-down{    // 只给一个bottom：15px  没有效果
    top: auto;
    bottom: @gap;
  }
}
</style>
