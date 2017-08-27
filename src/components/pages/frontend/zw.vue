<template lang="html">

    <div class=" margin-bottom-40">
                    <div class="row">

                        <div class="col-md-12 col-sm-12">
                            <div class="right box_right">



                                        <div class="query_detail">

                                            <div class="form-group form-group-left">
                                                <label class="control-label" style="width: 70px; text-align: right">编号：</label>
                                                <input   id="m_report_number" type="text" class="form-control" value="" placeholder=" ">
                                            </div>


                                            <div class="form-group form-group-left">
                                                <label class="control-label" style="width: 70px; text-align: right;">防伪码：</label>
                                                <input   id="m_security_code" type="text"  class="form-control" value="" placeholder=" ">
                                            </div>

                                            <div class="form-group "  style="text-align: center;" id="query-result">


                                            </div>
                                            <div class="form-group query_btn_box">

                                               <a href="javascript:void(0)" class="btn btn-primary" id="query_btn">真伪查询</a>
                                            </div>
                                        </div>







                            </div>
                        </div>
                    </div>

            <!-- END CONTENT -->
        </div>
</template>



<style lang="css"  scoped>
    @import '/static/js/pagination/pagination.css';
    #pageagen{ padding: 10px 0;}
</style>
