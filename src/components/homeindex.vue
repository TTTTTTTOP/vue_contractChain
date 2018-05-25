<template>
      <div>
        <div class="list_title">区块链合同</div>
          <div class="list_top">
            <ul>
                 <upload v-for="(name, index) in names" v-bind:key="index" :name="name" :styleIndex="index">({{ index }})</upload>
            </ul>
        </div>
      </div>
</template>
<script>

import Upload from './Upload.vue'

import { Checklist } from 'mint-ui';
export default {
    data(){
        return {
            names: ['上传合同', '模板创建', '草稿箱', '待修改', '待签署', '已签署', '已生效', '已失效']
        }
    },
    methods:{
        back(){  
            this.$router.go(-1)
        }
    },
    components: {
        Upload
    }
}
</script>

<style>
    .list_title{line-height:45px;text-align:center;color:#fff;}
    .list_top{width:92%;margin:0 auto;background:#fff;}
    .list_top ul{padding:0;margin:0;list-style:none;}
    .list_top ul li{ display: inline-block;
    width: 50%;
    margin-right: -1%;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    border-right: 1px solid #ececec;}
</style>