//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo:{},
    contDate:[
      {"userImg":"/../../images/ddxf.jpg","userName":"userid","title":"标题文字","content":"文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容","applaud":112,"discuss":18},
      {"userImg":"/../../images/ddxf.jpg","userName":"userid","title":"标题文字","content":"文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容","applaud":112,"discuss":18},
      {"userImg":"/../../images/ddxf.jpg","userName":"userid","title":"标题文字","content":"文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容","applaud":112,"discuss":18},
      {"userImg":"/../../images/ddxf.jpg","userName":"userid","title":"标题文字","content":"文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容","applaud":112,"discuss":18},
      {"userImg":"/../../images/ddxf.jpg","userName":"userid","title":"标题文字","content":"文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容","applaud":112,"discuss":18},
      {"userImg":"/../../images/ddxf.jpg","userName":"userid","title":"标题文字","content":"文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容","applaud":112,"discuss":18},
      {"userImg":"/../../images/ddxf.jpg","userName":"userid","title":"标题文字","content":"文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容","applaud":112,"discuss":18}
    ]
  },
  //事件处理函数,点击跳转子页面
  bindViewTap: function(e) {
    console.log(e.currentTarget.dataset.ddd)
    wx.navigateTo({
      url: '../logs/logs?options=2333'
    })
  },
  // 获取头像
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
