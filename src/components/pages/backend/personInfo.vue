<template>

    <div class="person-right-cont" data-type="person-info">

      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
          <el-breadcrumb-item>个人资料</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="cont">
      <h3 class="title">个人资料</h3>
      <div class="form-box">

        <el-form ref="form" :model="form" :rules="rules"  label-width="180px">
          <el-form-item label="公司简称"  prop="user_corporate_short_name">
            <el-input v-model="form.user_corporate_short_name"></el-input>
          </el-form-item>
          <el-form-item label="公司名称（中文全称）" prop="user_corporate_name">
            <el-input v-model="form.user_corporate_name"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="ages">
            <el-input v-model.number="form.ages"></el-input>
          </el-form-item>

          <el-form-item label="注册时间">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>


          <el-form-item label="协议用户" prop="is_protocol" required>
            <el-select v-model="form.is_protocol"  placeholder="请选择是否协议用户">
              <el-option label="是"  value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
            <el-form-item label="性别" prop="resource">
              <el-radio-group v-model="form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>      </el-form-item>
          <el-form-item label="性别" prop="resource">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="email" label="邮箱" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' } ]">
            <el-input v-model="form.email"></el-input>
          </el-form-item>

          <el-form-item label="文本框">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: 180px;">
            <el-button type="primary"  @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
          </el-form>

        </div>
      </div>
    </div>

</template>

<script>
  export default {
    data: function(){
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
      };
      var checkChinese = (rule, value, callback) =>{
        var reg = /^[\u4E00-\u9FA5]+$/;
        //debugger;
        if(!reg.test(value)) {

         callback(new Error('请输入中文'));
        } else {
          callback();
        }
      }

      return {

        form: {
          user_corporate_short_name: '',
          user_corporate_name: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
          ages: '',
          date1: '',
          date2: '',
          is_protocol:"",
          sex:"男",
          email:"",
          desc:"分的辅导辅导费的"

        },
        rules: {
          user_corporate_short_name: [
            {required: true, message: '请输入公司简称', trigger: 'blur'}
          ],
          user_corporate_name: [
            {required: false, message: '请输入公司简称', trigger: 'blur'},
            { validator: checkChinese, trigger: 'blur' }
          ],
          ages: [
            {required: true, validator: checkAge, trigger: 'blur' }
          ],
          is_protocol: [
            {required: true, message: '请选择协议用户', trigger: 'blur' }
          ]
//          date1: [
//            { type: 'date', required: false, message: '请选择日期', trigger: 'change' }
//          ],
//          date2: [
//            { type: 'date', required: false, message: '请选择时间', trigger: 'change' }
//          ],
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
        return false;
      }
      });
        var url ="?r=api-user-protocol/get";
        let _this=this;
        $.ajax({
          type: "post", //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"。
          url: url, //当前页地址。发送请求的地址。
          data: {ages:this.form.ages},
          dataType: "json", //预期服务器返回的数据类型。如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息来智能判断
          success: function (datajson) { //请求成功后的回调函数。
            _this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          },
          async: true, //true为异步请求，false为同步请求
          error: function (d) {

          }
        })


      }
    }
  }
</script>


