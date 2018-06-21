var subjectUtil = require('../../utils/subjectUtil.js');
Page({
  data: {
    // text:"这是一个页面"
    movie: {}
  },
  onLoad: function (options) {
  },
  onLoad: function (options) {
    this.loadMovie(options.id);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
comment: function () {
  wx.navigateTo({
    url: '../comment/comment'
  })
  },
  loadMovie: function (movieId) {
    var page = this;
    // var movieId= wx.getStorageSync('movieId');
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + movieId,
      header: {
        'Content-Type': 'Content-type/json'
      },
      success: function (res) {
        var subject = res.data;
        subjectUtil.processSubject(subject);
        page.setData({ movie: subject });
      }
    })
  }
})