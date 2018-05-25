<template>
  <div id="app">
    <router-view></router-view>
    <div id="tag">
      <router-link to="/homeindex" class="home hometag">
        <i></i>
        
        <p>首页</p>
      </router-link>
      <router-link to="/contractindex" class="home classtag">
        <i></i>
        
        <p>合同</p>
      </router-link>
      <router-link to="/contactsindex" class="home moneytag">
        <i></i>
        
        <p>联系人</p>
      </router-link>
      <router-link to="/myindex" class="home mytag">
        <i></i>
        
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
// import Tag from '@/components/tag/tag'
export default {
  name: 'App',
  
}
</script>

<style>
html{
  height: 100%;
  background:#60c0ff; 
}
body{
  margin: 0;
  padding: 0;
}
label{
        padding: none;
}
#tag{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0%;
  color: white;
  font-size: 14px;
  z-index: 99;
}
#tag .home{
      width: 25%;
      float: left;
      background-color: #fff;
      border-top: 1px solid #e0e0e0;
      color: #666666;
      text-align: center;
      padding: 10px 0 5px 0;
      text-decoration: none;
  }
#tag .home p{
  margin: 0;
  padding: 0;
}
#tag .home i{
  width: 23px;
  height: 23px;
  display: inline-block;
}
#tag .hometag i{
  background:url("./assets/images/home/tag/home.png") no-repeat;
  background-position: center;
}
#tag .classtag i{
  background: url("./assets/images/home/tag/contacts.png") no-repeat;
  background-position: center;
}
#tag .moneytag i{
  background: url("./assets/images/home/tag/contract.png") no-repeat;
  background-position: center;
}
 
#tag .mytag i{
  background: url("./assets/images/home/tag/my.png") no-repeat;
  background-position: center;
}

/*选中后的状态*/
#tag .router-link-active{
    color: #60c0ff;
  }
#tag .hometag.router-link-active i{
  background: url("./assets/images/home/tag/home_on.png") no-repeat;
  background-position: center;
}
#tag .classtag.router-link-active i{
  background: url("./assets/images/home/tag/contacts_on.png") no-repeat;
  background-position: center;
}
#tag .moneytag.router-link-active i{
  background: url("./assets/images/home/tag/contract_on.png") no-repeat;
  background-position: center;
}
#tag .mytag.router-link-active i{
  background: url("./assets/images/home/tag/my_on.png") no-repeat;
  background-position: center;
}
</style>
