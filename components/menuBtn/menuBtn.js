// components/menuBtn/menuBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 导航栏背景颜色
    backgrounds: {
      backgrounds: String,//类型
      value: '#fbfbfb'//默认值
    },
    // 文字原生颜色
    color: {
      color: String,
      value: 'black'
    },
    // 文字选中样式
    selectedColor: {
      selectedColor: String,
      value: '#22a6b3'
    },
    // 文字大小默认为28rpx 单位为rpx
    fontSize: {
      fontSize: String,
      value: '28'
    },
    // 选中的下标
    selected: {
      selected: Number,
      value: 0
    },
    // 默认0 图标和文字并行 1 文字在图标下面
    type: {
      selected: Number,
      value: 0
    },
    // 若想要动态设置底部导航栏，则将下面代码解除注释
    // navList: {
    //   navList: Array,
    //   value: [] , //  初始化底部导航栏
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navList: [{
      "pagePath": "/pages/main/index",
      "text": "拼车",
      "iconPath": "/icons/car.png",
      "selectedIconPath": "/icons/car_click.png"
    },
    {
      "pagePath": "/pages/search/index",
      "text": "搜索",
      "iconPath": "/icons/search.png",
      "selectedIconPath": "/icons/search_click.png"
    },
    {
      "pagePath": "/pages/order/index",
      "text": "订单",
      "iconPath": "/icons/order.png",
      "selectedIconPath": "/icons/order_click.png"
    },
    {
      "pagePath": "/pages/my/index",
      "text": "个人中心",
      "iconPath": "/icons/my.png",
      "selectedIconPath": "/icons/my-click.png"
    }
   ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
