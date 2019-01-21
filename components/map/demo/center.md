---
title: 中心点
order: 2
---

`Map` 提供了`center`属性，当你只想设置`center`为某个城市名时，你可以直接设置`center="你的目标城市"`， 如：
```js
<Map center="北京市" .../>
```

当你想设置中心点位某个经纬度坐标时，你有两种方式：

1. 以字面量值的形式直接设置：`center={{lng: 116.404, lat: 39.915}}`，如：

  ```js
  <Map center={{lng: 116.404, lat: 39.915}} .../>
  ```

2. 以组件的方式设置，通过`Base.Point`进行设置。

为地图设置经纬度中心点时，更推荐第二种方式，虽然它看似繁琐，但会为我们避免一些不必要的麻烦，详见：[一切皆组件]()

[点我试试]()

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

