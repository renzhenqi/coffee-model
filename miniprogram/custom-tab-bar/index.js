Component({
  data: {
    selected: 0,
    color: "#adadad",
    selectedColor: "#000000",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/static/imgs/index.png",
      selectedIconPath: "/static/imgs/index-select.png",
      text: "首页"
    }, 
    {
      pagePath: "/pages/products/products",
      iconPath: "/static/imgs/products.png",
      selectedIconPath: "/static/imgs/products-select.png",
      text: "点单"
    },{
      pagePath: "/pages/order/order",
      iconPath: "/static/imgs/order.png",
      selectedIconPath: "/static/imgs/order-select.png",
      text: "订单"
    }, {
      pagePath: "/pages/profile/profile",
      iconPath: "/static/imgs/profile.png",
      selectedIconPath: "/static/imgs/profile-select.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})