<template>
  <li @click="clickItme(imgIndex)">
    <img :src="imgSrc">
    <p>{{ name }}</p>
  </li>
</template>

<script>
export default {
    props: {
        imgIndex: Number,
        name: String
    },
    data() {
        return {
            imgSrc: require(`../assets/images/my/list_pic${this.imgIndex}.png`)
        }
    },
    created() {
        
    },
    methods: {
        clickItme(index) {
            this.$emit('click-item', index)
        }
    }
}
</script>

<style>

</style>


