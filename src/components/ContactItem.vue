<template>
  <div class="list_content">
        <div class="list_1" v-if="type == '个人'" v-for="item in contactItems" :key="item.id">
            <div class="pic">
                <img src="../assets/images/contacts/pic.png" alt="">
            </div>
            <div class="rightlis">
                <div class="name" v-if="item.name">{{item.name}} 
                    <span class="yiShiMing" v-if="item.status==1 && item.name">已实名</span>
                    <span class="weiShiMing" v-if="item.status==2 && item.name">未实名</span>
                </div>
                <div class="phone">{{item.phone}}</div>
            </div>
        </div>

        <div class="list_1" v-if="type == '企业'" v-for="item in companyItems" :key="item.id">
            <div class="pic">
                <img src="../assets/images/contacts/pic.png" alt="">
            </div>
            <div class="rightlis">
                <div class="name" v-if="item.name">{{item.name}} 
                    <span class="yiShiMing" v-if="item.status==1 && item.name">已实名</span>
                    <span class="weiShiMing" v-if="item.status==2 && item.name">未实名</span>
                </div>
                <div class="phone">{{item.phone}}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        type: String,
        contactItems: Array,
        companyItems: Array
    },
    data() {
        return {
            // 接受到type === 个人 或者 企业 自行判断
        }
    },
    created() {
    }
}
</script>

<style>
    .list_content .list_1{background: #fff;border-radius: 5px;margin-top:15px;padding: 10px;}
    .list_content .list_1 .pic{display: inline-block;width: 50px;height: 50px;border-radius: 50px;}
    .list_content .list_1 .rightlis{display: inline-block;width: 68%;}
    .list_content .list_1 .rightlis .name{line-height: 23px;}
    .list_content .list_1 .rightlis .name .weiShiMing{background:red;}
    .list_content .list_1 .rightlis .phone{color:#666666;}
    .list_content .list_1 .rightlis .name span{background: #60c0ff;padding: 3px 10px;color: #fff;border-radius: 10px;}
</style>


