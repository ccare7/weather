// pages/weather/weather.js

let app=getApp();
let url = app.url;
let key = app.key;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    now:'',
    cond_code_d:'unknow',
    daily_forecast:'',
    loc:'',
    hourly:'',
  },
  getLocation(){
    wx.showLoading({
      title: '加载中',
      mask:true
    }),
    wx.getStorage({
      key: 'cid',
      success:res=>{
        this.setData({
          loc:res.data
        })
      },
    }),
    wx.getLocation({
      success: res => {
        this.setData({
          lon: res.longitude,
          lat: res.latitude,
        }),
        this.getNowWeather();
      },
    })
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  getNowWeather(){
      wx.request({
        url: url + "forecast",
        data: {
          location: this.data.loc == "" ? this.data.lon + ',' + this.data.lat : this.data.loc,
          key: key
        },
        success: res => {
          wx.hideLoading();
          wx.stopPullDownRefresh();      // 打印当前成功获取到的数据
          this.setData({
              now: res.data.HeWeather6[0].basic,
              cond_code_d: res.data.HeWeather6[0].daily_forecast[0].cond_code_d,
              daily_forecast: res.data.HeWeather6[0].daily_forecast,
          })
        }
      }),
      wx.request({
        url: url + "hourly",
        data: {
          location: this.data.loc == "" ? this.data.lon + ',' + this.data.lat : this.data.loc,
          key: "a1648482f6af4765ac2ef57d7aabde8d"
        },
        success:res=>{
          this.setData({
            hourly: res.data.HeWeather6[0].hourly
          })
        }
      })
  },
  jup() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getLocation();

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.removeStorage({ key: 'cid' });
    this.setData({
      loc: ''
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getNowWeather();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})