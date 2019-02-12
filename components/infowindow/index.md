---
category: 覆盖物
order: 12
title: InfoWindow
---

信息窗体。
`InfoWindow`提供了`Content`以及`Title`两个子组件，来方便我们进行窗体的内容以及标题设置，`Content`与`Title`的内容可为字符串或任何`HTML`标签。
**若要在`Content`与`Title`中的`HTML`元素绑定点击事件，请使用`onMouseUp`代替`onClick`。因为百度地图`InfoWindow`面板区域已经阻止了部分点击相关的事件传递，由于`React`的事件最终委托给`document`，导致事件最终无法触发。**

**注意：在一个地图上最多只能同时显示一个信息窗体**

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| width | `Number` | 0 | 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整 |
| height | `Number` | 0 | 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整 |
| maxWidth | `Number`  | / | 信息窗最大化时的宽度，单位像素。取值范围：220 - 730 |
| offset | `Size`  | / | 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标 |
| title | `Title`  | / | 信息窗标题文字 |
| content | `Content`  | / | 信息窗内容 |
| autoPan | `Boolean`  | true | 是否开启信息窗口打开时地图自动移动 |
| closeOnClick | `Boolean`  | true | 是否开启点击地图关闭信息窗口 |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| close | event{type, target, point} | 信息窗口被关闭时触发此事件 |
| open | event{type, target, point} | 鼠标双击图层后会触发此事件 |
| maximize | event{type, target} | 信息窗口最大化后触发此事件 |
| restore | event{type, target} | 信息窗口还原时触发此事件 |
| clickclose | event{type, target} | 点击信息窗口的关闭按钮时触发此事件 |
