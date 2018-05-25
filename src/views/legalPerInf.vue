<template>
  <div>
        <div class="company">
             <div class="company-top">
                 <mt-header fixed title="法人信息">
                     <mt-button icon="back" slot="left"></mt-button>
                 </mt-header>
             </div>
             <div class="steps">
               <ul>
                <li class="firstStep">企业信息<img src="../assets/images/company/next.png"></li>
                <li class="secondStep">法人信息<img src="../assets/images/company/next.png"></li>
                <li>授权人信息</li>
              </ul>
             </div>
        </div>
        <div class="company-bg">
          <div class="company-msg">
            <ul>
              <my-input v-model="legalName" :placeholder="itemDesc[0]" :name="nameItems[0]"></my-input>
              <my-input v-model="legalTel" :placeholder="itemDesc[1]" :name="nameItems[1]"></my-input>
              <my-input v-model="legalCertificate" :placeholder="itemDesc[2]" :name="nameItems[2]"></my-input>
            </ul>
            <div class="addPic">
              <ul>
                <photo type="身份证正面"></photo>
                <photo type="身份证反面"></photo>
              </ul>
            </div>
          </div>
        </div>
        <router-link to="/authorizer">
          <div class="next-step">
            <p>下一步</p>
          </div>
        </router-link>
  </div>
</template>
<script>
import MyInput from './MyInput.vue'
import Photo from './Photo.vue'
  export default{
    name: 'legalPerInf',
    data() {
      return {
        nameItems: ['法人姓名','法人电话','身份证号'],
        itemDesc: ['请输入法人姓名','请输入法人电话','请输入身份证号'],
        legalName: '',
        legalTel: '',
        legalCertificate: '',
      }
    },
    components: {
      MyInput,
      Photo
    }
  }

</script>
<style scoped>
.company{
  height: 80px;
  width: 100%;
  background: #60c0ff;
}
.company-top .mint-header{
  height: 8%;
  font-size: 18px;
  background: #60c0ff;
}
.company .steps{
  margin-top: 75px;
  position: relative;
}
.company .steps ul{
  clear: both;
  list-style: none;
}
.company .steps ul li{
  float: left;
  color: #fff;
  width: 32%;
  font-size: 14px;
}
.company .steps .firstStep img{
  position: absolute;
  left: 31%;
  top: 3px;
}
.company .steps .secondStep img{
  position: absolute;
  right: 36.5%;
  top: 3px;
}
.company-bg{
  height: 500px;
  background-color: #e3edf5;
}
.company-bg .company-msg{
  width: 90%;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  margin-top: -42px;
  margin-left: 5%;
  height: 40%;
}
.company-bg .company-msg ul li{
  height: 40px;
  list-style: none;
  line-height: 15px;
}
.company-bg .company-msg ul li span{
  display: inline-block;
  margin-left: -20px;
  margin-right: 10px;
  color: #333333;
}
.company-bg .company-msg ul li input{
  border: none;
  outline: none;
}
.company-bg .addPic{
  margin: 0;
  padding: 0;
  /*text-align: center;*/
}
.company-bg .addPic ul li{
  float: left;
  margin-left: 4.5%;
  width: 45%;
}
.company-bg .addPic ul li p{
  margin-top: -15px;
  color: #333333;
}
.next-step{
  width: 90%;
  margin-left: 5%;
  position: absolute;
  bottom: 28%; 
  background: #60c0ff;
  border-radius: 30px;
  text-align: center;
}
</style>