<template>

    <div class="person-right-cont" data-type="person-info">
      <div class="breadcrumb-box">
        <ul class="breadcrumb">
          <li><a href="?r=site/index">首页</a></li>
          <li class="active">个人资料</li>
        </ul>
      </div>
      <h1 class="p-right-title">个人资料</h1>
      <div id="person-right-list-cont">
        <div class="p-base-box p-base-info" id="p-base-info">
          <div id="p-base-info-cont">
            <form id="userForm" enctype="multipart/form-data">
              <input id="m_user_id" type="hidden" name="user_id">
              <h3>企业信息</h3>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">公司简称 <span
                            style="color: #ff0203">*</span>：</label>
                    <input id="m_corporate_short_name" type="text"
                           style="max-width: 400px;" name="user_corporate_short_name"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">公司名称（中文全称）<span
                            style="color: #ff0203">*</span>：</label>
                    <input id="m_corporate_name" type="text" style="max-width: 400px;"
                           name="user_corporate_name" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label"
                           style="width: 220px;">公司名称（英文全称）：</label>
                    <input id="m_corporate_name_en" type="text"
                           style="max-width: 400px;" name="user_corporate_name_en"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">中文地址 <span
                            style="color: #ff0203">*</span>：</label>
                    <input id="m_corporate_address" type="text"
                           style="max-width: 400px;" name="user_corporate_address"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">英文地址：</label>
                    <input id="m_corporate_address_en" type="text"
                           style="max-width: 400px;" name="user_corporate_address_en"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">报告寄送地址：</label>
                    <input id="m_diliver_address" type="text"
                           style="max-width: 400px;" name="diliver_address"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">卫生许可证编号：</label>
                    <input id="m_product_enter_hygiene" type="text"
                           style="max-width: 400px;" name="product_enter_hygiene"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left" style="margin-left: 70px">
                    <label class="control-label" style="max-width: 220px;">所在省市：</label>
                    <div class=" area-section-div">
                      <select style="max-width: 200px;" class="form-control"
                              name="user_corporate_provience"
                              id="m_user_corporate_provience">
                      </select>
                      <select style="max-width: 200px;" class="form-control"
                              name="user_corporate_city" id="m_user_corporate_city">

                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">主要产品：</label>
                    <input id="m_main_product" type="text" style="max-width: 400px;"
                           name="main_product" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">协议编号：</label>
                    <input id="m_protocol_code" type="text" style="max-width: 400px;"
                           name="protocol_code" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">协议开始时间：</label>
                    <input id="m_protocol_start" type="text" style="max-width: 400px;"
                           name="protocol_start" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">协议结束时间：</label>
                    <input id="m_protocol_end" type="text" style="max-width: 400px;"
                           name="protocol_end" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">销售：</label>
                    <input id="m_seller_name" type="text" style="max-width: 400px;"
                           name="seller_name" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">客服：</label>
                    <input id="m_customer_service_name" type="text"
                           style="max-width: 400px;" readonly="readonly"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">药监局帐号：</label>
                    <input id="m_yao_account" type="text"
                           style="max-width: 400px;" name="yao_account"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">药监局密码：</label>
                    <input id="m_yao_password" type="password"
                           style="max-width: 400px;" name="yao_password"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
              </div>
              <!---->
              <h3 style="border-top: 1px solid #dedede;width: 900px;margin-top: 20px;">
                联系人信息</h3>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">联系人 <span
                            style="color: #ff0203">*</span>：</label>
                    <input id="m_contacts" type="text" style="max-width: 400px;"
                           name="user_contacts" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">昵称：</label>
                    <input id="m_user_nickname" type="text" style="max-width: 400px;"
                           name="user_nickname" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">性别：</label>
                    <div class="radio-box pxb"
                         style="width: 50px;float: left;margin: 5px 0 0 0;">
                      <input type="radio" value="1" name="user_sex" class="pxb1">
                      <label for="">男</label>
                    </div>
                    <div class="radio-box"
                         style="width: 50px;float: left;margin: 5px 0 0 0;">
                      <input type="radio" value="2" name="user_sex" class="pxb2">
                      <label for="">女</label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">是否月结：</label>
                    <div class="radio-box"
                         style="width: 50px;float: left;margin: 5px 0 0 0;">
                      <input type="radio" id="is_monthly_pay2" disabled="disabled"
                             checked value="2" name="is_monthly_pay"
                             class="pxb2">
                      <label for="">否</label>
                    </div>
                    <div class="radio-box pxb"
                         style="width: 50px;float: left;margin: 5px 0 0 0;">
                      <input type="radio" id="is_monthly_pay1" disabled="disabled"
                             value="1" name="is_monthly_pay"
                             class="pxb1">
                      <label for="">是</label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">发送账单日期：</label>
                    <input id="m_bill_day" type="text" disabled="disabled"
                           style="max-width: 200px;"
                           name="bill_day" class="form-control" value=""
                           placeholder=" ">日
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">部门：</label>
                    <input id="m_department" type="text" style="max-width: 400px;"
                           name="user_department" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">职位：</label>
                    <input id="m_position" type="text" style="max-width: 400px;"
                           name="user_position" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">联系电话 ：</label>
                    <input id="m_user_tel" type="text" style="max-width: 400px;"
                           name="user_tel" class="form-control" value=""
                           placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">联系手机：</label>
                    <input id="m_phone" type="text" style="max-width: 400px;"
                           name="user_phone" class="form-control" value=""
                           placeholder="">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left send-status-div">
                    <label class="control-label" style="width: 220px;">通知方式：</label>
                    <div class="radio-box yjfs" style="width: 50px;float: left;margin: 5px 0 0 0;">
                      <input type="radio" value="0" name="send_order_status" class="pxb2">
                      <label for="">邮件</label>
                    </div>
                    <div class="radio-box pxb" style="width: 50px;float: left;margin: 5px 0 0 0;">
                      <input type="radio" value="1" name="send_order_status"
                             class="pxb1">
                      <label for="">短信</label>
                    </div>

                    <div class="radio-box yjhdx"  style="width: 90px;float: left;margin: 5px 0 0 0;">
                      <input type="radio" value="2" name="send_order_status" class="pxb2">
                      <label for="">邮件和短信</label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">邮箱 <span
                            style="color: #ff0203">*</span>：</label>
                    <input id="m_email" type="text" style="max-width: 400px;"
                           name="user_email" class="form-control" value=""
                           placeholder="">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">QQ：</label>
                    <input id="m_qq" type="text" style="max-width: 400px;" name="qq"
                           class="form-control" value="" placeholder=" ">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group form-group-left ">
                    <label class="control-label" style="width: 220px;">微信：</label>
                    <input id="m_weixin" type="text" style="max-width: 400px;"
                           name="weixin" class="form-control" value="" placeholder=" ">
                  </div>
                </div>
              </div>
              <div class="row" id="protocol_div" style="display: none">
                <h3 style="border-top: 1px solid #dedede;width: 900px;margin-top: 20px;">
                  用户钱包</h3>


                <label
                        style="width: 150px;text-align: center;font-size: 15px;margin-left: 10px;">是否协议用户:</label>
                <input id="is_protocol" type="text"
                       style="max-width: 50px;border-width:0px;" value=""
                       readonly="readonly">


                <h4 style="margin-left: 40px">卡券汇总</h4>
                <table class="table table-bordered" id="user_coupon"
                       style="width: 90% ;margin:auto;border-color:#d2d6de">
                  <thead>
                  <tr>
                    <td>类型</td>
                    <td>券名</td>
                    <td>使用范围</td>
                    <td class="cnt">累计购买券数</td>
                    <td class="cnt">累计使用券数</td>
                    <td class="cnt">剩余券数</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>A券</td>
                    <td>备案和流通</td>
                    <td>LA</td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_a[0]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_a[1]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_a[2]" value="0"></td>
                  </tr>
                  <tr>
                    <td>B券</td>
                    <td>风险物质</td>
                    <td>LB</td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_b[0]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_b[1]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_b[2]" value="0"></td>
                  </tr>
                  <tr>
                    <td>C券</td>
                    <td>生产用水</td>
                    <td>LC</td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_c[0]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_c[1]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_c[2]" value="0"></td>
                  </tr>
                  <tr>
                    <td>D券</td>
                    <td>技能培训</td>
                    <td>LD</td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_d[0]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_d[1]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_d[2]" value="0"></td>
                  </tr>
                  <tr>
                    <td>E券</td>
                    <td>质量经理人培训</td>
                    <td>LE</td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_e[0]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_e[1]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_e[2]" value="0"></td>
                  </tr>
                  <tr>
                    <td>F券</td>
                    <td>GMPC培训</td>
                    <td>LF</td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_f[0]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_f[1]" value="0"></td>
                    <td class="cnt"><input type="text" readonly="readonly"
                                           name="cp_f[2]" value="0"></td>
                  </tr>
                  </tbody>
                </table>
                </br>
                <h4 style="margin-left: 40px">协议列表</h4>
                <div id="member-protocol-list" style="width: 90%; margin: auto;"></div>
              </div>
            </form>
          </div>
        </div>
        <div class="mx-info-btn-div"><a href="javascript:void(0)" class="btn-primary btn info-btn"
                                        id="mx-info-btn" style="margin-left: 112px;">保存</a></div>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '个方法国发7777777887777股份'
      }
    },
    created (){

    },
    mounted() {

    },
    updated(){

      this.$http.jsonp('https://sug.so.360.cn/suggest',{word:'a'},{jsonp:'callback'}).then(function(res){
        console.log(res.data);
      },function(res){
        console.log(res.status);
      });
    }
  }
</script>

