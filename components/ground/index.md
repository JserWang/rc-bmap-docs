---
category: 覆盖物
order: 7
title: Ground
---

地面叠加层

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| bounds | `Bounds` | / | 设置图层显示的矩形区域 |
| opacity | `Number` | / | 图层透明度 |
| imageURL | `String`  | / | 图层地址 |
| displayOnMinLevel | `Number`  | / | 设置圆形的边线颜色，参数为合法的CSS颜色值 |
| displayOnMaxLevel | `Number` | / | 图层显示的最大级别 |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| click | event{type, target} | 鼠标点击图层后会触发此事件 |
| dblclick | event{type, target} | 鼠标双击图层后会触发此事件 |
