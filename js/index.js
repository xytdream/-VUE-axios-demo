/**
 * 请求地址：http://wthrcdn.etouch.cn/weather_mini
 * 请求方式：get
 * 请求参数：city=城市名
 * 响应内容：天气信息
 */
var app = new Vue({
    el: "#weatherApp",
    data:{
        newCity:'',
        currentCity: '张家界',
        weatherList:[]
    },
    methods:{
        searchWeather:function(){
            // 保存当前this
            var that = this
            // 调用接口
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.currentCity)
            .then(function(response){
                console.log(response)
                // console.log(response.data.data.forecast)
                that.weatherList = response.data.data.forecast
            }).catch(function(err){
                alert("请输入正确的城市")
            })
        },
        searchNew:function(){
            if(this.newCity!=''){
                this.currentCity = this.newCity
                this.searchWeather();
                this.newCity = ''
            }
        },
        changeCity:function(hotCity){
            this.currentCity = hotCity;
            this.searchWeather();
        }
    }
})

app.searchWeather()
