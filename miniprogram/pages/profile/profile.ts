// pages/profile/profile.ts
Component({

  /**
   * 页面的初始数据
   */
  data: {
    vtabs: [],
    activeTab: 0,
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
    onLoad() {
      // const titles = ['热搜推荐', '手机数码', '家用电器',
      //   '生鲜果蔬', '酒水饮料', '生活美食', 
      //   '美妆护肤', '个护清洁', '女装内衣', 
      //   '男装内衣', '鞋靴箱包', '运动户外', 
      //   '生活充值', '母婴童装', '玩具乐器', 
      //   '家居建材', '计生情趣', '医药保健', 
      //   '时尚钟表', '珠宝饰品', '礼品鲜花', 
      //   '图书音像', '房产', '电脑办公']
      // const titles = ['热搜推荐', '手机数码', '家用电器',
      //   '生鲜果蔬', '酒水饮料', '生活美食', 
      //   '美妆护肤', '个护清洁']
      const titles =  [
        {
                "index": 0,
                "name": '黑咖',
                "isActive": true,
                "children": [
                        {
                                "id": 0,
                                "name": "经典美式",
                                "type": 0,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 1,
                                "name": "冰菠萝美式",
                                "type": 0,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 2,
                                "name": "椰青美式",
                                "type": 0,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 3,
                                "name": "流沙美式",
                                "type": 0,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 4,
                                "name": "橙功美式",
                                "type": 0,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 5,
                                "name": "干姜美式",
                                "type": 0,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 6,
                                "name": "超大冰美式",
                                "type": 0,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        }
                ]
        },
        {
                "index": 1,
                "name": '奶咖',
                "isActive": false,
                "children": [
                        {
                                "id": 7,
                                "name": "经典拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 8,
                                "name": "卡布奇诺",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 9,
                                "name": "澳白",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 10,
                                "name": "海盐芝士碧根果拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 11,
                                "name": "提拉米苏拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 12,
                                "name": "桂花龙井拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "绿野仙踪",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "桂香拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "香草拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "橘皮拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "富士山下",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "超大冰拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        }
                ]
        },
        {
                "index": 2,
                "name": '茶饮',
                "isActive": false,
                "children": [
                        {
                                "id": 7,
                                "name": "茶饮1",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 8,
                                "name": "茶饮2",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 9,
                                "name": "茶饮3",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 10,
                                "name": "茶饮3",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 11,
                                "name": "茶饮4",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 12,
                                "name": "茶饮5",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "茶饮6",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "茶饮7",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "茶饮8",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "茶饮9",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "茶饮10",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "茶饮11",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        }
                ]
        },
        {
                "index": 3,
                "name": '燕麦奶咖',
                "isActive": false,
                "children": [
                        {
                                "id": 7,
                                "name": "经典拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 8,
                                "name": "卡布奇诺",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 9,
                                "name": "澳白",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 10,
                                "name": "海盐芝士碧根果拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 11,
                                "name": "提拉米苏拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 12,
                                "name": "桂花龙井拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "绿野仙踪",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "桂香拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "香草拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "橘皮拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "富士山下",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "超大冰拿铁",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        }
                ]
        },
        {
                "index": 4,
                "name": '糕点',
                "isActive": false,
                "children": [
                        {
                                "id": 7,
                                "name": "糕点1",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 8,
                                "name": "糕点2",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 9,
                                "name": "糕点3",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 10,
                                "name": "糕点4",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 11,
                                "name": "糕点5",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 12,
                                "name": "糕点6",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "糕点7",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "糕点8",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "糕点9",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "糕点10",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "糕点11",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        },
                        {
                                "id": 13,
                                "name": "糕点12",
                                "type": 1,
                                "price": 18.00,
                                "sold": 30,
                                "picture": "../../static/imgs/meishi.png"
                        }
                ]
        }
]

      const vtabs = titles.map(item => ({title: item.name, children: item.children}))
      this.setData({vtabs: vtabs})
    },
  
    onTabCLick(e: any) {
      const index = e.detail.index
      console.log('tabClick', index)
    },
  
    onChange(e: any) {
      const index = e.detail.index
      console.log('change', index)
    }
  }
})