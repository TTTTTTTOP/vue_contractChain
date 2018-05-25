<template>
  <li>
    <img src="../assets/images/company/camera.png">
    <p>{{ type }}</p>
  </li>
</template>
<script>
export default {
    props: {
        type: String
    }
}
</script>
<style>
.li{
  float: left;
  margin: 0 0.5%;
  width: 30%;
}
.li p{
  margin-top: -10px;
  color: #333333;
  font-size: 14px;
}
</style>

