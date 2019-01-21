---
category: 覆盖物
order: 5
title: Circle
---

地图上的圆覆盖物。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| center | `Point` | / | 设置圆形的中心点坐标 |
| radius | `Number`  | / | 设置圆形的半径，单位为米 |
| strokeColor | `String`  | / | 设置圆形的边线颜色，参数为合法的CSS颜色值 |
| fillColor | `String` | / | 设置圆形的填充颜色，参数为合法的CSS颜色值 |
| strokeWeight | `Number`  | / | 设置圆形边线的宽度，取值为大于等于1的整数 |
| strokeOpacity | `Number`  | / | 设置圆形的边线透明度，取值范围0 - 1 |
| fillOpacity | `Number`  | / | 设置圆形的填充透明度，取值范围0 - 1 |
| strokeStyle | `String`  | / | 设置圆形边线样式为实线或虚线，取值`solid`或`dashed` |
| massClear | `Boolean`  | true | 是否在调用`map.clearOverlays()`清除此覆盖物 |
| editing | `Boolean`  | false | 是否启用线编辑 |
| clicking | `Boolean`  | true | 是否响应点击事件 |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| click | event{type, target, point, pixel} | 点击圆形后会触发此事件 |
| dblclick | event{type, target, point, pixel} | 双击圆形后会触发此事件 |
| mousedown | event{type, target, point, pixel} | 鼠标在圆形上按下触发此事件 |
| mouseup | event{type, target, point, pixel} | 鼠标在圆形释放触发此事件 |
| mouseout | event{type, target, point, pixel} | 鼠标离开折线时触发此事件 |
| mouseover | event{type, target, point, pixel} | 鼠标离开圆形时触发此事件 |
| remove | event{type, target} | 移除圆形时触发 |
| lineupdate | event{type, target} | 覆盖物的属性发生变化时触发 |
