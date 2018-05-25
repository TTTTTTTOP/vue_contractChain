<template>
  <div>
        <div class="company">
             <div class="company-top">
                 <mt-header fixed title="授权人信息">
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
               <my-input v-model='authUsername' :name="nameItems[0]" :placeholder="realNamePlaceholder" @input="handleValue"></my-input>
               <my-input v-model='authUserTel' :name="nameItems[1]" :placeholder="telPlaceholder" @input="handleValue"></my-input>
               <my-input v-model='authUserCategory' :name="nameItems[2]" :placeholder="categoryPlaceholder" @input="handleValue"></my-input>
            </ul>
            <div class="addPic">
              <ul>
                <photo type="身份证正面"></photo>
                <photo type="身份证反面"></photo>
                <photo type="授权书公章"></photo>
              </ul>
            </div>
          </div>
        </div>
        <router-link to="/">
          <div class="next-step">
            <p>提交</p>
          </div>
        </router-link>
  </div>
</template>
<script>
import MyInput from './MyInput.vue'
import Photo from './Photo.vue'
  export default{
    name: 'authorizer',
    data() {
      return {
        authUsername: '',
        authUserTel: '',
        authUserCategory: '',
        realNamePlaceholder: "请输入法人姓名",
        telPlaceholder: "请输入法人电话",
        categoryPlaceholder: "请输入身份证号码",
        nameItems: ['授权人姓名', '授权人电话', '身份证号码']
      }
    },
    components: {
      MyInput,
      Photo
    },
    methods: {
      handleValue(value) {

      }
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
  margin: 0 0.5%;
  width: 30%;
}
.company-bg .addPic ul li p{
  margin-top: -15px;
  color: #333333;
  font-size: 14px;
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