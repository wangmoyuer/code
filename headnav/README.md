# headnav

> 文件在src/views中，index为首页文件，manage为管理文件

1.每一个单文件组件.vue通常都是由三部分构成template、style、script（为什么说通常，因为也可以只有模板template，不写任何样式和功能，但大多数组件都会有自己的样式和功能）。其中style有2个点，第一，可以引用外部样式，第二，作用域scoped。

2.单文件组件的引用，需要先在script中用import引用（同时命名）格式为

import [命名] from [相对路径]

再用components:{ [命名] }局部注册

最后在模板中使用，注意命名格式。如果是驼峰HeadNav或headNav，使用时就是<head-nav>

3.多使用vue指令，常用的有v-show，v-if，v-on，v-bind，v-model
v-show指令，showAdd是一个布尔值，为true则渲染，为false则隐藏

v-show指令与v-if指令的区别就在于，前者一开始就加载，更适用于频繁的切换，后者需首先判断布尔值，为true才加载渲染

v-on是绑定事件指令，用于控制showAdd的值从而控制输入框div的隐藏与显示

列表渲染用v-for指令，item为自定义的名字，指向数组中的每一个个体，peoples为我们在data函数中定义的数组名字，模板渲染采用[{ }]

使用v-bind指令来绑定class，第一个属性为class名字，第二个属性为布尔值，为true，则表示该组件有这个class，为false则没有。所以，当访问首页模块时，底部导航有一个类名isIndex，我们可以在底部导航内部为isIndex设置样式。

v-model指令是双向绑定，一般用于表单组件,当输入框的值改变，其绑定的nameValue跟着改变.同理，当绑定的nameValue值改变，输入框的值也跟着改变

4.使用组件步骤：

（1）引入组件     import FooterNav from '../../components/footer.vue'

（2）局部注册     注意写在export default内部，components:{FooterNav}

（3）使用组件    <footer-nav></footer-nav> 注意命名，驼峰法定义的组件FooterNav需在使用时用短横线连接<footer-nav>

5.data在组件内部得写为一个函数，通过return返回数据值，这是因为组件之间是共享的，但是要保证它们各自的数据是私有，互不影响的，所以要给每个组件返回新的data对象。

6.标签讲解
（1）<router-link>
可以看到footer.vue使用了<router-link>标签，该标签主要实现跳转链接功能，属性to='/'即是跳转到path为'/'的路径（即我们在路由配置中定义的Index路由）

（2）scoped
在<style>标签上添加scoped，声明作用域，样式效果只在该页面内生效，不污染全局。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
