<template>
	<div>
		<div style="height: 780px;">
	     	<div class="swiper-container">
	     	    <div class="swiper-wrapper">
	     	       	<div class="swiper-slide img_box">
						<img src="http://54d4a4629fb6b.t73.qifeiye.com/qfy-content/uploads/2015/06/27f237e6b7f96587b6202ff3607ad88a.jpg" alt="">
	     	       	</div>
	     	       	<div class="swiper-slide img_box">
	     	       		<img src="http://54d4a4629fb6b.t73.qifeiye.com/qfy-content/uploads/2015/06/c6bdf6f65f3845da9085e9ae5790b494.jpg" alt="">
	     	       	</div>
	     	       	<div class="swiper-slide img_box">
	     	       		<img src="http://54d4a4629fb6b.t73.qifeiye.com/qfy-content/uploads/2015/06/6593d7b12fd418cdb35bbf438de72f66.jpg" alt="">
	     	       	</div>
	     	    </div>
	     	     <!-- Add Arrows -->
	     	    <div class="swiper-button-next swiper-button-white"></div>
	     	    <div class="swiper-button-prev swiper-button-white"></div>
	     	</div>
	    </div>
	    <div class="index_about" id="guanyu">
	    	<h1>about us</h1>
	    	<p>起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。</p>
	    	<div class="index_about_img">
	    		<img src="https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi9DLnBuZz9hdHRhY2htZW50X2lkPTgzNDY_p_p100_p_3D.png" alt="">
	    	</div>
	    	<div class="about_some">
	    		<div v-for="i in arr" class="about_some_box">
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
	    <div  id="women" class="index_women">
	    	<div class="all_tit">我们的理念</div>
			<div class="index_women_box_o">
				<div style="line-height: 28px;padding-right: 30px;box-sizing: border-box;">
					<p>起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。</p>
					<p>起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。</p>
				</div>
				<div style="padding-left: 30px;box-sizing: border-box;">
					<img style="box-shadow: 0 0 20px #dddddd;padding: 6px" src="https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9iYzE0NTAzMWJjZTlmZWZkZTdhZTU4MjYyYzk1OGVhOS5qcGc_p_p100_p_3D.jpg" alt="">
				</div>
			</div>
			<div class="index_women_box" id="lvxing">
				<div class="index_women_box_img" style="line-height: 28px;">
					<img src="https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi84ODYwMzcwYWY3NmMwMWRlNTMzN2Q0NjI2YzI2NzhmNC5qcGc_p_p100_p_3D.jpg" alt="">
				</div>
				<div class="index_women_box_cont">
					<div class="index_women_box_cont_">
						<p style="color:rgb(153, 153, 153);line-height: 24px;">旅行篇</p>
						<p style="font-size: 22px;line-height: 30px;font-weight: 500;">旅行和生活的记录</p>
						<p style="padding: 20px 0px;line-height: 24px;">起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。</p>
						<div>
							<div class="more_btn"><a href="#/one">了解更多</a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="index_women_box" id="yishu">
				<div class="index_women_box_cont">
					<div class="index_women_box_cont_">
						<p style="color:rgb(153, 153, 153);line-height: 24px;">艺术篇</p>
						<p style="font-size: 22px;line-height: 30px;font-weight: 500;">欧洲艺术见闻录</p>
						<p style="padding: 20px 0px;line-height: 24px;">起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。</p>
						<div>
							<div class="more_btn"><a href="#/two">了解更多</a></div>
						</div>
					</div>
				</div>
				<div class="index_women_box_img" style="line-height: 28px;">
					<img src="https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi8yOTlmZDlkNmVhN2FjZDI5Yzc5NTFhM2NlZGMzMmI0Mi5qcGc_p_p100_p_3D.jpg" alt="">
				</div>
			</div>
			<div class="index_women_box">
				<div class="index_women_box_img" style="line-height: 28px;box-sizing: border-box;">
					<img src="https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy84ZGVjMjAzMzgyMWNlMDBhOTEwYWMwYjljOGQzZjU5MC5qcGc_p_p100_p_3D.jpg" alt="">
				</div>
				<div class="index_women_box_cont" >
					<div class="index_women_box_cont_">
						<p style="color:rgb(153, 153, 153);line-height: 24px;">艺术篇</p>
						<p style="font-size: 22px;line-height: 30px;font-weight: 500;">最美的是生活本身</p>
						<p style="padding: 20px 0px;line-height: 24px;">起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。</p>
						<div>
							<div class="more_btn"><a href="#/three">了解更多</a></div>
						</div>
					</div>
				</div>
			</div>
	    </div>
	    <div id="boke" class="index_boke">
	    	<div class="all_tit">博客</div>
			<div class="index_boke_con">起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。</div>
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
						title:'相爱的人',
						text:'犹如黑暗中的烛光，照亮了整个人类的历史',
						img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi81Mjg5NTM3MjdlZjNhNGUxYzQ0MWM2MDc4NTM0YzM5Yi00NTB4NDUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						title:'建筑',
						text:'不同的是外形，相同的是内在',
						img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi81ZGI1OGU3YjIxYjkwNjRjYTVhZjQ5ZWZlN2I3YThiMi00NTB4NDUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					},
					{
						title:'神奇的自然',
						text:'有一种神奇叫做孤独的孕育',
						img:'https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8yMDZiMjc4MTZiNzQ2YzQ3MjNhNGQzYzI3ZjE2MDg5YS00NTB4NDUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'
					}
				]
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
				autoplay:7000,
				speed:1000,
				loop: true,
			    navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			    }
			});
		}
	}
	
