---
category: Article
title: 更新日志
order: 11
---


## [2019-02-11] 1.0.2

### BugFix

[#86](https://github.com/jser-club/rc-bmap/issues/86) 修复使用**InfoWindow**中，在`Content`与`Title`中自定义`HTML`事件丢失。

**tips:** 在**InfoWindow**中的`Content`与`Title`中绑定onClick事件，需使用onMouseUp取代，由于百度原生Infowindow中，在onclick中阻止了事件冒泡，导致react中onClick事件失效。

[#89](https://github.com/jser-club/rc-bmap/issues/89) 修复行政区域组件更新时，旧的区域未清空。

---

## [2019-01-21] 1.0.1

### BugFix

[#83](https://github.com/jser-club/rc-bmap/issues/83) 组件**rerender**时，绑定事件丢失。

---


## [2019-01-21] 1.0.0

### 更新

**一切皆组件**的版本发布，修复若干BUG，全新的文档，全新的示例，全新的源码。一切都是新的开始。

---
