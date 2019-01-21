---
category: 覆盖物
order: 2
title: Label
---

文本标签，使用时需注意此处`Point`的`name`为`position`，使用`Content`可包裹任意`HTML`标签。

## API

### 属性

| 属性  | 类型 | 默认取值 | 说明 |
|-------|-----|------|-----|
| position | `Point`  | / | 设置文本标注坐标，仅在父容器为`<Map>`时有效。 |
| offset | `Size`  | / | 设置文本标注的偏移值 |
| massClear | `Boolean`  | true | 是否在调用`map.clearOverlays()`清除此覆盖物 |
| title | `String`  | / | 设置文本标注的标题，当鼠标移至标注上时显示此标题 |
| content | `Content`  | / | 设置文本标注的内容。支持HTML |
| zIndex | `Number`  | / | 设置覆盖物的zIndex |
| style | `Object`  | / | 设置文本标注样式 |

### 事件

| 事件名 | 参数 | 说明 |
|-------|-----|-----|
| click | event{type, target} | 点击文本标注后会触发此事件 |
| dblclick | event{type, target} | 双击文本标注后会触发此事件 |
| mousedown | event{type, target} | 鼠标在文本标注上按下触发此事件 |
| mouseup | event{type, target} | 鼠标在文本标注释放触发此事件 |
| mouseout | event{type, target} | 当鼠标进入文本标注区域时会触发此事件 |
| mouseover | event{type, target} | 右键点击标注时触发此事件 |
| remove | event{type, target} | 移除文本标注时触发 |
| rightclick | event{type, target} | 右键点击标注时触发此事件 |