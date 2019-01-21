---
title: 基本用法
order: 1
---

这里需要注意一点，`Map`的父容器，**必须拥有高度**，否则地图将渲染在一个宽度**100%**高度**0px**的容器中。

```jsx
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

const App = () => <div style={{ height: '400px'}}>
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    zoom={11}
  >
    <Point name="center" lng="116.404" lat="39.915" />
  </Map>
</div>;

ReactDOM.render(
  <App/>,
  mountNode
)
```
