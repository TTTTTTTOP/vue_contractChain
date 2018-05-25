<template>
  <li @click="clickMe">
        <img :src="imgSrc">
        <p>{{ name }}
            <slot></slot>
        </p>
    </li>
</template>

<script>
export default {
    props: {
        styleIndex: Number,
        name: String
    },
    data() {
        return {
            imgSrc: require(`../assets/images/home/list_pic${this.styleIndex}.png`)
        }
    },
    created() {
        console.log('imgsrc:', this.imgSrc);
    },
    methods: {
        clickMe() {
            console.log("我点击了->", this.styleIndex)
        }
    }
}
</script>

<style>

</style>


