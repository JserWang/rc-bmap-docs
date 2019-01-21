---
title: 缩放级别
order: 3
---

`zoom`属性可以设置，当前地图的缩放等级。需要注意的是`zoom`是`required`属性，这源于百度地图在初始化地图时，需要设置`centerAndZoom`。

于此同时，`Map`还提供了`minZoom`、`maxZoom`来控制地图的最大、最小缩放等级。

tips: `zoom` 范围 **3-19**，若调用高清底图（针对移动端开发）时，zoom可赋值范围为 3-18

```jsx
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

const App = () => <div style={{ height: '400px'}}>
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    zoom={11}
    minZoom={9}
    maxZoom={13}
  >
    <Point name="center" lng="116.404" lat="39.915" />
  </Map>
</div>;

ReactDOM.render(
  <App/>,
  mountNode
)
```