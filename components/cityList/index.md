---
category: 控件
order: 7
title: CityList
---

城市切换控件。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| anchor | `CONTROL_ANCHOR` | / | 控件的停靠位置，从`Constants`中引入 |
| offset | `Size`  | / | 控件的水平偏移值 |

### 事件

在选择城市后，触发顺序为`onChangeBefore` => `onChangeSuccess` => `onChangeAfter`。

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| onChangeBefore | / | 切换城市前回调 |
| onChangeAfter | / | 切换城市后回调 |
| onChangeSuccess | / | 切换城市成功回调 |