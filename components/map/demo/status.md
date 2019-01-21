---
title: 功能配置
order: 5
---

如果你曾了解过百度地图，你会看到在初始化地图实例后通过各种`enableXXXX`， `disableXXXX`来为地图开启或关闭一些功能，例如：
我们想设置地图是否可拖拽，通过百度原生的写法需要这样写：`map.enableDragging()`与`map.disableDragging()`。

在**rc-bmap**中，我们将`enable`与`disable`去掉，并且将首字母小写，比如`enableDragging`最终变为`dragging`，将它作为`Map`的属性即可完成设置。更多可支持配置的属性，可以下滑至**API**进行查看。

下面我们做一个等同于`map.disableDragging()`一样的效果：

```jsx
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

const App = () => <div style={{ height: '400px'}}>
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    zoom={11}
    dragging={false}
  >
    <Point name="center" lng="116.404" lat="39.915" />
  </Map>
</div>;

ReactDOM.render(
  <App/>,
  mountNode
)
```