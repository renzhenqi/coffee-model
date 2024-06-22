// pages/products/products.ts
Component({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {"index": 0, "name": '黑咖', "isActive": true, "anchor": 'anchor1'},
      {"index": 1, "name": '奶咖', "isActive": false, "anchor": 'anchor2'},
      {"index": 2, "name": '茶饮', "isActive": false, "anchor": 'anchor3'},
      {"index": 3, "name": '燕麦奶咖', "isActive": false, "anchor": 'anchor4'},
      {"index": 4, "name": '糕点', "isActive": false, "anchor": 'anchor5'}],
    list: [
      {"id": 0, "name": "经典美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
      {"id": 1, "name": "冰菠萝美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
      {"id": 2, "name": "椰青美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
      {"id": 3, "name": "流沙美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
      {"id": 4, "name": "橙功美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
      {"id": 5, "name": "干姜美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
      {"id": 6, "name": "超大冰美式", "type": 0, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
      {"id": 7, "name": "经典拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
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
      {"id": 13, "name": "超大冰拿铁", "type": 1, "price": 18.00, "sold": 30, "picture": "../../static/imgs/meishi.png"},
    ],
    currentTab: 0,
    mainCur: 0,
    verticalNavTop: 0,

  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  methods: {
    onLoad() {
      console.log(77777);
      
    },
    //点击左侧按钮
    tapselect(e: any) {
      this.setData({
        tabs: this.data.tabs.map((tab: any) => {
          tab.isActive = tab.index === e.currentTarget.dataset.index;
          return tab;
        }),
        currentTab:e.currentTarget.dataset.index,
        mainCur:e.currentTarget.dataset.index,
        verticalNavTop: (e.currentTarget.dataset.index - 1) * 50
      })
    
    },
    //右侧滚动
    mainScroll(e: any) {
     
      let scrollTop = e.detail.scrollTop + 10;
      for (let i = 0; i < this.data.list.length; i++) {
        if (scrollTop > this.data.list[i].top && scrollTop < this.data.list[i].bottom) {
          // 此处屏蔽，避免点击最后一个回退， 但是没有右边滚动指示
          if(this.data.currentTab != this.data.list.length - 1){
           
            this.setData({
              currentTab:i,
              verticalNavTop:(i-1)*50
            })
            
            return false
          }
          
        }
      }
    },
    //获取右侧每项的top和bottom,里面需获取对应dom元素的高度，所以只能在onload生命周期里调用
    getHeight() {
      var top = 0;
      var bottom = 0;
      var temp = 0;
      for (let i = 0; i < this.data.shopList.length; i++) {
        let view = wx.createSelectorQuery().select("#cate-" + i)

        // #ifdef  MP-WEIXIN
        view = wx.createSelectorQuery().in(this).select("#cate-" + i);
        //	#endif


        view.fields({
          size: true
        }, data => {
          top = temp;
          bottom = temp + data.height;
          this.data.list[i] = {
            top: top,
            bottom: bottom
          };
          temp = bottom;
        }).exec();
      }
      // console.log(this.data.list)

    },
    active(event: any ){
      console.log(event.currentTarget.dataset.index);
      const index = event.currentTarget.dataset.index;
      this.setData({
        activeIndex: index,
        tabs: this.data.tabs.map((tab: any) => {
          tab.isActive = tab.index === index;
          return tab;
        })
      });
    }
  }
})