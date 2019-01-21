---
category: 控件
order: 6
title: Geolocation
---

地图定位的控件。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| anchor | `CONTROL_ANCHOR` | / | 控件的停靠位置，从`Constants`中引入 |
| offset | `Size`  | / | 控件的水平偏移值 |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| locationSuccess | event{point, AddressComponent} | 定位成功后触发此事件 |
| locationError | StatusCode | 定位失败后触发此事件 |
