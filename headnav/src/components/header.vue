<template>
   <div class="header">
         <ul>
            <!-- 使用<router-link>标签，该标签主要实现跳转链接功能，属性to='/'即是跳转到path为'/'的路径（即我们在路由配置中定义的Index路由） -->
			<li><router-link to='/'>首页</router-link></li>
			<li><router-link to='/zixun'>资讯</router-link></li>
		</ul>
   </div>
 </template>
 <style scoped>
 li a{display: inline-block; width: 100%; height:100%;}
	ul{display: flex; height:100%; line-height:50px;}
	ul li{flex: 1; background-color:#f1f1f1;}
	.isIndex li:first-child{background-color:#d3d3d3;}
	.isIndex li:first-child a{color:#41b883;}
	.isZixun li:last-child{background-color:#d3d3d3;}
  .isZixun li:last-child a{color:#41b883;}
 </style>