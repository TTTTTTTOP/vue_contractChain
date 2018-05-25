<template>
  <div>
        <div class="company">
             <div class="company-top">
                 <mt-header fixed title="添加联系人">
                     <mt-button icon="back" slot="left"></mt-button>
                 </mt-header>
             </div>
        </div>
        <div class="company-bg">
          <div class="company-msg">
            <ul>
              <my-input v-model='username' :name="nameItems[0]" :placeholder="realNamePlaceholder" @input="handleValue"></my-input>

              <my-input v-model='telNum' :name="nameItems[1]" :placeholder="telPlaceholder" @input="handleValue"></my-input>

              <my-input v-model='category' :name="nameItems[2]" :placeholder="categoryPlaceholder" @input="handleValue"></my-input>
            </ul>
          </div>
        </div>
        <div class="next-step">
          <p>提交</p>
        </div>
  </div>
</template>
<script>
import MyInput from './MyInput.vue'
  export default{
    name: 'addContact',
    data() {
      return {
        username: '',
        telNum: '',
        category: '',
        realNamePlaceholder: "请输入真实姓名",
        telPlaceholder: "请输入联系人账号",
        categoryPlaceholder: "请选择联系人类别",
        nameItems: ['姓名', '账号', '分类']
      }
    },
    components: {
      MyInput
    },
    methods: {
      // 姓名，其他以此类推
      handleValue(value) {
        console.log('name ===>', this.username)
        console.log('telNum ===>', this.telNum)
        console.log('category ===>', this.category)
      }
    }
  }

</script>
<style scoped>
.company{
  height: 110px;
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
}
.company-bg .company-msg ul li{
  height: 40px;
  list-style: none;
  line-height: 40px;
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
  text-align: center;
}
.next-step{
  width: 90%;
  margin-left: 5%;
  position: absolute;
  bottom: 55%; 
  background: #60c0ff;
  border-radius: 30px;
  text-align: center;
}
</style>