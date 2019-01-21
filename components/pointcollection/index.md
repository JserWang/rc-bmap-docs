---
category: 覆盖物
order: 8
title: PointCollection
---

海量点类，利用该类可同时在地图上展示万级别的点。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| points | `Array[Point]` | / | 设置要在地图上展示的点坐标集合 |
| shape | `SHAPE_TYPE` | / | 海量点的预设形状, 从`Constants`中引入 |
| size | `SIZE_TYPE`  | / | 海量点的预设尺寸，从`Constants`中引入 |
| color | `String`  | / | 海量点的颜色，参数为合法的CSS颜色值 |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| click | event{type, target, point} | 鼠标点击点时会触发此事件 |
| mouseover | event{type, target, point} | 鼠标移入点时会触发该事件 |
| mouseout | event{type, target, point} | 鼠标移出点时会触发该事件 |
