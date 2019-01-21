---
category: 控件
order: 2
title: OverviewMap
---

缩略地图控件。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| anchor | `CONTROL_ANCHOR` | / | 控件的停靠位置，从`Constants`中引入 |
| offset | `Size`  | / | 控件的水平偏移值 |
| size | `Size`  | / | 缩略地图控件的大小 |
| isOpen | `Boolean`  | false | 缩略地图添加到地图后的开合状态 |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| viewchanged | event{type, target, isOpen} | 缩略地图开合状态发生变化后触发此事件 |
| viewchanging | event{type, target} | 缩略地图开合状态发生变化过程中触发此事件 |
