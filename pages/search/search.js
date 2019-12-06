// search/search.js
let app = getApp();
let key = app.key;
Page({
  data: {
    val:'',
    basic:'',
    searchError:'暂时没有该城市的信息'
  },
  sub(e){
    this.setData({
      val:e.detail.value
    })
  },
  pos(){
    wx.showLoading({
      title: '加载中',
      mask:true
    }),
    wx.request({
      url: 'https://search.heweather.net/find',
      data:{
        location:this.data.val,
        key:key
      },
      success:res=>{
        wx.hideLoading();
        if(res.data.HeWeather6[0].status==="ok"){
          this.setData({
            basic: res.data.HeWeather6[0].basic
          })
        }else{
          this.setData({
            basic:[
              {
                location:"暂时没有该城市的信息",
                parent_city:"未知"
              }
            ]
          })
        }
      }
    })
  },
  searchSuccess(e){
    let cid = e.currentTarget.dataset.city;
    wx.setStorageSync("cid", cid);
    wx.switchTab({
      url: '../weather/weather'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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