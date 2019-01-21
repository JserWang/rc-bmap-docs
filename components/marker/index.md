---
category: 覆盖物
order: 1
title: Marker
---

`Marker`标注是极为常用的组件之一。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| offset | `Size`  | / | 标注的位置偏移值 |
| icon | `Icon`  | / | 标注所用的图标对象 |
| massClear | `Boolean`  | true | 是否在调用`map.clearOverlays()`清除此覆盖物 |
| clicking | `Boolean`  | true | 是否响应点击事件 |
| dragging | `Boolean`  | true | 是否启用拖拽 |
| raiseOnDrag | `Boolean`  | false | 拖拽标注时，标注是否开启离开地图表面效果 |
| draggingCursor | `String`  | / | 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范 |
| rotation | `Number`  | / | 旋转角度 |
| title | `String`  | / | 鼠标移到`Marker`上的显示内容 |
| zIndex | `Number`  | / | 设置覆盖物的zIndex |
| animation | `ANIMATION`  | / | 设置覆盖物的动画，其中`animation`的值来自于`Constants`中的`ANIMATION` |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| click | event{type, target} | 点击标注图标后会触发此事件 |
| dblclick | event{type, target, point, pixel} | 双击标注图标后会触发此事件 |
| mousedown | event{type, target, point, pixel} | 鼠标在标注图上按下触发此事件 |
| mouseup | event{type, target, point, pixel} | 鼠标在标注图上释放触发此事件 |
| mouseout | event{type, target, point, pixel} | 鼠标离开标注时触发此事件 |
| mouseover | event{type, target, point, pixel} | 当鼠标进入标注图标区域时会触发此事件 |
| remove | event{type, target} | 移除标注时触发 |
| infowindowclose | event{type, target} | 信息窗在此标注上关闭时触发此事件 |
| infowindowopen | event{type, target} | 信息窗在此标注上打开时触发此事件 |
| dragstart | event{type, target} | 开始拖拽标注时触发此事件 |
| dragging | event{type, target} | 拖拽标注过程中触发此事件 |
| dragend | event{type, target} | 拖拽结束时触发此事件 |
| rightclick | event{type, target} | 右键点击标注时触发此事件 |