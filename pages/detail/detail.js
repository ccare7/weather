// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:'',
    not:[],
    tim:[]
  },
  clean(){
    this.setData({
      val:''
    })
  },
  hadlein(e){
    this.setData({
      val:e.detail.value
    })
  },
  click(){
    let obj = {};
    if (this.data.val !== "" ){
      obj.note = this.data.val;
      obj.time = new Date();
      if(wx.getStorageSync("con")){
        var arr = wx.getStorageSync("con");
      }else{
        var arr = [];
      }
      arr.push(obj);
      wx.setStorageSync("con", arr);
      wx.switchTab({
        url: '../todo/todo',
      })
    }
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