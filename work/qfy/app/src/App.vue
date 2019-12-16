<template>
  <div id="app">
    <div class="app_header">
      <img src="https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMi9iYzM4ZjFjOTM4Zjk4Yzc2MTFjMTMzNzY4YmE3Yzc5YS5wbmc_p_p100_p_3D.png" alt="">
      <my_nav></my_nav>
    </div>
    <div class="app_content">
      <router-view></router-view>
    </div>
    <div class="app_footer">
      <div class="app_footer_img">
        <img src="https://ccdn.goodq.top/caches/569b046fc16663a994ea33d5a2a60b54/aHR0cDovLzU0ZDRhNDYyOWZiNmIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi8wNGY5ODI5OTVlOWEwM2ExNmQ3NzdiOTllNTRhODVhZC0yMTJ4OTAucG5n.png" alt="">
      </div>
      <ul class="app_footer_icon">
        <li class="q"></li>
        <li class="f"></li>
        <li class="w"></li>
        <li class="m"></li>
        <li class="p"></li>
      </ul>
      <div>Copyright © 2017 个人摄影网站. All rights reserved.</div>
    </div>
  </div>
</template>
<script>
  import my_nav from './conmponents/my_nav.vue'
  export default {
    // name: 'app',
    data () {
      return {}
    },
    components:{
      my_nav
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .app_header{
    min-height: 80px;
    background: #fff;
    text-align: center;
    padding:20px 0px;
  }
  .app_header img{
    height: 80px;
  }
  .app_footer{
    color: #fff;
    font-size:14px;
    padding:80px 200px 50px 200px;
    background: #000;
    text-align: center;
  }
  .app_footer_img img{
      height: 80px;
  }
  .app_footer_icon{
    line-height: 80px;
  }
  .app_footer_icon li{
    display: inline-block;
    margin: 0px 5px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-image: url('http://fast.qifeiye.com/FeiEditor/images/icon/social_icon_32x32.png');
  }
  .app_footer_icon .q{
    background-position: -65px 64px;
  }
  .app_footer_icon .f{
    background-position: -129px 64px;
  }
  .app_footer_icon .w{
    background-position: 0px 64px;
  }
  .app_footer_icon .m{
    background-position: 96px 64px;
  }
  .app_footer_icon .p{
    background-position: 64px 64px;
  }
</style>
