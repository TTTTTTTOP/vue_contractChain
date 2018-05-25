<template>
        <div class="myself-all">
            <div class="username">
                <img src="../assets/images/my/pic.png">
                <p class="name">用户名</p>
                <p class="number">15068629255</p>
                <p class="confirmed"><span>已实名</span></p>
                <p class="toggle">切换身份>></p>
            </div> 
            <div class="content-list">
                     <ul>
                         <my-item v-for="(item, index) in myItems" :key="index" :imgIndex="index" :name="item"
                            @click-item="clickItem"></my-item>
                        <!-- <li>
                            <router-link to="/companyConfir" class="company-link">
                            <img src="../assets/images/my/list_pic2.png">
                            <p>企业认证</p>
                            </router-link>
                        </li> -->
                     </ul>   
            </div> 
        </div> 
</template>
<script>
import { Checklist } from 'mint-ui';
import MyItem from './MyItem.vue';
export default {
    data(){
        return {
            myItems: ['个人认证', '企业认证', '我的签名', '安全设置']
        }
    },
    methods:{
        back(){  
            this.$router.go(-1)
        },
        clickItem(index) {
            console.log('你点击了', this.myItems[index])
            if (index == 1) {
                this.$router.push('companyConfir')
            }
        }
    },
    components: {
        MyItem
    }
}
</script>

<style>
.username{background:#fff;width:92%;margin:118px auto 10px;text-align:center;border-radius:5px;}
.username img{margin-top:-35px;}
.username p{padding: 4px 0;margin:0;}
.username p span{background-color:#60c0ff;display:inline-block;width:18%;color:#fff;border-radius:5px;}
.username .toggle{color:#60c0ff;}
.content-list .company-link{text-decoration: none;}
.content-list ul{margin:0;padding:0;padding-left:2.5%;
}
.content-list ul li{display: inline-block;width: 46%;margin: 1.5% 1%;text-align: center;background-color: #fff;padding-bottom: 4%;border-radius: 5px;}
.content-list ul li p{padding: 0;margin: 0;}
</style>