</script>

<style>
	html, body {
     	position: relative;
     	height: 100%;
   	}
   	body {
     	background: #eee;
     	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
     	font-size: 14px;
     	color:#000;
     	margin: 0;
     	padding: 0;
	}
	.swiper-container {
	  	width: 100%;
	  	height: 100%;
	}
   	.swiper-slide {
     	text-align: center;
     	font-size: 18px;
     	background: #fff;
    	/* Center slide text vertically */
    	display: -webkit-box;
     	display: -ms-flexbox;
     	display: -webkit-flex;
     	display: flex;
     	-webkit-box-pack: center;
     	-ms-flex-pack: center;
     	-webkit-justify-content: center;
     	justify-content: center;
     	-webkit-box-align: center;
     	-ms-flex-align: center;
     	-webkit-align-items: center;
     	align-items: center;
   	}
   	.img_box img{
   		width: 100%;
   		height:100%;
   	}

   	/*关于我们*/
   	h1{
   		font-family: comic sans ms;
	    font-size: 40px;
	    font-weight: bold;
	    font-style: normal;
	    color: #000;
	    text-align: center;
	    line-height: 80px;
   	}
   	.index_about{
   		padding:20px 0px;
   		background: #fff;
   	}
   	.index_about p{
   		margin:0px 200px;
   		color:rgb(102, 102, 102);
   		font-size: 14px;
   		line-height: 28px;
   	}
   	.index_about_img{
   		text-align: center;
   		padding:20px;
   	}
   	.about_some{
   		min-height: 300px;
   		overflow: hidden;
   		background: #f8f8f8;
   		padding: 50px 200px;
   	}
   	.about_some_box{
   		float: left;
   		margin:10px 10px;
   		width: 350px;
   		text-align: center;
   		background: #fff;
   		transition: .45s;
   	}
   	.about_some_box:hover{
   		transform: translateY(-20px);
   		box-shadow: -2px -2px 5px 10px #f2f2f2;
   	}
   	.about_some_box p{
   		line-height: 28px;
   		margin: 0;
   	}
   	.about_some_box img{
   		width: 100%;
   		height: 100%;
   	}
/*我们的理念*/
	.index_women{
		background: #fff;
		padding:30px 0px;
	}
   	.all_tit{
		padding: 0px 0px;
		font-size: 40px;
		text-align: center;
   	}
   	.index_women_box_o{
		padding: 40px 200px;
		min-height: 400px;
		overflow: hidden;  	
   	}
	.index_women_box_o div{
		width: 50%;
		float: left;
	}
	.index_women_box{
		overflow: hidden;
		min-height: 300px;
	}
	.index_women_box>div{
		width: 50%;
		min-height: 840px;
		height: 840px;
		float: left;
	}
	.index_women_box_img{
		padding-right: 0px;
	}
	.index_women_box_img img{
		width: 100%;
		height: 100%;
	}
	.index_women_box_cont{
		padding:230px 0px 0px 0px;
		box-sizing: border-box;
	}
	.more_btn{
		padding:10px 20px;
		background: rgb(85, 85, 85);
		color: #fff;
		display: inline-block;
		cursor: pointer;
	}
	.more_btn a{
		color:#fff;
		text-decoration: none;
	}
	.index_women_box_cont_{
		padding:0px 100px;
	}
/*博客*/
	.index_boke{
		background:#fff;
	}
	.index_boke_con{
		padding:20px 200px;
		text-align: center;
		line-height: 24px;
		padding-top: 20px;
		color: rgb(102, 102, 102);
	}

</style>