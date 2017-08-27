<script type="text/javascript">
    export default{
        install(Vue,options)
        {
            Vue.prototype.getData1 = function () {
                alert('我是插件中的方法');
            }
        }
    }


</script>