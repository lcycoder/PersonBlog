// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import "./api/banner";

// // 测试一下纯DOM操作
// import styles from "./styles/message.module.less";
// console.log(styles);
// const div = document.createElement("div");
// div.className = styles.message;
// div.innerText = "asdfasdf";
// document.body.appendChild(div);

// 得到组件生成的根DOM
// function getComponentRootDom(comp, props) {
//   const vm = new Vue({
//     render: (h) => h(comp, { props }),
//   });
//   vm.$mount();
//   return vm.$el;
// }
// import Icon from "./components/Icon";
// var dom = getComponentRootDom(Icon, { type: "home" });
// console.log(dom);

// 向实例注入成员
// Vue.prototype.$sayHello = function() {
//   console.log("Hello!!!!");
// };

// import showMessage from "./utils/showMessage";

// window.showMessage = showMessage;
// showMessage("asdfasdf", "success");

import vLoading from './/directives/v-loading'
Vue.directive('loading', vLoading)
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import * as blogApi from './api/blog'
blogApi.getBlogs(2,20,3).then(r=>{
  console.log("博客:",r); 
}) 

// blogApi.getBlogTypes().then(r=>{
//   console.log('博客分类',r);
// })