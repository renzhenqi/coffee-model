// pages/order/order.ts
Component({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: "",
    categoryData: [
      {
        categoryId: 0,
        categoryName: "休闲零食",
        goods: [
          {
            goodId: "001",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "002",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "003",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "004",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "005",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "006",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "007",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "008",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 1,
        categoryName: "粮油调味",
        goods: [
          {
            goodId: "009",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "010",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "011",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "012",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "013",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "014",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "015",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "016",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 2,
        categoryName: "营养乳品",
        goods: [
          {
            goodId: "018",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "019",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 3,
        categoryName: "健康生活",
        goods: [
          {
            goodId: "019",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "020",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "021",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "022",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 4,
        categoryName: "家用电器",
        goods: [
          {
            goodId: "023",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "024",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "025",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "026",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 5,
        categoryName: "方便速食",
        goods: [
          {
            goodId: "027",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "028",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "029",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "030",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 6,
        categoryName: "运动出行",
        goods: [
          {
            goodId: "031",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "032",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "033",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "034",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 7,
        categoryName: "厨房用品",
        goods: [
          {
            goodId: "035",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "036",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "037",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "038",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 8,
        categoryName: "个护护理",
        goods: [
          {
            goodId: "039",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "040",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "0341",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "042",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 9,
        categoryName: "美妆造型",
        goods: [
          {
            goodId: "44",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "45",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "048",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
          {
            goodId: "046",
            goodName: "至少我还有梦，也为你而感动...",
            img_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png",
            price: "39.90",
          },
        ],
      },
      {
        categoryId: 10,
        categoryName: "日用清洁",
        goods: [],
      },
      {
        categoryId: 11,
        categoryName: "家具百货",
        goods: [],
      },
      {
        categoryId: 12,
        categoryName: "床上用品",
        goods: [],
      },
      {
        categoryId: 13,
        categoryName: "礼包礼盒",
        goods: [],
      },
    ],
    activeTab: 0,
    tabScrollTop: 0,
    scrollToViewId: "",
    height: {
      scrollMainHeight: 0, // scroll-view 可视区域高度
      headerTotalHeight: 0, // （搜索框 + line 元素）总体高度
    },
    scrollViewParams: {},
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
    onShow() {
      
    },
    // 页面准备渲染
    onReady() {
      this.computScrollViewHeight();
      this.initScrollViewTopParams();
    },
    /**
     * 获取头部（搜索框 + line 元素）以及 screenHeight 屏幕的高度，用来计算出 scroll-view 滚动区域的真实高度
     */
    computScrollViewHeight() {
      wx.showLoading({
        title: "加载中...",
      });
      const query = wx.createSelectorQuery();
      var lineHeight = 0,
        searchInputBoxHeight = 0;
  
      // 获取 line 元素的高度
      query
        .select(".linear-back-line")
        .boundingClientRect(function (res) {
          lineHeight = res.height;
        })
        .exec();
  
      // 获取搜索框的高度
      query
        .select(".search")
        .boundingClientRect(function (res) {
          searchInputBoxHeight = res.height;
        })
        .exec();
  
      var that = this;
      var timer = null;
      timer = setTimeout(async () => {
        // 获取屏幕高度
        const { height: screenHeight } = await wx.getStorageSync("screenInfo");
        // 计算出 scroll-view 的可滚动区域高度 = 屏幕宽度 - (搜索框高度 + line 元素高度)
        that.setData(
          {
            height: {
              scrollMainHeight:
                screenHeight - (lineHeight + searchInputBoxHeight),
              headerTotalHeight: lineHeight + searchInputBoxHeight,
            },
          },
          () => {
            wx.hideLoading();
            clearTimeout(timer); // 赋值完成后清除定时器
          }
        );
      }, 250);
    },
    /**
     * 动态获取每个 scroll-view 中 view 的高度
     * 宏任务，防止节点未渲染完成而获取结果错误
     */
    initScrollViewTopParams() {
      wx.showLoading({
        title: "加载中...",
      });
      let timer = null;
      let that = this;
      timer = setTimeout(function () {
        var query = wx.createSelectorQuery();
        // scroll-view 每个滑动容器的 top 参数与 height 高度记录，用于判断
        let params = {
          heights: [], // 多个 view 容器的实时高度数组
          indexs: [], // 索引值
        };
        query
          .selectAll(".category-item")
          .boundingClientRect()
          .exec(function (res) {
            // 获取到每个 scroll-view 的区块元素，并遍历出它们各自的高度位置保存起来，在滚动的时候做位置判断
            for (let i = 0; i < res[0].length; i++) {
              params.heights.push(res[0][i].top);
              params.indexs[i] = i;
            }
            // 往最前面添加一个元素，代表第一个 tab 项(由于是自定义导航栏，所以需减去导航栏的高度)，否则永远都会定位到第二项
            params.heights.unshift(
              // params.heights[0] - globalNavigator.navigatorBarHeight - 15
              params.heights[0] - 50 - 15
            );
            that.setData(
              {
                scrollViewParams: {
                  heights: params.heights.reverse(), // 将数据做一次反转，从上到下滚动时通过 数据.lenth - i 就是当前索引值
                  indexs: params.indexs.reverse(),
                },
              },
              () => {
                wx.hideLoading();
                clearTimeout(timer); // 赋值完成后清除定时器
              }
            );
          });
      }, 250);
    },
    changeTab(e) {
      const data = e.currentTarget.dataset;
      this.setData({
        activeTab: data.id,
        scrollToViewId: data.id,
      });
    },
    // 滑动中【 scroll-view 容器页面在滚动】
    dragScroll(e) {
      let viewScrollTop = e.detail.scrollTop; // view 容器滑动的距离
      let viewHeights = this.data.scrollViewParams.heights;
      /**
       * 遍历之前页面渲染时存储的每个 view 容器的高度，并在每次滚动时对齐进行比对，如果超出了某个 height 则代表进入了这个容器的可视化区域，对应高亮 tab 项
       */
      for (let i = 0; i < viewHeights.length; i++) {
        if (viewScrollTop >= viewHeights[i] - 15) {
          // tab 选中选项的索引。假设移动到了第2个元素：length(14) - 13 = 1 【之前 reverse() 反转过的】
          let tabIndex = viewHeights.length - i - 1;
          let tabScrollTop = 0; // tab 导航栏的 scroll-top 值
          // 当滚动距离超过第 5 个tab 选项时，tab-sidebar 便也随着滚动
          if (tabIndex > 4) {
            tabScrollTop = (tabIndex - 4) * 106; // 106rpx : tab-item 的高度
          }
          this.setData({
            activeTab: tabIndex,
            tabScrollTop: tabScrollTop,
          });
          break;
        }
      }
    },
  }
})