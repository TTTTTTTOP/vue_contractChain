<template>
  <li>
     <span>{{ name }}</span>
     <input type="text" :placeholder="placeholder" :value="currentValue" @input="handleInput">
  </li>
</template>
<script>
export default {
    data () {
      return {
        currentValue: this.value
      }
    },
    props: { 
      value: [String, Number],
      placeholder: String,
      name: String
    },
    methods: {
      handleInput() {
        const value = event.target.value
        this.currentValue = value
        this.$emit('input', value)
      }
    }
  
}
</script>
<style>
li{
  list-style: none;
}
input{
  border: none;
  outline: none;
}
</style>


