<template>
  <div class="list_content">
        <div class="list_1" v-for="index in 5" v-bind:key="index">
            <div class="top">
            <div class="left">
                <span>c000023698</span>
            </div>
            <div class="rightdta">
                <span>{{ name }}</span>
            </div>
            </div>
            <div class="centent">
                <p>全日制劳动合同</p>
            </div>
            <div class="date">
                2018-04-02
            </div>
            <img src="../assets/images/contract/pullDown.png">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String
    },
    created() {
        console.log("你选择了：", this.name);
    }
};
</script>

<style>

</style>


