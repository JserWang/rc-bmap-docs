---
category: 基础组件
order: 2
title: Map
---

### 一切的起点

`Map` 作为地图的起点，当你初始化一个最简单的地图时，首先请确保你已拥有一个属于自己的 `AK`，这个 `AK` 将用于百度地图标识你的应用以及管理应用的白名单等。了解更多详细信息见：[http://lbsyun.baidu.com/index.php?title=jspopular/guide/getkey](http://lbsyun.baidu.com/index.php?title=jspopular/guide/getkey)

tips: 若想在任何域名下都允许使用所申请的 `AK` 时，在申请 `AK` 的页面中白名单可以填写 `0.0.0.0`


## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| ak | `String`  | / | 加载地图js所需密匙 |
| name | `String`  | / | 地图实例别名，可在`window[name]`中获取到 |
| zoom | `Number`  | / | 缩放等级 |
| minZoom | `Number`  | / | 最小缩放等级 |
| maxZoom | `Number`  | / | 最大缩放等级 |
| version | `Number`  | 3 | 当前百度地图版本 |
| defaultCursor | `String`  | / | 设置地图默认的鼠标指针样式 |
| draggingCursor | `String`  | / | 设置拖拽地图时的鼠标指针样式 |
| mapStyle | `MapStyle`  | / | 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分 |
| mapStyleV2 | `MapStyleV2`  | / | 设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas） |
| mounted | `Function`  | / | 地图加载完成回调 |
| highResolution | `Boolean`  | / | 是否启用使用高分辨率地图 |
| autoResize | `Boolean`  | / | 自动适应地图容器变化 |
| mapClick | `Boolean`  | / | 地图可点 |
| dragging | `Boolean`  | / | 地图拖拽 |
| scrollWheelZoom | `Boolean`  | / | 滚轮缩放 |
| doubleClickZoom | `Boolean`  | / | 双击放大 |
| keyboard | `Boolean`  | / | 键盘操作 |
| inertialDragging | `Boolean`  | / | 惯性拖拽 |
| continuousZoom | `Boolean`  | / | 连续缩放 |
| pinchToZoom | `Boolean`  | / | 双指操作 |


#### MapStyle:

``` 
const mapStyle = {
  features: [], // 设置地图上展示的元素种类，支持point（兴趣点）、road（道路）、water（河流）、land（陆地）、building（建筑物）
  style: '' // 设置地图底图样式，目前支持normal（默认样式）,dark（深色样式）,light（浅色样式）三种
}
```

#### MapStyleV2: 

``` 
const mapStyleV2 = {
  styleJson: [], // 样式Json，通过编辑器生成
}
```

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| click | event{type, target, point, pixel, overlay} | 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick |
| dblclick | event{type, target, pixel, point} | 鼠标双击地图时会触发此事件
| rightclick | event{type, target, point, pixel, overlay} | 右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick
| rightdblclick | event{type, target, point, pixel, overlay} | 右键双击地图时触发此事件
| maptypechange | event{type, target} | 地图类型发生变化时触发此事件
| mousemove | event{type, target, point, pixel, overlay} | 鼠标在地图区域移动过程中触发此事件
| mouseover | event{type, target} | 鼠标移入地图区域时触发此事件
| mouseout | event{type, target} | 鼠标移出地图区域时触发此事件
| movestart | event{type, target} | 地图移动开始时触发此事件
| moving | event{type, target} | 地图移动过程中触发此事件
| moveend | event{type, target} | 地图移动结束时触发此事件
| zoomstart | event{type, target} | 地图更改缩放级别开始时触发触发此事件
| zoomend | event{type, target} | 地图更改缩放级别结束时触发触发此事件
| addoverlay | event{type, target} | 当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件
| addcontrol | event{type, target} | 当使用Map.addControl()方法向地图中添加单个控件时会触发此事件
| removecontrol | event{type, target} | 当使用Map.removeControl()方法移除单个控件时会触发此事件
| removeoverlay | event{type, target} | 当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件
| clearoverlays | event{type, target} | 当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件
| dragstart | event{type, target, pixel, point} | 开始拖拽地图时触发
| dragging | event{type, target, pixel, point} | 拖拽地图过程中触发
| dragend | event{type, target, pixel, point} | 停止拖拽地图时触发
| addtilelayer | event{type, target} | 添加一个自定义地图图层时触发此事件
| removetilelayer | event{type, target} | 移除一个自定义地图图层时触发此事件
| load | event{type, target, pixel, point, zoom} | 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块
| resize | event{type, target, size} | 地图可视区域大小发生变化时会触发此事件
| hotspotclick | event{type, target, spots} | 点击热区时触发此事件
| hotspotover | event{type, target, spots} | 鼠标移至热区时触发此事件
| hotspotout | event{type, target, spots} | 鼠标移出热区时触发此事件
| tilesloaded | event{type, target} | 当地图所有图块完成加载时触发此事件
| touchstart | event{type, target, point,pixel} | 触摸开始时触发此事件，仅适用移动设备
| touchmove | event{type, target, point,pixel} | 触摸移动时触发此事件，仅适用移动设备
| touchend | event{type, target, point,pixel} | 触摸结束时触发此事件，仅适用移动设备
| longpress | event{type, target, point,pixel} | 长按事件，仅适用移动设备
