---
category: 覆盖物
order: 3
title: Polyline
---

在地图上绘制折线叠加层。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| path | `Array[Point]`  | / | 设置折线的点数组 |
| strokeColor | `String`  | / | 折线颜色 |
| strokeWeight | `Number`  | / | 折线宽度 |
| strokeOpacity | `Number`  | / | 折线的透明度，取值范围0 - 1 |
| strokeStyle | `String`  | / | 折线的样式，取值`solid`或`dashed` |
| massClear | `Boolean`  | true | 是否在调用`map.clearOverlays()`清除此覆盖物 |
| editing | `Boolean`  | false | 是否启用线编辑 |
| clicking | `Boolean`  | true | 是否响应点击事件 |
| icons | `IconSequence`  | / | 配置贴合折线的图标 |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| click | event{type, target, point, pixel} | 点击折线后会触发此事件 |
| dblclick | event{type, target, point, pixel} | 双击折线后会触发此事件 |
| mousedown | event{type, target, point, pixel} | 鼠标在折线上按下触发此事件 |
| mouseup | event{type, target, point, pixel} | 鼠标在折线释放触发此事件 |
| mouseout | event{type, target, point, pixel} | 鼠标离开折线时触发此事件 |
| mouseover | event{type, target, point, pixel} |	当鼠标进入折线区域时会触发此事件 |
| remove | event{type, target} | 移除折线时触发 |
| lineupdate | event{type, target} | 覆盖物的属性发生变化时触发 |
