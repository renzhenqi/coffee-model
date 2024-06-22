// pages/profile/profile.ts
Component({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {"index": 0, "categoryName": '黑咖', "isActive": true, "anchor": 'anchor1',
        "productList": [{"id": 0, "name": "经典美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 1, "name": "冰菠萝美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 2, "name": "椰青美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 3, "name": "流沙美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 4, "name": "橙功美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 5, "name": "干姜美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 6, "name": "超大冰美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"}]
      },
      {"index": 1, "categoryName": '奶咖', "isActive": false, "anchor": 'anchor2',
        "productList": [{"id": 7, "name": "经典拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 8, "name": "卡布奇诺", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 9, "name": "澳白", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 10, "name": "海盐芝士碧根果拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 11, "name": "提拉米苏拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 12, "name": "桂花龙井拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 13, "name": "绿野仙踪", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 13, "name": "桂香拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 13, "name": "香草拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 13, "name": "橘皮拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 13, "name": "富士山下", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
        {"id": 13, "name": "超大冰拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"}]
      },
      {"index": 2, "categoryName": '茶饮', "isActive": false, "anchor": 'anchor3',
        'productList': [{"id": 1, "name": "茶饮1", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},{"id": 1, "name": "茶饮2", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"}]
      },
      {"index": 3, "categoryName": '燕麦奶咖', "isActive": false, "anchor": 'anchor4',
      'productList': [{"id": 1, "name": "燕麦奶咖1", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},{"id": 1, "name": "燕麦奶咖2", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"}]
      },
      {"index": 4, "categoryName": '糕点', "isActive": false, "anchor": 'anchor5',
      'productList': [{"id": 1, "name": "糕点1", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},{"id": 1, "name": "糕点2", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"}]
      },
      ],
      formDatas: {
        scroll_top_left: 0,
        scroll_top_right: 0
      },
      status_idx: 0,
      bankuai_height: {},
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
    }
  },

  methods: {
    onReady() {
      var that = this;
      var windowHeight = wx.getSystemInfoSync().windowHeight;
      //获取当前屏幕高度减去头部高度
      var header = wx.createSelectorQuery();
      header.select('#header').boundingClientRect();
      header.exec(function (res) {
        var headerHeight = res[0].height;
        var productMainHeight = windowHeight - headerHeight;
        that.setData({
          productMainHeight,
          headerHeight
        })
      })
      //延迟加载框架，防止获取节点错误
      setTimeout(function () {
        // 循环每个板块的内容高度
        //10表示当前板块长度
        var query = wx.createSelectorQuery();
        for (var i = 0; i < 10; i++) {
          query.select('#NAC' + i).boundingClientRect();
        }
        //初始化参数
        var bankuai_height = that.data.bankuai_height;
        //监听滚动所使用数据
        bankuai_height.h = [];
        bankuai_height.idx = [];
        //用于点击事件使用数据
        bankuai_height.hup = [];
        bankuai_height.idxup = [];
        query.exec((res) => {
          for (var i = 0; i < res.length; i++) {
            bankuai_height.h[i] = res[i].top - that.data.headerHeight;
            bankuai_height.idx[i] = i;
            bankuai_height.hup[i] = res[i].top - that.data.headerHeight;
          }
          bankuai_height.h = bankuai_height.h.reverse();
          bankuai_height.idx = bankuai_height.idx.reverse();
          that.setData({
            bankuai_height: bankuai_height,
            ready: false,
          })
        });
      }, 300)
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      var that = this;
    },
  
  
    //类别
    on_k_v: function (event: any) {
      var that = this;
      var idx = event.currentTarget.dataset.idx;
      var bankuai_height = that.data.bankuai_height;
      that.setData({
        "formDatas.scroll_top_left": bankuai_height.hup[idx],
      })
    },
  
  
    //监听滚动
    enTop(e: any) {
      var that = this;
      var top_tome = e.detail.scrollTop;
      var bankuai_height = that.data.bankuai_height;
      //如果数据太大，可以把下面的注释打开，这样就不是每次滑动都执行
      // if (that.setInter) {
      //   clearInterval(that.setInter);
      // }
      // that.setInter = setInterval(
      //   function () {
      for (var i = 0; i < bankuai_height.h.length; i++) {
        if (top_tome >= bankuai_height.h[i] - 15) {
          //判断当前所滑动的正比
          //10表示当前板块长度
          var right_idx = 10 - i;
          var scroll_top_right = 0;
          //永远停留在列表四板块
          if (right_idx > 4) {
            scroll_top_right = (right_idx - 4) * 75;
          }
          that.setData({
            status_idx: bankuai_height.idx[i],
            "formDatas.scroll_top_right": scroll_top_right
          })
          break;
        }
      }
      //   clearInterval(that.setInter);
      // }, 200);
    }
  }
})