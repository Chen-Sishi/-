// pages/try/application.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    modelHidden: true,
    ageList: [
      { age: '18周岁以下', selected: false },
      { age: '26~30', selected: false },
      { age: '31~35', selected: false },
      { age: '36~40', selected: false },
      { age: '40周岁以上', selected: false }

    ],
    sexList: [
      { sex: '男', selected: false },
      { sex: '女', selected: false },

    ],
    skinList: [
      { skin: '中性', selected: false },
      { skin: '干性', selected: false },
      { skin: '油性', selected: false },
      { skin: '敏感性', selected: false },
      { skin: '混合型', selected: false },

    ],
    vipList: [
      { vip: '是', selected: false },
      { vip: '否', selected: false },
    ]

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

  // 选择年龄
  checkedAge: function (e) {
    for (var i = 0; i < this.data.ageList.length; i++) {
      let ageList1 = this.data.ageList.slice(0);
      if (e.target.id == i) {
        ageList1[i].selected = true;
        this.setData({
          ageList: ageList1
        })
      } else {
        ageList1[i].selected = false;
        this.setData({
          ageList: ageList1
        })
      }
    }
  },

  // 选择性别
  checkedSex: function (e) {
    for (var i = 0; i < this.data.sexList.length; i++) {
      let sexList1 = this.data.sexList.slice(0);
      if (e.target.id == i) {
        sexList1[i].selected = !sexList1[i].selected;
        this.setData({
          sexList: sexList1
        })
      } else {
        sexList1[i].selected = false;
        this.setData({
          sexList: sexList1
        })
      }
    }
  },

  // 选择肤质
  checkedSkin: function (e) {
    for (var i = 0; i < this.data.skinList.length; i++) {
      let skinList1 = this.data.skinList.slice(0);

      if (e.target.id == i) {
        skinList1[i].selected = !skinList1[i].selected;
        this.setData({
          skinList: skinList1
        })
      }
    }

  },

  // 是否vip
  checkedVip: function (e) {
    for (var i = 0; i < this.data.vipList.length; i++) {
      let vipList1 = this.data.vipList.slice(0);

      if (e.target.id == i) {
        vipList1[i].selected = true;
        this.setData({
          vipList: vipList1
        })
      } else {
        vipList1[i].selected = false;
        this.setData({
          vipList: vipList1
        })
      }
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