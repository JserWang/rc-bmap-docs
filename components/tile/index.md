---
category: 地图图层
order: 1
title: TileLayer
---

地图图层。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| transparentPng | `Boolean`  | / | 是否使用了带有透明信息的PNG |
| getTilesUrl | `Function`  | / | 向地图返回地图图块的网址，图块索引由tileCoord的x和y属性在指定的缩放级别zoom提供 |
