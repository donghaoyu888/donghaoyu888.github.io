<template>
	<div id="my_nav" style="overflow: hidden;background: #fff">
	     <div class="index_nav">
	     	<div v-for="i in arr" class="nav_no1" >
	     		<a :href="i.path">
	     			{{i.title}}
	     		</a>
	     	</div>
	     </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				arr: [
					{title:'首页',path:'#/'},
					{title:'关于我们',path:'#guanyu'},
					{title:'我们的理想',path:'#women'},
					{title:'旅行篇',path:'#lvxing'},
					{title:'艺术篇',path:'#yishu'},
					{title:'博客',path:'#boke'}
				]
			}
		}
	}
</script>
<style>
	.index_nav{
		text-align: center;
	}
	.nav_no1{
		display: inline-block;
		line-height: 50px;
		height: 50px;
	    padding: 0  35px;
	}
	.index_nav a{
		color: #000;
		text-decoration: none;
		color:#000;
		font-weight: bold;
	}
	.index_nav a:hover{
		color:#666;
	}
	
</style>
