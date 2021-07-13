<template>
  <div v-loading="isLoading" class="home-container" ref="container">
    <ul class="carousel-container" :style="{marginTop}">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :data="item"/>
      </li>
    </ul>
    <div class="icon icon-up" v-show="index>0" @click="switchTo(index-1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div class="icon icon-down" v-show="index<2" @click="switchTo(index+1)">
      <Icon type="arrowDown" ></Icon>
    </div>
    <ul class="indicator ">
      <li 
      :class="{active:i===index}"
        v-for="(item,i) in banners"
        :key="i"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon";
// import fetchData from '@/mixins/fetchData.js';
export default {
  // mixins:[fetchData([])],
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 1,
      banners: [],
      isLoading: "false",
      containerHeight:0
    };
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
  computed:{
    marginTop(){
      return -this.index * this.containerHeight +'px'
    }
  },
  methods: {
    switchTo(i) {
     
      this.index = i;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: @dark;
 
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
    
  }
}
  .carousel-container {
    width: 100%;
    height: 100%;
  transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }

.icon {
  ////////
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  @gap: 15px;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    // 只给一个bottom：15px  没有效果
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  left: auto;
  right: 0%;
  list-style: none;
  li{
    height: 5px;
    width: 5px;
    background: gray;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-top: 10px;
    cursor: pointer;

    &.active{
      background: #fff;
    }
  }
}


</style>
