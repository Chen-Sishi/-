// pages/reservation/reservationTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeList:[{
      data:'03月28日',
      week:'星期三',
    },
      {
        data: '03月29日',
        week: '星期三',
      },
      {
        data: '03月30日',
        week: '星期三',
      },
      {
        data: '03月31日',
        week: '星期三',
      },
      {
        data: '04月01日',
        week: '星期三',
      },
      {
        data: '04月02日',
        week: '星期三',
      },
      {
        data: '03月28日',
        week: '星期三',
      }],
    modelHidden: true,
  
  },


  modelShow: function () {
    this.setData({
      modelHidden: false
    })
  },

  modelHidden: function () {
    this.setData({
      modelHidden: true

    })
    console.log(56566)
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