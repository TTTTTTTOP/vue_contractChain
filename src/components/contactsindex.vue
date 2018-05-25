<template>
        <div class="contacts">
            <div class="conta_top">
                <p>联系人</p>
                <router-link to="addContact">
                  <img src="../assets/images/contacts/addNew.png">
                </router-link>
            </div>
           <div class="content_list">
                <mt-navbar v-model="active">
                    <mt-tab-item v-for="item in itemNames" v-bind:key="item.id" :id="item">{{ item }}</mt-tab-item>
                </mt-navbar>
                    
                <!-- tab-container -->
                <mt-tab-container v-model="active">

                <mt-tab-container-item v-for="item in itemNames" v-bind:key="item.id" :id="item">
                      <contact-item v-if="item === '个人'" :type="item"  :contactItems="contactItems">{{ item.id }}</contact-item>
                      <contact-item v-else :type="item"  :companyItems="companyItems">{{ item.id }}</contact-item>
                </mt-tab-container-item>
                
                </mt-tab-container>
           </div>
        </div>
</template>

<script>
import { Checklist } from 'mint-ui';
import ContactItem from './ContactItem.vue';
import { Navbar, TabItem } from 'mint-ui';
import axios from 'axios'

export default {
    data(){
        return {
            companyItems: [],
            contactItems:[],
            itemNames: ['个人', '企业'],
            active:"个人",
        }
    },
    methods:{
        back(){  
            this.$router.go(-1);
        }
    },
    created() {
        axios.get("/api/getContact",{params:{}}).then(res =>{
            this.contactItems = res.data.contact;
            console.log("items:", this.contactItems);
        });

        axios.get("/api/getCompany",{params:{}}).then(res =>{
            this.companyItems = res.data.company;
            console.log("companyItems:", this.companyItems);
        });
    },
    mounted:function(){
      
    },
    components: {
        ContactItem
    }
}
</script>
    
<style>
     .contacts{ background:#cbe3f5;padding-bottom: 50px; width: 100%;   position: absolute;  height: 100%;}
    .conta_top{text-align: center;height: 150px;background: #60c0ff;}
    .conta_top p{margin: 0;padding-top: 10px;font-size: 18px;font-weight: bold;color: #fff;}
    .mint-tab-item-label{font-size: 16px;}
    .conta_top img{position: absolute;top:10px;right:17px;}
    .content_list{width: 90%;margin: 0 auto;margin-top: -80px;}
    .mint-navbar{background: none;color: #c6e5fa}
    .mint-navbar .mint-tab-item.is-selected{color: #fff;    border-bottom: 3px solid #fff;}
   
</style>