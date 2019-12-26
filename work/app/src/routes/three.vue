<template>
	<div style="background:#fff;">
		<div class="all_tit_small">旅行篇</div>
		<div class="about_some_small">
    		<div v-for="i in arr" class="about_some_small_box">
    			<div>
    				<img :src=i.img alt="">
    			</div>
    			<div style="padding: 10px 0px">
    				<p style="color: #000;font-weight: bold;">{{i.title}}</p>
    				<p>{{i.text}}</p>
    			</div>
    		</div>
    	</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				arr:[
					{
						title:'岁月',
						text:'哪知岁月总是催人老，等到知时已迟了',
						img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi9kNWQ0Y2M3YjA5ZDE4NDM1MTdhY2M5MzYxZjhmNjY1ZS00NTB4NDUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						title:'风景',
						text:'再美的风景，也需要欣赏他人的',
						img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi9jOTUxMjU2NWVmNjE5NGNhNjY0ZGM0MWVjMGRlN2E1My00NTB4NDUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						title:'旅游日记',
						text:'旅行重要的不是终点，而是过程',
						img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi9iYmQ5N2IwMGM1Mzk4MDFlMzIzMTdhYjU1MDg2N2VjNC00NTB4NDUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						title:'建筑',
						text:'不同的是外形，相同的是内在',
						img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi81ZGI1OGU3YjIxYjkwNjRjYTVhZjQ5ZWZlN2I3YThiMi00NTB4NDUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					}
				]
			}
		}
	}
</script>
<style>
	.about_some_small{
   		min-height: 300px;
   		overflow: hidden;
   		background: #f8f8f8;
   		padding: 50px 335px;
   	}
   	.about_some_small_box{ 
   		float: left;
   		margin:10px 10px;
   		width: 260px;
   		text-align: center;
   		background: #fff;
   		transition: .45s;
   	}
   	.about_some_small_box:hover{
   		transform: translateY(-20px);
   		box-shadow: -2px -2px 5px 10px #f2f2f2;
   	}
   	.about_some_small_box p{
   		line-height: 24px;
   		margin: 0;
   	}
   	.about_some_small_box img{
   		width: 100%;
   		height: 100%;
   	}
   	.all_tit_small{
   		line-height: 60px;
		font-size: 30px;
		text-align: center;
   	}
</style>
