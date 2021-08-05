<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
     
    </Layout>
    <!-- <AsyncComponent /> -->
  </div>
</template>

<script>
import MyComp from "./MyComp.vue"
const AsyncComponent = ()=>{
  return new Promise(resolve=>{
    setTimeout(async()=>{
      const  MyComp = await import('./MyComp')
      resolve(MyComp) 
    },3000)
  })
}
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside,
    AsyncComponent
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
