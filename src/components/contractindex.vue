<template>
        <div class="contractindex">
            <div class="conta_top">
                <p>合同管理</p>
            </div>
           <div class="content_list">
                <mt-navbar v-model="active">
                    <mt-tab-item v-for="item in items" v-bind:key="item.id" :id="item"
                    @click.native.prevent="active = item">{{ item }}</mt-tab-item>
                </mt-navbar>
                    
                <!-- tab-container -->
                <mt-tab-container v-model="active">
                   
                  <mt-tab-container-item v-for="item in items" v-bind:key="item.id" :id="item">
                      <contract-item :name="item"></contract-item>
                  </mt-tab-container-item>
                </mt-tab-container>
           </div>
        </div>
</template>
<script>
import { Checklist } from 'mint-ui';
import ContractItem from './ContractItem.vue'
import { Navbar, TabItem } from 'mint-ui';
export default {
    data(){
        return {
            items: ['全部', "待签署", "已签署", "待修改", "已生效", "已失效"],
            selected:"0",
            active: "全部"
        }
    },
    methods:{
        back(){  
            this.$router.go(-1)
        }
    },
    components: {
        ContractItem
    },
    created() {
        console.log("selected:", this.selected);
        
    }
}
</script>
    
<style>
     .contractindex{ background:#cbe3f5;padding-bottom: 50px; width: 100%;   position: absolute;  height: 100%;}
     .contractindex .conta_top{text-align: center;height: 150px;background: #60c0ff;}
     .contractindex .conta_top p{margin: 0;padding-top: 10px;font-size: 18px;font-weight: bold;color: #fff;}
     .contractindex .mint-tab-item-label{font-size: 16px;}
     .contractindex .rightdta{display: inline-block;right: 10px;top: 10px;  position: absolute;color: #f1325f;}
     .contractindex .content_list{width: 90%;margin: 0 auto;margin-top: -80px;}
     .centent p{margin: 0;color: #60c0ff;padding: 5px 0;}
     .date{font-size: 12px;}
     .contractindex .mint-navbar{background: none;color: #c6e5fa}
     .contractindex .mint-navbar .mint-tab-item.is-selected{color: #fff;    border-bottom: 3px solid #fff;}
     .contractindex .list_content .list_1{position: relative; background: #fff;border-radius: 5px;margin-top:15px;padding: 10px;}
     .contractindex .list_content .list_1 .pic{display: inline-block;width: 50px;height: 50px;border-radius: 50px;}
     .contractindex .list_content .list_1 .rightlis{display: inline-block;width: 68%;}
     .contractindex .list_content .list_1 .rightlis .name{line-height: 23px;}
     .contractindex .list_content .list_1 .rightlis .name span{background: #60c0ff;padding: 3px 10px;color: #fff;border-radius: 10px;}
</style>