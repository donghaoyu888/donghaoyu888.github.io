<template>
	<div>
		<headers>
			<span slot="tite">通讯录</span>
			<i class="iconfont" slot="icon1" style="float: right;margin-left: 1.481481rem;">&#xe6ac;</i>
			<i class="iconfont" slot="icon2" style="float: right;">&#xe63a;</i>
		</headers>
		<div class="content">
			<div>
				<friend>
					<div class="friend-img" style="background-color: #fa9d3d;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;" >&#xe6dc;</i>
					</div>
					<span slot="friend-name" class="friend-name">新的朋友</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #07c062;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe6dc;</i>
					</div>
					
					<span slot="friend-name" class="friend-name">群聊</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #2781d9;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe627;</i>
					</div>
					
					<span slot="friend-name" class="friend-name">标签</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #2781d9;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe64d;</i>
					</div>
					
					<span slot="friend-name" class="friend-name">公众号</span>
				</friend>
				<friend>
					<div class="friend-img"  slot="friend-img">
						<img src="http://img0.imgtn.bdimg.com/it/u=1775893556,2855523308&fm=11&gp=0.jpg" style="border-radius: 0.162962rem;width: 100%;height: 100%;" alt="">
					</div>
					<span slot="friend-name" class="friend-name">星标朋友</span>
				</friend>
				<friend>
					<div class="friend-img"  slot="friend-img">
						<img src="http://img4.imgtn.bdimg.com/it/u=1753529661,2026511431&fm=26&gp=0.jpg" style="border-radius: 0.162962rem;width: 100%;height: 100%;" alt="">
					</div>
					<span slot="friend-name" class="friend-name">星标朋友</span>
				</friend>
			</div>
		</div>
	</div>
</template>
<style>
	.friend-name{
		font-size: 0.592592rem;
		line-height: 1.629629rem;
	}
</style>