import debounce from "../../utils/debounce";

let oldActiveKey = 0;

Component({
  /**
   * 组件接受的外部样式类
   */
  externalClasses: ['custom-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollLeftHeight: 0,
    activeKey: 0,
    scrollLeftTop: 0,
    scrollLocationId: null,
    scrollRightTop: 0,
    productChunkRects: [],
    scrollTopList: []
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached() {},
    // 在组件在视图层布局完成后执行
    ready() {
      this.getProductChunkRectsAndScrollTop();
      wx.createSelectorQuery().in(this).select('#scroller-left').boundingClientRect((rect) => {
        console.log('scroller-left', rect);
        this.setData({
          scrollLeftHeight: rect.height
        });
      }).exec();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 商品 scroll-view 滚动事件
    onScrollRightEvent(event: any) {
      const {
        scrollTop
      } = event.detail;
      this.setData({
        scrollRightTop: scrollTop
      });
      debounce(500, () => {
        this.computeCurrSidebarActiveByScrollTop(scrollTop);
      })();
    },
    // 切换 sidebar
    handleSidebarChange(event: any) {
      let activeKey = event.currentTarget.dataset.index;
      this.setData({
        activeKey
      });
      this.gotoAnchorPointLocation(`anchor-point-title-${activeKey}`);
    },
    // 锚点定位
    gotoAnchorPointLocation(scrollLocationId: string) {
      this.setData({
        scrollLocationId
      });
    },
    // 获取产品块的rects
    getProductChunkRectsAndScrollTop() {
      wx.showLoading({
        title: '加载中...',
        mask: true
      });
      wx.createSelectorQuery().in(this).selectAll('.product-body__chunk').boundingClientRect((rects) => {
        wx.hideLoading();
        let scrollTopList: number[] = [];
        let acc = rects.map(item => item.height).reduce((accumulator: any, currentValue: any) => {
          scrollTopList.push(accumulator);
          return accumulator + currentValue;
        }, 0);
        scrollTopList.push(acc);
        console.log('scrollTopList', scrollTopList);
        this.setData({
          productChunkRects: rects,
          scrollTopList
        });
      }).exec();
    },
    // 通过当前滚动位置计算当前 Sidebar 的 Active
    computeCurrSidebarActiveByScrollTop(scrollTop: number) {
      if (this.data.productChunkRects.length !== 0) {
        let currScrollTopList = this.data.scrollTopList.filter(item => item <= scrollTop);
        let activeKey = currScrollTopList.length - 1 >= 0 ? currScrollTopList.length - 1 : 0;
        if (oldActiveKey !== activeKey) {
          oldActiveKey = activeKey;
          this.setData({
            activeKey
          }, () => {
            let scrollLeftTop = Math.floor((activeKey + 1) * 70 / this.data.scrollLeftHeight) * this.data.scrollLeftHeight - 70;
            this.setData({
              scrollLeftTop: scrollLeftTop > 0 ? scrollLeftTop : 0
            });
          });
        }
      } else {
        this.getProductChunkRectsAndScrollTop();
      }
    }
  }
});