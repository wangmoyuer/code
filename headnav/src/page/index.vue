<template>
  <div>
    <!-- v-bind指令来绑定class，第一个属性为class名字，第二个属性为布尔值，为true，则表示该组件有这个class，为false则没有。
        所以，当访问首页模块时，底部导航有一个类名isIndex，我们可以在底部导航内部为isIndex设置样式。 -->
    <!-- 3.使用组件， 注意命名，驼峰法定义的组件FooterNav需在使用时用短横线连接<footer-nav> -->	
    <header-nav v-bind:class="{'isIndex':isNowPage}"></header-nav>
     <h1 class="logo">Vue Demo by DEMO</h1>
    <footer-nav class="fixed"></footer-nav>
  </div>
</template>
<script>
// 1.引入组件
import HeaderNav from '../components/header.vue'
import FooterNav from '../components/footer.vue'
export default {
  components: {
     HeaderNav, //2.局部注册，注意写在export default内部
     FooterNav 
  },
  // data在组件内部得写为一个函数，通过return返回数据值，这是因为组件之间是共享的，但是要保证它们各自的数据是私有，互不影响的，所以要给每个组件返回新的data对象
  data () {
    return {
      isNowPage: true
    }
  }
}
</script>
// 每一个单文件组件.vue通常都是由三部分构成template、style、script（为什么说通常，因为也可以只有模板template，不写任何样式和功能，但大多数组件都会有自己的样式和功能）。
// 其中style有2个点，第一，可以引用外部样式，第二，作用域scoped。