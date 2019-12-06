// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:"",
    index:0
  },
  upd(options){
    console.log(options.index);
    this.setData({
      val: wx.getStorageSync("con")[options.index].note,
      index:options.index
    })
  },
  hadlein(e) {
    this.setData({
      val: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.upd(options);
  },
  del(){
    if (!this.data.val == "") {
      let arr = wx.getStorageSync("con");
      arr[this.data.index].note = this.data.val;
      wx.setStorageSync("con", arr)
    } else {
      let arr = wx.getStorageSync("con");
      arr.splice(this.data.index, 1);
      wx.setStorageSync("con", arr);
    }
    wx.switchTab({
      url: '../todo/todo',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {

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
    if(!this.data.val==""){
      let arr = wx.getStorageSync("con");
      arr[this.data.index].note=this.data.val;
      wx.setStorageSync("con", arr)
    }else{
      let arr = wx.getStorageSync("con");
      arr.splice(this.data.index,1);
      wx.setStorageSync("con", arr);
    }
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