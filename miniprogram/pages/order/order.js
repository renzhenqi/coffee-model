// pages/order/order.ts
Component({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[
      {
        navtitle: '分类1',
        shop: [{
                shoptitle: "轮胎1",
                shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
            },
            {
                shoptitle: "轮胎2",
                shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
            },
            {
                shoptitle: "轮胎3",
                shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
            },
            {
                shoptitle: "轮胎4",
                shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
            }
        ]
    },
    {
        navtitle: '分类2',
        shop: [{
            shoptitle: "轮胎1",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎2",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎3",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎4",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        }
        ]
    },
    {
        navtitle: '分类3',
        shop: [{
            shoptitle: "轮胎1",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎2",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎3",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎4",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        }
        ]
    },
    {
        navtitle: '分类4',
        shop: [{
            shoptitle: "轮胎1",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎2",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎3",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎4",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        }
        ]
    },
    {
        navtitle: '分类5',
        shop: [{
            shoptitle: "轮胎1",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎2",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎3",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎4",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        }
        ]
    },
    {
        navtitle: '分类6',
        shop: [{
            shoptitle: "轮胎1",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎2",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎3",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎4",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        }
        ]
    },
    {
        navtitle: '分类7',
        shop: [{
            shoptitle: "轮胎1",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎2",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎3",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        },
        {
            shoptitle: "轮胎4",
            shopimage: "https://img20.360buyimg.com/babel/s590x470_jfs/t20270114/102162/22/20269/61727/65a4ccaeF48dc4510/0144871874125bc0.jpg.webp",
        }
        ]
    },
    ],//
    currentTab: 0,
    mainCur: 0,
    verticalNavTop: 0,
    list: [{}],
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  },

  methods: {
    onLoad() {
      console.log(123);
      // this.getHeight();
    //   this.getShopList();//先获取商品数据

    },
    // 获取商品数据
    getShopList(){
      wx.request({
        url: '',
        header:{
           'content-type': 'application/x-www-form-urlencoded'
        },
        method:'GET',
        success:(res)=>{
            console.log('商品分类',res.data.data)
           if(res.data.data.length!==0){
            this.setData({
                shopList:res.data.data
            })
            this.getHeight()
           }
            
        }
      })
   },
// 选择的商品
   getShop(e){
    console.log(e.currentTarget.dataset.child)
   },

    
     //点击左侧按钮
     tapselect(e) {
       this.setData({
         currentTab:e.currentTarget.dataset.index,
         mainCur:e.currentTarget.dataset.index,
         verticalNavTop: (e.currentTarget.dataset.index - 1) * 50
       })
     
     },
     //右侧滚动
     mainScroll(e) {
      
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
 
     }
  }
})