﻿# WeChat-SelfNavigator
 
<br>

**微信小程序实现自定义组件，小程序实现自定义底部导航栏，可动态切换横竖排列文本颜色等**

<br>

[详细介绍请看这里](https://www.cnblogs.com/Jlay/p/self_navigator.html)

### 组件属性

<br>

```js
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
```

<br>

### 默认初始值

<br>

`navList`  是对底部导航栏的初始化

<br>

```js
/**
   * 组件的初始数据
   */
  data: {
    navList: [],
  },

```

<br>

app.json里面 需要 将 tabBar 的 **custom属性设置为 true** 

<br>

**组件使用**

在xxx.json中**

<br>

```json
{
  "usingComponents": {
    "menuBtn": "/components/menuBtn/menuBtn"
  }
}
```

<br>

**xxx.wxml**

<br>

```html
<menuBtn selected="0"></menuBtn>
```

<br>
